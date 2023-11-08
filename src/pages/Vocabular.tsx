import { Card } from '../types/Card'
import { SortState } from '../types/SortState'
import './Vocabular.css'

type Props = {
    sortStates: SortState
    setSort: (sortSort: SortState) => void
    cards: Card[]
    setCard: (cards: Card[]) => void
}

export const Vocabular = ({cards, setCard, sortStates}: Props) => {

   const sortierung = () => {
        const newSort = [...cards].sort((n1,n2) => {
            if (sortStates.front === true) {
                if (sortStates.asc === true) {
                    if (n1.front > n2.front) {
                        return 1
                    }
                
                    if (n1.front < n2.front) {
                        return -1
                    }  
                    return 0 
                }
                else {
                    if (n1.front > n2.front) {
                        return -1
                    }
                
                    if (n1.front < n2.front) {
                        return 1
                    }   
                    return 0
                }
            }
            else {
                if (sortStates.asc === true) {
                    if (n1.back > n2.back) {
                        return 1
                    }
                
                    if (n1.back < n2.back) {
                        return -1
                    }    
                    return 0
                }
                else {
                    if (n1.back > n2.back) {
                        return -1
                    }
                
                    if (n1.back < n2.back) {
                        return 1
                    }   
                    return 0
                }
            }    
        })
        return newSort
    }

    const deleteCard = (front: string, back: string) => {
        const newCards = [...cards].filter(r => r.front !== front && r.back !== back)
        setCard(newCards)
    }

    return (
    <>
    {sortierung().map(card => 
    <>
    <div className="frontGridVokabular">{card.front}</div>
    <div className="backGridVokabular">{card.back}</div>
    <div className="buttonGridVokabular">
        <button className="buttonSaveDeleteGrid" onClick={() => deleteCard(card.front, card.back)} type="button">Delete</button>
    </div>
    <div className="trennlinie"></div>
    <div className="trennlinie"></div>
    <div className="trennlinie"></div>
    </>)}
    </>
    )
}