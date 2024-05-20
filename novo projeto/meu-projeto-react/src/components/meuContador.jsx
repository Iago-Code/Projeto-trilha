
import { useState } from "react";
import './style.css'
import style from './button.module.css'

export default function MeuContador() {

    console.log('renderozando meu contador')
const [contador, setContador] = useState(0)

    function aumentar() {
       setContador(contador + 1)
    }

    return (
        <div className="container">
            <h1>Meu Contador</h1>
            {contador > 9 ? <h1>Valor Muiro alto</h1> : null}
            <h3>{contador}</h3>
            <button className={style.myButton} onClick={aumentar}
            >aumentar</button>
        </div>
    )
}