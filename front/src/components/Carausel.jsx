import Carousel from 'react-bootstrap/Carousel';

function Carausel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/172718052/fi/valokuva/jalat-vaaleanpunaisella.jpg?s=612x612&w=is&k=20&c=WOzRkiqfIbpOJRJ6GrAcJK1ETyIvumaWCcA70bSxo-k="
          alt="First slide"
        />
        <Carousel.Caption>
          
          <p>Viimeinen mahdollisuus ! Säästä 20% kesätuotteista.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://as1.ftcdn.net/v2/jpg/02/62/16/86/1000_F_262168675_hvw5kxiW19v5sopN4vTDkyHSt9PrxuiV.jpg"
          alt="Second slide"
          
        />
        <Carousel.Caption>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://as2.ftcdn.net/v2/jpg/05/01/28/09/1000_F_501280994_Zp5vLeXpwaf7HRTVHZJi8clPBCm3an3x.jpg"
          alt="Third slide"
        />
       
        <Carousel.Caption>
          
          <p>
             cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carausel;