import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ItemList from './components/itemList'
import ListOfUsers from './components/listOfUsers'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

class App extends Component {
    static propTypes = {};

    render() {
        return (
            <Provider store={store}>
                <div>
                    <ItemList/>
                </div>
                <div>
                    <ListOfUsers/>
                </div>
            </Provider>

        )
    }
}

export default App