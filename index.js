const express=require('express')
const app=express();

app.get('/test',(req,res) => {
  res.send('test complite')
})

app.listen(5000,() => {
  console.log('listening on port 5000')
})