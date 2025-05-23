import express from 'express';
import { db,connectToDb } from './db.js';

const app = express();
app.use(express.json());

app.get('/api/articles/:name',async(req,res)=>
    {
        const {name} = req.params;
  
        const article = await  db.collection('articles').findOne({name});
        if(article){
            res.json(article);
        }
        else{
            res.send(404);
        }
    
    });
    
app.get('/hello',(req,res) => {
    res.send('Hello!');
});

app.post('/hello',(req,res) => {
    console.log(req.body);
    res.send(`Hello ${req.body.name}`);
});

app.post('/hello/:name',(req,res) => {
    const {name} = req.params;
    res.send(`Hello ${name}`);
});

app.put('/api/articles/:name/upvote',async(req,res)=>{
    const {name} = req.params;

     await  db.collection('articles').updateOne({name},{
        $inc:{upvotes:1}
        
     });
     const article = await  db.collection('articles').findOne({name});

    if(article){
        article.upvotes +=1;
        res.send(`The ${name} artcile now has ${article.upvotes} upvotes`)
    }
    else{
        res.send('The article doesnt exist')
    }

});

app.post('/api/articles/:name/comments', async(req,res)=>{
    const {name} = req.params;
    const{postedBy, text} = req.body;

    await db.collection('articles').updateOne({name},{
        $push:{comments:{postedBy,text}},   
    });

    const artcile = await db.collection('articles').findOne({name});
    
    if(artcile){
        res.send(artcile.comments);
    }
    else{
        res.send('The article doest not exist!');

    }

});

connectToDb(()=>{
    console.log("successfully connected");
    app.listen(8000,()=>{
        console.log('Server is listing on port 8000')
    });
})
