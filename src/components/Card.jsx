function Card({ title, imgUrl, isVisited, children }) {
  return (
    <>
      <div className="card rounded-md bg-zinc-950">
        <img src={imgUrl} alt="tokyo doors" className="rounded-t"></img>
        <div className="flex flex-col p-4">
          <h2 className="text-2xl text-white font-bold">{title}</h2>
          <p className="text-gray-500">{children}</p>
          {isVisited ? <span>👌 Visitata</span> : <span>❌ Non visitata</span>}
        </div>
      </div>
    </>
  );
}

export default Card;
