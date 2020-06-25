import {Container,Row,Col,Image} from 'react-bootstrap'

const Footer = () => (
    <div className="align-content-center">
    <Container fluid className="center bg-grey">
            <Row>
                <Col className="center">
                     <h6 className="text-black resfontsize center">ที่อยู่ 30 ลาดพร้าว 130 ถนนลาดพร้าว คลองจั่น บางกะปิ กรุงเทพ 10240</h6>
                     <h6 className="text-black resfontsize center">30 Lat Phrao 130 Lat Phrao rd. Khlong Chan Bangkapi Bangkok 10240</h6>   
                </Col>
            </Row>
            <Row>
                <Col className="center">
                    <h5 className="text-black center">© ร้าน Mo & V</h5>      
                </Col>
            </Row>
            <Row>
                <Col className="center">
                    <Image src="/pic/nextjs.svg" height="150" className="spaceontop spaceonbottom center"></Image>
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
                .text-black{
                  color: rgb(0, 0, 0)
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
                      font-size: 12px;
                    }
                }

        `}</style>

          <style type="text/css">
                  {`
                     .bg-grey {
                        background-color: rgb(230, 230, 230);
                      }
                      .spaceonbottom {
                        margin-bottom: 15px;
                      }
                      .spaceontop {
                        margin-top: 15px;
                      }
          `}
          </style>
    </Container>
    </div>
)
Footer.getInitialProps = async () => {

  return { }
}
export default Footer