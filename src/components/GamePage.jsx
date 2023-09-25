import react, { useState } from 'react'
import "./components.css"

function handleSubmit(event) {
    event.preventDefault()

    const selectedAnswer = document.querySelector('input[name="question1"]:checked');

    if (selectedAnswer) {
        const UserAnswer = selectedAnswer.value;

        if (UserAnswer === "rep2") {
            alert("Bonne réponse !")
        } else {
            alert("Mauvaise réponse !")
        }
    }
}

function GamePage() {

    return (
        <>
            <form className="FormGame" onSubmit={handleSubmit}>
                <p>Quel jeu vidéo a été initialement conçu comme une simulation de l'agriculture avant de devenir un phénomène mondial dans le domaine de l'eSport ?</p>
                <input className='Input' type="radio" name="question1" value="rep1" />Stardew Valley
                <br />
                <input className='Input' type="radio" name="question1" value="rep2" />Farming Simulator
                <br />
                <input className='Input' type="radio" name="question1" value="rep3" />League of Legends
                <br />
                <input className='Input' type="radio" name='question1' value="rep4" />Dota 2
                <br />
                <button className='BTNSubmit' type='submit' >Validé</button>
            </form>
        </>
    )
}

export default GamePage