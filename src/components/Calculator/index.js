import React, { useState } from 'react';
import './style.css';

import { Jumbotron, Container, Row, Col, Button, Form } from 'react-bootstrap';

import CalculatorService from './service/calculator.service';

function Calculator () {
  const [calculate, concatNumber, Op] = CalculatorService();

  const [txtNumbers, setTxtNumbers] = useState('0');
  const [number1, setNumber1] = useState('0');
  const [number2, setNumber2] = useState(null);
  const [operation, setOperation] = useState(null);

  function addNumber (number) {
    let result;

    if (operation === null) {
      result = concatNumber(number1, number);
      setNumber1(result);
    } else {
      result = concatNumber(number2, number);
      setNumber2(result);
    }

    setTxtNumbers(result);
  }

  function defOperation (op) {
    // define operation if is null
    if (operation === null) {
      setOperation(op);
      return;
    }

    // if operation is not null and number2 not null process calc
    if (number2 !== null) {
      const result = calculate(parseFloat(number1), parseFloat(number2), operation);
      setOperation(op);
      setNumber1(result.toString());
      setNumber2(null);
      setTxtNumbers(result.toString());
    }
  }

  function actionCalculate() {
    if (number2 === null) {
      return;
    }

    const result = calculate(parseFloat(number1), parseFloat(number2), operation);
    setTxtNumbers(result);
  }

  function clear() {
    setTxtNumbers('0');
    setNumber1('0');
    setNumber2(null);
    setOperation(null);
  }

  return (
    <div id='container'>
      <Jumbotron fluid style={{
        backgroundColor: "#007BFF",
        padding: '5px',
        margin: '5px',
        borderRadius: '5px',
        width: '500px'
      }}>
        <Container fluid>
          <Row>
            <Col xs={3}>
              <Button onClick={clear} variant={"danger"} block>C</Button>
            </Col>
            <Col xs={9}>
              <Form.Control type={"text"} name={"txtNumbers"} className="text-right" readOnly={true} value={txtNumbers} data-testid="txtNumbers"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={() => addNumber('7')} variant={"light"} block>7</Button>
            </Col>
            <Col>
              <Button onClick={() => addNumber('8')} variant={"light"} block>8</Button>
            </Col>
            <Col>
              <Button onClick={() => addNumber('9')} variant={"light"} block>9</Button>
            </Col>
            <Col>
              <Button onClick={() => defOperation(Op.DIV)} variant={"warning"} block>/</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={() => addNumber('4')} variant={"light"} block>4</Button>
            </Col>
            <Col>
              <Button onClick={() => addNumber('5')} variant={"light"} block>5</Button>
            </Col>
            <Col>
              <Button onClick={() => addNumber('6')} variant={"light"} block>6</Button>
            </Col>
            <Col>
              <Button onClick={() => defOperation(Op.MUL)} variant={"warning"} block>*</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={() => addNumber('1')} variant={"light"} block>1</Button>
            </Col>
            <Col>
              <Button onClick={() => addNumber('2')} variant={"light"} block>2</Button>
            </Col>
            <Col>
              <Button onClick={() => addNumber('3')} variant={"light"} block>3</Button>
            </Col>
            <Col>
              <Button onClick={() => defOperation(Op.SUB)} variant={"warning"} block>-</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={() => addNumber('0')} variant={"light"} block>0</Button>
            </Col>
            <Col>
              <Button onClick={() => addNumber('.')} variant={"light"} block>.</Button>
            </Col>
            <Col>
              <Button onClick={actionCalculate} variant={"success"} block>=</Button>
            </Col>
            <Col>
              <Button onClick={() => defOperation(Op.SUM)} variant={"warning"} block>+</Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Calculator;