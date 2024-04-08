import Visit from "../../(models)/Visit"
import { NextResponse } from "next/server";

export async function POST(req){
    console.log("Request received");
   
    try{
        const body = await req.json()
        const visitData = body.formData
        console.log(visitData);
        await Visit.create(visitData)

        return NextResponse.json({message: "Visit created successfully", visitData}, { status: 201})
    }
  
catch (err) {
  console.log(err);
  return NextResponse.json({ message: "Error", err }, { status: 500 })}}


  export async function GET() {
    try {
      const visits = await Visit.find();
  
      return NextResponse.json({ visits }, { status: 200 });
    } catch (err) {
      console.log(err);
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
  }