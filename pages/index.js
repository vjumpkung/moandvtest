import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'
import {Container,Row,Col,Image,Carousel} from 'react-bootstrap'

const index =()=> (
    <>
      <Head>
        <meta name="robots" content="index,follow,archive" />
      </Head>
      <Header/>
         <Carousel interval="3000" >
          <Carousel.Item>
            <Image fluid src="/pic/pic1.png" alt="แบบเสื้อ 1-4"></Image>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid src="/pic/pic2.png" alt="แบบเสื้อ 5-8"></Image>
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid src="/pic/pic3.png" alt="แบบเสื้อ 9-12"></Image>
          </Carousel.Item>
        </Carousel>       
        <Container>
            <Row>
                     <Col>
                            <h1 className="center resfontsize">รับผลิต สกรีนเสื้อยืด และกระเป๋าผ้าทุกชนิด บริการสกรีนเสื้อ <br></br>ระบบ DTG เครื่องพิมพ์คุณภาพมาตรฐานญี่ปุ่น <br></br> พร้อมสกรีนทุกแบบไม่จำกัดสี</h1>
                            <a className="centerimg spaceontop" alt=" ">
                            <Image fluid src="/pic/about.png" alt="เกี่ยวกับร้าน"></Image>
                            </a>
                     </Col>
                 </Row>
                 <Row>
                     <Col>
                        <a className="centerimg">
                        <a className="" href="https://www.facebook.com/moandv/" target="_blank" alt="Facebook Link">
                        <Image fluid src="/pic/facebook.png" alt="เกี่ยวกับร้าน"></Image>
                        </a>
                        <a className="" href="http://line.me/ti/p/@899uawac" target="_blank" alt="Line Link">
                        <Image fluid src="/pic/line.png" alt="เกี่ยวกับร้าน"></Image>
                        </a>
                        </a>
                        <br></br>
                     </Col>
                 </Row>  
            <Row>
            <Col>
                <a className="centerimg spaceonbottom spaceontop" alt=" "><Image fluid src="/pic/buy.png" alt="ผลิตเสื้อยืด"></Image></a>
                <a className="centerimg spaceonbottom spaceontop" alt=" "><Image fluid width="950" src="/pic/sizeadult.png" alt="ราคาเสื้อยืดผู้ใหญ่"></Image></a>          
                <a className="centerimg spaceonbottom spaceontop" alt=" "><Image fluid width="950" src="/pic/sizekids.png" alt="ราคาเสื้อยืดเด็ก"></Image></a>  
                <a className="centerimg spaceonbottom spaceontop" alt=" "><Image fluid width="950" src="/pic/send.png" alt="ส่งด่วน"></Image></a>
            </Col>
          </Row>
        </Container> 
        <a className="center" alt=" "><Footer/></a>
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
                  h1.resfontsize {
                    font-size: 32px;
                  }
                }     
                @media screen and (max-width: 600px) {
                  h1.resfontsize {
                    font-size: 15px;
                  }
              }
      `}</style>

    </>
)
index.getInitialProps = async () => {

  return { }
}
export default index
