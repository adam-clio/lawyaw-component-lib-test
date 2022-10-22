import React from 'react';
import { Button } from './Button';
import { render } from '@testing-library/react';

describe('Button', () => {
  it('should work', () => {
    const rendered = render(<Button />);
    expect(rendered.baseElement.innerHTML).toMatchSnapshot();
  });
});
