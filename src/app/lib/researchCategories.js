import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getResearchCategories = async () => {
    try {
        const ResearchCategories = await prisma.insightsCategories.findMany();
        return ResearchCategories;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch ResearchCategories");
    }
};

export const addResearchCategories = async (ResearchCategories) => {
    try {
        const newResearchCategory = await prisma.researchCategories.create({
            data: ResearchCategories
        });
        return newResearchCategory;
    }
    catch(e) {
        console.log(e)
        throw new Error("Failed to add ResearchCategories");
    }
}



export const updateResearchCategory = async (id, updatedResearchCategory) => {
    try {
        const existingResearchCategory = await prisma.insightsCategories.findUnique({
            where: { id },
        });

        if (!existingResearchCategory) {
            throw new Error("ResearchCategory does not exist");
        }

        const updated = await prisma.insightsCategories.update({
            where: { id },
            data: updatedResearchCategory,
        });
        return updated;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to update the ResearchCategory");
    }
};


export const deleteResearch = async (id) => {
    try {
        const existingResearchCategory = await prisma.insightsCategories.findUnique({
            where: { id },
        });

        if (!existingResearchCategory) {
            throw new Error("Research does not exist");
        }

        await prisma.insightsCategories.delete({
            where: { id },
        });

        return "ResearchCategory deleted";
    } catch (error) {
        console.error(error);
        throw new Error("Failed to delete the Research Category");
    }
};


export const getResearchCategory = async (id) => {
    try {
        const ResearchCategory = await prisma.insightsCategories.findUnique({
            where: { id },
        });

        if (!ResearchCategory) {
            throw new Error("ResearchCategory not found");
        }
        return ResearchCategory;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch the Research category");
    }
};
