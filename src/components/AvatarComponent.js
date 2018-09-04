import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import '../styles/headCard.scss';

class Avatar extends React.Component {
  state = {
    src: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8bb0f429fa983025b80205fa3dd0f1bf&auto=format&fit=crop&w=800&q=60',
    username: 'klevaman',
  }

  render() {
    return (
      <div>
        <img alt="" className="logo" src={this.state.src} />


      </div>
    );
  }
}
