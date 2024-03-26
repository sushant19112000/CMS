import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();



export const getMailer = async (url) => {
    try {
      const data = await prisma.mailer.findFirst({
        where: { url:url },
        include:{
          campaign:true
        }
      });
      
      if (!data) {
        throw new Error("Mailer not found");
      }
      return data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch the Mailer");
    }
};




export const addMailer = async (data) => {
  try {
    const newdata = await prisma.mailer.create({
     data:data
    });
    
    if (!newdata) {
      throw new Error("Mailer not created");
    }
    return newdata;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add new ");
  }
};
