import React from 'react';
import Headers from './Headers';
import Article from './Article';
import Footer from './Footer';

function App (props) {
  return (
    <div className='d-flex'>
        <Headers />

        <div className='d-flex flex-column mt-5 ms-4'>
          <Article />
          <Footer />
        </div>
        
    </div>    
  );
};

export default App;
