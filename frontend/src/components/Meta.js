import React from 'react'
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keyword' content={keywords} />
		</Helmet>
	)
}
Meta.defaultProps = {
	title: 'Flowers | Online Flowers | Delivery Flowers | Cheap Flowers',
	description: 'We sell the best flowers for cheap',
	keywords: 'flowers, online flowers, delivery flowers, flower bouquets',
}

export default Meta
