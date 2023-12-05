import { TopicModel, connectDB } from "@/lib/db"
import { NextRequest, NextResponse } from "next/server"

connectDB()
export const GET = async () => {

    try {
        // 数据库查询操作
        const topics = await TopicModel.find()
    
        return NextResponse.json({topics},{status:200})
    } catch (error) {
        
        return NextResponse.json({msg:"error"},{status:500})
    }
}


export const POST = async (request:NextRequest) => {
    try {
        
        const { title, describe } = await request.json()
        
        // 数据库添加操作
        await TopicModel.create({
            title,
            describe
        })
        
        return NextResponse.json({title,describe},{status:200})

    } catch (error) {
        return NextResponse.json({msg:"error"},{status:500})
        
    }
}

export const DELETE = async (request:NextRequest) => {
    try {
        const id = request.nextUrl.searchParams.get('id')
        // 数据库添加操作
        await TopicModel.findByIdAndDelete(id);
        return NextResponse.json({msg:"delete ok"},{status:200})

    } catch (error) {
        return NextResponse.json({msg:"error"},{status:500})
        
    }
}