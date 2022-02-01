export const changeRest = (progress, content, setContent) => {
    if (progress && content <= 6) {
        if (progress < 16) {
            setContent(1)
        }
        if (progress > 16) {
            setContent(content + 1)
        }
        if (progress > 32) {
            setContent(content + 2)
        }
        if (progress > 48) {
            setContent(content + 3)
        }
        if (progress > 64) {
            setContent(content + 4)
        }
        if (progress > 80) {
            setContent(content + 5)
        }
    }
}


export const changeSympathy = (progress, content, setContent) => {
    if (progress && content <= 3) {
        if (progress < 30) {
            setContent(1)
        }
        if (progress > 30) {
            setContent(content + 1)
        }
        if (progress > 60) {
            setContent(content + 2)
        }
        if (progress > 90) {
            setContent(content + 3)
        }
    }
}


export const changeMassage  = (progress, content, setContent) => {
    if (progress && content <= 3) {
        if (progress < 15) {
            setContent(1)
        }
        if (progress > 15) {
            setContent(content + 1)
        }
        if (progress > 30) {
            setContent(content + 2)
        }
        if (progress > 45) {
            setContent(content + 3)
        }
        if (progress > 60) {
            setContent(content + 4)
        }
        if (progress > 75) {
            setContent(content + 5)
        }
        if (progress > 90) {
            setContent(content + 6)
        }
    }
}




export const changeTechnology = (progress, content, setContent) => {
    if (progress && content <= 3) {
        if (progress < 30) {
            setContent(1)
        }
        if (progress > 30) {
            setContent(content + 1)
        }
        if (progress > 60) {
            setContent(content + 2)
        }
    }
}


export const changeComplex = (progress, content, setContent) => {
    if (progress && content <= 3) {
        if (progress < 30) {
            setContent(1)
        }
        if (progress > 30) {
            setContent(content + 1)
        }
        if (progress > 60) {
            setContent(content + 2)
        }
    }
}
