import { PrismaClient } from "@prisma/client";
import type { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();


 const handlePrismaCRUD = async(req : NextRequest, res : NextRequest) => {
    try {
        const data = req.body;
        console.log(data)
    } catch (error) {
        console.error(error)
    }

}

export default handlePrismaCRUD