import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { dataParser } from '@/app/middleware/dataParser';
import {convertToString} from "@/app/middleware/convertToString"
import { convertToJson } from '@/app/middleware/convertToJson';

// Get all researches
export const getResearchs = async () => {
  try {
    const researches = await prisma.research.findMany();
    return researches;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch researches");
  }
};

// Add a new Research
export const addResearch = async (researchObject) => {
  try {

    const specificDate = new Date('2023-10-24T14:30:00.000Z');
    const Blog = await dataParser(researchObject)
    const categoryExists=await prisma.researchCategories.findFirst({
      where: { name:Blog.category }
    })
    Blog.content=convertToString(Blog.content)
    console.log(categoryExists)
    const newBlog = await prisma.research.create({
      data: {
        author: Blog.author,
        title: Blog.title,
        content: Blog.content,
        categoryId:categoryExists.id,
        paragraph:Blog.paragraph,
        img:Blog.img,
        date:new Date(Blog.date)
      }
    });
    return newBlog;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add a reasearch");
  }
};


// Update a research by ID
export const updateResearch = async (id, updatedResearch) => {
  try {
    const existingResearch = await prisma.research.findUnique({
      where: { id },
    });

    if (!existingResearch) {
      throw new Error("Research does not exist");
    }

    const updated = await prisma.research.update({
      where: { id },
      data: updatedResearch,
    });

    return updated;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update the research");
  }
};


// Delete a research by ID
export const deleteResearch = async (id) => {
  try {
    const existingResearch = await prisma.research.findUnique({
      where: { id },
    });

    if (!existingResearch) {
      throw new Error("Research does not exist");
    }

    await prisma.research.delete({
      where: { id },
    });

    return "Research deleted";
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete the research");
  }
};


// Get a single research by ID
export const getResearch = async (id) => {
  try {
    const research = await prisma.research.findUnique({
      where: { id },
      include:{category:true}
    });

    if (!research) {
      throw new Error("Research not found");
    }

    return research;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch the research");
  }
};

