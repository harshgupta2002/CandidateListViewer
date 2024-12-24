const express=require('express');
const app=express();
const PORT=3001;
const cors = require('cors');
const candidateRoutes=require('./routes/candidateRoutes');

app.use(cors());

app.get('/', (req, res)=>{
    res.send("Express is running")
})

app.use('/api', candidateRoutes);

app.listen(PORT, ()=>{
    console.log('Server is running');
    
})