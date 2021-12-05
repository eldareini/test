const express=require('express')
const app=express();

app.get('/',(req,res) => {
  const a = 5
  const b = 4
  res.send(`test complite ${a*b}`)
})
const port = 8080
app.listen(port,() => {
  console.log(`listening on port ${port}`)
})
