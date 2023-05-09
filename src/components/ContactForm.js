import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactForm() {
  return (
    <Form className='container-fluid  ' style={{paddingBottom: '100px', width: '50%'}  }>
      <Form.Group className=" mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize: '20px', fontWeight: 'bold'}}>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter your name" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{fontSize: '20px', fontWeight: 'bold'}}>Email</Form.Label>
        <Form.Control type="password" placeholder="Enter your Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;