import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AutoreForm from '../components/AutoreForm';
import { simpleGet } from '../services/simpleGet';
import { simplePut } from '../services/simplePut';


const UpdateAutor = (props) => {

    const { id } = useParams();
    const navigate = useNavigate();
    
    const [autor, setAutor] = useState();
    const [errors,setErrors] = useState([]);

    const getOneAutor = async () => {
        try{
            const response = await simpleGet(`http://localhost:8000/api/autores/${id}`)
            console.log(response.data.autores);
            setAutor(response.data.autores);
        }catch(err){
            console.log(err);
        }
    }
    
    
    useEffect(() => {
        getOneAutor();
    },[]);

    const updateAutor = async(values) =>{
        try{
            const response = await simplePut(`http://localhost:8000/api/autores/${id}`,values);
            if(response.data.message === ""){
                navigate('/');
            }else{
                console.log("ERRORES", response.data.error);
                const errorResponse = response.data.error;
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
            {autor && <AutoreForm autor={autor} onSubmitProp = {updateAutor}/>}
        </div>
    );
}

export default UpdateAutor;
