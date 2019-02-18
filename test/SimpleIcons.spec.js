import React from 'react';
import { shallow } from 'enzyme';
import simpleIcons from 'simple-icons';

import SimpleIcon from '../src/SimpleIcon';

describe('SimpleIcon', () => {
  it('should use default icon color when there is no custom color prop', () => {
    const wrapper = shallow(<SimpleIcon name="React" />);
    const reactIconColor = `#${simpleIcons['React'].hex}`;

    expect(wrapper.find('div').prop('style').color).toBe(reactIconColor);
  })

  it('should get a custom color as a prop', () => {
    const wrapper = shallow(<SimpleIcon name="React" color="#a3b8f3" />);
    expect(wrapper.find('div').prop('style').color).toBe('#a3b8f3');
  });
  
  it('should return null when there is no matching name of an icon', () => {
    const wrapper = shallow(<SimpleIcon name="Not Existing" />);
    expect(wrapper.type()).toEqual(null);
  });
})
