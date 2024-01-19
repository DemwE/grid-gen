import React, {useEffect, useState} from "react";

interface Props {
  cols: number
  rows: number
}

export default function GridGenerator({ cols, rows }: Props) {
  const [grid, setGrid] = useState<React.ReactElement[]>([]);
  const generate = (cols: number, rows: number) => {
    const amount = cols * rows;
    const cells = Array.from({length: amount}, (_, i) => (
      <div key={i}
           className="bg-gray-200 p-4 rounded hover:bg-blue-400 transition-all ease-in grid place-items-center">{i + 1}</div>
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
    <div className="grid gap-4 p-5" style={gridStyle}>
      {grid}
    </div>
  );
}