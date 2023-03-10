import express from "express";
import morgan from "morgan";
import { createRoles } from "./libs/initialSetup";
import newsRoutes from './routes/news.routes'
import authRoutes from './routes/auth.routes'
import userRouter from './routes/user.routes'

const app = express();
createRoles()
app.use(morgan('dev'));
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({
        name:"jaime",
        author:"autorjaiem",
        description:"description"

    })
})

app.use('/api/news',newsRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/users',userRouter)

export default app; 