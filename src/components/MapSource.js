import React from 'react'
import { Source } from '@urbica/react-map-gl'

export default function MapSource({ data }) {
	return (
		<div>
			<Source id={data.id} type='geojson' data={data} />
		</div>
	)
}
