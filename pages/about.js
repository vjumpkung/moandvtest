import Header from '../components/header'
import Footer from '../components/footer'
import {Container,Row,Col,Image} from 'react-bootstrap'
import Head from 'next/head'
import Iframe from 'react-iframe'

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
                    <Col md={4}>
                    <center><Iframe className="iframecenter" width="300" height="200" src="https://maps.google.com/maps?width=300&amp;height=200&amp;hl=en&amp;q=30%20%E0%B8%8B%E0%B8%AD%E0%B8%A2%20%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%A7%20130%20%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%88%E0%B8%B1%E0%B9%88%E0%B8%99%20%E0%B9%80%E0%B8%82%E0%B8%95%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%B0%E0%B8%9B%E0%B8%B4%20%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3+(Mo%26V%20shop)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed"></Iframe></center>
                    </Col>
                    <Col md={4}>
                      <br></br>
                      <br></br>
                      <h1 className="center">แผนที่มายังร้าน Mo&V</h1>
                    </Col>
                    <Col md={4}>
                      <Image src="/pic/maps.svg" height="200"></Image>  
                    </Col>               
                 </Row>
                 <Row>
                     <Col>
                        <br></br>
                        <br></br>
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
             <center><Footer/></center>
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
                .bold {
                  font-weight: bold;
                }
                .iframecenter {
                  display:block;
                  width: 100px;
                  height: 50px;
                  margin: 0 auto;
                }
              `}</style>
        </>
    
)
export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}
export default About
