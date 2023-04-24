import './Formulario.css'
import TextCamp from '../TextCamp'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do colaborador</h2>
            <TextCamp 
            obrigatorio={true} 
            label="Nome" 
            placeholder="Digite seu nome"
            valor={nome}
            aoAlterado={valor => setNome(valor)}/>
            <TextCamp 
            obrigatorio={true} 
            label="Cargo" 
            placeholder="Digite seu cargo"
            valor={cargo}
            aoAlterado={valor => setCargo(valor)}
            />
            <TextCamp 
            label="Imagem" 
            placeholder="Digite o endereço da imagem"
            valor={imagem}
            aoAlterado={valor => setImagem(valor)}
            />
            <ListaSuspensa 
            required={true} 
            label="Time" itens={props.times}
            valor={time}
            aoAlterado={valor => setTime(valor)}
            />
            <Botao>
                Criar Card
            </Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault()
                props.cadastrarTime({ nome: nomeTime, cor: corTime })
            }}>
                <h2>Preencha os dados para criar um time</h2>
            <TextCamp 
                obrigatorio 
                label="Nome" 
                placeholder="Digite o nome do time"
                valor={nomeTime}
                aoAlterado={valor => setNomeTime(valor)}
            />
            <TextCamp 
                obrigatorio
                label="Cor" 
                placeholder="Digite a cor do time"
                valor={corTime}
                aoAlterado={valor => setCorTime(valor)}
                type='color'
            />
            <Botao>
                Criar um novo time
            </Botao>
            </form>
        </section>
    )
}

export default Formulario