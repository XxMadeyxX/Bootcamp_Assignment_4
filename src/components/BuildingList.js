import React from 'react';

class BuildingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate } = this.props;

		const buildingList = data
			.filter(directory => {
				// remove names that do not match current filter text
				return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			})
			.map(directory => {
				return (
					<tr key={directory.id}
						onClick = {() => selectedUpdate(directory.id - 1)}>
						<td>{directory.code} </td>
						<td onClick = {()=> this.props.onSelectBuilding(directory.id)}> {directory.name} </td>
					</tr>
				);
		});

		return <div><p> Search results for: {this.props.filterText} </p><u1>{buildingList}</u1></div>;
	}
}
export default BuildingList;

//Create an onClick listener action that will allow you to click on a building name and capture the ID
