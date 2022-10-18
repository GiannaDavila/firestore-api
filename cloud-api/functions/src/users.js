import { dbConnect } from "./dbConnect.js";

export async function createUser(req,res){
    const db = dbConnect();
    const doc = await db.collection('users').add(req.body)
    .catch(err => res.status(500).send({success:false, messages:err}));
    res.status(201).send({success:true, message: "user created:"+ doc.id})
}

export async function getAllUsers(req,res){
    const db= dbConnect();
    const collection = await db.collection('users').get()
    .catch(err => res.status(500).send({success: false, message: err}));
    const users= collections.docs.map(doc =>{
        users.uid = doc.id
        return users
    })
    res.send(users)
}