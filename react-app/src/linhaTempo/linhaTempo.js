import './linhaTempo.css';
import '../gradient/gradient.css';
import './epoca.css'
import Epoca from './epoca';
import loja from '../foto/loja.jpeg'
import gta from '../foto/gta5.jpg'
import escola from '../foto/escola.jpg'


export default function LinhaTempo(){

    return(
        <div className='linhaTempo'>
            <div className='linha'>
                
            </div>
            <Epoca class='epoca' ano='2011' sobre='Minha vida profissional começou cedo, com 13 anos eu comecei a trabalhar na loja de bike do meu pai' img={loja}/>
            <Epoca class='epoca2' ano='2013' sobre='Lançamento do GTA 5, foi um jogo que me marcou bastante, lembro desse dia como se fosse ontem.' img={gta}/>
            <Epoca class='epoca' ano='2015' sobre='Terminei o ensino medio sem saber o que eu queria fazer, na verdade, naquele momento não queria fazer nada.' img={escola}/>
            <Epoca class='epoca2' ano='2018' sobre='' img={}/>
            
            
        </div>
    )
}