import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './components/Banner'
import Formulario from './components/Formulario';
import Time from './components/Time'

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',

    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      id: uuidv4(),
      nome: 'UX & Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    },
  ])

  const inicial = [
    {
      id: uuidv4(),
      nome: 'ARISTEU MIRANDA',
      cargo: 'Desenvoledor Front',
      imagem: 'https://github.com/aristeu-miranda.png',
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      nome: 'GLÓRIA RIBEIRO',
      cargo: 'PMO',
      imagem: 'https://github.com/glorinha.png',
      time: times[3].nome,
    }
  ]

  const [colaboradores, setColaboradores] = useState(inicial);
  
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const deletarColaborador = (id) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  const mudarCorTime = (cor, id) => {
    setTimes(times.map(time => {
      if(time.id === id){
          time.corPrimaria = cor;
      }
      return time;
    }));
  }

  function cadastrarTime(novoTime) {
    setTimes([ ...times, { ...novoTime, id: uuidv4() }])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      {times.map((time, index) => <Time 
        key={index} 
        time={time}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
        mudarCor={mudarCorTime}
        />)
        }
    </div>
  );
}

export default App;
