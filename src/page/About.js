import React from 'react'
import {Container,Row,Col,ListGroup,ListGroupItem} from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css";
function About() {
  return (
    <div>
<section className="why__choose-us">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <img src="https://tasty-treat-ayushi2003.vercel.app/static/media/location.c2a808618ecbf53c92bc.png" alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>AMUL CAMPUS PARLOUR?</span>
                </h2>
                <p className="tasty__treat-desc">
                Amul Campus Parlour at LNMIIT – Your one-stop destination for delicious dairy treats, morning breakfasts, evening snacks, and refreshing beverages. Enjoy Amul's finest products and a diverse menu throughout the day. Join us for the taste of Amul's rich heritage, right on your campus!S
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Fresh and tasty
                      foods
                    </p>
                    <p className="choose__us-desc">
                    The Campus Palour is your one-stop shop for fresh and tasty food on campus. We use local ingredients to create made-to-order dishes that are bursting with flavor.Whether you're looking for a healthy salad or a hearty burger, we've got you covered. Come savor the difference at the Campus Palour!
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="choose__us-desc">
                    We source the freshest local ingredients, prepare every dish with care, and offer a menu that's as diverse as it is delicious. But that's just the beginning. We're also here to support your academic journey with flexible hours, study-friendly spaces, and a welcoming community where you can refuel, recharge, and connect. So come savor the difference – the Campus Palour is your one-stop shop for a quality campus experience, inside and out.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Order from any
                      location{" "}
                    </p>
                    <p className="choose__us-desc">
                    Campus cravings got you down? Fear not, fellow foodies!  Campus Parlour is now your partner in flavor, no matter where your campus adventures take you. ️ From juicy burgers to vibrant salads, we've got your fix, delivered fresh via awesome apps.  Just open the app, browse our drool-worthy menu, customize your order, and track that culinary masterpiece to your doorstep.  Payment's a breeze, and with new delivery partners joining the party, campus hunger never wins!  So ditch the bland and unleash the flavor – Campus Parlour is just a tap away!
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      \
             
    </div>
  )
}
 
export default About;