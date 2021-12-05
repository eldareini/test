const express=require('express')
const app=express();

app.get('/test',(req,res) => {
  const a = 5
  const b = 4
  res.send(`test complite ${a*b}`)
})

app.listen(5000,() => {
  console.log('listening on port 5000')
})
