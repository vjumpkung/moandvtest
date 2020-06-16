import {Container,Row,Col} from 'react-bootstrap'

const Footer = () => (
    <Container fluid className="bg-dark center">

            <Row>
                <Col className="center">
                     <h6 className="text-white resfontsize center">ที่อยู่ 30 ลาดพร้าว 130 ถนนลาดพร้าว คลองจั่น บางกะปิ กรุงเทพ 10240</h6>
                     <h6 className="text-white resfontsize center">30 Lat Phrao 130 Lat Phrao rd. Khlong Chan Bangkapi Bangkok 10240</h6>   
                </Col>
            </Row>
            <Row>
                <Col className="center">
                    <h5 className="text-white center">© ร้าน Mo & V</h5>
                    <h6 className="text-white center">powered by &nbsp; <img src="/pic/nextjs.svg" height="60" alt="โลโก้ next.js"></img> </h6>
                </Col>
            </Row>
        
        <style jsx>{`
                .center {
                  line-height: 60px;
                  text-align: center;
                }
                .text-pink{
                  color: rgb(235, 133, 213)
                }
                .text-grey{
                  color: rgb(150, 150, 150)
                }
                .centerimg{
                  text-align: center;
                  display: block;
                }
                .spaceonbottom {
                  margin-bottom: 15px;
                }
                .spaceontop {
                  margin-top: 15px;
                }
                @media screen and (min-width: 601px) {
                  }
                  
                  @media screen and (max-width: 600px) {
                    h6.resfontsize {
                      font-size: 11px;
                    }
                }
        `}</style>
    </Container>
)
export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}
export default Footer