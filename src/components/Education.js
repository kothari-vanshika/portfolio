
import React from 'react';
import { Container, Paper, Typography, Grid, Link, Box, CardContent, Card } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const card = (
    <>
        <CardContent>
            <Box
                sx={{
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px 5px rgba(79, 76, 247, 0.7)',
                    padding: '20px',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <SchoolIcon sx={{ fontSize: 48, mr: 2 }} />
                    <Typography
                        variant="h5"
                        sx={{
                            fontFamily: 'Montserrat',
                            fontWeight: 'bold',
                            textShadow: '0 0 2px rgba(255, 255, 255, 0.8)',
                        }}
                    >
                        Bachelor of Technology
                    </Typography>
                </div>
                <Link
                    href="https://www.iiests.ac.in/"
                    underline="none"
                    variant="h6"
                    sx={{
                        cursor: 'pointer',
                        textShadow: '0 0 2px rgba(255, 255, 255, 0.8)',
                        color: 'white',
                        marginTop: '15px',
                        marginBottom: '15px',
                        fontFamily: 'Montserrat',
                        textAlign: 'center',
                    }}
                >
                    Pursuing The Above Degree From The Indian Institute of Engineering Science and Technology, Shibpur
                </Link>
            </Box>
            <Grid container spacing={4} sx={{ marginTop: '50px' }}>
                <Grid item xs={12} md={6}>
                    <Paper
                        sx={{
                            color: 'white',
                            p: 2,
                            textAlign: 'center',
                            backgroundColor: 'transparent',
                            boxShadow: '0 0 10px 5px rgba(79, 76, 247, 0.7)',
                            borderRadius: '10px',
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <SchoolIcon sx={{ fontSize: 48, mr: 2 }} />
                            <Typography
                                variant="h5"
                                sx={{
                                    fontFamily: 'Montserrat',
                                    fontWeight: 'bold',
                                    textShadow: '0 0 2px rgba(255, 255, 255, 0.8)',
                                }}
                            >
                                Higher Secondary Education
                            </Typography>
                        </div>
                        <Link
                            href="https://mgschoolkolkata.edu.in/"
                            underline="none"
                            variant="h6"
                            sx={{
                                cursor: 'pointer',
                                textShadow: '0 0 2px rgba(255, 255, 255, 0.8)',
                                color: 'white',
                                marginTop: '15px',
                                marginBottom: '15px',
                                fontFamily: 'Montserrat',
                            }}
                        >
                            The Maheshwari Girls' School
                        </Link>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper
                        sx={{
                            color: 'white',
                            p: 2,
                            textAlign: 'center',
                            backgroundColor: 'transparent',
                            boxShadow: '0 0 10px 5px rgba(79, 76, 247, 0.7)',
                            borderRadius: '10px',
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <SchoolIcon sx={{ fontSize: 48, mr: 2 }} />
                            <Typography
                                variant="h5"
                                sx={{
                                    fontFamily: 'Montserrat',
                                    fontWeight: 'bold',
                                    textShadow: '0 0 2px rgba(255, 255, 255, 0.8)',
                                }}
                            >
                                Secondary Education
                            </Typography>
                        </div>
                        <Link
                            href="https://mgschoolkolkata.edu.in/"
                            underline="none"
                            variant="h6"
                            sx={{
                                cursor: 'pointer',
                                textShadow: '0 0 2px rgba(255, 255, 255, 0.8)',
                                color: 'white',
                                marginTop: '15px',
                                marginBottom: '15px',
                                fontFamily: 'Montserrat',
                            }}
                        >
                            The Maheshwari Girls' School
                        </Link>
                    </Paper>
                </Grid>
            </Grid>
        </CardContent>
    </>
);

const Education = () => {
    return (
        <Container>
            <div style={{ marginTop: "250px", color: 'white' }}>
                <Typography
                    variant='h4'
                    sx={{
                        fontFamily: 'Montserrat',
                        fontWeight: 'bold',
                        textShadow: '0 0 20px rgba(79,76,247, 0.8)',
                        transition: 'color 0.3s, text-shadow 0.3s',
                        // marginTop:{xs:'500px',md:'400px'}
                    }}
                >
                    EDUCATION
                </Typography>
            </div>
            <Card
                variant="outlined"
                sx={{
                    color: 'white',
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    marginTop: '40px',
                }}
            >
                {card}
            </Card>
        </Container>
    );
}

export default Education;




    
