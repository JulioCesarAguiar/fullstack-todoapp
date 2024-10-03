import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/todoModel";
import { NextResponse } from "next/server";

const LoadDB = async () =>{
    await ConnectDB();
}

LoadDB();

 export async function GET(request) {
    const todos = await TodoModel.find({});
    return NextResponse.json({todos:todos})
 }

 export async function POST(request) {

    const {titulo, descricao} = await request.json();
    await TodoModel.create({
      titulo, 
      descricao
    })

    return NextResponse.json({msg:"Todo criado"})
 }
 
  export async function DELETE(request) {

    const mongoId = await request.nextUrl.searchParams.get('mongoId')
    await TodoModel.findByIdAndDelete(mongoId);
    return NextResponse.json({msg:"Todo excluído"})
 }


  export async function PUT(request) {

    const mongoId = await request.nextUrl.searchParams.get('mongoId')
    await TodoModel.findByIdAndUpdate(mongoId,{
      $set:{
        completo:true
      }
    });
    return NextResponse.json({msg:"Todo completo"})
 }