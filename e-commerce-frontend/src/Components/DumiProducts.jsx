import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Products from './../pages/Products';

function DumiProducts() {
    let products=[
        { 
            imagesrc:"https://th.bing.com/th/id/R.765a2f06e9679dcea888c853100e8b49?rik=Bs%2fZnLEVZF8QVQ&riu=http%3a%2f%2fentertainmentbracket.com%2fwp-content%2fuploads%2f2024%2f01%2fTop-10-Mobile-Brands-of-2024.jpg&ehk=Ei5SLflyysYhERjg5xbYuY9b%2blXLSAo0XNNuYDm0zx4%3d&risl=&pid=ImgRaw&r=0",title:"mobiles",
        },
        {
          imagesrc:"https://th.bing.com/th/id/OIP.rH689YcG73gq1Fw0PsAL0AHaDt?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",title:"cloths"
        },
        {
          imagesrc:"https://cdn.mos.cms.futurecdn.net/xPYW4a73GxGBApFQeECW2h.jpg",title:"laptops"
        },
  ];
  return(
    <Row xs={1} md={3} className="g-4">
      {products.map((item, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={item.imagesrc} height="290px" width="100px"/>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <button className="btn btn-warning">Add to card</button>
              <button className="btn btn-success mx-2">Buy</button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default DumiProducts;