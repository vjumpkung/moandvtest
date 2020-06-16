import Header from '../components/header'
import Footer from '../components/footer'
import {Container,Row,Col,Image} from 'react-bootstrap'
import Head from 'next/head'

const About=()=>(
    
        <>
            <Head>
              <meta name="robots" content="noindex,nofollow,noarchive" />
            </Head>
             <Header/>
             <br></br>
             <br></br>
             <Container>
                 <Row>
                     <Col>
                        <h1 className="center bold">Mo & V shop</h1>
                        <h4 className="center bold">30 ลาดพร้าว 130 ถนนลาดพร้าว คลองจั่น บางกะปิ กรุงเทพ 10240</h4>
                        <hr></hr>
                        <h4 className="center">30 Lat Phrao 130 Lat Phrao rd. Khlong Chan Bangkapi Bangkok 10240</h4>
                     </Col>
                 </Row>
                 <Row>
                     <Col>
                        <a className="centerimg">
                            <Image fluid src="/pic/about.png" alt="เกี่ยวกับร้าน"></Image>
                            </a>
                     </Col>
                 </Row>
                 <Row>
                     <Col>
                        <a className="centerimg">
                        <a className="" href="https://www.facebook.com/moandv/" target="_blank">
                        <Image fluid src="/pic/facebook.png" alt="เกี่ยวกับร้าน"></Image>
                        </a>
                        <a className="" href="http://line.me/ti/p/@899uawac" target="_blank">
                        <Image fluid src="/pic/line.png" alt="เกี่ยวกับร้าน"></Image>
                        </a>
                        </a>
                        <br></br>
                     </Col>
                 </Row>
             </Container>
             <Footer/>
             <style jsxl>{`
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
                .bold {
                  font-weight: bold;
                }
              `}</style>
        </>
    
)
About.getInitialProps = async () => {

  return { }
}
export default About
