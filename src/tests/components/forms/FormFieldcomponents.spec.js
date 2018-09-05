import { shallow } from 'enzyme';
import sinon from 'sinon';
import FormField from '../../../components/forms/FormFieldComponents';

describe(' LoginModal component rendering', () => {
  const spy = sinon.spy();
  const actual = FormField('text', 'username', spy, 'username', 'Enter your username', 'Username:', 'Username is invalid');
  const wrapper = shallow(actual);

  it('Should render properly', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should handle and store the email input', () => {
    wrapper.find('#username').simulate('change', {
      target: { name: 'username', value: 'nwokeochavictor' },
    });
    expect(spy.called).toBe(true);
  });
});
