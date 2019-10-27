import React from 'react'
import MapGL from '@urbica/react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import keys from './config/keys'
import US_STATES_DATA from './data/us-states-data.json'
import MapLayer from './components/MapLayer'
import MapSource from './components/MapSource'
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
		// console.log(US_STATES_DATA)
		return (
			<MapGL
				style={{ width: '100vw', height: '100vh' }}
				mapStyle='mapbox://styles/mapbox/light-v9'
				accessToken={TOKEN}
				onViewportChange={this.onViewportChange}
				viewportChangeMethod='flyTo'
				{...viewport}
			>
				{Object.keys(US_STATES_DATA).map((stateName, i) => {
					const singleStateData = US_STATES_DATA[stateName]
					return (
						<React.Fragment key={'state-' + i}>
							<MapSource data={singleStateData} />
							<MapLayer data={singleStateData} />
						</React.Fragment>
					)
				})}
			</MapGL>
		)
	}
}

export default App
