import React from 'react';
import Typical from 'react-typical';
import '../App.css'
import {styled} from '@mui/material'
const StyledTypical=styled(Typical)({
    color:'white',
    marginTop:'15px',
     textShadow:'0 0 20px rgba(79,76,247, 0.8)',
    transition: 'color 0.3s, text-shadow 0.3s'
})
const TypingEffect = () => {
  return (
    <StyledTypical
      steps={['a UI/UX Designer', 1500,'',1000]}
      loop={Infinity}
      wrapper="h1"
      className="typing"
    />
  );
};

export default TypingEffect;