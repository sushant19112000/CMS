import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();



export const GET = async (req, { params }) => {
    const searchTerm = params.searchTerm

    // pageNumber should start from 0 
    // skip = number of enteries skipped
    const page=params.page
    console.log(page)
    const pageNumber=parseInt(params.page)
    console.log(pageNumber)


    try {
        //blogs 
        const blogs = await prisma.blogs.findMany({
            skip: pageNumber*4,
            take: 4,
            where: {
                title: {
                    contains: searchTerm
                }
            }
        })


        //whitepapers
        const whitepapers=await prisma.whitepapers.findMany({
            skip: pageNumber*4,
            take: 4,
            where: {
                title: {
                    contains: searchTerm
                }
            }
        })


        //insights
        const insights=await prisma.insights.findMany({
            skip: pageNumber*4,
            take: 4,
            where: {
                title: {
                    contains: searchTerm
                }
            }
        })
        

        //caseStudies
        const caseStudies=await prisma.caseStudies.findMany({
            skip: pageNumber*4,
            take: 4,
            where: {
                title: {
                    contains: searchTerm
                }
            }
        })
        

        //research
        const research=await prisma.research.findMany({
            skip: pageNumber*4,
            take: 4,
            where: {
                title: {
                    contains: searchTerm
                }
            }
        })

        return NextResponse.json(
        { 
        'blogs': blogs,
        'insights':insights,
        "whitepapers":whitepapers,
        'research':research,
        'caseStudies':caseStudies 
        }
        )   
    }
    catch (e) {
        console.log(e)
        return NextResponse.json({ message: 'Internal server error' })
    }
}


