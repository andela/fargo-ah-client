import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Form,
  Button,
  Image,
  Dimmer,
  Loader,
} from 'semantic-ui-react';
import FormField from '../components/forms/FormFieldComponents';
import Header from '../components/Header/HeaderComponent';
import editAction from '../redux/actions/editAction';

export class EditProfile extends React.Component {
  state = {
    user: {
      firstname: '', lastname: '', username: '', bio: '',
    },
    errors: {
      Username: '', Firstname: '', Lastname: '', Bio: '',
    },
    loading: false,
    image: {
      path: 'https://res.cloudinary.com/blackincode/image/upload/v1536160812/download_dfarj8.png',
      data: '',
    },
  }

  fileReader = new FileReader();

  fileInput = null;

  componentDidMount = () => {
    const { user, image } = this.state;
    const { currentUser } = this.props;
    const { detail } = currentUser;
    this.setState({
      user: {
        ...user,
        ...detail,
      },
    });
    if (detail && detail.image !== null) this.setState({ image: { ...image, path: detail.image } });
    this.fileReader.onloadend = () => {
      /* eslint-disable no-shadow */
      const { image } = this.state;
      this.setState({ image: { ...image, path: this.fileReader.result } });
      /* eslint-enable no-shadow */
    };
    return this.fileReader;
  }

  onChange = (e) => {
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [e.target.name]: e.target.value,
      },
      errors: {
        Username: '', Firstname: '', Lastname: '', Bio: '',
      },
    });
  }

  openImageDialog = () => {
    this.fileInput.click();
  }

  onImageChange = (e) => {
    const { image } = this.state;
    this.setState({ image: { ...image, data: e.target.files[0] } });
    this.fileReader.readAsDataURL(e.target.files[0]);
  }

   onSubmit = () => {
     const { editProfileAction, history } = this.props;
     const { user, errors, image } = this.state;
     this.setState({ loading: true });
     editProfileAction(user, image.data)
       .then(() => {
         this.setState({
           loading: false,
         });
         history.push(`/profiles/${user.username}`);
       })
       .catch((err) => {
         this.setState({ loading: false });
         Object.keys(errors).forEach((key) => {
           if (err.response.data.errors.error[0].indexOf(key) !== -1) {
             this.setState({ errors: { ...errors, [key]: err.response.data.errors.error[0] } });
           }
         });
       });
   }

  fileRef = (element) => {
    this.fileInput = element;
  }

  render() {
    const {
      user, errors, image, loading,
    } = this.state;
    const {
      firstname, lastname, username, bio,
    } = user;
    const { location, currentUser, history } = this.props;
    return (
      <div id="editpage-wrapper">
        <Dimmer page active={loading}>
          <Loader>Processing</Loader>
        </Dimmer>
        <Header text="Home" history={history} user={currentUser} pathname={location.pathname} />
        <div id="editpage">
          <div id="profile-div">
            <Image size="medium" circular src={image.path || image} />
            <Button id="edit-pic-btn" className="btn" onClick={this.openImageDialog}>
                Change picture
            </Button>
            <input
              type="file"
              ref={this.fileRef}
              onChange={this.onImageChange}
              hidden
            />
          </div>
          <h2> Edit Profile</h2>
          <Form className="innerForm" size="large" onSubmit={this.onSubmit}>
            {FormField('text', 'firstname', this.onChange, firstname, 'firstname', 'Firstname:', errors.Firstname)}
            {FormField('text', 'lastname', this.onChange, lastname, 'lastname', 'Lastname:', errors.Firstname)}
            {FormField('text', 'username', this.onChange, username, 'username', 'Username:', errors.Username, false, true)}
            {FormField('text', 'bio', this.onChange, bio, 'About your self', 'Bio:', errors.Bio, true)}
            <Button className="btn" type="submit">
                Update
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
EditProfile.defaultProps = {
  currentUser: {},
};

EditProfile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  location: PropTypes.shape().isRequired,
  editProfileAction: PropTypes.func.isRequired,
  currentUser: PropTypes.shape(),

};
const mapStateToProps = ({ currentUser }) => ({
  currentUser,
});

export default connect(mapStateToProps, { editProfileAction: editAction })(EditProfile);
