import React from 'react'
import {Container,Typography,styled,Divider,useMediaQuery, useTheme} from '@mui/material';
import CircularProgress, {
    circularProgressClasses,
  } from '@mui/material/CircularProgress';
  import Java from '../images/Java.png'
  import html from '../images/html.png'
  import Css from '../images/CSS.png'
  import js from '../images/js.png'
  import c from '../images/c.png'
  import react from'../images/react.png';
  import ml from '../images/ml.png'
  import python from '../images/python.png'
export const StyledTypography=styled(Typography)({
color:'white',
fontFamily:'Montserrat',
fontWeight:'bold',
 textShadow:'0 0 20px rgba(79,76,247, 0.8)'

})

const Skills = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  return (
    <Container style={{marginTop:"100px"}}>
         <StyledTypography variant="h3">SKILLS</StyledTypography>
         <React.Fragment>
      <svg width={30} height={30}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#1CB5E0" />
          </linearGradient>
        </defs>
      </svg>
      <div style={{justifyContent:isSmallScreen||isMediumScreen?'center':'start',display:'flex',alignItems:'center',flexWrap:'wrap', gap:'2rem'}}>
      <div style={{position:'relative',height:'200px',width:'200px'}}>
      <CircularProgress size={200} sx={{ marginLeft:"-40px",marginTop:"20px",'svg circle': { stroke: 'url(#my_gradient)' } }} />
      <img
        src={Java} 
        alt="Your Image"
        style={{
          position: 'absolute',
          top: '50%',
          left:'40%',
          transform: 'translate(-60%, -40%)',
          width: '80%', 
          height: '80%',
          borderRadius: '50%' 
        }}
      />
      </div>
      <Divider orientation="horizontal" sx={{display:{xs:'none',md:'none',lg:'block'},borderBottomWidth: 2,
          borderColor:'rgb(202, 42, 176)',
          width:'10rem',marginLeft:'-125px'}}  />
      <div style={{position:'relative',height:'200px',width:'200px'}}>
      <CircularProgress size={200} sx={{ marginLeft:"-40px",marginTop:"20px",'svg circle': { stroke: 'url(#my_gradient)' } }} />
      <img
        src={html} 
        alt="Your Image"
        style={{
          position: 'absolute',
          top: '50%',
          left:'40%',
          transform: 'translate(-60%, -40%)',
          width: '80%', 
          height: '80%',
          borderRadius: '50%' 
        }}
      />
      </div>
      <Divider orientation="horizontal" sx={{display:{xs:'none',md:'none',lg:'block'},borderBottomWidth: 2,
          borderColor:'rgb(202, 42, 176)',
          width:'10rem',marginLeft:'-125px'}}  />
      <div style={{position:'relative',height:'200px',width:'200px'}}>
      <CircularProgress size={200} sx={{ marginLeft:"-40px",marginTop:"20px",'svg circle': { stroke: 'url(#my_gradient)' } }} />
      <img
        src={Css} 
        alt="Your Image"
        style={{
          position: 'absolute',
          top: '50%',
          left:'40%',
          transform: 'translate(-60%, -40%)',
          width: '80%', 
          height: '80%',
          borderRadius: '50%' 
        }}
      />
      </div>
      <div style={{display:isSmallScreen?'block':'none',position:'relative',height:'200px',width:'200px'}}>
      <CircularProgress size={200} sx={{marginLeft:'-40px',marginTop:"20px",'svg circle': { stroke: 'url(#my_gradient)' } }} />
      <img
        src={js} 
        alt="Your Image"
        style={{
          position: 'absolute',
          top: '50%',
          left:'40%',
          transform: 'translate(-60%, -40%)',
          width: '85%', 
          height: '85%',
          borderRadius: '50%' 
        }}
      />
      </div>
      <Divider orientation="horizontal" sx={{display:{xs:'none',md:'none',lg:'block'},borderBottomWidth: 2,
          borderColor:'rgb(202, 42, 176)',
          width:'10rem',marginLeft:'-125px'}}  />
      <div style={{position:'relative',height:'200px',width:'200px'}}>
      <CircularProgress size={200} sx={{ marginLeft:"-40px",marginTop:"20px",'svg circle': { stroke: 'url(#my_gradient)' } }} />
      <img
        src={c} 
        alt="Your Image"
        style={{
          position: 'absolute',
          top: '50%',
          left:'40%',
          transform: 'translate(-60%, -40%)',
          width: '80%', 
          height: '80%',
          borderRadius: '50%' 
        }}
      />
      </div>
      <Divider orientation="vertical" sx={{display:{xs:'none',md:'none',lg:'block'},marginTop:'-80px',marginLeft:'-100px',borderColor:'rgb(202, 42, 176)',width:'10rem',height:'13rem'}} />
      <div style={{display:isSmallScreen?'none':'block',position:'relative',height:'200px',width:'200px',marginLeft:'-80px',marginTop:'60px'}}>
      <CircularProgress size={200} sx={{marginLeft:'-40px',marginTop:"20px",'svg circle': { stroke: 'url(#my_gradient)' } }} />
      <img
        src={js} 
        alt="Your Image"
        style={{
          position: 'absolute',
          top: '50%',
          left:'40%',
          transform: 'translate(-60%, -40%)',
          width: '85%', 
          height: '85%',
          borderRadius: '50%' 
        }}
      />
      </div>
      <Divider orientation="horizontal" sx={{display:{xs:'none',md:'none',lg:'block'},borderBottomWidth: 2,
          borderColor:'rgb(202, 42, 176)',
          width:'10rem',marginLeft:'-125px'}}  />
      <div style={{position:'relative',height:'200px',width:'200px'}}>
      <CircularProgress size={200} sx={{ marginLeft:"-40px",marginTop:"20px",'svg circle': { stroke: 'url(#my_gradient)' } }} />
      <img
        src={react} 
        alt="Your Image"
        style={{
          position: 'absolute',
          top: '50%',
          left:'40%',
          transform: 'translate(-60%, -40%)',
          width: '85%', 
          height: '85%',
          borderRadius: '50%' 
        }}
      />
      </div>
      <Divider orientation="horizontal" sx={{display:{xs:'none',md:'none',lg:'block'},borderBottomWidth: 2,
          borderColor:'rgb(202, 42, 176)',
          width:'10rem',marginLeft:'-125px'}}  />
      <div style={{position:'relative',height:'200px',width:'200px'}}>
      <CircularProgress size={200} sx={{ marginLeft:"-40px",marginTop:"20px",'svg circle': { stroke: 'url(#my_gradient)' } }} />
      <img
        src={ml} 
        alt="Your Image"
        style={{
          position: 'absolute',
          top: '50%',
          left:'40%',
          transform: 'translate(-60%, -40%)',
          width: '85%', 
          height: '85%',
          borderRadius: '50%' 
        }}
      />
      </div>
      <Divider orientation="horizontal" sx={{display:{xs:'none',md:'none',lg:'block'},borderBottomWidth: 2,
          borderColor:'rgb(202, 42, 176)',
          width:'10rem',marginLeft:'-125px'}}  />
      <div style={{position:'relative',height:'200px',width:'200px'}}>
      <CircularProgress size={200} sx={{ marginLeft:"-40px",marginTop:"20px",'svg circle': { stroke: 'url(#my_gradient)' } }} />
      <img
        src={python} 
        alt="Your Image"
        style={{
          position: 'absolute',
          top: '50%',
          left:'40%',
          transform: 'translate(-60%, -40%)',
          width: '85%', 
          height: '85%',
          borderRadius: '50%' 
        }}
      />
      </div>
      </div>
    </React.Fragment>
    </Container>
  )
}

export default Skills

