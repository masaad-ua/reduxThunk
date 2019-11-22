import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ItemList from './components/itemList'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

class App extends Component {
    static propTypes = {};

    render() {
        return (
            <Prvider store={store}>
                <div>
                    <ItemList/>
                </div>
            </Prvider>

        )
    }
}

export default App