import React from 'react';
import { InfoSection, FormSignup} from '../../components';
import { homeObjOne, homeObjThree } from './Data';

function SignUp() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      {/* <InfoSection {...homeObjThree} /> */}
      < FormSignup />
    </>
  );
}

export default SignUp;
