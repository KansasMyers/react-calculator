import React from 'react';
import './style.css';

import { Jumbotron, Container, Row, Col, Button, Form } from 'react-bootstrap';

function Calculator() {
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
              <Form.Control type={"text"} name={"txtNumeros"} class={"text-right"} readOnly={true}></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant={"light"} block>7</Button>
            </Col>
            <Col>
              <Button variant={"light"} block>8</Button>
            </Col>
            <Col>
              <Button variant={"light"} block>9</Button>
            </Col>
            <Col>
              <Button variant={"warning"} block>/</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant={"light"} block>4</Button>
            </Col>
            <Col>
              <Button variant={"light"} block>5</Button>
            </Col>
            <Col>
              <Button variant={"light"} block>6</Button>
            </Col>
            <Col>
              <Button variant={"warning"} block>*</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant={"light"} block>1</Button>
            </Col>
            <Col>
              <Button variant={"light"} block>2</Button>
            </Col>
            <Col>
              <Button variant={"light"} block>3</Button>
            </Col>
            <Col>
              <Button variant={"warning"} block>-</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant={"light"} block>0</Button>
            </Col>
            <Col>
              <Button variant={"light"} block>.</Button>
            </Col>
            <Col>
              <Button variant={"success"} block>=</Button>
            </Col>
            <Col>
              <Button variant={"warning"} block>+</Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Calculator;