import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import CardForm from "./components/CardForm";

function App() {
  const [count, setCount] = useState(0);

  const addCity = (city) => {
    setCities([...cities, city]);
  };
  const [cities, setCities] = useState([
    {
      id: 1,
      title: "Tokyo",

      isVisited: false,
      imgUrl:
        "https://images.pexels.com/photos/2187427/pexels-photo-2187427.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quisquam nemo esse quis totam officiis magni molestiae reprehenderit!"
    },
    {
      id: 2,
      title: "New York",
      isVisited: false,
      imgUrl:
        "https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quisquam nemo esse quis totam officiis magni molestiae reprehenderit!"
    },
    {
      id: 3,
      title: "Roma",
      isVisited: true,
      imgUrl:
        "https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quisquam nemo esse quis totam officiis magni molestiae reprehenderit!"
    },
    {
      id: 4,
      title: "Parigi",
      isVisited: true,
      imgUrl:
        "https://images.pexels.com/photos/1125212/pexels-photo-1125212.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quisquam nemo esse quis totam officiis magni molestiae reprehenderit!"
    }
  ]);

  return (
    <>
      <CardForm addCity={addCity}></CardForm>
      <div className="grid grid-cols-4 gap-10">
        {cities.map((city) => (
          <Card
            key={city.id}
            title={city.title}
            isVisited={city.isVisited}
            imgUrl={city.imgUrl}
            description={city.description}
          ></Card>
        ))}
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
