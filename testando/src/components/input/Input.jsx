import styles from "./input.module.css"

export function InputModificado({name, onChange, value}){
    return(
        <>
        <input name={name} placeholder="Teste" onChange={onChange} value={value} className={styles.InputTeste}>
        
        </input>
        </>
    ) 
}

export function InputModificado2({name, onChange, value}){
    return(
        <>
        <input name={name} placeholder="Teste" onChange={onChange} value={value} className={styles.Input2}>
        
        </input>
        </>
    )
}