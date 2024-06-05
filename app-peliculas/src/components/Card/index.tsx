import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import "./index.css";

//omdbapi.com/?t=fight+club&apikey=f16b996f

const URL_API = "https://omdbapi.com/?";
const API_KEY = "f16b996f";
// Como usar la api
// los [] no van
// https://omdbapi.com/?[parametro]=[contenido]&apikey=[apikey]
// Ejemplo https://omdbapi.com/?t=fight+club&apikey=f16b996f

interface Movie {
  Title?: string;
  Poster?: string;
  Response: string;
}

const Card = () => {
  const [data, setData] = useState<Movie | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [serch, setSerch] = useState(false);

  const handleClick = () => {
    setSerch(true);
    setSerch(false);
  };

  const handleReset = () => {
    setData(null);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    // Definimos una función asincrónica dentro de useEffect para hacer la solicitud a la API
    console.log("efect");
    // para buscar por el titulo
    const parameter = "t";
    const inputFormater = inputValue.replace(" ", "+");

    const fetchData = async () => {
      try {
        // Hacemos la solicitud a la API usando axios
        const response = await axios.get<Movie>(
          `${URL_API}${parameter}=${inputFormater}&apikey=${API_KEY}`
        );

        // Actualizamos el estado con los datos recibidos
        setData(response.data);
        setSerch(false);
      } catch (error) {
        // Manejamos errores en la solicitud
        console.error("Error fetching data:", error);
      }
    };

    // Llamamos a la función para hacer la solicitud cuando el componente se monta
    serch && fetchData();
  }, [serch]);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre de una pelicula"
            aria-label="Nombre de una pelicula"
            aria-describedby="button-addon2"
            onChange={handleChange}
          />
          <button
            className="btn btn-primary"
            type="button"
            id="button-addon2"
            onClick={handleClick}
          >
            Buscar
          </button>
          <button
            className="btn btn-primary"
            type="button"
            id="button-addon2"
            onClick={handleReset}
          >
            Borrar
          </button>
          {data != null && (
            <div>
              {data.Response == "True" ? (
                <MostrarResultado
                  titulo={data.Title}
                  img={data.Poster}
                ></MostrarResultado>
              ) : (
                "No existe esa pelicula"
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

export const MostrarResultado: React.FC<{
  titulo: string | undefined;
  img: string | undefined;
}> = ({ titulo, img }) => {
  return (
    <div>
      <div className="resultado">
        <div className="card-body">
          <h3 className="titulo">{titulo}</h3>
          <img src={img} className="imagen" alt={titulo} />
        </div>
      </div>
    </div>
  );
};
