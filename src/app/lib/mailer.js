import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();



export const getMailer = async (url) => {
    try {
      const data = await prisma.mailer.findFirst({
        where: { url:url },
        include:{
          asset:true
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


  