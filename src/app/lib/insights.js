import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { dataParser } from '@/app/middleware/dataParser';
import {convertToString} from "@/app/middleware/convertToString"
import { convertToJson } from '@/app/middleware/convertToJson';

// Get all insights
export const getInsights = async () => {
  try {
    const insights = await prisma.insights.findMany();
    return insights;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch insights");
  }
};

export const addInsights = async (Insights) => {
  try {
   
    const specificDate = new Date('2023-10-24T14:30:00.000Z');
    const insights = await dataParser(Insights)
    const categoryExists=await prisma.insightsCategories.findFirst({
      where: { name:insights.category }
    })
    insights.content=convertToString(insights.content)
    try{
      const newinsights = await prisma.insights.create({
        data: {
          author: insights.author,
          title: insights.title,
          content: insights.content,
          categoryId:categoryExists.id,
          paragraph:insights.paragraph,
          img:insights.img,
          date:new Date(insights.date)
        }
      });
      return newinsights;
    }
    catch(e){
      console.log("Error Adding Insights",e)
    }
    
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add a insights");
  }
};



// Update an insight by ID
export const updateInsight = async (id, updatedInsight) => {
  try {
    const existingInsight = await prisma.insights.findUnique({
      where: { id },
    });

    if (!existingInsight) {
      throw new Error("Insight does not exist");
    }

    const updated = await prisma.insights.update({
      where: { id },
      data: updatedInsight,
    });

    return updated;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update the insight");
  }
};

// Delete an insight by ID
export const deleteInsight = async (id) => {
  try {
    const existingInsight = await prisma.insights.findUnique({
      where: { id },
    });

    if (!existingInsight) {
      throw new Error("Insight does not exist");
    }

    await prisma.insights.delete({
      where: { id },
    });

    return "Insight deleted";
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete the insight");
  }
};

// Get a single insight by ID
export const getInsight = async (id) => {
  try {
    const insight = await prisma.insights.findUnique({
      where: { id },
      include:{
        category:true
      }
    });

    if (!insight) {
      throw new Error("Insight not found");
    }

    return insight;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch the insight");
  }
};
