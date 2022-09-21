import { Request, Response } from "express"

const user = [
    {
        id: 1,
        name: 'john doe'
    }
]

 export const listUser = (req:Request,res:Response) => {
    res.send(user)
}