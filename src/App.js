const React = require('react');
const ReactDOM = require("react-dom");

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Hello {this.props.name}</h1>
            </div>)
    }
}

ReactDOM.render(<App name="Sangeeth" />, document.getElementById("app"));