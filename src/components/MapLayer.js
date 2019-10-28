import React from 'react'
import { Layer } from '@urbica/react-map-gl'

export default function MapLayer({ data }) {
	const { name, bgColor, textColor, text } = data.properties
	return (
		// 'source' have to be the same of all Layer
		<>
			{bgColor && (
				<Layer
					id={data.id + '-color'}
					type='fill'
					source={data.id}
					paint={{
						'fill-color': bgColor,
						'fill-opacity': 1
					}}
				/>
			)}
			{text && (
				<Layer
					id={data.id + '-text'}
					type='symbol'
					source={data.id}
					layout={{
						'text-field': `${text.toString()}\n${name.toString()}`,
						'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
						'text-size': 14
					}}
					paint={{ 'text-color': textColor ? textColor : '#000' }}
				/>
			)}
		</>
	)
}
