import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Link className="text-3xl" to="singleplayer">
        Singleplayer
      </Link>
      <br />
      <Link className="text-3xl" to="multiplayer">
        Multiplayer
      </Link>
    </>
  );
}

export default App;
