import logo from './logo.svg';
import './assets/styles/dist/App.css';
import StaticLeftSide from './components/LeftSide/static_left_side';
import StaticRightSide from './components/RightSide/static_right_side';
// fazer funcao para ir buscar imagens a uma pasta e depois colocar como source
// nessa funcao, colocar tipo um ciclo com uma foto parodia
function App() {
  return (
    <div className="teste">
        <div className='dummy_border_skelleton'> </div>
        <div className='abc'>
          <button id = "but" type ="button">Fotografia, intro e links(linkedin github)</button>
          <button id = "but2" type='button'>Skills -- meter em baixo ícones das skills como slider?</button>
        </div>
        <div className='def'>CV com dropdown; em baixo (outra div) com um contacte-me e talvez agendar uma entrevista</div>
        <div className='dummy_border_skelleton'> </div>
    
    </div>
  );
}

export default App;
