import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * Interesting stuff to do:
 *
 * - Add zoom with the scroll wheel 
 * - Add Panning movement
 * - Merge Geometries into a single buffer
 * - Turn them into boxes
 * - Add a basic light source
 *
 * - Add a transformation matrix to each VertexArrayGeometry and also
 *    - Make them move
 *    - Change color dinamically
 *    - Change size
 * 
 * - Implement color picking
 *
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
