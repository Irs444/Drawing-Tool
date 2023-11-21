
import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom'
import app_config from '../config';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  cPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});


const Signup = () => {

  const navigate = useNavigate();
  const { API_URL } = app_config;

  const signupForm = useFormik({
    initialValues:{
     name: '',
     email: '',
     password: '',
     cpassword: ''
    },
     onSubmit: async (values, {setSubmitting}) => {
       setSubmitting(true);
     console.log(values);
   
      const res = await fetch(API_URL+'/user/add',{
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
         'Content-Type' : 'application/json'
        }
      });
      console.log(res.status);
      
       
      if (res.status === 200){
   
   
       Swal.fire({
         icon: 'success',
         title: 'Nice',
         text: 'you have registerd now'
       })
       navigate('/login');
      } else{
       Swal.fire({
        icon: 'erroe',
        title: 'opps',
        text: 'somthing wrong' 
       })
      }
     },
     validationSchema :  SignupSchema
     }) ;
    return (
       <div>
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{ borderRadius: 25}}>
          <div className="card-body p-md-5" >
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>
                <form className="mx-1 mx-md-4" onSubmit={signupForm.handleSubmit}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example1c">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        values={signupForm.values.name}
                        onChange={signupForm.handleChange}
                        className="form-control border border-primary"
                      />
                    <span className='text-danger'>{signupForm.errors.name}</span>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example3c">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        values={signupForm.values.email}
                        onChange={signupForm.handleChange}
                        className="form-control border border-primary"
                      />
                     <span className='text-danger'>{signupForm.errors.email}</span>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example4c">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        values={signupForm.values.password}
                        onChange={signupForm.handleChange}
                        className="form-control border border-primary"
                      />
                    <span className='text-danger'>{signupForm.errors.password}</span>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example4cd">
                        Repeat your password
                      </label>
                      <input
                        type="password"
                        id="cpassword"
                        values={signupForm.values.cpassword}
                        onChange={signupForm.handleChange}
                        className="form-control border border-primary"
                      />
                      <span className='text-danger'>{signupForm.errors.cpassword}</span>
                    </div>
                  </div>
                  {/* <div className="form-check d-flex justify-content-center ">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3c"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in{" "}
                      <a href="#!">Terms of service</a>
                    </label>
                  </div> */}
                  <div className="d-flex justify-content-center mx-5 mb-3 mb-lg-4">
                    <button 
                    type="submit" 
                    className="btn btn-primary btn-lg" 
                    disabled={signupForm.isSubmitting}>
                      {signupForm.isSubmitting && <span className='spinner-border spinner-border-sm'></span>}
                      &nbsp;&nbsp;
                      Register
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

       </div>
    
  );
};

    
        
    




export default Signup;