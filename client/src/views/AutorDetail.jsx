import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { simpleGet } from "../services/simpleGet";

const AutorDetail = () => {
  const { id } = useParams();

  const [autor, setAutor] = useState();
  const [quotes, setQuotes] = useState();

  const getAutor = async () => {
    try {
      const response = await simpleGet(
        `http://localhost:8000/api/autores/${id}`
      );
      console.log(response.data.autores);
      setAutor(response.data.autores);
    } catch (error) {
      console.log(error);
    }
  };

  const getQuotes = async () => {
    try {
      const response = await simpleGet(
        `http://localhost:8000/api/quotes/${id}`
      );
      console.log(response.data.quotes);
      setQuotes(response.data.quotes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAutor();
    getQuotes();
  }, []);
  return (
    <div>
      <h1>ID DEL AUTOR: {id}</h1>
      <h2>Nombre del autor:</h2>
      <p>{autor?.nombre}</p>
      <h2>Genero autor:</h2>
      <p>{autor?.genero}</p>
      {quotes?.map((quote) => {
        return (
          <div className="card text-center mb-5">
            <div className="card-header">{quote.book}</div>
            <div className="card-body">
              <p className="card-text">
                {quote.content}
              </p>
              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
            <div className="card-footer text-muted">{quote.rating}</div>
          </div>
        );
      })}
      <Link className="btn btn-dark btn-lg mt-2" to={"/"}>
        LISTADO AUTORES
      </Link>
    </div>
  );
};

export default AutorDetail;
