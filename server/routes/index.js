var express = require('express');
var router = express.Router();
const users = [
  {
    username:'cc',
    password:'123'
  },
  {
    username:'aa',
    password:'123'
  }
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//定义一个接口
router.post('/login',(req,res)=>{

  const {username,password} = req.body
  let loginSuccess = false
  users.forEach(item=>{
    if(item.username === username && item.password === password)
      loginSuccess = true
  })

  if(loginSuccess){
    res.json({
      code: 200,
      msg: '登录成功'
    })
  }


})


module.exports = router;
