import Carousel from 'react-bootstrap/Carousel';
import pic1 from "./pm.png"
import pic2 from "./PMI.png"
import pic3 from "./py.png"
import pic4 from "./DIGITALTECH.png"
import pic5 from "./cre.jpg"


function Credential() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
    <Carousel className='py-2' style={{ width: '400px', height: '300px'  }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Agile Product Manager</h3>
          <p>UTIVA Product School</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic5}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Scrum Fundamental Certificate</h3>
          <p>Scrum Study</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic4}
          alt="First slide"
        />
        <Carousel.Caption>
        <h3>Digital Transformation</h3>
          <p>General Electric</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>PMI Membership</h3>
          <p>Project management Institute, U.S.A</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Python Developer</h3>
          <p>
            FreecodeCamp
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  );
}

export default Credential;