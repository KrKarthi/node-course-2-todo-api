const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
    return  console.log("Unable to connect to mongodb server");
    }
    console.log("Connected to mongodb server");
    const db=client.db('TodoApp');
// db.collection('Users').find({name:"Raja"}).toArray().then((docs)=>{
// console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
// console.log("Some problem caused while fetching data"+err);
// });
db.collection('Users').find({name:"A"}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
    console.log("The error is :"+err);
});

db.collection('Users').find({name:"A"}).count().then((docs)=>{
console.log("The count is: "+docs);
},(err)=>{
console.log("The error is :"+err);
});
});