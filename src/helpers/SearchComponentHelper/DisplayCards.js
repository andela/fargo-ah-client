import React from 'react';
import { Loader } from 'semantic-ui-react';

const showLoader = (loading) => {
  let cardsToBeDisplayed;
  if (loading) {
    cardsToBeDisplayed = (<Loader active inline="centered" />);
  }
  return cardsToBeDisplayed;
};

export default showLoader;
