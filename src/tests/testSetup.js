// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

class File {
  constructor(fileType, fileName, configObject) {
    this.fileName = fileName;
    this.fileType = fileType;
    this.configObject = configObject;
  }

  click() {
    return this.fileName;
  }
}
class FileReader {
  constructor(fileType, fileName, configObject) {
    this.fileName = fileName;
    this.fileType = fileType;
    this.configObject = configObject;
  }

  readAsDataURL() {
    return this.fileName;
  }
}
global.FileReader = FileReader;
global.File = File;
