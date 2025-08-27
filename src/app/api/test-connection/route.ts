// import { NextResponse } from 'next/server'
// import clientPromise from '@/lib/mongodb'

// export async function GET() {
//   try {
//     const client = await clientPromise
//     const db = client.db("admin")
    
//     // Test the connection
//     await db.command({ ping: 1 })
    
//     return NextResponse.json({ 
//       status: 'success', 
//       message: 'Successfully connected to MongoDB!' 
//     })
//   } catch (error) {
//     return NextResponse.json({ 
//       status: 'error', 
//       message: 'Failed to connect to MongoDB', 
//       error: error instanceof Error ? error.message : String(error)
//     }, { status: 500 })
//   }
// }
