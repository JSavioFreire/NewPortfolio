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
                <p>Sávio Freire</p>
            </div>
        </div>
    )
}