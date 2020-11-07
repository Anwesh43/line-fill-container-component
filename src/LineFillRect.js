import React from 'react'
import {useStyle} from './hooks'

const LineFillRect = (scale, w, h) => {
    const {
        parentStyle,
        lineStyle, 
        fillStyle
    } = useStyle(w, h, scale)
    return (
        <div style = {parentStyle()}>
            <div style = {fillStyle()}>
            </div>
            {[0, 1].map(i => (<div style = {lineStyle(i)}></div>))}
        </div>
    )
}

export default LineFillRect