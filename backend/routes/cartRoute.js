import express from 'express'
import { addtoCart,updateCart,getUserCart } from '../controllers/cartController.js'
import authUser from '../middleware/auth.js'

const cartRouter = express.Router()

cartRouter.post('/add',authUser ,addtoCart)
cartRouter.post('/update',authUser ,updateCart)
cartRouter.post('/get',authUser ,getUserCart)

export default cartRouter