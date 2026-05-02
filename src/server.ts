import express from 'express'
import restUserRouter from './REST/routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/rest',restUserRouter)

app.get('/health',(req,res)=>{
    res.json({status:'ok',message:"server is running"})
})

app.listen(3000,()=>{
    console.log('server running')
})