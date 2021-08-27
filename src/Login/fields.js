import {React} from 'react';
import Forms from './form';
import Select from '../Register/select'
import {Form, Formik} from 'formik';
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as Yup from 'yup';

function Login({isLogin, isNotLogin}){
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().min(6, 'password must be at least 6 characters').required('Password is required'),
    roles: Yup.string().oneOf(['boss', 'admin', 'user'], 'Invalid role').required('Role is required')
})

  return (
    <Formik
      initialValues={{
        email:'',
        password:'',
        roles:''
      }}
      validationSchema = {validate}
      onSubmit={(value, {setSubmitting, resetForm}) => {
        
        // fetch('localhost:2021/api/procuremax/reg', {
        //     method: 'POST',
        //     header: { "content-type": "application/json" },
        //     body: JSON.stringify(value)
        // }).then(() => {
        //     console.log(`registration done, ${value.firstName} please ign in`)
        // })

        setSubmitting(true);
        resetForm(true);
        isNotLogin(true);
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
                  <Forms label="Email" name="email" type="text" />
                  <Forms label="Password" name="password" type="password" />
                  <Select label="Select Role" name="roles"  type="select" />
                  </Form>
                  <p className="loginPara">No account? <button className="but" onClick={()=>{ isNotLogin(false)}}>click here to register</button></p>
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

export default Login;