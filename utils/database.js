import mongoose from 'mongoose'

let isConnected = false //track the connection status

export const connectToDB = async () => {
  mongoose.set('strictquery', true)

  if (isConnected) {
    console.log('MongoDb is already connected')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "share_prompt",
        useNewUrlParser: true,
      useUnifiedTopology: true,
     
    })
    isConnected = true
    console.log('MongoDb is connected')
  } catch (error) {
    console.log(error)
  }
}
