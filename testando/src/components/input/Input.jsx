import styles from "./input.module.css"

export function InputModificado1({name, onChange, value}){
    return(
        <>
        <input name={name} placeholder="Nome" onChange={onChange} value={value} className={styles.Input2}>
        
        </input>
        </>
    ) 
}

export function InputModificado2({name, onChange, value}){
    return(
        <>
        <input name={name} placeholder="Telefone" onChange={onChange} value={value} className={styles.Input2}>
        
        </input>
        </>
    )
}
export function InputModificado3({name, onChange, value}){
    return(
        <>
        <input name={name} placeholder="E-mail" onChange={onChange} value={value} className={styles.Input2}>
        
        </input>
        </>
    )
}
export function InputModificado4({name, onChange, value}){
    return(
        <>
        <input name={name} placeholder="CPF" onChange={onChange} value={value} className={styles.Input2}>
        
        </input>
        </>
    )
}
export function InputModificado5({name, onChange, value}){
    return(
        <>
        <input name={name} placeholder="Senha" onChange={onChange} value={value} className={styles.Input2}>
        
        </input>
        </>
    )
}
export function InputModificado6({name, onChange, value}){
    return(
        <>
        <input name={name} placeholder="CEP" onChange={onChange} value={value} className={styles.Input2}>
        
        </input>
        </>
    )
}