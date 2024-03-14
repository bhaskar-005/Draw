'use server'
import user from "../models/user";
import DBconnection from "../mongodb";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";


export const getUserInformation = async () => {
  try {
    const { getUser } = getKindeServerSession();
    const KindeUser = await getUser();
    if (!KindeUser) {
      return null; 
    }
    
    await DBconnection();

    const findUser = await user.findOne({ email: KindeUser.email }).populate('project')

    if (findUser) {
      return JSON.stringify(findUser);
    } else {
      const createNewUser = await user.create({
        KindeId: KindeUser.id,
        userName: KindeUser.given_name,
        email: KindeUser.email,
        picture: KindeUser.picture,
        plan: 'free',
      });
      return JSON.stringify(createNewUser);
    }
  } catch (error) {
    console.log(error, "<-- error occurred while creating user");
    return null; 
  }
};


export const createUser = async({userName , email ,picture ,KindeId}:
    {userName:string,email:string,picture?:string,KindeId:string})=>{
     try {
        if (!userName||!email||!KindeId) {
            console.log('please provide all info');
            return
        }
       
        await DBconnection();
        
        const User = await user.findOne({ email:email});
        
        if (User) {
            return null;    
        }   
        
      const createdUser = await user.create({
        KindeId: KindeId,
        userName: userName,
        email: email,
        picture: picture,
        plan: 'free',
      },{new:true})
      console.log('function created user',createUser);
      
        return createdUser;

     } catch (error:any) {
       console.log('error ----> ',error);
       return;
         
     }
}

export const findUser = async (KindeId:string)=>{
  try {
    if (!KindeId){
        throw new Error('_id is not provided');
        return
    }
    await DBconnection();
    const Getuser = await user.findOne({KindeId: KindeId});
    return Getuser

  } catch (error) {
    console.log(error);
    
  }
}