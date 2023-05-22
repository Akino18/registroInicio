import { NextRequest, NextResponse } from "next/server";
import {connect} from "../../utils/database"
import { encrypt } from "@/app/utils/bcrypt";

export async function POST (req:NextRequest){
    const request = await req.json()
    const {email,password, firstName,lastName} = request;

    const passwordHash = await encrypt(password)
    
    const query = "INSERT INTO tusuarios(nombre, apellido, email, password) VALUES ($1, $2, $3, $4)"
    
    const response = await connect.query(query,[firstName,lastName,email,passwordHash])
    return NextResponse.json({message: response})
}