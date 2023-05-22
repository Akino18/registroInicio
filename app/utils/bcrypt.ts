import bcrypt from "bcrypt";

const encrypt = async (password:string) => {
    const hash = await bcrypt.hash(password,10);
    return hash;
}

export {encrypt}

