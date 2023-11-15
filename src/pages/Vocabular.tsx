import React from 'react'
import { Card } from '../types/Card'
import { FilterState } from '../types/FilterState'
import { SortState } from '../types/SortState'
import './Vocabular.css'

type Props = {
    filterStates: FilterState
    setFilterStates: (filterStates: FilterState) => void
    sortStates: SortState
    setSort: (sortSort: SortState) => void
    cards: Card[]
    setCard: (cards: Card[]) => void
}

export const Vocabular = ({cards, setCard, sortStates, filterStates}: Props) => {

    const sortierung = () => {
        const newSort = [...cards].sort((n1,n2) => {
            if (sortStates.front === true) {
                if (sortStates.asc === true) {
                    return n1.front > n2.front ? 1 : -1
                }
                else {
                    return n1.front > n2.front ? -1 : 1
                }
            }
            else {
                if (sortStates.asc === true) {
                    return n1.back > n2.back ? 1 : -1
                }
                else {
                    return n1.back > n2.back ? -1 : 1
                }
            }    
        })
        return newSort
    }

    const filter = (cards: Card[]) => {
        if (filterStates.filterTable === true && filterStates.front !== '') {
            let newFilter = cards.filter(r => r.front.includes(filterStates.front))
            return newFilter.length !== 0 ? newFilter : newFilter = [{front: "noData", back: ''}]
        }
        else if (filterStates.filterTable === true && filterStates.back !== '') {
            let newFilter = cards.filter(r => r.back.includes(filterStates.back))
            return newFilter.length !== 0 ? newFilter : newFilter = [{front: "noData", back: ''}]
        }
        else {
            return cards
        }
    }

    const deleteCard = (front: string, back: string) => {
        const newCards = [...cards].filter(r => r.front !== front && r.back !== back)
        setCard(newCards)
    }

    return (
    <>
    {filter(sortierung()).map((card,index,arr) => 
    <React.Fragment key={card.front}>
    <div className="frontGridVokabular">{card.front}</div>
    <div className="backGridVokabular">{card.back}</div>
    <div className="buttonGridVokabular">
        <button className="buttonSaveDeleteGrid" onClick={() => deleteCard(card.front, card.back)} type="button">Delete</button>
    </div>
    {index<arr.length-1?<div className="trennlinie"></div>:null}
    {index<arr.length-1?<div className="trennlinie"></div>:null}
    {index<arr.length-1?<div className="trennlinie"></div>:null}
    </React.Fragment>)}
    </>
    )
}