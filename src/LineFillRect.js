import React from 'react'
import {useStyle} from './hooks'

const LineFillRect = ({scale, w, h, color}) => {
    const {
        parentStyle,
        lineStyle, 
        fillStyle
    } = useStyle(w, h, scale, color)
    return (
        <div style = {parentStyle()}>
            <div style = {fillStyle()}>
            </div>
            {[0, 1].map(i => (<div key = {`line_${i}`} style = {lineStyle(i)}></div>))}
        </div>
    )
}

export default LineFillRect