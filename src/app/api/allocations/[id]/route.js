import { NextResponse,NextRequest } from "next/server";
import {updateAllocation } from "@/app/lib/allocations";
export const PUT = async (req,res,{params}) => {
    try{
        const id=parseInt(params.id)
        const requestBody = await req.text();
        const data=JSON.parse(requestBody)
        const updated=await updateAllocation(id,data)
        return  NextResponse.json({message:"Allocation Updated",allocation:updated},{status:201})
    }
    catch(error){
        console.log(error)
        return  NextResponse.json({message:"Internal server error"},{status:500})
    }
};




