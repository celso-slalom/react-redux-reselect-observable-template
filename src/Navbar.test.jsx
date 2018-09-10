import { shallow } from 'enzyme';
import * as React from 'react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders', () => {
    const component = shallow(<Navbar />);
    expect(component.exists()).toBe(true);
  });
});
