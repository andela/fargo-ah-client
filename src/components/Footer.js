import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div>
    <div className="ui inverted vertical footer segment footercolour">
      <div className="ui aligned container padding-10">
        <div className="ui stackable inverted divided equal height stackable grid padding-10">
          <div className="smally-grid">
            <div className="five wide column center">
              <div className="thegridclass">
                <div className="ui inverted link list" id="categorylist">
                  <Link to="/articles" className="item footertext">Technologies</Link>
                  <Link to="/articles" className="item footertext">Politics</Link>
                  <Link to="/articles" className="item footertext">Sports</Link>
                  <Link to="/articles" className="item footertext">Entertainment</Link>
                  <Link to="/articles" className="item footertext">Culture</Link>
                  <Link to="/articles" className="item footertext">Opinion</Link>
                  <Link to="/articles" className="item footertext">Economy</Link>
                </div>
              </div>
            </div>
            <div className="six wide column center">
            <div className="thegridclass2">
              <div className="ui inverted link list">
                <Link to="./articles" className="item footertext">Featured Stories</Link>
                <Link to="./articles" className="item footertext">Top Stories</Link>
                <Link to="./articles" className="item footertext">Most Popular Stories</Link>
              </div>
            </div>
          </div>
          </div>
          <div className="five wide column center aligned" id="smally">
            <div className="mm">
              <Link to="/articles" className="socialicon">
                {' '}
                <i className="facebook square icon" />
                {' '}
              </Link>
              <Link to="/articles" className="socialicon">
                {' '}
                <i className="twitter up icon" />
                {' '}
              </Link>
              <Link to="/articles" className="socialicon">
                {' '}
                <i className="google plus square icon" />
                {' '}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default Footer;
