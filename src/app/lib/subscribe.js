import { PrismaClient } from '@prisma/client';
import mailer from '../middleware/mailer';
const prisma = new PrismaClient();


export const getSubscribers = async () => {
    try {
      const subsribers = await prisma.subscribe.findMany();
      return subsribers;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch subscribers");
    }
};


export const addSubscriber = async (subscriber) => {
    try {
      const newSubscriber = await prisma.subscribe.create({
        data:subscriber,
      });
      
      console.log(newSubscriber)
      return newSubscriber;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to add  subscriber");
    }
};

export const deleteSubscriber=async(subscriber)=>{
   try{
    console.log(subscriber)
    const subscribeRemoved = await prisma.subscribe.delete({
      where: { email:subscriber.email }
    });
   }
   catch(error){
    console.error(error);
    throw new Error("Failed to delete  subscriber");
   }
}
  