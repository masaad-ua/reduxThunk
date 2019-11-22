import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { itemsFetchData } from '../ducks/items';

class ItemList extends Component {
    static propTypes = {};

    constructor(){
        super();
        this.state = {
            items: [],
            hasErrored: false,
            isLoading: false,
        };
    }

    componentDidMount(){
        this.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }

    render() {
        if(this.state.hasErrored){
            return <p>Sorry! There was an error loading the items</p>;
        }

        if(this.state.isLoading){
            return <p>Loading...</p>
        }

        return (
            <ul>
                {this.state.items.map((item)=>(
                    <li key={item.id}>
                        {item.label}
                    </li>
                ))}
            </ul>
        )
    }


    fetchData(url) {
        this.setState({ isLoading: true });

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                this.setState({ isLoading: false });

                return response;
            })
            .then((response) => response.json())
            .then((items) => this.setState({ items })) // ES6 property value shorthand for { items: items }
            .catch(() => this.setState({ hasErrored: true }));
    }
}


/*Но на самом деле, компонент не должен содержать в себе логику связанную
с получением данных и сами данные не должны храниться в состоянии компонента. Вот здесь то и приходит Redux.*/

export default ItemList