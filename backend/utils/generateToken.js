import jwt from 'jasonwebtoken'

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT.SECRET, {
		expiresIn: '30d'
	})
}

export default generateToken;