import React, {useState} from 'react'
import {useFormik} from 'formik';
import *  as Yup from 'yup';
import {withRouter, useHistory} from 'react-router-dom';
const Login = () => {
const history = useHistory();

const [mensaje, guardarMensaje] = useState(null);
// Mutation para crear nuevos usuarios en apollo
  const token = "eyJlbWFpbCI6ImNoYWxsZW5nZUBhbGtlbXkub3JnIiwicGFzc3dvcmQiOiJyZWFjdCIsImFsZyI6IkhTMjU2In0.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.YU3uKClJYpTIH439L7Iiqm0SwU8Ym_89_8ADxCgUd68";
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('El email no es válido')
        .required('El email no puede ir vacio'),
        password: Yup.string()
        .required('El password es obligatorio')
    }),
    onSubmit :  valores => {
        
      if(valores.email ==="challenge@alkemy.org" && valores.password ==="react") {
            localStorage.setItem('token', token)
             guardarMensaje('Correcto, Redirigiendo...');
          setTimeout(() => {
              history.push("/")
          }, 2000);
          }
      else {
           guardarMensaje('Error, Credenciales erroneas');
          setTimeout(() => {
              guardarMensaje(null);
          }, 2000)
 
      }
          }
  })


 
  const mostrarMensaje = () => {
    return(
      <div className="bg-dark text-white py-2 px-3 w-full my-3 max-w-sm text-center mx-auto">
        <p>{mensaje}</p>
      </div>
    )
  }

    return ( 
        <>


        <h1 className="text-center h-2 my-3 text-white font-light ">Login</h1>
        {mensaje && mostrarMensaje()}
        <div className="d-flex justify-content-center mt-5">
          <div className="w-full max-w-sm">
            <form 
            className=" shadow-md px-8 pt-6 pb-8 mb-4"
            onSubmit={formik.handleSubmit}>

      <div className="mb-4 d-flex flex-column">
        <label className="block text-white h-2 font-weight-bold text-sm font-bold mb-2" htmlFor="nombre" >
      Email
        </label>
        <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text gray-700 leading-light focu:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="email usuario"
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
        />
      </div>

      {formik.touched.email && formik.errors.email ? (
                <div className="my-2 bg-danger 
                 border border-dark rounded text-white p-2">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.email}</p>
                </div>
              ) : null}

      <div className="mb-4 d-flex flex-column">
        <label className=" text-white h-2 font-weight-bold text-sm font-bold mb-2" htmlFor="password" >
      Password
        </label>
        <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text gray-700 leading-light focu:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="passwords"
        onChange={formik.handleChange}
        value={formik.values.password}
        onBlur={formik.handleBlur}
        />
      </div>

      {formik.touched.password && formik.errors.password ? (
                <div className="my-2 bg-danger border-l-4 border-red-500 text-white border border-dark rounded p-2">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.password}</p>
                </div>
              ) : null}

      <input
      type="submit"
      className="bg-secondary w-full  h-3 px-3 py-2 text-white uppercase hover:bg-gray-900"
      value="Iniciar Sesión"
      />
            </form>
          </div>
        </div>
      </>
     );
}
 
export default withRouter(Login);