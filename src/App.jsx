import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="h-screen bg-slate-500 flex flex-wrap justify-center">
      <div className="flex flex-wrap items-center gap-4">
        <Link to="/admin">
          <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
            Go to Admin Page
          </button>
        </Link>
        <Link to="/viewer">
          <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
            Go to Viewer Page
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;
