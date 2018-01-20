import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
import '../CSS/Boton.css';

class Texto extends Component{

    render (){
        return (
            //AQUI VA JSX
            <div>
                 <h1> Este es el componente de react.js </h1>
            </div>    
        );
    }
}

export class Boton extends Component{
    render(){
        return (
            <div  className='One'>
                <Button content='Boton' color='blue' />
            </div>    
        );
    }
}

export class  BotonAnimado extends Component{
    render(){
      return(
        <div>
            <Button animated='fade' color='red' >
                <Button.Content hidden >Esto estaba oculto</Button.Content>
                <Button.Content visible >Boton Animado</Button.Content>
            </Button>
        </div>  
      );
    }
  }

 //exportamos componentes
 //primero el default

export default Texto;

