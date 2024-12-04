const Menu = ({
  lineColor,
  lineWidth,
  lineOpacity,
  setLineColor,
  setLineWidth,
  setLineOpacity,
  clearCanvas,
}: {
  lineColor: string;
  lineWidth: number;
  lineOpacity: number;
  setLineColor: React.Dispatch<React.SetStateAction<string>>;
  setLineWidth: React.Dispatch<React.SetStateAction<number>>;
  setLineOpacity: React.Dispatch<React.SetStateAction<number>>;
  clearCanvas: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="flex justify-between mb-10 w-[1280px] mx-auto">
      <div className="flex gap-4">
        <div className="grid grid-col rounded p-2 justify-items-center bg-gray-400 drop-shadow">
          <label className="inline-block mr-1" htmlFor="color">
            Pen Color
          </label>
          <input
            type="color"
            id="color"
            value={lineColor}
            onChange={(e) => setLineColor(e.target.value)}
          />
        </div>
        <div className="grid grid-col rounded p-2 justify-items-center bg-gray-400 drop-shadow">
          <label className="inline-block mr-1" htmlFor="width">
            Pen Width
          </label>
          <input
            type="range"
            min="1"
            max="100"
            id="width"
            value={lineWidth}
            onChange={(e) => setLineWidth(Number(e.target.value))}
          />
        </div>
        <div className="grid grid-col rounded p-2 justify-items-center bg-gray-400 drop-shadow">
          <label className="inline-block mr-1" htmlFor="opacity">
            Pen Opacity
          </label>
          <input
            type="range"
            min="1"
            max="100"
            id="opacity"
            value={lineOpacity * 100}
            onChange={(e) => setLineOpacity(Number(e.target.value) / 100)}
          />
        </div>
      </div>

      <div>
        <button
          value="1"
          className="px-3 py-2 rounded bg-blue-400"
          onClick={() => clearCanvas("clear")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-eraser inline-block mr-1"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3" />
            <path d="M18 13.3l-6.3 -6.3" />
          </svg>
          Clear Canvas
        </button>
      </div>
    </div>
  );
};

export default Menu;
