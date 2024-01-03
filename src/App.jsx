import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import CardForm from "./components/CardForm";
import Example from "./components/Example";

function App() {
  const addCity = city => {
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

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <Example></Example>
      <CardForm addCity={addCity}></CardForm>
      <div className="grid grid-cols-4 gap-10">
        {cities.map(city => (
          <Card
            key={city.id}
            title={city.title}
            isVisited={city.isVisited}
            imgUrl={city.imgUrl}
            description={city.description}
          ></Card>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-5">
        {data.map(post => (
          <div key={post.id} className="bg-slate-400 rounded-lg p-3">
            <p className="text-red-500 mb-1">userId: {post.userId}</p>
            <h2 className="text-xl mb-3">{post.title}</h2>
            <p className="text-gray-500">userId: {post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
