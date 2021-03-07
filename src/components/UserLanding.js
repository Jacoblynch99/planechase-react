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

const UserLanding = (props) => {
    const [unvisitedPlanes, setUnvisitedPlanes] = useState([])

    useEffect(() => {
        console.log('Job Done')
    }, [])

    const shuffleDeck = () => {
        props.getPlanes()
    }

    const drawCard = () => {
        setUnvisitedPlanes(props.cards)
    }

    const consol = () => {
        console.log(unvisitedPlanes)
    }

    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <button onClick={consol}>console</button>
            <button onClick={shuffleDeck}>Shuffle Deck</button>

            {unvisitedPlanes.map((item) => {
                return (
                    <div key={item.name + item.originalText}>
                        <img
                            src={item.imageUrl}
                            style={{ height: '500px', width: '700px' }}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default UserLanding
