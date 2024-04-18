import React from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import Button from '@mui/material/Button';
import { Stack, CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import ToggleColorMode from '../sign-in-side/ToggleColorMode';
import yourIcon1 from './Financial Growth Analysis.png';
import yourIcon2 from './Financial Analytics.png';
import yourIcon3 from './High Risk.png';
import image3 from './image 3.png';
import './Dews.css';
import getSignInSideTheme from "../sign-in-side/getSignInSideTheme";
import SearchBanner from "./SearchBanner/SearchBanner";

function Dews() {
  const [mode, setMode] = React.useState('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const SignInSideTheme = createTheme(getSignInSideTheme(mode));

  return (
    <ThemeProvider theme={SignInSideTheme}>
      <CssBaseline />
      <Stack
        direction="column"
        justifyContent="space-between"
        sx={(theme) => ({
          backgroundImage:
            theme.palette.mode === 'light'
              ? 'radial-gradient(ellipse at 70% 51%, #f0f7ff, #fff)'
              : 'radial-gradient(at 70% 51%, rgba(2,41,79,0.5), rgb(1, 6, 11))',
          backgroundSize: 'cover',
          height: { xs: 'auto', md: '100vh' },
          pb: { xs: 12, sm: 0 },
        })}
        component="main"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            position: { sm: 'static', md: 'fixed' },
            width: '100%',
            p: { xs: 2, sm: 4 },
          }}
        >
          <Button
            startIcon={<ArrowBackRoundedIcon />}
            component="a"
            href="/dews"
          >
            Back
          </Button>
          <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
   
        </Stack>

        <div className="Dews">
          <div className="content">
            <h2>CHOOSE HOW TO PREDICT STUDENT'S DROP OUT</h2>
            <h1>DEWS</h1>
            <p>In order to improve student retention rates, the development and implementation of predictive models for identifying students at risk of dropping out have become increasingly vital. These models leverage data analytics, machine learning, and large language model techniques to analyze various factors influencing student persistence and success. Below are descriptions of the employed models:</p>
          </div>
          <SearchBanner />
          <div className="boxes">
            <div className="box">
              {/* <img src={yourIcon1} alt="Icon 1" /> */}
              <h3>ML 1</h3>
              <p>The baseline machine learning model achieves a <b>78%</b> overall accuracy in predicting student outcomes. It successfully identifies <b>58%</b> of the students who drop out, showing a recall rate of 58%. Moreover, the model demonstrates a precision of 66% in correctly identifying true dropouts among the predicted cases.</p>
            </div>
            <div className="box">
              {/* <img src={yourIcon2} alt="Icon 2" /> */}
              <h3>ML 2</h3>
              <p>The Undersampling machine learning model achieves a 68% overall accuracy in predicting student outcomes. It successfully identifies 89% of the students who drop out, showing a recall rate of 89%. Moreover, the model demonstrates a precision of 48% in correctly identifying true dropouts among the predicted cases.</p>
            </div>
            <div className="box">
              {/* <img src={yourIcon3} alt="Icon 3" /> */}
              <h3>LLM 1</h3>
              <p>The Zephyr Large language model achieves a 67% overall accuracy in predicting student outcomes. It successfully identifies 77% of the students who drop out, showing a recall rate of 77%. Moreover, the model demonstrates a precision of 16% in correctly identifying true dropouts among the predicted cases.</p>
            </div>
          </div>
          {/* <div className="context">
            <div className="left-section">
              <h1>AI for Education</h1>
              <p>Elevate your educational strategies with personalized advisory services. Our team of data scientists works alongside you, turning complex data into clear, actionable insights for improved student outcomes.</p>
              <button className="blue-button">Track Student</button>
            </div>
            <div className="right-section">
              <img src={image3} alt="image3" />
            </div>
          </div> */}
        </div>
      </Stack>
    </ThemeProvider>
  );
}

export default Dews;
