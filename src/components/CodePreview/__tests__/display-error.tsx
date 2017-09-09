import * as React from 'react';
import { shallow } from 'enzyme';

import DisplayError from '../display-error';

test('it renders an error', () => {
  const wrapper = shallow(<DisplayError error={{
    name: 'hello-world'
  }} errorInfo={{
    componentStack: 'asdf'
  }}/>);

  console.log(wrapper.html());
});
