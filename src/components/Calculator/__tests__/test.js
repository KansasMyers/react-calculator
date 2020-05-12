import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '..';

test('renders calculator', () => {
  const { getByText } = render(<Calculator />);
  const linkElement = getByText(/Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
