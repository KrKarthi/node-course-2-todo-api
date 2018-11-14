const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
    return  console.log("Unable to connect to mongodb server");
    }
    console.log("Connected to mongodb server");
    const db=client.db('TodoApp');
//deletemanys
// db.collection('Todos').deleteMany({text:"Nothing"}).then((reslut)=>{
// console.log(result);
// });
//deleteone 
// db.collection('Todos').deleteOne({completed:false}).then((result)=>{
//     console.log(result);
// });
//findoneanddelete

db.collection('Todos').findOneAndDelete({_id: new ObjectID("5bec30c8f9ccbd177570495e")}).then((result)=>{
    console.log(JSON.stringify(result,undefined,2));
});
});