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
import { SelectAllRounded } from '@material-ui/icons'
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
        // sets global drawn card state
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
        // div container for bulk of website
        <div style={{ height: '100vh', width: '100vw' }}>
            {/* testing software, remove when done */}
            <button onClick={consol}>console</button>
            {/* shuffle deck array in random order */}
            <button onClick={shuffleDeck}>Shuffle Deck</button>
            {/* display the front of the card array */}
            <button onClick={drawCard}>Draw Card</button>
            {/* display drawnd crad here */}
            <img src={drawnCard} />
            {/* mapping cards here */}
            {visitedPlanes.map((item) => {
                // returns jsx elements to the front of the page
                return (
                    // container for the current card select all around
                    <div key={item.name + item.originalText}>
                        {/* an img tag that contains the card info */}
                        <img
                            // src defines the image within the img tag
                            src={item.imageUrl}
                            // inline css styling
                            style={{ height: '50px', width: '70px' }}
                        />
                    </div>
                )
            })}
        </div>
    )
}

// Exports my component
export default UserLanding
