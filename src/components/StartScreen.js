import './StartScreen.css'

const SartScreen = ({startGame}) => {
  return (
    <div className="start">
        <h1>Secrets Word</h1>
        <p>Clique no botão para iniciar o jogo</p>
        <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default SartScreen