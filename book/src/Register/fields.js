import {React} from 'react';
import Forms from './form';
import Select from './select';
import {Form, Formik} from 'formik';
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as Yup from 'yup';

function Reg({isLogin, isNotLogin}){
    const phoneRegExp =  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{1,4}\\)[ \\-]*)|([0-9]{1,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const validate = Yup.object({
    firstName: Yup.string().max(15, 'Must be 15 character or less').required('Required'),
    lastName: Yup.string().max(20, 'Must be 20 character or less').required('Required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone Number is required'),
    password: Yup.string().min(6, 'password must be at least 6 characters').required('Password is required'),
    conFirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Confirmed password is required'),
    roles: Yup.string().oneOf(['boss', 'admin', 'user'], 'Invalid role').required('Role is required')
    
})

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email:'',
        phoneNumber:'',
        password:'',
        conFirmPassword:'',
        roles:''
      }}
      validationSchema = {validate}
      onSubmit={(value, {setSubmitting, resetForm}) => {
        try{
          console.log(value)
          fetch('http://localhost:2021/api/procuremax/reg', {
              method: 'POST',
              body: JSON.stringify(value)
          }).then(err => {console.log(err)});
        } catch(err){
          console.log(err)
        }
      }}
    >
      {
      formik => (
        <Container>
          <Row>
            <Col>
            <div className="sec">
                <div className="style">
                  <p className="text-center pb-3">LOGIN DETAILS</p>
                  <Form>
                  <div className="d-flex justify-content-between">
                  <button  className="px-5 touch" size="lg" type="submit">Send</button>
                  <button  className="px-5 touch" size="lg" type="reset">Clear</button>
                  </div>
                    <Forms label="First Name" name="firstName" type="text" />
                    <Forms label="Last Name" name="lastName" type="text" />
                    <Forms label="Email" name="email" type="text" />
                    <Forms label="Phone Number" name="phoneNumber" type="tel" />
                    <Forms label="Password" name="password" type="password" />
                    <Forms label="Confirm Password" name="conFirmPassword" type="password" />
                    <Select label="Select Role" name="roles"  type="select"/>
                  </Form>
                  <p className="loginPara"> <button className="but" onClick={()=>{isNotLogin(true) }}>Click here to Login</button></p>
                  </div>
                </div>
            </Col>
          </Row>
        </Container>
      )
      }
      </Formik>
  );
}

export default Reg;