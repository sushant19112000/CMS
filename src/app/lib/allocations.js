import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export const getAllocations=async()=>{
    try{
        const allocations=await prisma.allocations.findMany()
        return allocations
    }
    catch(e){
        throw new Error("Failed to fetch allocations")
        console.log(e)
    }
}


export const addAllocation=async(data)=>{
    
    try{
        const newAllocation=await prisma.allocations.create({
            data:data
        })
        return newAllocation
    }
    catch(e){
        throw new Error("Failed to add a allocation")
        console.log(e)
    }
}

export const updateAllocation=async(id,data)=>{
    try {
        const existingAllocation = await prisma.allocations.findUnique({
            where: { id },
        });

        if (!existingAllocation) {
            throw new Error("allocation does not exist");
        }
        const updated = await prisma.allocations.update({
            where: { id },
            data:data
        });
        return updated;
    }
    catch(e){
        throw new Error("Failed to update the allocation")
        console.log(e)
    }
}

