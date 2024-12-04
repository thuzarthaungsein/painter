import { useEffect, useRef, useState } from "react";
import "./App.css";
import Menu from "./Menu";

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState("black");
  const [lineOpacity, setLineOpacity] = useState(1);

  const drawing = (e: React.MouseEvent) => {
    if (!isDrawing) return;
    ctxRef.current?.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctxRef.current?.stroke();
  };

  const startDrawing = (e: React.MouseEvent) => {
    ctxRef.current?.beginPath();
    ctxRef.current?.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const stopDrawing = (e: React.MouseEvent) => {
    ctxRef.current?.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      ctxRef.current?.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.globalAlpha = lineOpacity;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        ctxRef.current = ctx;
      }
    }
  }, [lineWidth, lineColor, lineOpacity]);

  return (
    <div className="App md:container mx-3 md:mx-auto bg-transparent">
      <h1 className="text-4xl font-bold py-3 text-blue-500">Painter</h1>
      <Menu
        lineColor={lineColor}
        lineOpacity={lineOpacity}
        lineWidth={lineWidth}
        setLineColor={setLineColor}
        setLineOpacity={setLineOpacity}
        setLineWidth={setLineWidth}
        clearCanvas={clearCanvas}
      />
      <div className="w-[1280px] h-[700px] border-2 border-gray-400 relative bg-white rounded cursor-crosshair mx-auto">
        <canvas
          width={"1280px"}
          height={"700px"}
          ref={canvasRef}
          onMouseDown={(e) => startDrawing(e)}
          onMouseUp={(e) => stopDrawing(e)}
          onMouseMove={(e) => drawing(e)}
        />
      </div>
    </div>
  );
}

export default App;
