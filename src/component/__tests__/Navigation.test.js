import React from 'react';
import { render } from '@testing-library/react';
import { Navigation } from '../Navigation';

describe('Navigation', () => {
  it('renders logo', () => {
    const { getByAltText } = render(<Navigation />);

    let alt = getByAltText('logo');
    expect(alt).toBeInTheDocument();
  });
  it('renders users avatar', () => {
    const { getByAltText } = render(<Navigation />);

    let alt = getByAltText('avatar');
    expect(alt).toBeInTheDocument();
  });
});
