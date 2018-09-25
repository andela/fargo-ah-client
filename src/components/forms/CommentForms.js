import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, TextArea } from 'semantic-ui-react';
import Button from '../Button';

class CommentForm extends Component {
  state = {
    comment: {
      body: '',
    },
  };

  onChange = (e) => {
    this.setState({
      comment: {
        [e.target.name]: e.target.value,
      },
    });
  }

  submit = (e) => {
    e.preventDefault();
    const { handleSubmit, commentId } = this.props;
    handleSubmit(this.state, commentId)
      .then(() => {
        this.setState({
          comment: {
            body: '',
          },
        });
      });
  }

  render() {
    const {
      type,
      btnText,
      position,
      size,
      disabled,
    } = this.props;
    const { comment } = this.state;
    return (
      <Form onSubmit={this.submit}>
        <Form.Field>
          <TextArea autoHeight placeholder={`Add a ${type}`} name="body" onChange={this.onChange} value={comment.body} rows={1} />
        </Form.Field>
        <Form.Field>
          <Button
            disabled={disabled}
            floated={position}
            className="comment-btn"
            size={size}
            text={btnText}
            type="submit"
          />
        </Form.Field>
      </Form>
    );
  }
}

CommentForm.defaultProps = ({
  commentId: 0,
  disabled: true,
});

CommentForm.propTypes = {
  type: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  commentId: PropTypes.number,
};

export default CommentForm;
