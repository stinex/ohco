import emailjs from "@emailjs/browser"

export const changeBodyScroll = (string) => {
    document.body.style.overflowY = string
}

export const generateImageAlt = (src) => {
    if (src) {
        return src.split('/').reverse()[0]
    }
}

export const randomKey = (index) => {
    return Math.round(Math.random() * 100000) + index
}

export const onScroll = (e) => {
    // console.log(window.scrollY, window.innerHeight)
}

export const sendLetter = (e, name, phone, callback) => {
    e.preventDefault();


    const userData = {
        name: name,
        phone: phone
    }

    emailjs.send(
        'service_8p7tccp',
        'template_j5h9s1h',
        userData,
        'user_h8FptbxZL1IEIHpQZnLeu'
    )
        .then(callback()).catch(() => {
        console.log('error')
    })
}


export const numberMask = (e) => {

    // const value = e.target.value
    // const formatedValue = `+7 (${value}__) ___-__-__`
    // const onlyNumber = formatedValue.replace(/[^0-9]/g,"")
    // console.log(formatedValue, onlyNumber)
    //
    //
    // if (value.length === 1 && value !== ' ') {
    //     return formatedValue
    // }
    return e.target.value



}
