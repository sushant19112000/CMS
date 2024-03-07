import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { dataParser } from '@/app/middleware/dataParser';
import {convertToString} from "@/app/middleware/convertToString"
import { convertToJson } from '@/app/middleware/convertToJson';


// Get all case studies
export const getCaseStudies = async () => {
  try {
    const caseStudies = await prisma.caseStudies.findMany();
    return caseStudies;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch case studies");
  }
};

export const addCaseStudy = async (CaseStudy) => {
  try {
    console.log("lib")
    const specificDate = new Date('2023-10-24T14:30:00.000Z');
    const caseStudy = await dataParser(CaseStudy)
    const categoryExists=await prisma.caseStudiesCategories.findFirst({
      where: { name:caseStudy.category }
    })
    caseStudy.content=convertToString(caseStudy.content)
    try{
      const newcaseStudy = await prisma.caseStudies.create({
        data: {
          author: caseStudy.author,
          title: caseStudy.title,
          content: caseStudy.content,
          categoryId:categoryExists.id,
          paragraph:caseStudy.paragraph,
          img:caseStudy.img,
          date:new Date(caseStudy.date)
        }
      });
      console.log(newcaseStudy)
      return newcaseStudy;
    }
    catch(e){
      console.log("Error Adding Categories",e)
    }
    
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add a caseStudy");
  }
};


// Update a case study by ID
export const updateCaseStudy = async (id, updatedCaseStudy) => {
  try {
    const existingCaseStudy = await prisma.caseStudies.findUnique({
      where: { id },
    });

    if (!existingCaseStudy) {
      throw new Error("Case study does not exist");
    }

    const updated = await prisma.caseStudies.update({
      where: { id },
      data: updatedCaseStudy,
    });

    return updated;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update the case study");
  }
};

// Delete a case study by ID
export const deleteCaseStudy = async (id) => {
  try {
    const existingCaseStudy = await prisma.caseStudies.findUnique({
      where: { id },
    });

    if (!existingCaseStudy) {
      throw new Error("Case study does not exist");
    }

    await prisma.caseStudies.delete({
      where: { id },
    });

    return "Case study deleted";
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete the case study");
  }
};

// Get a single case study by ID
export const getCaseStudy = async (id) => {
  try {
    const caseStudy = await prisma.caseStudies.findUnique({
      where: { id },
      include:{
        category:true
      }
    });

    if (!caseStudy) {
      throw new Error("Case study not found");
    }

    return caseStudy;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch the case study");
  }
};
