import { useState } from "react";
import StyledButton from "./Button";

function Card({ id, title, description, imgUrl, isVisited }) {
  const [visited, setVisited] = useState(isVisited);

  const toggleIsVisited = () => {
    setVisited(!visited);
  };

  return (
    <>
      <div className="card rounded-md bg-zinc-950">
        <img src={imgUrl} alt="tokyo doors" className="rounded-t"></img>
        <div className="flex flex-col p-4">
          <h2 className="text-2xl text-white font-bold">{title}</h2>
          <p className="text-gray-500">{description}</p>
          {isVisited ? <span>👌 Visitata</span> : <span>❌ Non visitata</span>}
        </div>
        <StyledButton onClick={toggleIsVisited}>
          {visited ? "❌" : "👌"}
        </StyledButton>
      </div>
    </>
  );
}

export default Card;
