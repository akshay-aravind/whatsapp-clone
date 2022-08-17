import express from "express";
import mongoose from 'mongoose';
import Messages from './dbMessages.js'
import Pusher from "pusher"
import cors from 'cors';

const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1464242",
    key: "67bc4f57674ddd36fecd",
    secret: "507708cb85d5c128108e",
    cluster: "eu",
    useTLS: true
  });

app.use(express.json()); 
app.use(cors());

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Header", "*");
//     next();
// });

const connection_url = 'mongodb+srv://kshay:123kjkszpj@cluster0.c8ao6cr.mongodb.net/whatsappdb?retryWrites=true&w=majority'
 
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const db = mongoose.connection

db.once('open', ()=>{
    console.log("DB Connected");
    
    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on('change',(change)=>{
        console.log(change);

    if (change.operationType === 'insert') {
        const messageDetails = change.fullDocument;
        pusher.trigger('messages', 'inserted', {
            name:messageDetails.name,
            message: messageDetails.message,
            timestamp: messageDetails.timestamp,
            received: messageDetails.received,
        });
     } else {
        console.log("Error triggering Pusher");
     }
    });
});

app.get("/",(req,res)=> res.status(200).send("Hello World"));

app.get('/messages/sync', (req,res)=> {
    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.post('/messages/new', (req,res) =>{
    const dbMessage = req.body
    Messages.create(dbMessage, (err,data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.listen(port,()=> console.log(` ${port}`));