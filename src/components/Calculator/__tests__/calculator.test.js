import React from 'react';
import ReactDOM from 'react-dom';

import Calculator from '..';

import { render, fireEvent } from '@testing-library/react';

describe('test Calculator component', () => {

  it('render without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calculator />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('clear the number field', () => {
    const { getByTestId, getByText } = render(<Calculator />);

    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('C'));

    expect(getByTestId('txtNumbers')).toHaveValue('0');
  });

  it('2 + 5 = 7', () => {
    const { getByTestId, getByText } = render(<Calculator />);

    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('='));

    expect(getByTestId('txtNumbers')).toHaveValue('7');
  });

  it('2.5 + 1 = 3.5', () => {
    const { getByTestId, getByText } = render(<Calculator />);

    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('='));

    expect(getByTestId('txtNumbers')).toHaveValue('3.5');
  });

  it('5 - 7 = -2', () => {
    const { getByTestId, getByText } = render(<Calculator />);

    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('7'));
    fireEvent.click(getByText('='));

    expect(getByTestId('txtNumbers')).toHaveValue('-2');
  });

  it('3 * 2 = 6', () => {
    const { getByTestId, getByText } = render(<Calculator />);

    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));

    expect(getByTestId('txtNumbers')).toHaveValue('6');
  });

  it('3 / 2 = 1.5', () => {
    const { getByTestId, getByText } = render(<Calculator />);

    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));

    expect(getByTestId('txtNumbers')).toHaveValue('1.5');
  });

});