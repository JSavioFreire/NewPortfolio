import './linhaTempo.css';
import '../gradient/gradient.css';
import './epoca.css'
import Epoca from './epoca';
import loja from '../foto/loja.jpeg'
import gta from '../foto/gta5.jpg'
import escola from '../foto/escola.jpg'
import convertido from '../foto/convertido.jpg'
import conheci from '../foto/conheciAna.jpg'
import culturaI from '../foto/culturaI.jpg'
import estacio from '../foto/estacio.jpg'
import danki from '../foto/danki.png'

export default function LinhaTempo(){

    return(
        <div className='linhaTempo'>
            <div className='linha'>
                
            </div>
            <Epoca class='epoca' ano='Jan/2011' sobre='Minha vida profissional começou cedo, com 13 anos eu comecei a trabalhar na loja de bike do meu pai.' img={loja}/>
            <Epoca class='epoca2' ano='Jan/2017' sobre='Comecei o curso de Inglês no Cultura Inglesa. Aprendi uma boa base da lingua.' img={culturaI}/>
            <Epoca class='epoca' ano='Mar/2022' sobre='Comecei a faculdade de Análise e Desenvolvimento de Sistemas na Universidade Estácio de Sá. ' img={estacio}/>
            <Epoca class='epoca2' ano='Mai/2017' sobre='Decidir que queria me especializar na área de Desenvolvimento Front-End, Então comecei a fazer cursos na DankiCode. ' img={danki}/>
            
            
            
            
        </div>
    )
}