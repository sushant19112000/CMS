import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { dataParser } from '@/app/middleware/dataParser';
import {convertToString} from "@/app/middleware/convertToString"
import { convertToJson } from '@/app/middleware/convertToJson';
// Get all whitepapers
export const getWhitePapers = async () => {
  try {
    const whitepapers = await prisma.whitepapers.findMany();
    return whitepapers;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch whitepapers");
  }
};

// Add a new whitepaper
export const addWhitepaper = async (whitepaper) => {
  try {

    const specificDate = new Date('2023-10-24T14:30:00.000Z');

    const Whitepaper = await dataParser(whitepaper)
    const categoryExists=await prisma.whitepapersCategories.findFirst({
      where: { name:Whitepaper.category }
    })
    Whitepaper.content=convertToString(Whitepaper.content)
    console.log(categoryExists)
    const newWhitepaper = await prisma.whitepapers.create({
      data: {
        author: Whitepaper.author,
        title: Whitepaper.title,
        content: Whitepaper.content,
        categoryId:categoryExists.id,
        paragraph:Whitepaper.paragraph,
        img:Whitepaper.img,
        date:new Date(Whitepaper.date)
      }
    });
    return newWhitepaper;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add a whitepaper");
  }
};



// Update a whitepaper by ID
export const updateWhitePaper = async (id, updatedWhitepaper) => {
  try {
    const existingWhitePaper = await prisma.whitepapers.findUnique({
      where: { id },
    });

    if (!existingWhitePaper) {
      throw new Error("Whitepaper does not exist");
    }

    const updated = await prisma.whitepapers.update({
      where: { id },
      data: updatedWhitepaper,
    });

    return updated;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update the whitepaper");
  }
};

// Delete a whitepaper by ID
export const deleteWhitePaper = async (id) => {
  try {
    const existingWhitePaper = await prisma.whitepapers.findUnique({
      where: { id },
    });

    if (!existingWhitePaper) {
      throw new Error("Whitepaper does not exist");
    }

    await prisma.whitepapers.delete({
      where: { id },
    });

    return "Whitepaper deleted";
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete the whitepaper");
  }
};

// Get a single whitepaper by ID
export const getWhitePaper = async (id) => {
  try {
    const whitepaper = await prisma.whitepapers.findUnique({
      where: { id },
      include:{category:true}
    });

    if (!whitepaper) {
      throw new Error("Whitepaper not found");
    }

    return whitepaper;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch the whitepaper");
  }
};
