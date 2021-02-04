import { Button, Container } from '../../globalStyles';
import { Link } from 'react-router-dom';
import React, {useState} from 'react';

import {
    InfoSec,
    Form,
    FormInput,
    InfoColumn,
    InfoRow,
    Img,
    ImgWrapper,
    TextArea,
    P,
    Stext
  } from './FormSignup.elements';

import validate from '../../utils/validateInfo';
import useForm from '../../utils/useForm';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  var imgName = require('../../images/svg-1.svg')

  const [isSubmitted, setIsSubmitted]  = useState(false)
  function submitForm(){
    setIsSubmitted(true)
  }

  return (
        <>
      <InfoSec lightBg={true}>
        <Container>
          <InfoRow imgStart={true}>
            <InfoColumn>

              {!isSubmitted ?
              <Container>
             <Form onSubmit={handleSubmit} className='form' noValidate>

              <FormInput id ="username" name='username' type='text'
               placeholder='Your Name'
               className='form-input'
               value={values.username}
               onChange={handleChange}
              />
              {errors.username && <P>{errors.username}</P>}
              <FormInput id ="email" name='email' type='email' placeholder='Your Email'
              value={values.email}
              className='form-input'
              onChange={handleChange}
              />
              {errors.email && <P>{errors.email}</P>}

              <FormInput id ="phone" name='phone' type='phone' placeholder='Phone No.'
              className='form-input'
              value={values.phone}
              onChange={handleChange}
              />
              {errors.phone && <P>{errors.phone}</P>}

              <TextArea rows = '4' cols = '50' name ="address" form = 'usrform'
              className='form-input'
              placeholder="Address"
              id = "address"
              value={values.address}
              onChange={handleChange}></TextArea>
              {errors.address && <P>{errors.address}</P>}

               <InfoColumn>
                 <InfoRow>
                  <FormInput id ="email" name='password' type='password' placeholder='Enter Password'
                      value={values.password}
                      className='form-input'
                      onChange={handleChange}
                      />
                      {errors.password && <P>{errors.password}</P>}

                      <FormInput id ="phone" name='password2' type='password' placeholder='Re-Enter Password'
                      className='form-input'
                      value={values.password2}
                      onChange={handleChange}
                  />
                  {errors.password2 && <P>{errors.password2}</P>}
                  </InfoRow>
               </InfoColumn>
              <Button fontBig>Register</Button>
            </Form>
             </Container>
             :<Stext>Your account is successfully created, Your login ID is DWX435567, Use this ID along with your password to login. Thankyou</Stext>
            }

            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={true}>
                <Img src={imgName}></Img>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>

  );
};

export default FormSignup;