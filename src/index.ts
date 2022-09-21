import express, {Request, Response, NextFunction} from 'express'

const app = express()

app.get('/status', (req:Request,res:Response,next:NextFunction) => {
    res.json({message: "Status Route"})
})

app.listen(3000, () => {
    console.log("App listening on port", 3000)
})


