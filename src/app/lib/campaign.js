import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export const getCampaigns = async () => {
    try {
        const campaigns = await prisma.campaign.findMany();
        return campaigns;
    }
    catch (e) {
        console.log(e)

    }
}

export const addCampaign = async (data) => {
    try {
        const newCampaign = await prisma.campaign.create({

            data: data
            // data:{
            //     name:data.name,
            //     code:data.code,
            //     totalAllocation:data.totalAllocation,
            //     accepted:data.accepted,
            //     pending:data.pending,
            // }
        })
        return newCampaign
    }
    catch (e) {
        console.log(e)
        throw new Error("Failed to add a campaign")

    }
}

export const updateCampaign = async (id, data) => {
    try {
        const existingCampaign = await prisma.campaign.findUnique({
            where: { id },
        });

        if (!existingCampaign) {
            throw new Error("Campaign Does not exist");
        }
        const updated = await prisma.campaign.update({
            where: { id },
            data: data
        });
        return updated;
    }
    catch (e) {
        throw new Error("Failed to update the campaign")
        console.log(e)
    }
}


export const getCampaignCodesWithLabels = async () => {
    try {
        const campaigns = await prisma.campaign.findMany();
        const campaignsCodesWithLabels=[]
        campaigns.length>0 ? campaigns.map((campaign) => {
            campaignsCodesWithLabels.push({ value: campaign.code, label: campaign.code })
        }) : [];
        return campaignsCodesWithLabels;

    }
    catch (e) {
        console.log(e)
        throw new Error("Failed to fetch campaigns Codes with labels")

    }
}


