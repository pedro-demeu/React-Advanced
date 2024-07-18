import { Link } from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-950">
      <h1 className="text-white text-center  text-5xl mb-10">React Advanced</h1>
      <Link to="/demo/suspense">
        <p className="text-white text-bold text-2xl">React - Suspense Demo</p>
      </Link>
    </div>
  );
}

export default App;
