import './linhaTempo.css';
import '../gradient/gradient.css';
import './epoca.css'
import Epoca from './epoca';
import loja from '../foto/loja.jpeg'
import gta from '../foto/gta5.jpg'
import  {useState, useEffect } from 'react'

export default function LinhaTempo(){

    const [lado,setLado] = useState(true);
    const cada = document.querySelectorAll('.epoca')


    useEffect(()=>{
        cada.forEach((el,index) => {
        if(index % 2 == 0){
            setLado(false)

        }
        
    console.log(index)
    });

    },[])
    

    return(
        <div className='linhaTempo'>
            <div className='linha'>
                
            </div>
            <Epoca class={lado ? 'epoca' : 'epoca2'} ano='2011' sobre='Minha vida profissional começou cedo, com 13 anos eu comecei a trabalhar na loja de bike do meu pai' img={loja}/>
            <Epoca ano='2013' sobre='Lançamento do GTA 5 kkk, lembro desse dia como se fosse ontem.' img={gta}/>

        </div>
    )
}