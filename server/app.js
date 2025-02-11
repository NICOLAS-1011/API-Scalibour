import express from 'express';
import usersRoutes from './routes/users.routes.js';
import indexRoutes from './routes/index.routes.js';
import cors from 'cors';

const app = express();

app.use(cors(
    {
        origin: 'http://localhost:5173'
    }
))
app.use(express.json())
app.use('/api',usersRoutes)
app.use('/api',indexRoutes)

app.use((req,res,next)=>{
    res.status(404).json({
        message: 'Endpoint not found'
    })
})

export default app;