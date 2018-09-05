import React from 'react';

const FooterSlim = () => (
  <div>
    <div className="ui inverted horizontal footer segment footercolour footer2">
      <p className="footer2-text">
      Copyright &copy;
        {' '}
        { new Date().getFullYear() }
        {' '}
All rights reserved | Made with
        <i className="heart outline icon footer2-heart-icon" />
        by TeamFargo
      </p>
    </div>
  </div>
);

export default FooterSlim;
