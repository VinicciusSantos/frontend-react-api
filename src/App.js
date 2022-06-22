import React from 'react';
import Headers from './Headers';
import Article from './Article';
import Footer from './Footer';

function App (props) {
  return (
    <div className='d-flex'>
        <Headers />
        <Article />
        <Footer />
    </div>    
  );
};

export default App;
