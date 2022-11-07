import React from 'react';
import {Formik, Field, Form} from "formik";
import * as Yup from "yup";

const AutoreForm = (props) => {

    const {autor, onSubmitProp} = props

    return (
        <div>
            <Formik
                initialValues={{
                    nombre: autor.nombre,
                    genero: autor.genero          
                }}
                validationSchema={
                    Yup.object().shape({
                        nombre: Yup
                            .string()
                            .min(3, "el nombre es muy corto")
                            .max(50, "el nombre es muy largo")
                            .required("debe ingresar un nombre"),
                        genero: Yup
                            .string()
                            .min(3, "precio debe ser mayor a 1")
                            .max(50, "el genero es muy largo")
                            .required("debe ingresar un genero")    
                    })
                }
                onSubmit={(values,{setSubmitting})=>{
                    onSubmitProp(values);
                }}
                
            >   
            {({errors, touched, handleSubmit})=>{
                return(
                    <div className=''>
                        <h1>Authors Form</h1>
                        <Form>
                            <div className='form-group'>
                                <label htmlFor='nombre'>Nombre</label>
                                <Field type="text" name="nombre" className="form-control" ></Field>
                                {errors.nombre && touched.nombre && <p className=''> {errors.nombre} </p>}
                            </div>
                            <div className='form-group'>
                                <label htmlFor='genero'>Genero</label>
                                <Field type="text" name="genero" className="form-control" ></Field>
                                {errors.genero && touched.genero && <p className=''> {errors.genero} </p>}
                            </div>
                            <button disabled={Object.values(errors).length>0 || Object.values(touched).length===0} className='' type='submit'>Enviar</button>
                        </Form>
                        
                    </div>
                )
            }}




            </Formik>
        </div>
    );
}

export default AutoreForm;
