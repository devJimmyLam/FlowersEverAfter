import React from 'react'
import { Children } from 'react';
import { Alert } from "react-bootstrp";

const Message = ({ varient, children }) => {
	return (
		<Alert variant={variant}>
			{children}
		</Alert>
	)
}

Message.defaultProps = {
	variant: 'info',
}

export default Message;