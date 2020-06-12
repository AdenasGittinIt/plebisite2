import React from "react";
import { Card, Row, Col } from "reactstrap"
import CapitolImage from "./CapitolImg";
import { Wrapper }from "../styles"


const Plebisite = (props) => {
  return (
    <>
    <Row >
      <Col>
        <Wrapper className="card">
         <CapitolImage />
         <Card>
          plebiSite
        </Card>
        </Wrapper>
      </Col>
    </Row>
    </>
  )
}

export default Plebisite;