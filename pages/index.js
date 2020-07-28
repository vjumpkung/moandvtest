import Header from "../components/header";
import Footer from "../components/footer";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";

const index = () => (
  <>
    <Header />
    <Carousel interval="3000">
      <Carousel.Item>
        <Image
          fluid
          src="/pic/pic1.png"
          alt="แบบเสื้อ 1-4"
          loading="lazy"
        ></Image>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          fluid
          src="/pic/pic2.png"
          alt="แบบเสื้อ 5-8"
          loading="lazy"
        ></Image>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          fluid
          src="/pic/pic3.png"
          alt="แบบเสื้อ 9-12"
          loading="lazy"
        ></Image>
      </Carousel.Item>
    </Carousel>
    <Container fluid="xl">
      <Row className="center spaceonbottom spaceontop">
        <Col>
          <a href="https://shop.moandv.com/" target="_blank">
            <h2>สามารถพบกับร้านค้าได้ที่ shop.moandv.com</h2>
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="center resfontsize">
            รับผลิต สกรีนเสื้อยืด และกระเป๋าผ้าทุกชนิด บริการสกรีนเสื้อ{" "}
            <br></br>ระบบ DTG เครื่องพิมพ์คุณภาพมาตรฐานญี่ปุ่น <br></br>{" "}
            พร้อมสกรีนทุกแบบไม่จำกัดสี
          </h2>
          <a className="centerimg spaceontop" alt=" ">
            <Image
              fluid
              src="/pic/about.png"
              alt="เกี่ยวกับร้าน"
              loading="lazy"
            ></Image>
          </a>
        </Col>
      </Row>

      <Row>
        <Col>
          <a className="centerimg">
            <a
              className=""
              href="https://www.facebook.com/moandv/"
              target="_blank"
              alt="Facebook Link"
            >
              <Image
                fluid
                src="/pic/facebook.png"
                alt="เกี่ยวกับร้าน"
                loading="lazy"
              ></Image>
            </a>
            <a
              className=""
              href="http://line.me/ti/p/@899uawac"
              target="_blank"
              alt="Line Link"
            >
              <Image
                fluid
                src="/pic/line.png"
                alt="เกี่ยวกับร้าน"
                loading="lazy"
              ></Image>
            </a>
          </a>
          <br></br>
        </Col>
      </Row>
      <Row>
        <Col>
          <a className="centerimg spaceonbottom spaceontop" alt=" ">
            <Image
              fluid
              width="950"
              src="/pic/buy.png"
              alt="ผลิตเสื้อยืด"
              loading="lazy"
            ></Image>
          </a>
          <a className="centerimg spaceonbottom spaceontop" alt=" ">
            <Image
              fluid
              width="950"
              src="/pic/sizeadult.png"
              alt="ราคาเสื้อยืดผู้ใหญ่"
              loading="lazy"
            ></Image>
          </a>
          <a className="centerimg spaceonbottom spaceontop" alt=" ">
            <Image
              fluid
              width="950"
              src="/pic/sizekids.png"
              alt="ราคาเสื้อยืดเด็ก"
              loading="lazy"
            ></Image>
          </a>
          <a className="centerimg spaceonbottom spaceontop" alt=" ">
            <Image
              fluid
              width="950"
              src="/pic/send.png"
              alt="ส่งด่วน"
              loading="lazy"
            ></Image>
          </a>
        </Col>
      </Row>
    </Container>
    <a className="center" alt=" ">
      <Footer />
    </a>
  </>
);

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
export default index;
