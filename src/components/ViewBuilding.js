import React from 'react';

class ViewBuilding extends React.Component {

	render() {
		const { data, selectedBuilding } = this.props

			const {code, name, coordinates, address} = data[selectedBuilding];

			const building = (
					<li key = {selectedBuilding}>
					<li> Code: {code} </li>
					<li> Name: {name} </li>
					<li> Coordinates:
							{coordinates &&
								<u1>
									<li> Latitude: {coordinates.latitude} </li>
									<li> Longitude: {coordinates.longitude} </li>
								</u1>
							}
					</li>
					<li> Address: {address} </li>
				</li>
			)

		return (
			<div><p>{' '}<i>Click on a name to view more information</i>{building}</p></div>
		);
	}
}
export default ViewBuilding;

//Captured building ID to look-up the additional information for the building
//Return additional details of the building to be rendered on the screen for the user
