import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Get all CaseStudy categories
export const getCaseStudyCategories = async () => {
    try {
        const CaseStudyCategories = await prisma.caseStudiesCategories.findMany();
        return CaseStudyCategories;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch CaseStudyCategories");
    }
};

export const addCaseStudyCategories = async (CaseStudyCategories) => {
    try {
        const newCaseStudyCategory = await prisma.caseStudiesCategories.create({
            data: CaseStudyCategories
        });
        return newCaseStudyCategory;
    }
    catch {
        throw new Error("Failed to add CaseStudyCategories");
    }
}


// Update a CaseStudyCategory by ID
export const updateCaseStudyCategory = async (id, updatedCaseStudyCategory) => {
    try {
        const existingCaseStudyCategory = await prisma.caseStudiesCategories.findUnique({
            where: { id },
        });

        if (!existingCaseStudyCategory) {
            throw new Error("CaseStudyCategory does not exist");
        }

        const updated = await prisma.caseStudiesCategories.update({
            where: { id },
            data: updatedCaseStudyCategory,
        });
        return updated;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to update the CaseStudyCategory");
    }
};

// Delete a CaseStudyCategory by ID
export const deleteCaseStudy = async (id) => {
    try {
        const existingCaseStudyCategory = await prisma.caseStudiesCategories.findUnique({
            where: { id },
        });

        if (!existingCaseStudyCategory) {
            throw new Error("CaseStudy does not exist");
        }

        await prisma.caseStudiesCategories.delete({
            where: { id },
        });

        return "CaseStudyCategory deleted";
    } catch (error) {
        console.error(error);
        throw new Error("Failed to delete the CaseStudy Category");
    }
};

// Get a single CaseStudy by ID
export const getCaseStudyCategory = async (id) => {
    try {
        const CaseStudyCategory = await prisma.caseStudiesCategories.findUnique({
            where: { id },
        });

        if (!CaseStudyCategory) {
            throw new Error("CaseStudyCategory not found");
        }
        return CaseStudyCategory;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch the CaseStudy category");
    }
};
