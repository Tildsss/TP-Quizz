import { useState } from 'react'
import GamePage from './components/GamePage.jsx';
import Accueil from './components/Accueil.jsx';
import './App.css'

function App() {
  const [GameStart, setGameStart] = useState('accueil')
  return (
    <>
    <div>
      <div className="App">
        {GameStart === 'accueil' && <Accueil />}
        {GameStart === 'game' && <GamePage />}
      </div>
      <button className='AccueilBTN' onClick={() => setGameStart('accueil')}>Accueil</button>
      <button className='GameBTN' onClick={() => setGameStart('game')}>Game</button>
    </div>
      
    </>
  )
}

export default App
