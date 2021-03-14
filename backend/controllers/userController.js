
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'


//@desc		Auth user & get token
//@route	POST /api/users
//@access	Public
const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body

	const user = await User.findOne({ email: email })

	if (user) {
		
	}
})





export { authUser }