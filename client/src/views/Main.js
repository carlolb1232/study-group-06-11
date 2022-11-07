import React, { useEffect, useState } from 'react';
import AutoreQuoteForm from '../components/AutoreQuoteForm';
import { simplePost } from '../services/simplePost';
import {simpleGet} from '../services/simpleGet';


const Main = () => {

    const [errors, setErrors] = useState([]);
    const [autores, setAutores] = useState();

    const getAutores = async() =>{
        try{
            const response = await simpleGet ('http://localhost:8000/api/autores');
            setAutores(response.data.autores)
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        getAutores();
    }, []);

    const autor = {
        nombre:"",
        genero:""
    };
    const quote = {
        content: "",
        book: "",
        quoteType:"textual"
    }

    const createAutor = async(values) =>{
        try{
            const response = await simplePost('http://localhost:8000/api/autores',values);
            console.log(response.data.errors)
            if(response.data.message !== ""){
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
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            {errors?.map((error,index)=><p key={index}>{error}</p>)}
            <AutoreQuoteForm autor={autor} quote={quote} onSubmitProp={createAutor}></AutoreQuoteForm>
            <table class="table">
        <thead>
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Genero</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            {autores?.map((autor)=> 
            <tr key={autor._id}>
                <td>{autor.nombre}</td>
                <td>{autor.genero}</td>
                <td><button>Edit</button> <button>Delete</button> <button>Crear cita</button> </td>
            </tr> )}

        </tbody>
    </table>


            {autores?.map}
        </div>
    );
}

export default Main;
