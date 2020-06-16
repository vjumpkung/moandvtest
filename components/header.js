import {Nav,Navbar,Container,Row,Col} from 'react-bootstrap';
import Link from 'next/link'
import Head from 'next/head'
const Title = "Mo & V รับผลิตเสื้อยืด และกระเป๋าผ้าทุกชนิด พร้อมสกรีนทุกแบบไม่จำกัดสี ไม่มีขั้นต่ำ "
const Header = () => (
  <>
  <Head>
    <title>{Title}</title>
    <link rel="icon" href="/pic/logo.png" />
    <meta charSet="UTF-8"></meta>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
    <meta name="google-site-verification" content="1_GhZrhO3KOW3FKqJa_-Stu8ExHOXaoD7pXCGVChET4" />
    <meta name="description" content="รับผลิต สกรีนเสื้อยืด และกระเป๋าผ้าทุกชนิด พร้อมสกรีนทุกแบบไม่จำกัดสี ไม่มีขั้นต่ำด้วยระบบ DTG จาก Brother GTX ที่ ลาดพร้าว 130"></meta>
    <meta name="keywords" content="รับผลิต,สกรีนเสื้อยืด,บริการสกรีนเสื้อ ระบบ DTG ,ลาดพร้าว 130,ลาดพร้าว,สกรีนเสื้อ,สกรีน,เสื้อสกรีน,เสื้อยืด,คอกลม,คอวี,ทำเสื้อ,เสื้อคู่รัก,เสื้อทีม,พิมพ์เสื้อ,ไม่จำกัดสี"></meta>
    <meta property="og:url" content="https://moandv.com"></meta>
    <meta property="og:site_name" content="ร้าน Mo & V รับผลิตเสื้อยืด"></meta>
    <meta property="og:description" content="รับผลิต สกรีนเสื้อยืด และกระเป๋าผ้าทุกชนิด พร้อมสกรีนทุกแบบไม่จำกัดสี ไม่มีขั้นต่ำด้วยระบบ DTG จาก Brother GTX ที่ ลาดพร้าว 130"></meta>
    <meta property="og:image" content="https://moandv.com/pic/about.png"></meta>
    
  </Head>
<Container fluid className="bg-white sticky-top ">
  <Row>
    <Col >
      <Container>
        <Row>
          <Col >
            <Navbar sticky="top" collapseOnSelect expand="lg">
            <Navbar.Brand href="/"><img src="/pic/logo.png" height="80" alt="ร้าน Mo & V"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
            <Nav.Link><Link href="/"><h4 className="text-pink">หน้าแรก</h4></Link></Nav.Link>
            <Nav.Link><Link href="about"><h4 className="text-grey">เกี่ยวกับ</h4></Link></Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            </Col>
        </Row>
      </Container>
    </Col>
  </Row>
</Container>

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
      `}</style>
  </>

)
export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}
export default Header
