import React from "react";
import { Row, Col } from "reactstrap";


const CapitolImage = (props) => {
  return (
    <>
    <Row>
      <Col>
        <img src={`${process.env.PUBLIC_URL}/assets/capitol-blue.png`} alt="capitol dome"/>
      </Col>
    </Row>
    </>
  )
}

export default CapitolImage;

