import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const navigateToRoom = () => {
    navigate(`/room/${value}`);
  };
  return (
    <>
      <div className="container">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={navigateToRoom} disabled={!value}>
          Join Room
        </button>
      </div>
    </>
  );
};

export default Home;
