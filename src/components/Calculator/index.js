import React, { useState } from 'react';
import './style.css';

import { Jumbotron, Container, Row, Col, Button, Form } from 'react-bootstrap';

function Calculator () {
  const [txtNumbers, setTxtNumbers] = useState('0');

  function addNumber (number) {
    setTxtNumbers(txtNumbers + number);
  }

  function defOperation (operation) {
    setTxtNumbers(operation);
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
              <Button variant={"danger"} block>C</Button>
            </Col>
            <Col xs={9}>
              <Form.Control type={"text"} name={"txtNumbers"} class={"text-right"} readOnly={true} value={txtNumbers}></Form.Control>
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
              <Button onClick={() => defOperation('/')} variant={"warning"} block>/</Button>
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
              <Button onClick={() => defOperation('*')} variant={"warning"} block>*</Button>
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
              <Button onClick={() => defOperation('-')} variant={"warning"} block>-</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={() => addNumber('0')} variant={"light"} block>0</Button>
            </Col>
            <Col>
              <Button variant={"light"} block>.</Button>
            </Col>
            <Col>
              <Button variant={"success"} block>=</Button>
            </Col>
            <Col>
              <Button onClick={() => defOperation('+')} variant={"warning"} block>+</Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Calculator;