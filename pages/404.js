import {Container,Row,Col,Image,Button} from 'react-bootstrap'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
const notfound = () => 
(
    <>
        <Head>
            <meta name="robots" content="noindex,nofollow,noarchive" />
        </Head>
        <Header/>
            <div className="bgcolor mobilesize">
                <Container fluid>
                    <Row>
                        <div class="col md=7 my-auto"> 
                            <div>
                                <Image src="/pic/404.svg" fluid></Image>                       
                            </div>
                        </div>
                        <div class="col md=4 my-auto"> 
                                <h1 className="centerimg resfontsize">แย่จัง</h1>
                                <h1 className="center mobilesize">หน้าที่คุณกำลังค้นหาไม่พบในร้านเสื้อแห่งนี้ <br></br> โปรดลองหาอีกครั้ง</h1>
                                <div className="center"><a href="https://moandv.com"><Button size="lg" variant="secondary">กลับไปหน้าแรก</Button></a></div>
                                <br></br>  
                                <br></br>
                                <br></br>                  
                        </div>
                    </Row>
                </Container>
            </div>
        <Footer/>
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
                .bgcolor {
                    background-color: rgb(2,12,76);
                }
                div {
                    color: white;
                }
                @media screen and (min-width: 1200px) {
                    h1.resfontsize {
                        font-size: 256px;
                    }
                  }
                @media screen and (max-width: 1199px) {
                    h1.resfontsize {
                        font-size: 190px;
                    }
                  }
                @media screen and (max-width: 768px) {
                    h1.resfontsize {
                        font-size: 150px;
                    }
                    h1.mobilesize {
                        font-size: 18px;
                    }
                  }          
                @media screen and (max-width: 600px) {
                    h1.resfontsize {
                        font-size: 72px;
                    }
                    h1.mobilesize {
                        font-size: 18px;
                    }
                }
                .verticalcenter{
                    margin: auto;
                    width: 50%;
                    padding: 10px;
                }
              }
      `}</style>
    </>
)

export default notfound