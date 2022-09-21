import { Request, Response } from "express"

const user = [
    {
        id: 1,
        name: 'john doe'
    }
]

 export const listUser = (req:Request,res:Response) => {
    res.status(200).send(user)
}

export const getUserById = (req:Request,res:Response) => {
    const {id} = req.params
    res.status(200).send({id: id})
}

export const createUser = (req:Request,res:Response) => {
    const user = req.body
    res.json({NewUser: user})
}