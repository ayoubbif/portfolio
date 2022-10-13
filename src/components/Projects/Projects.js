import React, { useContext } from 'react';
import { Select, WindowContent, Window, WindowHeader, Button, Tab, Tabs, TabBody, Anchor, Fieldset, Cutout } from 'react95';

import Draggable from 'react-draggable';
import './Projects.css';
import { StoreContext } from '../../store';

import {AiFillGithub } from 'react-icons/ai';

const Projects = () => {
    const [tabstate, settabState] = React.useState({
        activeTab: 0,
      });
    const handleChange = (e, value) => settabState({ activeTab: value });
    const { activeTab } = tabstate;
    
    //STORE
    const [state, dispatch] = useContext(StoreContext);

    const _handleClose = () => {
        dispatch({type: 'SET_PROJECTS_MODAL', payload: false});
        dispatch({type: 'SET_HIDE_PROJECTS_MODAL_BUTTON', payload: true});
    };
    const _handleClick = () => {
        dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'projects' });
      };

    const optionsPortfolio = [
      { value: 1, label:'JavaScript'},  
      { value: 2, label:'React.js'},  
      { value: 3, label:'Three.js'},  
      { value: 4, label:'CSS'}  
    ];

    const optionsZombieFPS = [
        { value: 1, label:'Unity3D'},  
        { value: 2, label:'C#'},   
    ];

    const optionsMultiplayerFPS = [
        { value: 1, label:'Unity3D'},  
        { value: 2, label:'C#'},
        { value: 3, label:'Photon'},
        { value: 4, label:'Agora SDK'},   
      ];
    
    const onChange = (evt, nextSelection) => console.log(evt, nextSelection);
   
    return(
        <Draggable>
            <Window resizable style={{
              width: "20%",
              minWidth: "fit-content",
              height: "fit-content",
              position: "fixed",
              left: '200px',
              top: "200px",
              zIndex: 1,
              display: state.ProjectsModal ? 'block' : 'none',
            }}
            onClick={_handleClick}>
       
          
            <WindowHeader className='window-header'>
                <span>projects.exe</span>
                <div className='window-state'>
                    <Button onClick={_handleClose}>
                        X
                    </Button>
                </div>  
            </WindowHeader>
            <WindowContent>
                <Tabs value={activeTab} onChange={handleChange}>
                    <Tab value={0}>Ayoub's Computer</Tab>
                    <Tab value={1}>Zombie FPS</Tab>
                    <Tab value={2}>Atlas</Tab>
                </Tabs>
                    <TabBody style={{ height: 'fit-content', width: '500px' }}>
                    {activeTab === 0 && (
                    <div>
                        <p style={{fontSize: '1.0rem'}}>
                            You're already on it, it's this web application where I showcase my web development skills.
                            <br/>
                            <br/>
                            This web site have been made using :  
                        </p>
                        <br/>
                        <Fieldset>
                            <Select
                                defaultValue={1}
                                options={optionsPortfolio}
                                menuMaxHeight={160}
                                width='100%'
                                onChange={onChange}
                                onOpen={e => console.log('open', e)}
                                onClose={e => console.log('close', e)}
                                onBlur={e => console.log('blur', e)}
                                onFocus={e => console.log('focus', e)}>
                            </Select>
                        </Fieldset>
                        <br/>
                        <Fieldset label='Github Repo'>
                            <Button style={{width: '100%'}}
                                    onClick={()=> window.open("https://github.com/ayoubbif/portfolio", "_blank")}>
                                <AiFillGithub 
                                    style={{height:"30px", width:"30px"}} 
                                />
                            </Button>
                        </Fieldset>
                    </div>
                    )}
                    {activeTab === 1 && (
                    <div>
                        <p style={{fontSize: '1.0rem'}}>
                        This is an FPS Zombie themed game built with Unity. The goal of the game is to stay alive as long as you can!
                            <br/>
                            <br/>
                                <Cutout>
                                    <img className='image-project' src="https://user-images.githubusercontent.com/77907697/129153828-c72adfdf-e3cb-4456-8b94-d77667007441.PNG"></img>
                                </Cutout>
                            <br/>
                            This game have been made using :  
                        </p>
                        <br/>
                        <Fieldset>
                            <Select
                                defaultValue={1}
                                options={optionsZombieFPS}
                                menuMaxHeight={160}
                                width='100%'
                                onChange={onChange}
                                onOpen={e => console.log('open', e)}
                                onClose={e => console.log('close', e)}
                                onBlur={e => console.log('blur', e)}
                                onFocus={e => console.log('focus', e)}>
                            </Select>
                        </Fieldset>
                        <br/>
                        <Fieldset label='Github Repo'>
                            <Button style={{width: '100%'}}
                                    onClick={()=> window.open("https://github.com/ayoubbif/Zombieland", "_blank")}>
                                <AiFillGithub 
                                    style={{height:"30px", width:"30px"}} 
                                />
                            </Button>
                        </Fieldset>
                    </div>
                    )}
                    {activeTab === 2 && (
                    <div>
                        <p style={{fontSize: '1.0rem'}}>
                        This is a multiplayer FPS game built with Unity.
                            <br/>
                            <br/>
                                <Cutout>
                                    <img className='image-project' src="atlasmultiplayer.jpg"></img>
                                </Cutout>
                            <br/>
                            This game have been made using :  
                        </p>
                        <br/>
                        <Fieldset>
                            <Select
                                defaultValue={1}
                                options={optionsMultiplayerFPS}
                                menuMaxHeight={160}
                                width='100%'
                                onChange={onChange}
                                onOpen={e => console.log('open', e)}
                                onClose={e => console.log('close', e)}
                                onBlur={e => console.log('blur', e)}
                                onFocus={e => console.log('focus', e)}>
                            </Select>
                        </Fieldset>
                        <br/>
                    </div>
                    )}
                    </TabBody>
            </WindowContent>
            </Window>
        </Draggable>
    );
};

export default Projects;