import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header/HeaderComponent';
import FooterSlim from '../components/FooterSlim';
import Footer from '../components/Footer';
import Profile from '../components/ProfileBody';
import profileAction from '../redux/actions/profile';
import userArticles from '../redux/actions/userArticles';

const ProfileView = ({
  detail,
  profileAction,
  userArticles,
  profile,
  history,
  history: { location },
}) => (
  <div>
    <Header text="Home" history={history} user={detail} pathname={location.pathname} />
    <Profile
      detail={detail}
      history={location.pathname}
      profileAction={profileAction}
      userArticles={userArticles}
      profile={profile}
    />
    <Footer />
    <FooterSlim />
  </div>
);

ProfileView.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = ({ currentUser, userProfile }) => (
  {
    detail: currentUser,
    profile: userProfile,
  }
);

const mapActionToProps = {
  profileAction,
  userArticles,
};

ProfileView.propTypes = {

};

export default connect(mapStateToProps, mapActionToProps)(ProfileView);
