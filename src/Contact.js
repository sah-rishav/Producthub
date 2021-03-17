import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import Dialog from '@material-ui/core/Dialog';
import { ToastsContainer, ToastsStore } from "react-toasts";
import { MDBBtn } from "mdbreact";




export default function Signup(props) {
  const validEmailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const validPhoneRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

  const [isLogin] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [params, setParams] = React.useState({
    newFirstName: null, number: null, newEmail: null, 
  })
  const [errors, setErrors] = React.useState({
    newFirstName: '', number: '', newEmail: ''
  })

  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }
  
  const handleClickOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

const handleChange = event => {
  event.preventDefault();
  const { name, value } = event.target;
  //SIGN UP VALIDATION//
  switch (name) {
    case 'newFirstName':
      value.length < 2
        ? setErrors({...errors,[name]: 'First name must be at least 2 characters long!'})
        : setErrors({...errors,[name]: ''});
      break;
    
    case 'newEmail': 
      validEmailRegex.test(value)
        ? setErrors({...errors,[name]: ''})
        : setErrors({...errors,[name]: 'Email is not valid!'});
      break;
    
    case 'number':
      validPhoneRegex.test(value)
        ? setErrors({...errors,[name]: ''})
        : setErrors({...errors,[name]: 'Number is not valid!'});
      break;
    default:
      break;
  }

  setParams({
    ...params, [name]: value}
  )

  const logErrors = ({errors, [name]: value}) => {
    console.log(errors)
  }
}

  const onChange1 = (e) => {
    [e.target.name] = e.target.value
  }


  const refreshPage = () => {
    window.location.reload(false);
  }

  const handleSubmit = event => {
    event.preventDefault();
    const templateId = "template_FNZvTKs9";
    const templateParams = {
      newFirstName: params.newFirstName,
      newEmail: params.newEmail
    }

    if(validateForm(errors)) {
      console.info('Valid Form')
    } else {
      console.error('Invalid Form')
    }
    
  };

  

    return (
        <div class = "Signup">
          <Form>
          <MDBBtn onClick={handleClickOpen}> <a style={{ color: "white", fontSize: "17px"}}>
                      Contact Us
                    </a>
                  </MDBBtn>              
              <Dialog
              style={{ zIndex: 50000 }}
              open={open} 
              onClose={handleClose}
            >
              <Form
                  id="signup"
                  className="button"
                  style={{ padding: "20px" }}
                  onSubmit={handleSubmit}
              >
                  <Form.Group controlId="Header" className="space">
                  <h1 style={{ textAlign: "center" }}>Contact Us</h1>
                  </Form.Group>
                  <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label style={{ fontSize: 18 }}>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={params.newEmail}
                        name="newEmail"
                        id="newEmail"
                        //onChange={onChange}
                        onChange={handleChange}
                      />
                      {errors.newEmail.length > 0 && 
                        <span 
                        className='error'
                        style= {{ fontSize: 10}
                        }>
                          {errors.newEmail}</span>}
                  </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formGridFirstName">
                  <Form.Label style={{ fontSize: 18 }}>Full Name</Form.Label>
                  <Form.Control
                      placeholder="Jane"
                      
                      name="newFirstName"
                      id="newFirstName"
                      //onChange={onChange1}
                      onChange={handleChange}
                  />
                  {errors.newFirstName.length > 0 && 
                  <span 
                  className='error'
                  style= {{ fontSize: 10}
                  }>{errors.newFirstName}</span>}
                  </Form.Group>

                 

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridContact">
                      <Form.Label style={{ fontSize: 18 }}>
                        Phone Number
                      </Form.Label>
                      <Form.Control
                        value={params.number}
                        name="number"
                        onChange={handleChange}
                      />
                      {errors.number.length > 0 && 
                      <span 
                      className='error'
                      style= {{ fontSize: 10}
                      }>{errors.number}</span>}
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridInstitution">
                      <Form.Label style={{ fontSize: 18, width:"500px" }}>
                        Description
                      </Form.Label>
                      <Form.Control
                        value={params.newInstitution}
                        name="Institution name"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  

                  <Button
                    className="space"
                    block
                    style={{ float: "right" }}
                    variant="secondary"
                    type="Button"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>

                 
              </Form>
            </Dialog>
          </Form>
          <ToastsContainer store={ToastsStore} />
        </div>
    );
  }
