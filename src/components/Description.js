
import React from 'react';
import TypingEffect from './TypingEffect';
import Logos from '../images/waving-hand-sign.svg';
import portfolio from '../images/portfolio.png';
import '../Animation.css';
import { Container, styled, Typography, useMediaQuery, useTheme } from '@mui/material';

const StyledDiv = styled('div')(({ theme }) => ({
    height: "200px",
    marginTop: "80px",
    [theme.breakpoints.down('sm')]: {
        marginTop: "40px",
        height: "150px",
    },
}));

const StyledImage = styled('img')(({ theme }) => ({
    borderRadius: '8px',
    boxShadow: '0 0 10px 5px rgba(255, 105, 180, 0.5)',
    width: "40%",
    height: "40%",
    [theme.breakpoints.down('sm')]: {
        width: "70%",
        height: "70%",
        display:'none',
    },
    [theme.breakpoints.up('md')]: {
        width: "50%",
        height: "50%",
    },
    [theme.breakpoints.up('lg')]: {
        width: "40%",
        height: "40%",
    },
}));

const Description = () => {
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <Container>
            <StyledDiv>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                        color: 'white',
                        marginTop: { xs: '40px', md: '80px' },
                        fontFamily: 'Montserrat',
                        textShadow: '0 0 20px rgba(79,76,247, 0.8)',
                        transition: 'color 0.3s, text-shadow 0.3s'
                    }}
                >
                    Greetings, I'm VANSHIKA,
                </Typography>
                <TypingEffect />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', position: 'relative' }}>
                    <Typography
                        variant="subtitle2"
                        sx={{
                            marginLeft: { xs: '0px', md: '0px', lg: '-30px' },
                            textShadow: '0 0 2px rgba(255, 255, 255, 0.8)',
                            width: { xs: '100%', md: '50%' },
                            color: 'white',
                            fontFamily: 'Montserrat',
                            fontSize: { xs: 'small', md: 'medium' },
                        }}
                    >
                        I'm a dedicated third-year student with a passion for web development and designing. I am fascinated by UI/UX principles and strive to create designs that resonate with users on a meaningful level.
                        Beyond my love for web design, I’m captivated by the potential of machine learning to transform industries and solve complex problems.
                    </Typography>
                    <StyledImage src={portfolio}  className="moving-image" />
                </div>
            </StyledDiv>
        </Container>
    );
}

export default Description;
