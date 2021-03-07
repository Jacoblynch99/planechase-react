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
        <div style={{ height: '100vh', width: '100vw' }}>
            <button onClick={() => props.getPlanes()}>fetch</button>

            {props.cards.map((item) => {
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
