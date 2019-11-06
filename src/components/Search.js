import React from 'react';

class Search extends React.Component {
	filterUpdate() {
		//Capture the text that is typed into the textbox and store this value
		//Here you will need to update the value of the filter with the value from the textbox
		this.props.filterUpdate(this.filterText.value)
	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange listener function value for the input tag to capture the textbox value
		const {filterVal, filterUpdate} = this.props
		return (
			<form>
				<input type="text"
				minlength="1"
				ref={ (value) => {this.filterText = value}}
				placeholder="Type to search for a building..."
				onChange= {this.filterUpdate.bind(this)}
				/>
			</form>
		);
	}
}
export default Search;
