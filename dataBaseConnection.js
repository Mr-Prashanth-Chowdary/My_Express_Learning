import { Pool } from "pg";

const pool = new Pool({
    user: 'prashant',
    host: 'localhost',
    database: 'express_demo_data',
    password: 'prashanth',
    port: 5432,
})

pool.query('select now()',(err,res)=>{
    if(err){
        console.error('Error connecting to postgreSQL',err)
    }
    else{
        console.log('Successfully connect to the Data base',res.rows[0].now)
    }
})

module.exports = pool 