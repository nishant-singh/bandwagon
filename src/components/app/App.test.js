import React from 'react';
import App from './App';

import { shallow } from 'enzyme';

describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);
    expect(component).toMatchSnapshot();
  });
});
