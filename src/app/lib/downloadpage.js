import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


// Get a single blog by ID
export const getDownloadPage = async (url) => {
    try {
      console.log('download lib',url)
      const data = await prisma.downloadpage.findFirst({
        where: { url:url},
        include:{
          asset:true
        }
      });
      console.log(data)
      
      if (!data) {
        throw new Error("DownloadPage not found");
      }
      return data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch the DownloadPage");
    }
  };
  