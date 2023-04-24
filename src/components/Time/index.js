import Colaborador from '../Colaborador';
import './Time.css';

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
    return (
        (colaboradores.length > 0) && 
        <section className='time' style={{ backgroundColor: time.corSecundaria }}>
            <input onChange={evento => mudarCor(evento.target.value, time.id)} value={time.corPrimaria} type='color' className='input-cor'/>
            <h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, index) => {
                    return <Colaborador corDeFundo={time.corPrimaria} key={index} colaborador={colaborador} aoDeletar={aoDeletar} />
                })}
            </div>
        </section>
    )
}

export default Time