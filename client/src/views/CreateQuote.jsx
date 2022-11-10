import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import QuoteForm from "../components/QuoteForm";
import { simplePost } from "../services/simplePost";

const CreateQuote = () => {
  const { idAutor } = useParams();
  const navigate = useNavigate();

  const [errors, setErrors] = useState([]);

  

  const createQuote = async (values) => {
    values = {...values, idAutore:idAutor}
    try {
      const response = await simplePost(
        "http://localhost:8000/api/quotes",
        values
      );
      console.log(response.data.errors);
      if (response.data.message === "") {
        navigate("/")
      } else {
        console.log("ERRORES", response.data);
        const errorResponse = response.data.errors;
        console.log("Object keys", Object.keys(errorResponse));
        const errorArr = [];
        for (const llave of Object.keys(errorResponse)) {
          console.log(errorResponse[llave]);
          errorArr.push(errorResponse[llave].message);
        }
        setErrors(errorArr);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Crear cita para autor con id: {idAutor}</h2>
      {errors?.map((error, index) => <p key={index}>{error}</p>)}
      <QuoteForm  content="" book="" quoteType="textual" rating={1} onSubmitProp={createQuote}/>
      <Link className="btn btn-dark btn-lg mt-5" to={"/"}>
        LISTADO AUTORES
      </Link>
    </div>
  );
};

export default CreateQuote;
