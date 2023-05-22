"use client"

import { Formik,Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import {BsAirplaneEngines} from "react-icons/bs"
import {CgDanger} from "react-icons/cg"
import { IconContext } from 'react-icons'
import axios from 'axios'

export default function Home() {

  const signUpSchema = Yup.object().shape({
    email: Yup.string().email('Correo invalido').required('Required'),
    password: Yup.string().min(8,"la contraseña debe poseer al menos 8 caracteres"),
  });

  const handleSignIn = async (formValues:Object) => {
    
    const {password,email} = formValues

    console.log(password)
    const response =  await axios(`api/login/ ?email=${email}&password=${password}`)

    console.log(response)
  }

  return (
    <div className="flex text-white min-h-screen flex-col items-center justify-between p-24 px-0 bg-black ">
      <main className=' rounded-md shadow-white  w-11/12 max-w-lg'>
        <h1 className='flex text-2xl font-bold border-2 '>
          <span className='bg-white w-2/4 text-black text-right pr-2'>Iniciar sesión</span>
          <span className='pl-2 flex items-center gap-1'>
            AirOS 
            <IconContext.Provider value={{className:"rotate-90"}}>
              <BsAirplaneEngines/>
            </IconContext.Provider> 
          </span>
          
        </h1>
        <Formik
          initialValues={{
            email:"",
            password:"",
          }}
          validationSchema={signUpSchema}
          onSubmit={(values) => handleSignIn(values)}>
            {({errors}) => (
              <Form className='flex flex-col items-center gap-6'>

                <div className='grid grid-cols-1 gap-6 mt-6 '>
                
                    <div className='flex flex-col'>
                        <Field name="email" type="email" required className="outline-none bg-transparent border-b-2 p-0" placeholder="Correo"/>

                        <ErrorMessage name='email' render={(message) => <div className="text-red-600 flex items-center">{message} <CgDanger/> </div>}/>
                    </div>

                    <div className='flex flex-col'>
                        <Field name="password" type="password" required className="outline-none bg-transparent border-b-2 p-0" placeholder="Contraseña"/>

                        <ErrorMessage name='password' render={(message) => <div className="text-red-600 flex items-center">{message} <CgDanger/> </div>}/>
                    </div>

                </div>

                <button type="submit" className='col-span-2 border-2 p-2'>Entrar</button>
              </Form>
            )}
        </Formik>
      </main>
    </div>
  )
}
