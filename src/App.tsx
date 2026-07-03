import { createContext, useState } from "react";
import "./App.css";

function App() {
  const [gradient, setGradient] = useState<string>("Linear");
  const [num, setNum] = useState<number>(12);
  return (
    <>
      <div className="min-h-screen flex justify-center bg-gray-400">
        <div className="bg-color h-17 w-300 rounded-xl mt-5 flex items-center justify-between p-5">
          <div className="flex items-center">
            <span className="text-4xl mr-1 font-black">🎨</span>
            <span className="text-3xl">Gradient Generator - {num} {gradient}</span>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              className="h-2 w-25 p-4 rounded-xs bg-white"
              placeholder="12"
              onChange={(event): void => setNum(Number(event.target.value))}
            />

            <select
              className="h-8 w-25 rounded-xs bg-white cursor-pointer"
              defaultValue={"Linear"}
              onChange={(event): void => setGradient(event.target.value)}
            >
              <option value="Linear">Linear</option>
              <option value="Gradient">Gradient</option>
            </select>

            <div className="bg-red-400 h-auto w-50 rounded-xs flex items-center justify-center cursor-pointer">
              Generate
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
