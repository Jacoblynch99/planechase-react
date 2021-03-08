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

const _ = require('lodash')

const UserLanding = (props) => {
    const [unvisitedPlanes, setUnvisitedPlanes] = useState([])
    const [drawnCard, setDrawnCard] = useState('')
    const [counter, setCounter] = useState(0)
    const [visitedPlanes, setVisitedPlanes] = useState([])

    useEffect(() => {
        props.getPlanes()
    }, [])

    const shuffleDeck = () => {
        let tempArr = props.cards

        setUnvisitedPlanes(_.shuffle(tempArr))
    }

    const drawCard = () => {
        setDrawnCard(unvisitedPlanes[counter].imageUrl)
        setCounter(counter + 1)
    }

    const consol = () => {
        console.log(unvisitedPlanes)
    }

    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <button onClick={consol}>console</button>
            <button onClick={shuffleDeck}>Shuffle Deck</button>
            <button onClick={drawCard}>Draw Card</button>

            <img src={drawnCard} />

            {/* {unvisitedPlanes.map((item) => {
                return (
                    <div key={item.name + item.originalText}>
                        <img
                            src={item.imageUrl}
                            style={{ height: '500px', width: '700px' }}
                        />
                    </div>
                )
            })} */}
        </div>
    )
}

export default UserLanding
