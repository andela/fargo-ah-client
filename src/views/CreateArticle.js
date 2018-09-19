import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Divider, Grid, Checkbox, Form, Input,
} from 'semantic-ui-react';
import { Editor } from '@tinymce/tinymce-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '../components/Button';
import articleAction from '../redux/actions/articleAction';
import '../styles/index.scss';

import 'tinymce/themes/modern/theme';
import 'tinymce/themes/inlite/theme';

// Any plugins you want to use has to be imported
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/code';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/print';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/media';
import 'tinymce/plugins/contextmenu';
// import 'tinymce/plugins/codesample';
import 'tinymce/plugins/imagetools';
import 'tinymce/plugins/textcolor';
import 'tinymce/plugins/table';

const titleConfig = {
  menubar: false,
  inline: true,
  theme: 'inlite',
  insert_toolbar: 'undo redo',
  selection_toolbar: 'italic underline',
};

const bodyConfig = {
  menubar: false,
  inline: true,
  height: 300,
  max_height: 500,
  theme: 'inlite',
  plugins: [
    'autolink',
    // 'codesample',
    'contextmenu',
    'link',
    'lists',
    'media',
    'table',
    'textcolor',
    'image',
  ],
  toolbar: [
    'undo redo | bold italic underline | fontselect fontsizeselect',
    'forecolor backcolor | alignleft aligncenter alignright alignfull | link unlink | numlist bullist outdent indent',
  ],
  insert_toolbar: 'quickimage quicktable',
  selection_toolbar: 'bold italic | h2 h3 | blockquote quicklink quickimage | forecolor backcolor | alignleft aligncenter alignright alignfull | link unlink | numlist bullist outdent indent',
  contextmenu: 'inserttable | cell row column deletetable',
  powerpaste_word_import: 'clean',
  powerpaste_html_import: 'clean',
};


export class CreateArticle extends Component {
  state= {
    titleEditor: '',
    bodyEditor: '',
    tagList: '',
    categorylist: '',
    imageData: '',
    isPaidFor: '',
    price: '',
  }

  handleTitleEditor = (editor) => {
    this.setState({ titleEditor: editor.getContent() });
    return true;
  }

  handleBodyEditor = (editor) => {
    this.setState({ bodyEditor: editor.getContent() });
    return true;
  }

     handleCreateArticle = (e) => {
       e.preventDefault();
       this.props.articleAction(this.state, this.props.history);
     }

     render() {
       const { titleEditor } = this.state;
       const { bodyEditor } = this.state;
       console.log(bodyEditor, 'render part');
       return (
         <div>
           {/* <HeaderComponent text="home" user={user} pathname="/" /> */}
           <Grid container centered stackable className="layout">
             <Form onSubmit={this.handleCreateArticle}>
               <Grid.Row>
                 <Grid.Column column={12}>
                   <Grid.Row>
                     <Editor
                       onChange={this.handleTitleEditor}
                       initialValue={titleEditor}
                       init={titleConfig}
                    // value={titleEditor}
                       ref={this.setEditorRef}
                     />
                     <Divider />
                     <span className="image-button">
                       <label htmlFor="image">
                    Add Image
                         <input
                           placeholder="Add Image"
                           id="image"
                           accept="image/*"
                           type="file"
                           className="input"
                         />
                       </label>
                     </span>
                     <Editor
                       onChange={this.handleBodyEditor}
                       initialValue={bodyEditor}
                       className="text-body"
                       init={bodyConfig}
                       placeholder="Share your story with the world"
                       style={
                {
                  minHeight: 100,
                }}
                       rows="0"
                     />
                   </Grid.Row>
                   <Grid.Row>
                     <div className="header">
                       <p>Let the world know where to look, Tag your story</p>
                       <Input fluid="true" />
                     </div>
                   </Grid.Row>
                   <Grid stackable>
                     <Grid.Row columns={3} className="ce">
                       <Grid.Column>
                         <Checkbox label="Free for all" />
                         <Checkbox label="Premuim" />
                       </Grid.Column>
                       <Grid.Column>
                         <p>Min: $0.28    Max: $5.53</p>
                         <input type="number" className="text-body" id="price" placeholder="Write Price Here" />
                       </Grid.Column>
                       <Grid.Column>
                         <div className="options">
                           <div>
                             <Button size="tiny" text="Save as Draft" />
                           </div>
                           <div>
                             <Button type="submit" size="tiny" text="Publish" />
                           </div>
                         </div>
                       </Grid.Column>
                     </Grid.Row>
                   </Grid>
                 </Grid.Column>
               </Grid.Row>
             </Form>
           </Grid>
           {/* <FooterSlim /> */}
         </div>
       );
     }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  articleAction,
}, dispatch);

const mapStateToProps = state => ({
  articleDetail: state.createdArticle,
});

CreateArticle.propTypes = {
  articleDetail: PropTypes.objectOf(PropTypes.object).isRequired,
  articleAction: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);
