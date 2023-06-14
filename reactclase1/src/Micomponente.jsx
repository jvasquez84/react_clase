import { Segundocomponente } from "./Segundocomponente"
import { Tercercomponente } from "./Segundocomponente"
import { HookUseState } from "./HookUseState"

/*export default function Micomponente(){
    return(
        <h1>Es mi primer proyecto en REACT</h1>
    )
}*/

export const Micomponente = () =>{
    return(
        <>
        <HookUseState/>
        </>
    )
    /*const miNombre = "Johan"
    const personajes = [{
        id:1,
        nombre:"TonyStark",
        alias:"IronMan"
    },{
        id:2,
        nombre:"SteveRogers",
        alias:"CapitanAmerica"
    }]
    const edad = 38
    return(
        <>
            <Segundocomponente nombre={miNombre} personajes={personajes}/>
            <h1>Hola</h1>
            <h2>Juan</h2>
            <Tercercomponente edad={edad}/>
        </> 
    )*/
}

