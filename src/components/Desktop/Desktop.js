import React, { Fragment, useContext } from 'react';
import './Desktop.css'
import Icons from './Icons';

import contactIcon from '../../assets/icons/contact.png';
import userIcon from '../../assets/icons/userIcon.png';
import skillsIcon from '../../assets/icons/skills.png';
import globeIcon from '../../assets/icons/globe.png';
import audioIcon from '../../assets/icons/sound.png';
import pcIcon from '../../assets/icons/pc.png';

import Button from '@mui/material/Button';

import { StoreContext } from '../../store';

const Desktop = () => {
	const [state, dispatch] = useContext(StoreContext);
	const _handleIconClick = name => {
        switch (name) {
            case 'skills':
                dispatch ({ type: 'SET_ACTIVE_MODAL', payload: 'skills' });
                dispatch ({ type: 'SET_SKILLS_MODAL', payload: true });
                dispatch ({ type: 'SET_HIDE_SKILLS_MODAL', payload: false });
                break;
            case 'contact':
                dispatch ({ type: 'SET_ACTIVE_MODAL', payload: 'contact' });
                dispatch ({ type: 'SET_CONTACT_MODAL', payload: true });
                dispatch ({ type: 'SET_HIDE_CONTACT_MODAL', payload: false });
                break;
            case 'profile':
                dispatch ({ type: 'SET_ACTIVE_MODAL', payload: 'profile' });
                dispatch ({ type: 'SET_PROFILE_MODAL', payload: true });
                dispatch ({ type: 'SET_HIDE_PROFILE_MODAL', payload: false });
                break;
            case 'globe':
                dispatch ({ type: 'SET_ACTIVE_MODAL', payload: 'globe' });
                dispatch ({ type: 'SET_GLOBE_MODAL', payload: true });
                dispatch ({ type: 'SET_HIDE_GLOBE_MODAL', payload: false });
                break;
            case 'audio':
                dispatch ({ type: 'SET_ACTIVE_MODAL', payload: 'audio' });
                dispatch ({ type: 'SET_AUDIO_WINDOW_MODAL', payload: true });
                dispatch ({ type: 'SET_HIDE_AUDIO_WINDOW_MODAL_BUTTON', payload: false });
                break;  
            case 'projects':
                dispatch ({ type: 'SET_ACTIVE_MODAL', payload: 'projects' });
                dispatch ({ type: 'SET_PROJECTS_MODAL', payload: true });
                dispatch ({ type: 'SET_HIDE_PROJECTS_MODAL_BUTTON', payload: false });
                break;  
            default:
                return null;
        }
    };

    return(
        <Fragment>
            <div className="desktop-applications">
				<Button onClick={() => _handleIconClick('contact')}>
					<Icons icon={contactIcon} text="Contact"></Icons>
				</Button>
					
				<Button onClick={() => _handleIconClick('profile')}>
					<Icons icon={userIcon} text="Profile"></Icons>
				</Button>

				<Button onClick={() => _handleIconClick('skills')}>
					<Icons icon={skillsIcon} text="Skills"></Icons>
				</Button>

                <Button onClick={() => _handleIconClick('projects')}>
					<Icons icon={pcIcon} text="Projects"></Icons>
				</Button>

				<Button onClick={() => _handleIconClick('globe')}>
					<Icons icon={globeIcon} text="Globe"></Icons>
				</Button>

                <Button onClick={() => _handleIconClick('audio')}>
					<Icons icon={audioIcon} text="AudioVIZ"></Icons>
				</Button>
			</div>
        </Fragment>
    )
}

export default Desktop;