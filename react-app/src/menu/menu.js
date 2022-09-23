import './menu.css'
import {useEffect, useState} from 'react'

export default function Menu(){
    const [ativar, setAtivar] = useState(false);

    useEffect(()=>{
        const posicao = ()=>{
            if(window.scrollY>200){
                setAtivar(true);
            }
            else{
                setAtivar(false)
            }
        }
        window.addEventListener('scroll', posicao)
    })

    return(
        <div className={ativar ? 'ativar' : 'desativo' }>
            <div className='left'>
                <h1>Sávio Freire</h1>
                <p>Desenvolvedor Front-End</p>
            </div>
            <div className='right'>
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Linha do tempo</li>
                    <li>Contato</li>
                </ul>
            </div>
        </div>
    )
}