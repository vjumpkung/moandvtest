import {Container,Row,Image,Button} from 'react-bootstrap'
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
                        <div className="col md=7 my-auto"> 
                            <div>
                                <Image src="/pic/404.svg" fluid className="floating"></Image>                       
                            </div>
                        </div>
                        <div className="col md=4 my-auto"> 
                                <h1 className="centerimg resfontsize text-white">แย่จัง</h1>
                                <h1 className="center mobilesize text-white">หน้าที่คุณกำลังค้นหาไม่พบในร้านเสื้อแห่งนี้ <br></br> โปรดลองหาอีกครั้ง</h1>
                                <div className="center"><a href="https://moandv.com"><Button size="lg" variant="secondary">กลับไปหน้าแรก</Button></a></div>
                                <br></br>  
                                <br></br>
                                <br></br>                  
                        </div>
                    </Row>
                </Container>
            </div>
        <a className="center"><Footer/></a>
    </>
)
export async function getStaticProps() {
    return {
      props: {}, // will be passed to the page component as props
    }
  }
export default notfound