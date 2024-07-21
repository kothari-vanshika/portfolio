
import { Container, Stack, Typography, styled, Link, useMediaQuery, useTheme } from '@mui/material';
import '../Animation.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { StyledTypography } from './Skills';
import { CardActionArea } from '@mui/material';
import bot from '../images/bot.png';
import git from '../images/git.png';
import crypto from '../images/crypto.png';
import link from '../images/link.png';
import Todo from '../images/Todo.png';
import book from '../images/book.png';
import tictactoe from '../images/tictactoe.png';
import rock from '../images/rock.png';

const StyledCard = styled(Card)({
  maxWidth: 500,
  transition: 'all 0.3s ease',
  height: {xs:'600px',md:'600px',lg:'350px'},
  borderRadius: '10px',
  boxShadow: '0 0 10px 5px rgba(79, 76, 247, 0.7)',
  '&:hover': {
    transform: 'scale(1.1)',
  },
  backgroundColor: 'transparent',
  color: 'white',
});

const Projects = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Container>
      <StyledTypography variant="h4" style={{ marginTop: '20px', textAlign: 'center' }}> PROJECTS</StyledTypography>
      <Stack direction={isSmallScreen ? 'column' : 'row'} spacing={6} style={{ marginLeft: '40px', marginTop: '30px', marginBottom: '50px' }}>
        <StyledCard >
          <CardActionArea>
            <CardContent>
              <img className='moving-image' style={{ marginLeft: isSmallScreen||isMediumScreen?'5px':'130px',borderRadius: '50%', marginTop: '10px'}} src={bot}></img>
              <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 'bold', fontFamily: 'Montserrat', textShadow: '0 0 20px rgba(79,76,247, 0.8)' }}>
                CHATBOT
              </Typography>
              <Typography variant="subtitle1" color="white" sx={{ fontFamily: 'Montserrat' }}>
                The chatbot fetches the answer from the OpenAI LLM model based on the query and context
                provided to it.
              </Typography>
              <Typography variant="h6" sx={{ fontFamily: 'Montserrat', display: 'flex', alignItems: 'center' }}>
                <img src={git} style={{ marginTop: '20px', borderRadius: '50%', height: '50px', width: '50px', '&:hover': { textDecoration: 'underline' } }}></img>
                <Link href="https://github.com/kothari-vanshika/chatbot-project-" underline='none' sx={{ marginTop: '25px', marginLeft: '20px', color: 'white', '&:hover': { textShadow: '0 0 20px rgba(79,76,247, 0.8)' } }}>Chatbot</Link>
              </Typography>
            </CardContent>
          </CardActionArea>
        </StyledCard>
        <StyledCard >
          <CardActionArea>
            <CardContent >
              <img className='moving-image' style={{ borderRadius: '50%', width: '130px', height: '130px', marginTop: '10px', marginLeft: isSmallScreen||isMediumScreen?'5px':'130px' }} src={crypto}></img>
              <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 'bold', fontFamily: 'Montserrat', textShadow: '0 0 20px rgba(79,76,247, 0.8)' }}>
                CRYPTOCURRENCY TRACKER
              </Typography>
              <Typography variant="subtitle1" color="white" sx={{ fontFamily: 'Montserrat' }}>
                Keeps a track of each cryptocoin and the trending coins. It also provides the data and historical chat of each coin.
              </Typography>
              <div style={{display: 'flex', alignItems: 'center' ,flexDirection:(isSmallScreen||isMediumScreen)?'column':'row'}}>
                <img src={git} style={{ marginTop: '20px', borderRadius: '50%', height: '50px', width: '50px', alignSelf:isSmallScreen||isMediumScreen?'start':'center'}}></img>
                <Link href="https://github.com/kothari-vanshika/Cryptoverse" underline='none' sx={{ alignSelf:{xs:'start',md:'start',lg:'center'},marginLeft: '20px', fontFamily: 'Montserrat', fontSize: 'large', fontWeight: '600', marginRight: '80px', color: 'white', '&:hover': { textShadow: '0 0 20px rgba(79,76,247, 0.8)' } }}>Cryptoverse</Link>
                <img src={link} style={{ marginTop: '20px', borderRadius: '50%', height: '50px', width: '50px' ,alignSelf:isSmallScreen||isMediumScreen?'start':'center'}}></img>
                <Link href="https://currency-tracker-crypto.netlify.app/" underline='none' sx={{ alignSelf:{xs:'start',md:'start',lg:'center'},marginLeft: '20px', fontFamily: 'Montserrat', fontSize: 'large', fontWeight: '600', color: 'white', '&:hover': { textShadow: '0 0 20px rgba(79,76,247, 0.8)' } }}>Cryptoverse</Link>
              </div>
            </CardContent>
          </CardActionArea>
        </StyledCard>
      </Stack>
      <Stack direction={isSmallScreen ? 'column' : 'row'} spacing={6} style={{ marginLeft: '40px', marginBottom: '50px' }}>
        <StyledCard >
          <CardActionArea>
            <CardContent>
              <img className='moving-image' style={{ marginLeft: isSmallScreen||isMediumScreen?'5px':'130px',borderRadius: '50%', height: '140px', width: '140px', marginTop: '10px'}} src={Todo}></img>
              <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 'bold', fontFamily: 'Montserrat', textShadow: '0 0 20px rgba(79,76,247, 0.8)' }}>
                TODO LIST
              </Typography>
              <Typography variant="subtitle1" color="white" sx={{ fontFamily: 'Montserrat' }}>
                Maintains a TODO List of the user who can add or delete tasks
              </Typography>
              <div style={{display: 'flex', alignItems: 'center' ,flexDirection:(isSmallScreen||isMediumScreen)?'column':'row'}}>
                <img src={git} style={{ alignSelf:isSmallScreen||isMediumScreen?'start':'center',marginTop: '20px', borderRadius: '50%', height: '50px', width: '50px' }}></img>
                <Link href="https://github.com/kothari-vanshika/todolist" underline='none' sx={{ alignSelf:{xs:'start',md:'start',lg:'center'},marginLeft: '20px', fontFamily: 'Montserrat', fontSize: 'large', fontWeight: '600', marginRight: '80px', color: 'white', '&:hover': { textShadow: '0 0 20px rgba(79,76,247, 0.8)' } }}>TODO List</Link>
                <img src={link} style={{ marginTop: '20px', borderRadius: '50%', height: '50px', width: '50px' ,alignSelf:isSmallScreen||isMediumScreen?'start':'center'}}></img>
                <Link href="https://javascriptbear.github.io/todo_react_app/" underline='none' sx={{ alignSelf:{xs:'start',md:'start',lg:'center'},marginLeft: '20px', fontFamily: 'Montserrat', fontSize: 'large', fontWeight: '600', color: 'white', '&:hover': { textShadow: '0 0 20px rgba(79,76,247, 0.8)' } }}>TODO List</Link>
              </div>
            </CardContent>
          </CardActionArea>
        </StyledCard>
        <StyledCard >
          <CardActionArea>
            <CardContent>
              <img className='moving-image' style={{ marginLeft: isSmallScreen||isMediumScreen?'5px':'130px',borderRadius: '50%', height: '120px', width: '120px', marginTop: '10px' }} src={book}></img>
              <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 'bold', fontFamily: 'Montserrat', textShadow: '0 0 20px rgba(79,76,247, 0.8)' }}>
                BOOK RECOMMENDER
              </Typography>
              <Typography variant="subtitle1" color="white" sx={{ fontFamily: 'Montserrat' }}>
                Displays 50 most popular books according to the rating and recommends 6 most similar books to the book searched by the user.
              </Typography>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={git} style={{ marginTop: '20px', borderRadius: '50%', height: '50px', width: '50px' }}></img>
                <Link href="https://github.com/kothari-vanshika/BookRecommendation" underline='none' sx={{ marginLeft: '20px', fontFamily: 'Montserrat', fontSize: 'large', fontWeight: '600', marginRight: '80px', color: 'white', '&:hover': { textShadow: '0 0 20px rgba(79,76,247, 0.8)' } }}>Recommender</Link>
                {/* <img src={link} style={{ marginTop: '20px', borderRadius: '50%', height: '50px', width: '50px' }}></img>
                <Link href="https://currency-tracker-crypto.netlify.app/" underline='none' sx={{ marginLeft: '20px', fontFamily: 'Montserrat', fontSize: 'large', fontWeight: '600', color: 'white', '&:hover': { textShadow: '0 0 20px rgba(79,76,247, 0.8)' } }}>Cryptoverse</Link> */}
              </div>
            </CardContent>
          </CardActionArea>
        </StyledCard>
      </Stack>
      <Stack direction={isSmallScreen ? 'column' : 'row'} spacing={6} style={{ marginLeft: '40px', marginBottom: '50px' }}>
        <StyledCard >
          <CardActionArea>
            <CardContent>
              <img className='moving-image' style={{marginLeft: isSmallScreen||isMediumScreen?'5px':'140px', borderRadius: '50%', width: '120px', height: '120px', marginTop: '10px' }} src={tictactoe}></img>
              <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 'bold', fontFamily: 'Montserrat', textShadow: '0 0 20px rgba(79,76,247, 0.8)' }}>
                TICTACTOE
              </Typography>
              <Typography variant="subtitle1" color="white" sx={{ fontFamily: 'Montserrat' }}>
                Tictactoe game website using HTML,CSS and JavaScript.
              </Typography>
              <div style={{ display: 'flex', alignItems: 'center' ,flexDirection:(isSmallScreen||isMediumScreen)?'column':'row'}}>
                <img src={git} style={{ alignSelf:isSmallScreen||isMediumScreen?'start':'center',marginTop: '20px', borderRadius: '50%', height: '50px', width: '50px' }}></img>
                <Link href="https://github.com/kothari-vanshika/Tictactoe" underline='none' sx={{alignSelf:{xs:'start',md:'start',lg:'center'}, marginLeft: '20px', fontFamily: 'Montserrat', fontSize: 'large', fontWeight: '600', marginRight: '80px', color: 'white', '&:hover': { textShadow: '0 0 20px rgba(79,76,247, 0.8)' } }}>TicTacToe</Link>
                <img src={link} style={{ alignSelf:isSmallScreen||isMediumScreen?'start':'center',marginTop: '20px', borderRadius: '50%', height: '50px', width: '50px' }}></img>
                <Link href="https://euphonious-snickerdoodle-26e739.netlify.app/" underline='none' sx={{ alignSelf:{xs:'start',md:'start',lg:'center'},marginLeft: '20px', fontFamily: 'Montserrat', fontSize: 'large', fontWeight: '600', color: 'white', '&:hover': { textShadow: '0 0 20px rgba(79,76,247, 0.8)' } }}>TicTacToe</Link>
              </div>
            </CardContent>
          </CardActionArea>
        </StyledCard>
        <StyledCard >
          <CardActionArea>
            <CardContent>
              <img className='moving-image' style={{ marginLeft: isSmallScreen||isMediumScreen? '5px':'130px',borderRadius: '50%', width: '150px', height: '150px', marginTop: '10px' }} src={rock}></img>
              <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 'bold', fontFamily: 'Montserrat', textShadow: '0 0 20px rgba(79,76,247, 0.8)' }}>
                ROCK PAPER SCISSORS
              </Typography>
              <Typography variant="subtitle1" color="white" sx={{ fontFamily: 'Montserrat' }}>
                A Rock, Paper, Scissors game with HTML,CSS and JavaScript.
              </Typography>
              <div style={{ display: 'flex', alignItems: 'center' ,flexDirection:(isSmallScreen||isMediumScreen)?'column':'row'}}>
                <img src={git} style={{ alignSelf:isSmallScreen||isMediumScreen?'start':'center',marginTop: '20px', borderRadius: '50%', height: '50px', width: '50px' }}></img>
                <Link href="https://github.com/kothari-vanshika/RockPaperScissor" underline='none' sx={{ alignSelf:{xs:'start',md:'start',lg:'center'},marginLeft: '20px', fontFamily: 'Montserrat', fontSize: 'large', fontWeight: '600', marginRight: '80px', color: 'white', '&:hover': { textShadow: '0 0 20px rgba(79,76,247, 0.8)' } }}>Shoot</Link>
                <img src={link} style={{alignSelf:isSmallScreen||isMediumScreen?'start':'center', marginTop: '20px', borderRadius: '50%', height: '50px', width: '50px' }}></img>
                <Link href="https://ubiquitous-empanada-b65eea.netlify.app/" underline='none' sx={{ alignSelf:{xs:'start',md:'start',lg:'center'},marginLeft: '20px', fontFamily: 'Montserrat', fontSize: 'large', fontWeight: '600', color: 'white', '&:hover': { textShadow: '0 0 20px rgba(79,76,247, 0.8)' } }}>Shoot</Link>
              </div>
            </CardContent>
          </CardActionArea>
        </StyledCard>
      </Stack>
    </Container>
  );
}

export default Projects;
