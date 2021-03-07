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
import React, { useState } from 'react'

const UserLanding = (props) => {
    const consol = () => {
        console.log(props.cards)
    }

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={consol}>console</button>
            <button onClick={() => props.getPlanes()}>fetch</button>

            {props.cards.map((item) => {
                return (
                    <div key={item.name + item.originalText}>
                        <img src={item.imageUrl}></img>
                    </div>
                )
            })}
        </div>
    )
}

export default UserLanding
