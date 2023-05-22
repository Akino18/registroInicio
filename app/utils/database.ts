import {Pool} from 'pg'

let connect:any;

if(!connect){
    connect = new Pool({
        host: 'localhost',
        user: 'postgres',
        password: 'venezuELA21',
        database: 'airOs',
        port: 5432
    })
}

export {connect}

