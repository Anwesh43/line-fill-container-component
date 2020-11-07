import {
    useState, 
    useEffect
} from 'react'
import {
    divideScale, 
    sinify
} from './utils'

const parts = 4
export const useAniamtedScale = (scGap = 0.02, delay = 20) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                let currScale = 0 
                const interval = setInterval(() => {
                    currScale += (scGap / parts)
                    setScale(currScale)
                    if (currScale > 1) {
                        setAnimated(false)
                        clearInterval(interval)
                        setScale(0)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {  
        w, 
        h
    }
}

export const useStyle = (w, h, scale) => {
    const sf = sinify(scale)
    const size = Math.min(w, h) / 10 
    const position = 'absolute'
    const background = 'green'
    const strokeWidth = Math.min(w, h) / 90 
    const gap = size / 2 
    console.log(scale)
    return {
        parentStyle() {
            const left = `${w / 2}px`
            const top = `${h}px`
            return {
                position, 
                left,
                top
            }
        },
        lineStyle(i) {
            const sf1 = divideScale(sf, 0, parts)
            const left = `${-gap / 2 + gap * i - strokeWidth / 2}px`
            const top = `${-size * sf1}px`
            const width = `${strokeWidth}px`
            const height = `${size * sf1}px`
            return {
                position, 
                left, 
                top, 
                width, 
                height,
                background
            }
        },
        fillStyle() {
            const sf2 = divideScale(sf, 2, parts)
            const left = `${-gap / 2}px`
            const top = `${-size * sf2}px`
            const width = `${gap}px`
            const height = `${size * sf2}px`
            return {
                position,
                top, 
                left, 
                width, 
                height, 
                background
            }
        }
    }
}