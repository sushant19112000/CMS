import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Get all blog categories
export const getBlogCategories = async () => {
    try {
        const blogCategories = await prisma.blogCategories.findMany();
        return blogCategories;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch blogCategories");
    }
};

export const addBlogCategories = async (blogCategories) => {
    try {
        const newBlogCategory = await prisma.blogCategories.create({
            data: blogCategories
        });
        return newBlogCategory;
    }
    catch {
        throw new Error("Failed to add blogCategories");
    }
}


// Update a blogCategory by ID
export const updateBlogCategory = async (id, updatedBlogCategory) => {
    try {
        const existingBlogCategory = await prisma.blogCategories.findUnique({
            where: { id },
        });

        if (!existingBlogCategory) {
            throw new Error("BlogCategory does not exist");
        }

        const updated = await prisma.blogCategories.update({
            where: { id },
            data: updatedBlogCategory,
        });
        return updated;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to update the blogCategory");
    }
};

// Delete a blogCategory by ID
export const deleteBlog = async (id) => {
    try {
        const existingBlogCategory = await prisma.blogCategories.findUnique({
            where: { id },
        });

        if (!existingBlogCategory) {
            throw new Error("Blog does not exist");
        }

        await prisma.blogCategories.delete({
            where: { id },
        });

        return "BlogCategory deleted";
    } catch (error) {
        console.error(error);
        throw new Error("Failed to delete the blog Category");
    }
};

// Get a single blog by ID
export const getBlogCategory = async (id) => {
    try {
        const blogCategory = await prisma.blogCategories.findUnique({
            where: { id },
        });

        if (!blogCategory) {
            throw new Error("BlogCategory not found");
        }
        return blogCategory;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch the blog category");
    }
};
