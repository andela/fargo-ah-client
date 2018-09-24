import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header/HeaderComponent';
import FooterSlim from '../components/FooterSlim';
import Footer from '../components/Footer';
import Profile from '../components/ProfileBody';
import profileAction from '../redux/actions/profile';

const ProfileView = ({ detail, history: { location } }) => (
  <div>
    <Header text="Home" pathname="/login" />
    <Profile detail={detail} history={location.pathname} />
    <Footer />
    <FooterSlim />
  </div>
);

ProfileView.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = ({ currentUser }) => {
  const detail = currentUser;
  return detail;
};

const mapActionToProps = {
  profileAction,
};

ProfileView.propTypes = {
  // resetPasswordAction: PropTypes.func.isRequired,
  // message: PropTypes.string.isRequired,
  // errors: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapActionToProps)(ProfileView);
