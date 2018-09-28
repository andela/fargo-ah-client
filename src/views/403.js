import React from 'react';
import { Message, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/HeaderComponent';
import FooterSlim from '../components/FooterSlim';


const Forbidden = () => (
  <div id="success">
    <Header text="Home" pathname="/" />
    <Container style={{ marginTop: '300px' }}>
      <Message negative>
        <Message.Header style={{ textAlign: 'center' }}>
          <p>
            Oops, Guess you need to
            {' '}
            {<Link to="/login">Login</Link>}
            {' '}
            to access this page!!!
          </p>
        </Message.Header>
      </Message>
    </Container>
    <FooterSlim />
  </div>
);

export default Forbidden;
