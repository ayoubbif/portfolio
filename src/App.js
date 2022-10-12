import React, { useEffect } from 'react';
import {createGlobalStyle,ThemeProvider} from  'styled-components';
import { styleReset, AppBar, Toolbar, Window, WindowContent, WindowHeader, Button } from 'react95';
import original from 'react95/dist/themes/original';
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
//STYLE
import './App.css';
import Desktop from './components/Desktop/Desktop';
import NavBar from './components/Desktop/NavBar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Profile from './components/Profile/Profile';
import Globe from './components/3D/Globe/Globe';
import Terminal from './components/Terminal/Terminal';
import Crypto from './components/Crypto/Crypto';
import Contact from './components/Contact/Contact';
import AudioWindow from './components/AudioVIZ/AudioWindow';

import AboutModalButton from './components/About/AboutModalButton';
import SkillsModalButton from './components/Skills/SkillsModalButton';
import GlobeModalButton from './components/3D/Globe/GlobeModalButton';

import Store from './store';
import { startupSound } from './utils';

import {
  BrowserView,
  MobileView,
  isMobile,
} from "react-device-detect";


const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 300;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;

const sound = startupSound();

function App() {

  useEffect(() => {
    const ss = localStorage.getItem('startup_sound');
    if (ss === 'true' || ss === null) {
      sound.play();
    }
  }, []);
  if (isMobile) {
    return (
      <MobileView>
        <Window style={{
              minWidth: "fit-content",
              height: "fit-content",
              position: "absolute"}} >
          <WindowHeader active={false} className='window-header'>
            <span>not-active.exe</span>
          </WindowHeader>
          <WindowContent>
            <p style={{fontSize: '1.8em'}}>Hello there stranger, unfortunately my website is designed only for desktop browsers!</p>    
            <strong style={{fontSize: '1.6em'}}>
              But I promise that the mobile version will be available soon! Thank you for passing by!
            </strong>
          </WindowContent>
        </Window>
 
        
      </MobileView>
    )
  }
  return (
      <BrowserView>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <Store>
            <nav>
              
              <footer>
              <AppBar style={{ top: '93vh', bottom: '0vh', zIndex:1 }}>
                    <Toolbar style={{justifyContent: 'space-between'}}>
                      <NavBar>
                        <AboutModalButton/>
                        <GlobeModalButton/>
                        <SkillsModalButton/>
                      </NavBar>
                    </Toolbar>
              </AppBar>
              </footer>

            </nav>

            <main>
              <Desktop></Desktop>
              <About></About>
              <Skills></Skills>
              <Profile></Profile>
              <Globe></Globe>
              <AudioWindow></AudioWindow>
              <Crypto></Crypto>
              <Contact></Contact>
              <Terminal></Terminal>
            </main>
        </Store>
      </ThemeProvider>
      </BrowserView>

  );

}


export default App;