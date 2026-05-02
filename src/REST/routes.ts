import express from 'express'

const router = express.Router();

router.get('/users/',(req,res)=>{
    res.json({message:'response for {get} request in rest'})
})
router.post('/users/',(req,res)=>{
    res.json({message:'response for {post} request in rest'})
})
router.patch('/users/:id',(req,res)=>{
    res.json({message:'response for {patch} request in rest'})
})
router.delete('/users/:id',(req,res)=>{
    res.json({message:'response for {delete} request in rest'})
})

export default router