import { NextResponse,NextRequest } from "next/server";
import {getAllocations,addAllocation} from "@/app/lib/allocations";

export const GET = async (req, res) => {
    try {
        const allocations = await getAllocations()
        return  NextResponse.json({ allAllocations:allocations } ,{ status: 200 })
    }
    catch (error) {
        return  NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
};

export const POST = async (req, res) => {
    try{
        const requestBody = await req.text();
        const data=JSON.parse(requestBody)
        const newAllocation=await addAllocation(data)
        return  NextResponse.json({message:"New Allocation",allocation:newAllocation},{status:201})
    }
    catch(error){
        console.log(error)
        return  NextResponse.json({message:"Internal server error"},{status:500})
    }
};

