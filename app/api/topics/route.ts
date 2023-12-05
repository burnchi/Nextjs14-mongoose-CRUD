import { NextRequest, NextResponse } from "next/server"

export const GET = () => {

    return NextResponse.json({msg:'ok'},{status:201})
}

export const POST = async (request:NextRequest) => {
    const { title,describe } = await request.json()


    return NextResponse.json({title,describe},{status:201})
}