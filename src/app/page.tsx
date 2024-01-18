'use client';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [grid, setGrid] = useState<React.ReactElement[]>([]);
  const [cols, setCols] = useState(2);
  const [rows, setRows] = useState(4);
  const [minCols, maxCols]: number[] = [1, 64];
  const [minRows, maxRows]: number[] = [1, 512];

  const generate = (cols: number, rows: number) => {
    const amount = cols * rows;
    const cells = Array.from({ length: amount }, (_, i) => (
      <div key={i} className="bg-gray-200 p-4 rounded hover:bg-blue-400 transition-all ease-in grid place-items-center">{i + 1}</div>
    ));
    setGrid(cells);
  }

  useEffect(() => {
    generate(cols, rows);
  }, [cols, rows]);

  const gridStyle = {
    gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
    gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`
  };

  return (
    <div className="h-dvh bg-zinc-50">
      <form className="p-6 bg-zinc-100 shadow-md rounded-b">
        <div className="grid space-y-3">
          <label htmlFor="cols" className="block text-gray-700 font-bold mb-2"> Cols:</label>
          <input type="number" id="cols" defaultValue={cols} className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setCols(parseInt(e.target.value))} min={minCols} max={maxCols} />
          <label htmlFor="rows" className="block text-gray-700 font-bold mb-2"> Rows:</label>
          <input type="number" id="rows" defaultValue={rows} className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setRows(parseInt(e.target.value))} min={minRows} max={maxRows} />
        </div>
      </form>
      <div className="grid gap-4 p-5" style={gridStyle}>
        {grid}
      </div>
    </div>
  );
}