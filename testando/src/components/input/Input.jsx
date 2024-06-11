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
        <input name={name} placeholder="Telefone: 1234567-8910" onChange={onChange} value={value} className={styles.Input2}>
        
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
        <input name={name} placeholder="Cpf: 123.456.789-12" onChange={onChange} value={value} className={styles.Input2}>
        
        </input>
        </>
    )
}
export function InputModificado5({name, onChange, value,placeholder}){
    return(
        <>
        <input name={name} placeholder={placeholder} onChange={onChange} value={value} className={styles.Input2}>
        
        </input>
        </>
    )
}
export function InputModificado6({name, onChange, value}){
    return(
        <>
        <input name={name} placeholder="Cep: 12345-678" onChange={onChange} value={value} className={styles.Input2}>
        
        </input>
        </>
    )
}