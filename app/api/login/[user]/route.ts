import { NextRequest, NextResponse } from "next/server";
import { useSearchParams } from 'next/navigation';

export async function GET (req: NextRequest) {

    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');
    const password = searchParams.get('password');
    console.log(password);
    return NextResponse.json({message:"HOLA"})
}