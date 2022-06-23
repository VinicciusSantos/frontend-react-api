import React from 'react';
import { Container } from 'reactstrap';

const Article = (props) => {
  return (
    <div>
      <Container fluid>
        <h1 style={{fontSize:"40px"}}>Projetos</h1>
        <p className="lead col-4" style={{fontSize:"16px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Container>
    </div>
  );
};

export default Article;