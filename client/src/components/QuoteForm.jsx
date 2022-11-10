import React from 'react';
import {Formik, Field, Form} from "formik";
import * as Yup from "yup";

const QuoteForm = (props) => {

  const {content, book, quoteType, rating, onSubmitProp} = props



  return (
    <div>
      <Formik
        initialValues={{
          content: content,
          book: book,
          quoteType: quoteType,
          rating: rating,
        }}
        validationSchema={
          Yup.object().shape({
            content: Yup
              .string()
              .min(3, "el contenido es muy corto")
              .max(50, "el contenido es muy largo")
              .required("debe ingresar un contenido"),
            book: Yup
              .string()
              .min(3, "libro debe ser mayor a 3")
              .max(50, "el libro debe ser de maximo 50 letras")
              .required("debe ingresar un libro"),
            quoteType: Yup
              .string()
              .required("debe ingresar un tipo de cita"),
            rating: Yup
              .string()
              .min(1, "el reating debe ser mayor a 0")
              .max(5, "el rating debe de ser de maximo 5")
              .required("debe ingresar un rating"),
          })
        }
        onSubmit={(values, { setSubmitting }) => {
          onSubmitProp(values);
        }}

      >
        {({ errors, touched, handleSubmit }) => {
          return (
            <div className=''>
              <h1>Authors Form</h1>
              <Form>
                <div className='mb-3'>
                  <label htmlFor='content'>Contenido:</label>
                  <Field type="text" name="content" className="form-control" ></Field>
                  {errors.content && touched.content && <p className=''> {errors.content} </p>}
                </div>
                <div className='mb-3'>
                  <label htmlFor='book'>Libro:</label>
                  <Field type="text" name="book" className="form-control" ></Field>
                  {errors.book && touched.book && <p className=''> {errors.book} </p>}
                </div>
                <div className='mb-3'>
                  <label htmlFor='genero'>Genero</label>
                  <Field type="text" name="genero" className="form-control" ></Field>
                  {errors.genero && touched.genero && <p className=''> {errors.genero} </p>}
                </div>
                <div className='mb-3'>
                  <label className='form-label' htmlFor='quoteType'>Quote Type</label>
                  <Field type="text" as="select" name="quoteType" className="form-select" >
                      <option value="textual">Textual</option>
                      <option value="parafraseo">Parafraseo</option>
                  </Field>
                  {errors.quoteType && touched.quoteType && <p className=''> {errors.quoteType} </p>}
                </div>
                <div className='mb-3'>
                  <label className='form-label' htmlFor='rating'>Rating</label>
                  <Field type="number" as="select" name="rating" className="form-select" >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                  </Field>
                  {errors.rating && touched.rating && <p className=''> {errors.rating} </p>}
              </div>
                <button disabled={Object.values(errors).length > 0 || Object.values(touched).length === 0} className='' type='submit'>Enviar</button>
              </Form>

            </div>
          )
        }}
      </Formik>
    </div>
  );
}

export default QuoteForm;
