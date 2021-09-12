// import react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    return <div>Hi There!</div>;
};

// Take react component and show it
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);