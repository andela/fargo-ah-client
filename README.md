[![CircleCI](https://circleci.com/gh/andela/fargo-ah-client.svg?style=svg)](https://circleci.com/gh/andela/fargo-ah-client)
[![Test Coverage](https://api.codeclimate.com/v1/badges/97749a1675afdf06da0e/test_coverage)](https://codeclimate.com/github/andela/fargo-ah-client/test_coverage)

[CLIENT] Authors Haven - A Social platform for the creative at heart.

## Table of Contents

- [Vision](#vision)
- [Setup](#setup)
  - [Dependencies](#dependencies)
  - [Getting Started](#getting-started)
- [Description of Features](#description-of-features)
- [Testing](#testing)
- [Building](#building)
- [Acknowledegement](#acknowledegement)


## Vision
Create a community of like minded authors to foster inspiration and innovation
by leveraging the modern web.

## Setup

### Dependencies

List of libraries, tools, etc needed (e.g. yarn, node.js, python, etc)

- [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Node.js](https://nodejs.org/en/) - A JavaScript runtime environment
- [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps
- A package manager - [[NPM](https://www.npmjs.com/)

### Getting Started

- Clone the repo - `git clone https://github.com/andela/fargo-ah-client.git`
- Change into the project directory
- Install project dependencies run `npm install`
- Run the server `npm start`

## Description of Features
### Users can sign up and sign in
- A user can register on the application by providing his/her username, email and password
- A user can login in after he/she is registered by providing his/her registered email and password

  #### Local log in and register View
  ![image](https://user-images.githubusercontent.com/31984004/46072908-7b62a280-c17b-11e8-8594-67b7375bb878.png)


### Users can sign in with google and facebook
- A user can be authenticated with Google or Facebook and then sign in with any of them.

  #### Social Login View
 ![image](https://user-images.githubusercontent.com/31984004/46072871-58d08980-c17b-11e8-8968-93d54f1e2eea.png)

### Users can create articles
- A logged in user can create articles
- A user can create articles by clicking on the 'engage' button or 'become a member' button when not logged in, inorder to log in.
- A user can create articles by cliking on the 'tell a story button' when logged in.
 
 #### Create Article View
  ![image](https://user-images.githubusercontent.com/31984004/46072953-99c89e00-c17b-11e8-8c02-9da7a0c4ad9d.png)

### Users can create  paid articles
- A user can create paid articles when logged in
- A user can create paid articles by clicking on the 'premium' radio button after writing the article before publishing it.
  
  #### Paid Article View
  ![image](https://user-images.githubusercontent.com/31984004/46072953-99c89e00-c17b-11e8-8c02-9da7a0c4ad9d.png)

### Users can edit article
- A logged in user can edit only articles written by him/her
- A logged in user can edit articles by clicking on the edit button in the 'view single article page'
  

### Users can delete article
- A logged in user can delete only articles written by him/her
- A logged in user can edit articles by clicking on the delete button in the 'view single article page' 

### Users can view article
- A logged in user can view an article
- A user that is not logged in can view an article
- A user can view article by clicking on any article card on the home page
  
  #### View Article View
 ![image](https://user-images.githubusercontent.com/31984004/46072982-afd65e80-c17b-11e8-89ad-7ed3974b5011.png)

### Users can view profile
- A user that is logged in can view profile page
- A user can view their profile by clicking on the avatar at the right corner of the header on the home page or by clicking on their avatar in an article card
- A user can view other users profile by clicking on the users avatar in an article card
   
   #### View Profile View (Account Owner)
   ![image](https://user-images.githubusercontent.com/31984004/46073079-e01dfd00-c17b-11e8-9149-0e2170b8f18e.png)

   #### View Profile View
   ![image](https://user-images.githubusercontent.com/31984004/46073112-f3c96380-c17b-11e8-9298-b07f1ca6d3fa.png)



### Users can edit profile
- A logged in user can only edit his/her profile
- A user can edit his/her profile by clicking on the avatar on the article card which takes them to their profile page. Then he/she can click on the edit button on the page

  #### Edit Profile View
   ![image](https://user-images.githubusercontent.com/31984004/46073149-06dc3380-c17c-11e8-8b00-bf80b485660c.png)

### Users can tag articles
- A logged in user can tag can tag an article written by him/her
- A logged in user can tag an article by inputing tags into the tag input field in the create article page
  

### Users can comment on articles
- A logged in user can comment on articles
- A logged in user comments on articles by writing on the create a comment input field on the create article page and then clicking on commit 
- A user can reply a comment of another user
- The author of an article can comment on the article

### Users can follow and unfollow other users
- A logged in user can follow other users
- A logged in user can unfollow other users
- A logged in user can follow or unfollow other users by clicking on the follow button or the unfollow button in the user's profile they intend to either follow or unfollow

### Users can like articles
- A logged in user can like and unlike an article 
- A Logged in user can like an article by clicking on the like button the the view article page

### User that have created articles can view their dash board
- A logged in user who has created atleast an article can view articles details on their dash board
- A looged in user can view their dash board by clicking on the avatar at the right corner of the header on the home page and then clicking on the dashbord link on the drop down
  #### Dash Board View
  ![image](https://user-images.githubusercontent.com/31984004/46073427-c5985380-c17c-11e8-8763-49554cf9ccdd.png)

  
### User can search for articles by category and Title
- A user can search for an article whether he/she is logged in or not
- A user can search for an article by clicking on the search icon on the home page
   #### Dash Board View
   ![image](https://user-images.githubusercontent.com/31984004/46073475-e496e580-c17c-11e8-8a04-6fefa9cd9e49.png)


## Testing

- Run `npm test` on the terminal to run test

## Building

- Run `npm build` on the terminal to build theapp for production to the build folder.

## Acknowledegement

Our gratitude goes to Andela and the amazing team mates of Fargo for making this possible.