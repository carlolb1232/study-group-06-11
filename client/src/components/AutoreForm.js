import React from 'react';
import {Formik, Field, Form} from "formik";
import * as Yup from "yup";

const AutoreForm = (props) => {

    const {autores, onSubmitProp} = props

    return (
        <div>
            <Formik
                initialValues={{
                    nombre: autores.nombre,
                    
                }}
            
            >





            </Formik>
        </div>
    );
}

export default AutoreForm;
