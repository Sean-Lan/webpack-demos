import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello.jsx';
import Footer from './Footer.jsx';

main();

function main() {
  ReactDOM.render(
    <div>
      <Hello/>
      <Footer/>
    </div> , document.getElementById('app'));
}
