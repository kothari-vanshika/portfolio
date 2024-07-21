import React from 'react'
import '../App.css';
import Logos from '../images/waving-hand-sign.svg';
import { styled } from '@mui/material/styles';
import { Toolbar,Typography,Container,AppBar,Link} from '@mui/material';
import {Stack,Button} from'@mui/material';
import {useNavigate} from 'react-router-dom';
import git from '../images/git.png'
import linkedIN from '../images/linkedIN.png'
import LC from '../images/LC.png'
const StyledButton=styled(Button)({
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 0 10px 5px rgba(33, 150, 243, 0.7)',
      transform:'scale(1.1)'
    },
    textShadow:
    '0 0 20px rgba(79,76,247, 0.8)',/* Magenta shadow *//* Light white shadow */
    backgroundColor:"transparent",
      border:'none',
      borderRadius:'10px',
    padding:'5px',
    cursor:'pointer'
})
const Header = () => {
    const navigate=useNavigate();
  return (
    <AppBar position="static" color="transparent">
    <Container>
        <Toolbar>
           <div style={{display:'flex',alignItems:'center'}}>
            <Typography variant="h4" className="shiny-text" sx={{
          display: { xs: 'none', md: 'none',lg:'block' },fontFamily:'Montserrat',fontWeight:"600"}}>
             Hello
             </Typography>
<Typography sx={{display: { xs: 'none', md: 'none',lg:'block' }}}><img src={Logos} style={{width:'30px',height:'30px'}}></img>
</Typography>
            <Button sx={{display: { xs: 'none', md: 'block',lg:'block' }}} onClick={()=>window.location.href='https://github.com/'}><img src={git} style={{ marginLeft:'30px',width:'50px',height:'50px'}}></img></Button>
            <Button sx={{display: { xs: 'none', md: 'block',lg:'block' }}} onClick={()=>window.location.href='https://www.linkedin.com/in/vanshika-kothari-8887a629b'}><img src={linkedIN} style={{marginLeft:'20px',width:'50px',height:'50px'}}></img></Button>
            <Button sx={{display: { xs: 'none', md: 'block',lg:'block' }}} onClick={()=>window.location.href='https://leetcode.com/u/vanshika_60/'}><img src={LC} style={{marginLeft:'20px',width:'50px',height:'50px'}}></img></Button>
             </div>
             <Stack direction="row" spacing={2} sx={{marginLeft:{xs:'10px',md:"80px",lg:'250px'}}}>
             <StyledButton onClick={()=>window.scrollTo(0,0)}
                sx={{color: 'white', display: {xs:'none',md:'none',lg:'block'} ,fontFamily:'Montserrat',fontWeight:'bold',fontSize:'large'}} 
              >
                Home
              </StyledButton>
              <StyledButton onClick={()=>window.scrollTo(0,500)}
                sx={{color: 'white', display: {xs:'none',md:'block',lg:'block'} ,fontFamily:'Montserrat',fontWeight:'bold',fontSize:'large'}}
              >
                Education
              </StyledButton>
              <StyledButton onClick={()=>window.scrollTo(0,1050)}
                sx={{color: 'white', display: 'block' ,fontFamily:'Montserrat',fontWeight:'bold',fontSize:'large'}}
              >
                Skills
              </StyledButton>
              <StyledButton onClick={()=>navigate('/projects')}
                sx={{color: 'white', display: 'block' ,fontFamily:'Montserrat',fontWeight:'bold',fontSize:'large'}}
              >
                Projects
              </StyledButton>
              <StyledButton onClick={()=>window.location.href = 'https://cyan-kristan-70.tiiny.site/'}
                sx={{color: 'white', display: 'block' ,fontFamily:'Montserrat',fontWeight:'bold',fontSize:'large'}}>
                Resume
              </StyledButton>
             </Stack>
       </Toolbar>
         </Container>
    </AppBar>
  )
}
export default Header