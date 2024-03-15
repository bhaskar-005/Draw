'use server'
import crypto  from 'crypto'
import Razorpay from 'razorpay'
import User from '../models/user'
import DBconnection from '../mongodb'

const keyId = process.env.RAZORPAY_KEY_ID;
const keySecret = process.env.RAZORPAY_KEY_SECRET;

if (!keyId || !keySecret) {
    throw new Error("Razorpay keys are not provided.");
}

const instance = new Razorpay({ 
    key_id: keyId, 
    key_secret: keySecret 
});

export const createOrder = async( userId:any)=>{
  try {
    const finduser = await User.findById(userId);
    if(!finduser){
        console.log('user not found');
        return null;
    }
    const res = await instance.orders.create({
    amount: 499*100,
    currency: "INR",
    receipt: `${Date.now()}`,
    notes: {
        key1: userId,
    }
    })
    return res; 
  } catch (error) {
    console.log(error);
    
  }
}

export const verifyPaymentOrder = async({razorpayOrderId,razorpaySignature,razorpayPaymentId,userId}:any)=>{
     try {
      const body = razorpayOrderId + "|" + razorpayPaymentId;
        
      const expectedSignature = crypto
        .createHmac("sha256", keySecret)
        .update(body.toString())
        .digest("hex");
    
      if (expectedSignature == razorpaySignature) {
        console.log('upgrading plan');
        
        await DBconnection();
          const updateUser = await User.findByIdAndUpdate(
            userId,
            {
              plan: "premium",
            },
            { new: true }
          );
          return JSON.stringify(updateUser);
      }
     } catch (error) {
      console.log(error,'<--error white verify payment.');
      
     }

}