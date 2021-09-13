// import react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';


function getButtonText() {
    return 'Click on me!';
}
// Create a react component
const App = () => {
    return (
        <div>
            <label className="label" for="name">Enter Name:</label>
            <input id="name" type="text "/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {getButtonText()}
            </button>
        </div>
    );
};

// Take react component and show it
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);