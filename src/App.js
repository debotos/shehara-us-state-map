import React from 'react'
import MapGL, { Source, Layer } from '@urbica/react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import keys from './config/keys'
import data from './us-states.json'
const { TOKEN, ZOOM } = keys

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			viewport: {
				latitude: 41.850033,
				longitude: -87.6500523,
				zoom: ZOOM
			}
		}
		this.onViewportChange = this.onViewportChange.bind(this)
	}

	onViewportChange(viewport) {
		// close everything when user is zooming out
		if (viewport.zoom < this.state.viewport.zoom) {
			this.setState({ popupInfo: null })
		}
		this.setState({ viewport })
	}

	render() {
		let { viewport } = this.state
		console.log(data)
		return (
			<MapGL
				style={{ width: '100vw', height: '100vh' }}
				mapStyle='mapbox://styles/mapbox/light-v9'
				accessToken={TOKEN}
				onViewportChange={this.onViewportChange}
				viewportChangeMethod='flyTo'
				{...viewport}
			>
				<Source id='maine' type='geojson' data={data} />
				<Layer
					id='maine'
					type='fill'
					source='maine'
					paint={{
						'fill-color': '#088',
						'fill-opacity': 0.8
					}}
				/>
			</MapGL>
		)
	}
}

export default App
