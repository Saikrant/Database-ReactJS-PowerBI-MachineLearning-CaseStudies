import { MongoClient } from 'mongodb';

let db;

async function connectToDb(cb){
    const clinet = new MongoClient('mongodb://127.0.0.1:27017');
    await clinet.connect();
     db = clinet.db('react-blog-db');
     cb();  
}

export{
    db,
    connectToDb
}