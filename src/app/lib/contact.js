import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getContacts = async () => {
    try {
      const contacts = await prisma.contact.findMany();
      return contacts;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch contacts");
    }
};


export const addContact = async (Contact) => {
    try {
      const newContact = await prisma.contact.create({
        data:Contact,
      });
      return newContact;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to add  Contact");
    }
};


