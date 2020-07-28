import { Container, Row, Col } from "react-bootstrap";

const Footer = () => (
  <div className="align-content-center">
    <Container fluid className="center bg-grey">
      <Row>
        <Col className="center">
          <h6 className="text-black resfontsize center">
            ที่อยู่ 30 ลาดพร้าว 130 ถนนลาดพร้าว คลองจั่น บางกะปิ กรุงเทพ 10240
          </h6>
          <h6 className="text-black resfontsize center">
            30 Lat Phrao 130 Lat Phrao rd. Khlong Chan Bangkapi Bangkok 10240
          </h6>
        </Col>
      </Row>
      <Row>
        <Col className="center">
          <h5 className="text-black center">© ร้าน Mo & V</h5>
        </Col>
      </Row>
    </Container>
  </div>
);
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
export default Footer;
