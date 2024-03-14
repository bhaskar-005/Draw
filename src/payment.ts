import { toast } from "sonner";
import { createOrder, verifyPaymentOrder } from "./lib/controller/payment";


export const Payment = async(userinfo:any,updatedUserfunction:any ,setProgress:any) =>{
  setProgress(10)
   if(!userinfo){
    setProgress(100)
    toast('try again after login');
     return ;
   }
   if (userinfo.plan == "premium") {
    setProgress(100)
    toast("You're already enjoying our premium features!");
    return ;
   }
   setProgress(20)
   
   const order_res:any = await createOrder(userinfo._id);
   
   const options={
    key:process.env.VITE_RAZORPAY_KEY,
    currency: order_res.currency,
    amount : order_res.amount,
    order_id: order_res.id,
    name:'Draw',
    description:'Thank You for upgrading your plan.',
    image:"https://d6xcmfyh68wv8.cloudfront.net/assets/razorpay-glyph.svg",
    prefill:{
        name : `${userinfo.userName}`,
        email:userinfo.email,
    },
    handler:function (res:any){
        verifyPayment({res})
    }
}
setProgress(70)
const verifyPayment = async(res:any)=>{
  try {
    const response = res.res
    const updatedUser:any = await verifyPaymentOrder({
      razorpayOrderId:response.razorpay_order_id,
      razorpaySignature:response.razorpay_signature,
      razorpayPaymentId:response.razorpay_payment_id,
      userId:userinfo._id
    })
    const ParseUser = JSON.parse(updatedUser);
    updatedUserfunction(ParseUser);
  } catch (error) {
    console.log(error);
  }
  }

setProgress(100);
const paymentObject = new (window as any).Razorpay(options);
paymentObject.open();

paymentObject.on("payment.failed", function (response:any) {
  alert("Payment failed. Please try again.");
  console.log(response);

  
});

};
