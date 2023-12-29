import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid grid-cols-4 gap-10">
        <Card
          isVisited={false}
          title="Tokyo"
          imgUrl="https://images.pexels.com/photos/2187427/pexels-photo-2187427.jpeg?auto=compress&cs=tinysrgb&w=400"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          quisquam nemo esse quis totam officiis magni molestiae reprehenderit!
          Labore ipsum optio voluptatum non fugit inventore doloremque. Odio
          nemo aspernatur eaque.
        </Card>
        <Card
          isVisited={false}
          title="New York"
          imgUrl="https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=400"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          quisquam nemo esse quis totam officiis magni molestiae reprehenderit!
          Labore ipsum optio voluptatum non fugit inventore doloremque. Odio
          nemo aspernatur eaque.
        </Card>
        <Card
          isVisited={true}
          title="Rome"
          imgUrl="https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=400"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          quisquam nemo esse quis totam officiis magni molestiae reprehenderit!
          Labore ipsum optio voluptatum non fugit inventore doloremque. Odio
          nemo aspernatur eaque.
        </Card>
        <Card
          isVisited={true}
          title="Paris"
          imgUrl="https://images.pexels.com/photos/1125212/pexels-photo-1125212.jpeg?auto=compress&cs=tinysrgb&w=400"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          quisquam nemo esse quis totam officiis magni molestiae reprehenderit!
          Labore ipsum optio voluptatum non fugit inventore doloremque. Odio
          nemo aspernatur eaque.
        </Card>
      </div>
      <div className="card mt-10">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
