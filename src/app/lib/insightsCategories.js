import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Get all Insights categories
export const getInsightsCategories = async () => {
    try {
        const InsightsCategories = await prisma.insightsCategories.findMany();
        return InsightsCategories;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch InsightsCategories");
    }
};

export const addInsightsCategories = async (InsightsCategories) => {
    try {
        const newInsightsCategory = await prisma.insightsCategories.create({
            data: InsightsCategories
        });
        return newInsightsCategory;
    }
    catch {
        throw new Error("Failed to add InsightsCategories");
    }
}


// Update a InsightsCategory by ID
export const updateInsightsCategory = async (id, updatedInsightsCategory) => {
    try {
        const existingInsightsCategory = await prisma.insightsCategories.findUnique({
            where: { id },
        });

        if (!existingInsightsCategory) {
            throw new Error("InsightsCategory does not exist");
        }

        const updated = await prisma.insightsCategories.update({
            where: { id },
            data: updatedInsightsCategory,
        });
        return updated;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to update the InsightsCategory");
    }
};

// Delete a InsightsCategory by ID
export const deleteInsights = async (id) => {
    try {
        const existingInsightsCategory = await prisma.insightsCategories.findUnique({
            where: { id },
        });

        if (!existingInsightsCategory) {
            throw new Error("Insights does not exist");
        }

        await prisma.insightsCategories.delete({
            where: { id },
        });

        return "InsightsCategory deleted";
    } catch (error) {
        console.error(error);
        throw new Error("Failed to delete the Insights Category");
    }
};

// Get a single Insights by ID
export const getInsightsCategory = async (id) => {
    try {
        const InsightsCategory = await prisma.insightsCategories.findUnique({
            where: { id },
        });

        if (!InsightsCategory) {
            throw new Error("InsightsCategory not found");
        }
        return InsightsCategory;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch the Insights category");
    }
};
