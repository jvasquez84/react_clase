
export const Segundocomponente = ({nombre,personajes})=>{
    return (
        <>
        <h2>Mi nombre es: {nombre}</h2>
        {personajes.map((d,i)=>{
            return (
                <h1>El nombre es: {d.alias}</h1>    
            )
        })} 
        </>
    )
}

export const Tercercomponente = (props)=>{
    return(
        <span>Mi edad es: {props.edad}</span>
    )
}