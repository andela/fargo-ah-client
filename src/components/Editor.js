import React from 'react';
import { Editor } from '@tinymce/tinymce-react';


// Import TinyMCE
import tinymce from 'tinymce/tinymce';

// A theme is also required
import 'tinymce/themes/modern/theme';
import 'tinymce/themes/inlite/theme';

// // Any plugins you want to use has to be imported
// import 'tinymce/plugins/paste';
// import 'tinymce/plugins/link';
// import 'tinymce/plugins/image';
// import 'tinymce/plugins/code';
// import 'tinymce/plugins/advlist';
// import 'tinymce/plugins/lists';
// import 'tinymce/plugins/autolink';
// import 'tinymce/plugins/charmap';
// import 'tinymce/plugins/print';
// import 'tinymce/plugins/anchor';
// import 'tinymce/plugins/searchreplace';
// import 'tinymce/plugins/visualblocks';
// import 'tinymce/plugins/preview';
// import 'tinymce/plugins/fullscreen';
// import 'tinymce/plugins/insertdatetime';
// import 'tinymce/plugins/media';
// import 'tinymce/plugins/contextmenu';
// import 'tinymce/plugins/codesample';
// import 'tinymce/plugins/imagetools';
// import 'tinymce/plugins/wordcount';
// import 'tinymce/plugins/table';


const dfreeHeaderConfig = {
  selector: 'textarea#title',
  menubar: false,
  inline: true,
  // theme: 'inlite',
  insert_toolbar: 'undo redo',
  selection_toolbar: 'italic underline',
};

const dfreeBodyConfig = {
  selector: '.body',
  menubar: false,
  inline: true,
  theme: 'inlite',
  plugins: [
    'autolink',
    'codesample',
    'contextmenu',
    'link',
    'lists',
    'media mediaembed',
    'powerpaste',
    'table',
    'textcolor',
    'image',
  ],
  toolbar: [
    'undo redo | bold italic underline | fontselect fontsizeselect',
    'forecolor backcolor | alignleft aligncenter alignright alignfull | link unlink | numlist bullist outdent indent',
  ],
  insert_toolbar: 'quicktable image',
  selection_toolbar: 'bold italic | h2 h3 | blockquote quicklink',
  contextmenu: 'inserttable | cell row column deletetable',
  powerpaste_word_import: 'clean',
  powerpaste_html_import: 'clean',
};


class TinyEditor extends React.Component {
  componentDidMount() {
    // Initialize the app
    tinymce.init(dfreeBodyConfig);
    // tinymce.init({
    //   selector: 'textarea',
    //   // menubar: false,
    //   height: 500,
    //   plugins: [
    //     'advlist autolink lists link image charmap print preview anchor',
    //     'searchreplace visualblocks code fullscreen',
    //     'insertdatetime media table contextmenu paste imagetools wordcount',
    //   ],
    //   toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image ',
    //   content_css: [
    //     '//fonts.googleapis.com/css?family=Raleway:300,300i,400,400i',
    //   ],
    // });
  }

  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }

  render() {
    return (
      <textarea
        // initialValue="<p>This is the initial content of the editor</p>"
        // init={{
        //   plugins: 'link image code',
        //   toolbar: 'undo redo | styleselect | bold italic | link image | alignleft aligncenter alignright | code',
        // }}
        // init={dfreeBodyConfig}
        className="body"
        onChange={this.handleEditorChange}
      />
    );
  }
}

export default TinyEditor;
