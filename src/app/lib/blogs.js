import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { dataParser } from '@/app/middleware/dataParser';
import {convertToString} from "@/app/middleware/convertToString"
import { convertToJson } from '@/app/middleware/convertToJson';
// Get all blogs
export const getBlogs = async () => {
  try {
    const blogs = await prisma.blogs.findMany();
    return blogs;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch blogs");
  }
};

// Add a new blog
export const addBlog = async (blog) => {
  try {

    const specificDate = new Date('2023-10-24T14:30:00.000Z');
    const Blog = await dataParser(blog)
    const categoryExists=await prisma.blogCategories.findFirst({
      where: { name:Blog.category }
    })
    Blog.content=convertToString(Blog.content)
    console.log(categoryExists)
    const newBlog = await prisma.blogs.create({
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
    throw new Error("Failed to add a blog");
  }
};

// Update a blog by ID
export const updateBlog = async (id, updatedBlog) => {
  try {
    const existingBlog = await prisma.blogs.findUnique({
      where: { id },
    });

    if (!existingBlog) {
      throw new Error("Blog does not exist");
    }

    const updated = await prisma.blogs.update({
      where: { id },
      data: updatedBlog,
    });

    return updated;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update the blog");
  }
};

// Delete a blog by ID
export const deleteBlog = async (id) => {
  try {
    
    const existingBlog = await prisma.blogs.delete({
      where: { id },
    });
    return true
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete the blog");
  }
};

// Get a single blog by ID
export const getBlog = async (id) => {
  try {
    const blog = await prisma.blogs.findFirst({
      where: { id },
      include:{
        category:true
      }
    });
    
    if (!blog) {
      throw new Error("Blog not found");
    }
    return blog;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch the blog");
  }
};

// Get a single blog by Title
export const getBlogByTitle = async (title) => {
  try {
    const blog = await prisma.blogs.findFirst({
      where: { title:title },
      include:{
        category:true
      }
    });
    
    if (!blog) {
      throw new Error("Blog not found");
    }
    return blog;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch the blog");
  }
};



