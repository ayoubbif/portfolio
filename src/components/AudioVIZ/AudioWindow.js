import React, { useContext, useState } from 'react';
import { WindowContent, Window, WindowHeader, Cutout, Button } from 'react95';

import Draggable from 'react-draggable';
import './AudioWindow.css';
import {FaPlay} from 'react-icons/fa';
import {CgGames} from 'react-icons/cg';

import { StoreContext } from '../../store';
import AudioViz from './AudioViz';


function Overlay() {
    const [ready, set] = useState(false);


    return (
      <>
        {ready && <AudioViz/>}
          <div className="stack">
            <Button onClick={() => set(prev => !prev)}>
              <FaPlay/>
            </Button>
          </div>
      </>
    )
  }

const AudioWindow = () => {
    const [state, dispatch] = useContext(StoreContext);

    const _handleClose = () => {
        dispatch({type: 'SET_AUDIO_WINDOW_MODAL', payload: false});
        dispatch({type: 'SET_HIDE_AUDIO_WINDOW_MODAL_BUTTON', payload: true});
    };
    const _handleClick = () => {
        dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'audio' });
      };

    return(
        <Draggable>
            <Window style={{
              width: "fit-content",
              minWidth: "fit-content",
              height: "fit-content",
              position: "absolute",
              left: "5%",
              top: "10%",
              overflowY: "auto",
              display: state.AudioWindowModal ? 'block' : 'none',
            }}
            onClick={_handleClick}>


            <WindowHeader className='window-header'>
                <span>audioViz.exe</span>
                <div className='window-state'>
                    <Button onClick={_handleClose}>
                        X
                    </Button>
                </div>
            </WindowHeader>

            <WindowContent>
                <Cutout style={{width: '450px', height: 'fit-content'}}>
                    <Overlay/>
                </Cutout>
            </WindowContent>

            </Window>
        </Draggable>

    );
};

export default AudioWindow;