import { Card } from '../types/Card'
import './Vocabular.css'

type Props = {
    cards: Card[]
    setCard: (cards: Card[]) => void
}

export const Vocabular = ({cards, setCard}: Props) => {
    
    const Sortierung = (cards: Card[]) => {
        const newSort = [...cards].sort((n1,n2) => {
            if (n1.front > n2.front) {
                return 1
            }
        
            if (n1.front < n2.front) {
                return -1
            }
        
            return 0;
        })
        return newSort
    }

    const deleteCard = (front: string, back: string) => {
        const newCards = [...cards].filter(r => r.front !== front && r.back !== back)
        setCard(newCards)
    }

    return (
    <>
    {Sortierung(cards).map(card => 
    <>
    <div key={card.front} className="frontGridVokabular">{card.front}</div>
    <div key={card.back} className="backGridVokabular">{card.back}</div>
    <div key={card.back+card.front} className="buttonGridVokabular">
        <button className="buttonSaveDeleteGrid" onClick={() => deleteCard(card.front, card.back)} type="button">Delete</button>
    </div>
    <div className="trennlinie"></div>
    <div className="trennlinie"></div>
    <div className="trennlinie"></div>
    </>)}
    </>
    )
}
