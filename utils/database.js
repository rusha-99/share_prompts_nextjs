// import mongoose from 'mongoose'

// let isConnected = false //track the connection status

// export const connectToDB = async () => {
//   //mongoose.set('strictquery', true)
//   mongoose.set('strictQuery', false)
//   mongoose.connect(process.env.MONGO_URL, () => {
//     console.log('Connected to MongoDB')
//   })

//   if (isConnected) {
//     console.log('MongoDb is already connected')
//     return
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//         dbName: "share_prompt",
//         useNewUrlParser: true,
//       useUnifiedTopology: true,
     
//     })
//     isConnected = true
//     console.log('MongoDb is connected')
//   } catch (error) {
//     console.log(error)
//   }
// }


// // import mongoose from 'mongoose'

// // let isConnected = false

// // export const connectToDB = async () => {
// //   mongoose.set('strictQuery', false) // Disables strict mode for queries

// //   // Check if MongoDB is already connected
// //   if (isConnected) {
// //     console.log('MongoDB is already connected')
// //     return
// //   }

// //   try {
// //     // Connect to the MongoDB database
// //     await mongoose.connect(process.env.MONGODB_URI, {
// //       dbName: 'share_prompt', // Name of the database
// //       useNewUrlParser: true, // New URL parser
// //       useUnifiedTopology: true, // Use new server discovery and monitoring engine
// //     })
// //     isConnected = true
// //     console.log('Connected to MongoDB')
// //   } catch (error) {
// //     console.error('Error connecting to MongoDB:', error)
// //   }
// // }

import mongoose from 'mongoose'

let isConnected = false // track the connection

export const connectToDB = async () => {
  //mongoose.set('strictQuery', true)
  mongoose.set('strictQuery', true)
 // mongoose.connect(Config.mongo_db_connection_string)

  if (isConnected) {
    console.log('MongoDB is already connected')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'share_prompt',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error)
  }
}