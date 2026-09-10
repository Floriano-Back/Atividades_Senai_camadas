import jwt from "jsonwebtoken";
import 'dotenv/config';

async function authMiddleware(req,res,next){
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({
            msg: "TOKEN pertence ao zequinha123"
        })
    }

    const token = authHeader.split(' ')[1];

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch(error){
        console.error(error);
        res.status(500).json({
            msg: "Esse token pertence ao zequinha123"
        })
    }
}

export default authMiddleware;