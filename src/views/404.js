import React from 'react';
import { Message, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/HeaderComponent';
import FooterSlim from '../components/FooterSlim';


const Forbidden = () => (
  <div id="success">
    <Header text="Home" pathname="/" />
    <Container style={{ marginTop: '300px' }}>
      <Message negative style={{ textAlign: 'center' }}>
        <Message.Header style={{ textAlign: 'center' }}>
          <p>
            Oops, Sorry We could not find what you are looking for.
          </p>
        </Message.Header>
        <Message.Content>
          <p>
            You might want to go to our
            {' '}
            {<Link to="/">Homepage</Link>}
          </p>

        </Message.Content>
      </Message>
    </Container>
    <FooterSlim />
  </div>
);

export default Forbidden;
