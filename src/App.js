
import React from 'react';
import { styled } from '@mui/material/styles';
import Header from './components/Header';
import Description from './components/Description'
import Education from './components/Education';
import Skills from './components/Skills'
import Projects from './components/Projects';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
const StyledDiv=styled('div')({
    height:"100vh",
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    textAlign:{xs:'center'}
})
function Home() {
    return (
      <StyledDiv >
        <Header />
        <Description />
        <Education />
        <Skills />
        <div style={{ marginTop: "300px" }}>Hello</div>
      </StyledDiv>
    );
  }
export default function App(){
    return(
        <BrowserRouter>
        <div>
        <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/projects" element={<Projects/>}/>
        </Routes>
        </div>
        </BrowserRouter>
       
       )
}
