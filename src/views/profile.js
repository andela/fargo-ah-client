import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header/HeaderComponent';
import FooterSlim from '../components/FooterSlim';
import Footer from '../components/Footer';
import Profile from '../components/ProfileBody';
import userprofileAction from '../redux/actions/profile';
import userProfileArticles from '../redux/actions/userArticles';

export const ProfileView = ({
  detail, profileAction, userArticles, profile, history, history: { location },
}) => (
  <div>
    <Header text="Home" history={history} user={detail} pathname="/login" />
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

export const mapStateToProps = ({ currentUser, userProfile }) => (
  {
    detail: currentUser,
    profile: userProfile,
  }
);

const mapActionToProps = {
  profileAction: userprofileAction,
  userArticles: userProfileArticles,
};

ProfileView.propTypes = {
  state: PropTypes.shape({
    isUser: PropTypes.bool.isRequired,
    hasArticles: PropTypes.bool.isRequired,
  }).isRequired,
  userArticles: PropTypes.shape({
  }).isRequired,
  detail: PropTypes.shape({
    image: PropTypes.string.isRequired,
  }).isRequired,
  profile: PropTypes.shape({
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  profileAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapActionToProps)(ProfileView);
