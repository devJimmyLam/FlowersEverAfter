import mongoose from 'mongoose'

//when we deal with mongodb will always return a promoise so we should us async.
const connectDB = async () => {
	//wrap promise in try catach
	//first argu is the dotenv
	//second argu is set of options, now with current version of mongo we have to add or we will have warning in console.
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true
		})
		//taking conn object to show in console
		console.log(`MongoDB Connected: ${conn.connection.host}`)
	} catch (error) {
		//if something goes wrong, then error message and exit with failure (using 1)
		console.log(`Error: ${error.message}`)
		process.exit(1)
	}
}

export default connectDB