import React from 'react'
import { Layer } from '@urbica/react-map-gl'

import getStateFillColor from '../utils/getStateFillColor'

export default function MapLayer({ data }) {
	return (
		<>
			<Layer
				id={data.id + '-color'}
				type='fill'
				source={data.id}
				paint={{
					'fill-color': getStateFillColor(data.properties.name),
					'fill-opacity': 0.8
				}}
			/>
			<Layer
				id={data.id + '-text'}
				type='symbol'
				source={data.id}
				layout={{
					'text-field': data.properties.text.toString(),
					'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
					'text-size': 12
				}}
			/>
		</>
	)
}
