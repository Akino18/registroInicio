"use client"

import Image from 'next/image'
import { Formik,Form, Field } from 'formik'
import * as Yup from "yup"
import {BsAirplaneEngines} from "react-icons/bs"
import { IconContext } from 'react-icons'
import Link from 'next/link'

export default function Home() {

  const signInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    firstName: Yup.string().min(5,"Nombre demasiado corto").max(20,"Nombre demasiado largo").required('Required'),
    lastName: Yup.string().min(5,"Apellido demasido corto").max(20,"Apellido demasiado largo").required('Required'),
    password: Yup.string().min(8,"la contraseña debe poseer al menos 8 caracteres"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
  });

  return (
    <main className="flex text-white min-h-screen items-center justify-center gap-3 p-24 px-6 bg-black ">
      <Link href="/signIn">
        Crear usuario
      </Link>
      <Link href="/logIn">
        Iniciar sesión
      </Link>
    </main>
  )
}
