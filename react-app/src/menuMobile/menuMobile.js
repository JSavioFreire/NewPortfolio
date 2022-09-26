import './menuMobile.css'
import { BiMenu } from 'react-icons/bi';
import {useEffect, useState} from 'react';

export default function MenuMobile(){
    const [menuMobile, setMenuMobile] = useState(false);

    useEffect(()=>{
        const men = ()=>{
            if(window.scrollY>200){
                setMenuMobile(true);
            }
            else{
                setMenuMobile(false)
            }
        }
        window.addEventListener('scroll', men)
    })

       let menu = document.querySelector('.menu')

        const menuLateral = ()=>{
            
        
        }
    

    
    return(
        <div className={menuMobile ? ' ' : 'display'}>
            <div className ={menuMobile ? 'menuMobile' : ' '}>
                <div className='btMenu'>
                    <BiMenu onClick={menuLateral()}/>
                </div>
                
            </div>
            <div className='menu'>
                <ul>
                    <li><a href="#header">Home</a></li>
                    <li><a href="#quemSou">Sobre</a></li>
                    <li><a href="#linhaTempo">Linha do Tempo</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </div>
        </div>
    )
    }
