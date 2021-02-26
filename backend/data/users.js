import bcrypt from 'bcryptjs'

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: bycrpt.hasSync('password', 10),
		isAdmin: true
	},
	{
		name: 'Tony Stark',
		email: 'tony@example.com',
		password: bycrpt.hasSync('password', 10),
	},
	{
		name: 'Steve Rogers',
		email: 'steve@example.com',
		password: bycrpt.hasSync('password', 10),
	}
]

export default users;