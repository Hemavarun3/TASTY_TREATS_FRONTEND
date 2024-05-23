import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../assest/Amul_official_logo.svg.png"


const Contact = () => {
  return (
    <footer className="footer">
    <Container>
      <Row>
        <Col lg="3" md="4" sm="6">
          <div className=" footer__logo text-start">
            <img src={logo} alt="logo" />
            <h5>Amul Campus Parlour</h5>
            
          </div>
        </Col>

        <Col lg="3" md="4" sm="6">
          <h5 className="footer__title">Delivery Time</h5>
          <ListGroup className="deliver__time-list">
            <ListGroupItem className=" delivery__time-item border-0 ps-0">
              <span>Everyday : </span>

              <span className=" delivery__time-item border-0 ps-0">11:00pm - 2:00 am</span>
            </ListGroupItem>

            
          </ListGroup>
        </Col>

        <Col lg="3" md="4" sm="6">
          <h5 className="footer__title">Contact</h5>
          <ListGroup className="deliver__time-list">
            
            <ListGroupItem className=" delivery__time-item border-0 ps-0">
              <span>Phone: 9834522112</span>
            </ListGroupItem>

            <ListGroupItem className=" delivery__time-item border-0 ps-0">
              <span>Email: amulcampusparlour@gmail.com</span>
            </ListGroupItem>

            <ListGroupItem className=" delivery__time-item border-0 ps-0">
              <span>Location: LNMIIT</span>
            </ListGroupItem>
          </ListGroup>
        </Col>

        
      </Row>

      
    </Container>
  </footer>
  )
}

export default Contact