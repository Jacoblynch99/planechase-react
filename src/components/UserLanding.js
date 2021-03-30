import {
    AppBar,
    Box,
    Select,
    MenuItem,
    Button,
    Typography,
    Card,
    CardContent,
    CardActions,
    Chip,
    Dialog,
    DialogTitle,
    DialogActions,
    Container,
} from '@material-ui/core'
import React, { useState, useEffect } from 'react'

// importing lodash for easy shuffling with out excess code.
const _ = require('lodash')

// displaying cards one at a time using a draw card button to cycle through
const UserLanding = (props) => {
    const [unvisitedPlanes, setUnvisitedPlanes] = useState([])
    const [drawnCard, setDrawnCard] = useState('')
    const [counter, setCounter] = useState(0)
    const [visitedPlanes, setVisitedPlanes] = useState([])

    // uses axios to get planes when page first loads
    useEffect(() => {
        props.getPlanes()
    }, [])

    // takes in the default order that the cards come in and randomizes it as well as setting unvistedPlanes hook
    const shuffleDeck = () => {
        let tempArr = props.cards

        setUnvisitedPlanes(_.shuffle(tempArr))
    }

    // displays card from the front of the array
    const drawCard = () => {
        setDrawnCard(unvisitedPlanes.shift().imageUrl)
        console.log(unvisitedPlanes[counter])
        // if (counter != 0) {
        //     setVisitedPlanes([...visitedPlanes, unvisitedPlanes.shift()])
        // }
        setCounter(counter + 1)
    }

    // just a console for testing. MUST REMOVE WHEN PROJECT IS DONE!!!
    const consol = () => {
        console.log(unvisitedPlanes)
    }

    // display jsx elements here
    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            {/* testing software, remove when done */}
            <button onClick={consol}>console</button>
            <button onClick={shuffleDeck}>Shuffle Deck</button>
            <button onClick={drawCard}>Draw Card</button>
            {/* display drawnd crad here */}
            <img src={drawnCard} />
            {/* mapping cards here */}
            {visitedPlanes.map((item) => {
                return (
                    <div key={item.name + item.originalText}>
                        <img
                            src={item.imageUrl}
                            style={{ height: '50px', width: '70px' }}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default UserLanding
