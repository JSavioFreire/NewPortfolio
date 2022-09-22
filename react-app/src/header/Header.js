import './header.css'
import { AiFillGithub,AiFillLinkedin,AiOutlineInstagram,AiOutlineWhatsApp } from 'react-icons/ai';
import {FiMail} from 'react-icons/fi'


export default function Header(){


    return(
        <div className='header'>
            <div className='gradient'>
                <div className='center'>
                    <div className="text">
                        <h1>Sávio Freire</h1>
                        <p>Desenvolvedor Front-End</p>
                    </div>
                    <div className= 'icons'>
                        <AiFillGithub/>
                        <AiFillLinkedin/>
                        <AiOutlineInstagram/>
                        <AiOutlineWhatsApp/>
                        <FiMail/>
                    </div>
                </div>
            </div>
        </div>
    )
}