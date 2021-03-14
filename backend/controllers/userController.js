
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'


//@desc		Auth user & get token
//@route	POST /api/users
//@access	Public
const authUsers = asyncHandler(async (req, res) => {
	const { email, password } = req.body
	res.send(email.password)
})





export {
	authUsers,
}