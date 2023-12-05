import { TopicModel, connectDB } from "@/lib/db"
import { NextRequest, NextResponse } from "next/server"

export const PUT = async (request:NextRequest,{params}:{params:{id:string}}) => {

    try {
        const { id } = params
        const { title, describe } = await request.json()

        // 数据库更改操作
        await TopicModel.findByIdAndUpdate(id,{
            title,
            describe
        })
        
        return NextResponse.json({msg:'update ok'},{status:200})

    } catch (error) {
        return NextResponse.json({msg:"error"},{status:500})
        
    }
}