import React from "react";
import { Jumbotron, Button, Row, Col, CardImg } from "reactstrap";

const Plebisite = (props) => {
  return (
    <>
    <Row>
      <Col>
        <Jumbotron>
          <CardImg top width="50%" src={`${process.env.PUBLIC_URL}/assets/capitol-blue.png`} alt="Card image cap"/>
            <h1 className="text-danger display-3 text-center">Plebisite</h1>
              <Button color="primary" className="text-center">Log In</Button>
        </Jumbotron>
      </Col>
    </Row>
    </>
  )
}

export default Plebisite;