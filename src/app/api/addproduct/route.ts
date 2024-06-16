import connectMongoDB from '@/libs/MongoConnect';
import Product from '@/libs/models/Product';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    await connectMongoDB()
    try {
        const { imgSrc, filekey, name, category, price } = await request.json();

        console.log("this is body form add product route  : -->   " + imgSrc, filekey, name, category, price)

        const data = await Product.create({
            imgSrc,
            filekey,
            name,
            category,
            price
        });

        return NextResponse.json({ msg: "Product added successfully", data })
    } catch (error) {
        return NextResponse.json({
            error,
            msg: "Something Went Wrong"
        },
            { status: 400 }
        )
    }
}

