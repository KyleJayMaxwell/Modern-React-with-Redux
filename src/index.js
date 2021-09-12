// import react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    return (
        <div>
            <label class="label" for="name">Enter Name:</label>
            <input id="name" type="text "/>
            <button style="background-color: blue; color: white;">Submit</button>
        </div>
    );
};

// Take react component and show it
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);