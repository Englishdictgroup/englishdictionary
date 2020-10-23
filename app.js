//引入Express模块
const express = require('express');
//引入cors模块
const cors = require("cors");
//引入mysql模块
const mysql = require("mysql");
//const { urlencoded } = require('body-parser');
//创建Express实例
const server = express();
//引入body-parser模块
const bodyParser = require('body-parser');




//创建mysql连接池
const pool = mysql.createPool({
  host: '127.0.0.1',//数据库服务器地址
  user: 'root',//数据库用户名
  password: '',//数据库密码
  port: 3306,//数据库端口号
  database: 'word',//数据库名称
  charset: 'utf8',
  connectionLimit: 20
})

//创建Express实例
//const server = express();
//将cors作为server中间件使用
server.use(cors({
  origin: ['http://127.0.0.1:8080', 'http://localhost:8080',
  'http://127.0.0.1:8081', 'http://localhost:8081','http://192.168.43.183:8081']
}));

server.use(bodyParser.urlencoded({
  extended: false
}))

//获取文章信息
server.get('/articles',(req,res)=>{
  let sql = 'select title,subtitle,picture from articles'
  pool.query(sql,(err,results)=>{
    if(err)throw err;
    res.send({ message: '查询成功', code: 1, results: results});
    //console.log(results[0].title);
  })
})
// server.get('/category',(req,res)=>{
//   //查找文章分类表中的所有数据
//   let sql = 'SELECT id,category_name FROM xzqa_category';
//   //通过MySQL连接池执行SQL语句
//   pool.query(sql,(err,results)=>{
//     if(err) throw err;
//     res.send({message:'查询成功',code:1,results:results});
//   });
// });


//获取特定分类下的文章数据
server.get('/lists', (req, res) => {
  //接收客户端传递的URL参数
  let cid = req.query.cid;
  //获取当前的页码
  let page = req.query.page;
  //声明变量用于存储每页显示的记录数
  let pagesize = 15;
  let offset = (page - 1) * pagesize;
  //现以接收到cid为条件进行文章信息的查找
  let sql = 'SELECT id,subject,description,image FROM xzqa_article WHERE category_id = ? LIMIT ' + offset + ',' + pagesize;

  //存储总记录数
  let rowcount;
  //存储总页数
  let pagecount;

  //执行SQL查询
  pool.query(sql, [cid], (err, result) => {
    if (err) throw err;
    /////////////////
    //1.获取记录数
    sql = 'SELECT COUNT(id) AS count FROM xzqa_article WHERE category_id=?';
    pool.query(sql, [cid], (err, results) => {
      if (err) throw err;
      rowcount = results[0].count;
      //计算总页数
      pagecount = Math.ceil(rowcount / pagesize);
      //2.计算总页数
      res.send({ message: '查询成功', code: 1, results: result, pagecount: pagecount });
    });
    /////////////////
  })
});

//获取特定的文章信息的API接口
server.get('/article', (req, res) => {
  //获取文章ID
  let id = req.query.id;
  //sql查询
  let sql = 'SELECT r.id,subject,content,created_at,nickname,avatar,article_number FROM xzqa_author AS u INNER JOIN xzqa_article  AS r ON  author_id = u.id WHERE r.id=?';
  //执行SQL语句
  pool.query(sql, [id], (err, results) => {
    if (err) throw err;
    res.send({ message: '查询成功', code: 1, result: results[0] });
  });
})

//用户注册d接口
server.post('/register', (req, res) => {
  let uname = req.body.username;
  let pwd = req.body.password; 
  let sql = 'select id from xzqa_author where username=?';
  pool.query(sql, [uname], (err, results) => {
    if (err) throw err;
    if (results.length == 0) {
      sql = 'insert into  xzqa_author(username,password)  values (?,MD5(?))';
      pool.query(sql, [uname, pwd], (err, result) => {
        if (err) throw err; 
        res.send({ message: '注册成功', code: 1})
      })
    } else {
        res.send({ message: '用户名已存在', code: 0})
    }
  })
})



//用户登录
server.post('/login',(req,res)=>{
  let username = req.body.username;
  let pwd = req.body.password; 
  let sql = "select id,username from xzqa_author where username=? and password=MD5(?)";
  pool.query(sql,[username,pwd],(err,results)=>{
    if(err) throw err;
    if(results.length==0){
      res.send({message: '用户名或密码错误,请重新输入', code: 0})
    }else{
      res.send({message: '登录成功', code: 1,info:results[0]})
    }
  })
})



server.listen(3000, () => {
  console.log('server is runing ...');
});


