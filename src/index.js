import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from "F:/e-commerce/src/Components/redux/slices/store.js"
import {Provider} from "react-redux"
// import { initialState } from './reducer';
// {/* <StateProvider initialState={initialState}>{/* </StateProvider> */} */}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store} >
    <App />
    </Provider>  
);
