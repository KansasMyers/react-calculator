import React from 'react';
import ReactDom from 'react-dom';

import CalculatorService from '../service/calculator.service';

describe('test the CalculatorService', () => {
  const [calculate, concatNumber, Op] = CalculatorService();

  it('ensure that 5 + 5 = 10', () => {
    let sum = calculate(5, 5, Op.SUM);

    expect(sum).toEqual(10);
  });

  it('ensure that 4 - 5 = -1', () => {
    let sub = calculate(4, 5, Op.SUB);

    expect(sub).toEqual(-1);
  });

  it('ensure that 2 * 0 = 0', () => {
    let mul = calculate(2, 0, Op.MUL);

    expect(mul).toEqual(0);
  });
  
  it('ensure that 5 / 5 = 1', () => {
    let div = calculate(5, 5, Op.DIV);

    expect(div).toEqual(1);
  });

  it('return 0 for undefined operation', () => {
    let und = calculate(0, 0, '%');

    expect(und).toEqual(0);
  });
});