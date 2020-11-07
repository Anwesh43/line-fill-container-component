import {
    useState, 
    useEffect
} from 'react'

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
                    currScale += scGap 
                    setScale(currScale)
                    if (currScale > 1) {
                        setAnimated(false)
                        clearInterval(interval)
                        setScale(0)
                    }
                })
            }
        }
    }
}