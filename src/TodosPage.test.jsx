import { shallow } from 'enzyme';
import * as React from 'react';
import TodosPage from './TodosPage';

describe('Todos page', () => {
  it('renders', () => {
    const component = shallow(<TodosPage />);
    expect(component.exists()).toBe(true);
  });
});
