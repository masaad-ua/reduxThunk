import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { downloadUsers} from '../ducks/ducksListOfUsers';


class ListOfUsers extends Component{
	static propTypes = {};

    componentDidMount(){

        this.props.downloadUsers();
    }

    render(){
        console.log(this.props);
		return(
			<div>
				<p>Hello world!</p>
			</div>
		)
	}
}

const  mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        downloadUsers: (url) => dispatch(downloadUsers())
    };
};


export default connect((state)=>{
	return {
		users: state.payload
	}
},mapDispatchToProps )(ListOfUsers)