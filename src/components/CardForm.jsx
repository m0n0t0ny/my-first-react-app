import { useState } from "react";

function CardForm({ addCity }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imgUrl: "",
    isVisited: true
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type == "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: inputValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = {
      id: Math.random(),
      title: formData.name,
      description: formData.description,
      imgUrl: formData.imgUrl,
      isVisited: formData.isVisited
    };
    addCity(city);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-80 mb-10 bg-zinc-900 p-5 rounded-lg"
      >
        <div className="flex flex-col">
          <label>Nome</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="flex flex-col">
          <label>Descrizione</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label>Url Immagine</label>
          <input
            type="text"
            name="imgUrl"
            value={formData.imgUrl}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="flex flex-col">
          <label>Visitata?</label>
          <input
            type="checkbox"
            name="isVisited"
            checked={formData.isVisited}
            onChange={handleInputChange}
          ></input>
        </div>
        <button type="submit" className="bg-zinc-950 rounded">
          Invia
        </button>
      </form>
    </>
  );
}

export default CardForm;
