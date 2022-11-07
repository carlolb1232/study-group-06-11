import React from 'react';
import {Formik, Field, Form} from "formik";
import * as Yup from "yup";

const AutoreQuoteForm = (props) => {

    const {autor,quote, onSubmitProp} = props

    return (
        <div>
            <Formik
                initialValues={{
                    nombre: autor.nombre,
                    genero: autor.genero,
                    content: quote.content,
                    book: quote.book,
                    quoteType: quote.quoteType                    
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
                            .required("debe ingresar un genero"),
                        content: Yup
                            .string()
                            .min(3, "contenido debe tener al menos 3 caracteres")
                            .max(50, "el contenido es muy largo")
                            .required("debe agregar una contenido"),
                        book: Yup
                            .string()
                            .min(3, "descripcion debe tener al menos 3 caracteres")
                            .max(50, "el nombre del libro es muy largo") 
                            .required("debe agregar una descripcion"),
                        quoteType: Yup
                            .string()
                            .required("debe agregar una descripcion")             
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
                            <div className=''>
                                <label htmlFor='genero'>Genero</label>
                                <Field type="text" name="genero" className="form-control" ></Field>
                                {errors.genero && touched.genero && <p className=''> {errors.genero} </p>}
                            </div>
                            <div className=''>
                                <label htmlFor='content'>Content</label>
                                <Field type="text" as="textarea" name="content" className="form-control" ></Field>
                                {errors.content && touched.content && <p className=''> {errors.content} </p>}
                            </div>
                            <div className=''>
                                <label htmlFor='book'>Book</label>
                                <Field type="text" name="book" className="form-control" ></Field>
                                {errors.book && touched.book && <p className=''> {errors.book} </p>}
                            </div>
                            <div className=''>
                                <label htmlFor='quoteType'>Quote Type</label>
                                <Field type="text" as="select" name="quoteType" className="form-control" >
                                    <option value="textual">Textual</option>
                                    <option value="parafraseo">Parafraseo</option>
                                </Field>
                                {errors.quoteType && touched.quoteType && <p className=''> {errors.quoteType} </p>}
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

export default AutoreQuoteForm;
