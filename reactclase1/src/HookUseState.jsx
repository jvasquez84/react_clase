import { useState } from "react"

export const HookUseState = () =>{
    const [count, setCount]=useState(0)
    const [nombre,setNombre]=useState("Alejandro")
    const [personajes,setPersonajes] = useState({
        id:10,
        nombre:"Lcho",
        edad:49
    })
    const sumar = () =>{
        setCount(count+1)
    }

    const restar = () =>{
        if(count<0)return
        setCount(count-1)
    }

    const resetear = () =>{
        setCount(0)
    }

    const cambiar = () =>{
        setNombre("Pepe")
    }

return(
    <div>
    <h1>Soy el Hook Statr</h1>
    <p>El numero es {count}</p>
    <button onClick={sumar}>Sumar + 1</button>
    <button onClick={restar}>Restar - 1</button>
    <button onClick={resetear}>Resetear</button>

    <h2>Mi nombre es {nombre}</h2>
    <button onClick={cambiar}>Cambiar</button>

    <p>El personaje es {personajes.nombre}</p>
    </div>
    
)
}