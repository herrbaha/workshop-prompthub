import { NextResponse } from "next/server";

export async function POST(req, res) {
    let data = await req.json();
    console.log(data);
    return NextResponse.json({res:'sen cok yasa'}, {status:203});
    } 
    // export async function GET(req, res) {
    //     let data2 = await req.json();
    //     console.log(data2);
    //     return NextResponse.json({res:'hepsiyle yasa'}, {status:201});
    //     } 
    
        export async function GET(req, res) {
            console.log("GET request received");
            return NextResponse.json({ res: 'hepsiyle yasa' }, { status: 201 });
        }