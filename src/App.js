import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './Header.jsx';
import './scss/styles.scss';
import { IconTabs } from './components/TabComponents'

class App extends React.Component {
    render() {
        return ( <div>
            <div><Header /></div>
            <div><IconTabs /></div>
        </div>);
    }
}

ReactDOM.render(<App name="Sangeeth" />, document.getElementById("app"));