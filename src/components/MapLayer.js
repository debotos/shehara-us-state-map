import React from 'react'
import { Layer } from '@urbica/react-map-gl'

import getStateFillColor from '../utils/getStateFillColor'

export default function MapLayer({ data }) {
	return (
		<Layer
			id={data.id}
			type='fill'
			source={data.id}
			paint={{
				'fill-color': getStateFillColor(data.properties.name),
				'fill-opacity': 0.8
			}}
		/>
	)
}
