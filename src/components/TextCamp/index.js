import './TextCamp.css'

const TextCamp = ({ type = 'text', label, aoAlterado, placeholder, valor, obrigatorio = 'false' }) => {
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo-texto campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholder}  />
        </div>
    )
}

export default TextCamp