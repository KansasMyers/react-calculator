function CalculatorService () {
  const Op = {
    SUM: '+',
    SUB: '-',
    MUL: '*',
    DIV: '/'
  }

  function calculate (num1, num2, operation) {
    let result;

    switch (operation) {
      case Op.SUM:
        result = num1 + num2;
        break;
      case Op.SUB:
        result = num1 - num2;
        break;
      case Op.MUL:
        result = num1 * num2;
        break;
      case Op.DIV:
        result = num1 / num2;
        break;
      default:
        result = 0;
    }

    return result;
  }

  function concatNumber(atualNum, concatNum) {
    // if the current number is 0 or null, blank it
    if (atualNum === '0' || atualNum === null) {
      atualNum = '';
    }

    // if first digit is '.', concat '0' before '.'
    if (concatNum === '.' && atualNum === '') {
      return '0.';
    }

    // if digit '.' exists in string
    if (concatNum === '.' && atualNum.indexOf('.') > -1) {
      return atualNum;
    }
  }

  return [calculate, concatNumber, Op];
}

export default CalculatorService;