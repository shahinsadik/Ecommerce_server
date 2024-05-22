import { Request, Response } from "express";
import { orderServices } from "./order.service";
import { Product } from "../products/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const crateOrder = async (req: Request, res: Response) => {
    const orderData = req.body;
    const result = await orderServices.createOrder(orderData);
  
    try{
      res.json({
          success: true,
          message: "Order created successfully!",
          data: result,
        });
    }catch(err:any){
      res.status(500).json({
          success: false,
          message: "Something went wrong!",
          data: err,
        });
    }
  };


const getAllOrder = async (req: Request, res: Response) => {
    const result = await orderServices.getAllOrder();
  
    try{
      res.json({
          success: true,
          message: "Orders fetched successfully!",
          data: result,
        });
    }catch(err:any){
      res.status(500).json({
          success: false,
          message: "Something went wrong!",
          data: err,
        });
    }
  };

  const getOrdersByEmail = async (req: Request, res: Response) => {
    const { email } = req.query;

    if (!email) {
        return res.status(400).json({
            success: false,
            message: "Email query parameter is required.",
        });
    }

    try {
        const result = await orderServices.getOrdersByEmail(email as string);
        res.json({
            success: true,
            message: `Orders fetched successfully for user email '${email}'!`,
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Something went wrong!",
            data: err,
        });
    }
}

  export const orderController = {
    crateOrder,getAllOrder,getOrdersByEmail
  }