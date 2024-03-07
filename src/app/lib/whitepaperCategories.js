import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getWhitepaperCategories = async () => {
    try {
        const WhitepaperCategories = await prisma.whitepapersCategories.findMany();
        return WhitepaperCategories;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch WhitepaperCategories");
    }
};

export const addWhitepaperCategories = async (WhitepaperCategories) => {
    try {
        const newWhitepaperCategory = await prisma.whitepapersCategories.create({
            data: WhitepaperCategories
        });
        return newWhitepaperCategory;
    }
    catch {
        throw new Error("Failed to add WhitepaperCategories");
    }
}



export const updateWhitepaperCategory = async (id, updatedWhitepaperCategory) => {
    try {
        const existingWhitepaperCategory = await prisma.whitepapersCategories.findUnique({
            where: { id },
        });

        if (!existingWhitepaperCategory) {
            throw new Error("WhitepaperCategory does not exist");
        }

        const updated = await prisma.whitepapersCategories.update({
            where: { id },
            data: updatedWhitepaperCategory,
        });
        return updated;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to update the WhitepaperCategory");
    }
};


export const deleteWhitepaper = async (id) => {
    try {
        const existingWhitepaperCategory = await prisma.whitepapersCategories.findUnique({
            where: { id },
        });

        if (!existingWhitepaperCategory) {
            throw new Error("Whitepaper does not exist");
        }

        await prisma.whitepapersCategories.delete({
            where: { id },
        });

        return "WhitepaperCategory deleted";
    } catch (error) {
        console.error(error);
        throw new Error("Failed to delete the Whitepaper Category");
    }
};


export const getWhitepaperCategory = async (id) => {
    try {
        const WhitepaperCategory = await prisma.whitepapersCategories.findUnique({
            where: { id },
        });

        if (!WhitepaperCategory) {
            throw new Error("WhitepaperCategory not found");
        }
        return WhitepaperCategory;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch the Whitepaper category");
    }
};
