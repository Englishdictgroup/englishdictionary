const express=require('express');
const server=express();
const cors=require('cors');
const mysql=require('mysql');
const pool=mysql.createPool({
  host:'127.0.0.1',
  port:3306,
  user:'root',
  password:'',
  database:'word',
  connectionLimit:10
});

server.use(cors({
  origin:['http://127.0.0.1:8080','http://localhost:8080']
}));

server.get('/words',(req,res)=>{
 let keyword = req.query.keyword;
  let sql = "SELECT * FROM word WHERE englishWord LIKE '%"+keyword+"%' or chineseWord LIKE '%"+keyword+"%'";
  pool.query(sql,[keyword,keyword],(err,results)=>{
    if(err) throw err;
    res.send({message:'查询成功',code:1,results:results});
  });
});

server.listen(3000,()=>{
  console.log('server is running...');
});