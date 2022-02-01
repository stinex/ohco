import {
    chelyabinsk,
    ekaterenburg,
    magnutigorsk,
    orenburg,
    samara,
    sanktPeterburg,
    surgut,
    tymen,
    ufa
} from "./cityArrays";
import React from "react";

export const cityArr = [
    [
        {name: 'Самара', info: samara},
        {name: 'Санкт-Петербург', info: sanktPeterburg},
        {name: 'Сургут', info: surgut},
    ],
    [
        {name: 'Уфа', info: ufa},
        {name: 'Челябинск', info: chelyabinsk},
        {name: 'Магнитогорск', info: magnutigorsk},
    ],
    [
        {name: 'Тюмень', info: tymen},
        {name: 'Екатеринбург', info: ekaterenburg},
        {name: 'Оренбург', info: orenburg},
    ]
]

export const cityArrTablet = [
    [
        {name: 'Самара', info: samara},
        {name: 'Санкт-Петербург', info: sanktPeterburg},
        {name: 'Сургут', info: surgut},
        {name: 'Уфа', info: ufa},
        {name: 'Челябинск', info: chelyabinsk},
    ],
    [
        {name: 'Магнитогорск', info: magnutigorsk},
        {name: 'Тюмень', info: tymen},
        {name: 'Екатеринбург', info: ekaterenburg},
        {name: 'Оренбург', info: orenburg},
    ]
]


export const cityArrMobile = [
    [
        {name: 'Самара', info: samara},
        {name: 'Санкт-Петербург', info: sanktPeterburg},
        {name: 'Сургут', info: surgut},
        {name: 'Уфа', info: ufa},
        {name: 'Челябинск', info: chelyabinsk},
        {name: 'Магнитогорск', info: magnutigorsk},
        {name: 'Тюмень', info: tymen},
        {name: 'Екатеринбург', info: ekaterenburg},
        {name: 'Оренбург', info: orenburg},
    ],
]


export const navArray = [
    {title: 'О компании', to: '/about'},
    {title: 'Тест-драйв', to: '/testdrive'},
    {title: 'Шоурумы', to: '/showroom'},
    {title: 'Доставка и оплата', to: '/delivery'}
]


export const navArrayMobile = [
    {title: 'Главная', to: '/'},
    {title: 'О компании', to: '/about'},
    {title: 'Доставка и оплата', to: '/delivery'},
    {title: 'Шоурумы', to: '/showroom'},
    {title: 'Тест-драйв', to: '/testdrive'},
]


export const homeAdvantage = [
    {
        wrapper: 'home-advantage__background-one',
        content: '1',
        titleOne:'Уютная подсветка',
        titleTwo:'места для посадки',
        subtitle: <>Приветствует вас включением,<br/> когда вы приближаетесь к креслу</>,

    },
    {
        wrapper: 'home-advantage__background-two',
        content: '2',
        titleOne: 'Удобно садиться',
        titleTwo: 'и вставать',
        subtitle: <>Подлокотник отходит в сторону, как дверца<br/> автомобиля, <span className='home-advantage__375br'/>а затем закрывается</>,
        img: '/image/Home/HomeAdvantage/HomeAdvantage-chair-1920.png'
    },
    {
        wrapper: 'home-advantage__background-three',
        content: '3',
        titleOne: 'Премиальные',
        titleTwo: 'материалы',
        subtitle: <>Качественная экокожа, приятная<br/> на ощупь и с повышенной стойкостью<br/> к механическому износу</>,
        subtitle375: <>Качественные кожзаменитель, <br/>приятный на ощупь и с повышенной стойкостью к механическому износу</>
    },
    {
        wrapper: 'home-advantage__background-four',
        content: '4',
        titleOne: 'Интуитивный',
        titleTwo: 'пульт управления',
        subtitle: <>На русском языке<span className='home-advantage__375br'/> с понятным<br/> и удобным управлением</>
    }
]


export const colorArr = [
    {color: '#D9CBB6'},
    {color: '#D78B4A'},
    {color: '#572C20'},
    {color: '#131313'},
]

export const homeSlidesArr = [
    {
        name: 'white',
        model: 'M.8 Pearl',
        model2: '',
        price: '1 100 000',
        src: '/image/Home/HomeSlider/HomeSliderWhite.png',
        src2: '/image/TestDrive/Slider/chair-slide1.png'
    },
    {
        name: 'orange',
        model: 'M.8 LE Saddle',
        price: '1 100 000',
        src: '/image/Home/HomeSlider/HomeSliderOrange.png',
        src2: '/image/TestDrive/Slider/chair-slide2.png'
    },
    {
        name: 'brown',
        model: 'M.8 Walnut',
        price: '1 100 000',
        src: '/image/Home/HomeSlider/HomeSliderBrown.png',
        src2: '/image/TestDrive/Slider/chair-slide4.png'
    },
    {
        name: 'black',
        model: 'M.8 Midnight',
        price: '1 100 000',
        src: '/image/Home/HomeSlider/HomeSliderBlack.png',
        src2: '/image/TestDrive/Slider/chair-slide3.png'
    }
]


export const homeFeaturesArr = [
    {
        title: 'Роликовый механизм',
        subtitle: (
            <>
                Механизм с 8 роликами, дает <br/>
                новые возможности массажа <br/>
                спины и всестороннюю проработку
            </>
        ),
        name: 'section-1',
        src: '/image/Home/HomeFeatures/HomeFeatures-1.png'
    },
    {
        name: 'section-2',
        src: '/image/Home/HomeFeatures/HomeFeatures-none.png'
    },
    {
        title: 'Инфракрасный прогрев',
        subtitle: (
            <>
                В отличии от кресел с менее продвинутыми <br/>
                технологиями, в OHCO M.8 инфракрасные <br/>
                нагревающие элементы расположены <br/>
                <span className='home-features__br375'/> на самих массажных роликах <br/>
                и точечно воздействуют на тело
            </>
        ),
        name: 'section-3',
        src: '/image/Home/HomeFeatures/HomeFeatures-3.png'
    },
    {
        name: 'section-4',
        src: '/image/Home/HomeFeatures/HomeFeatures-none.png'
    },
    {
        title: 'Механизм Тheraelliptical™',
        subtitle: (
            <>
                В дополнение к роликовому массажу стоп, <br/>
                в М.8 есть роликовый массаж задней <br/>
                икроножной зоны <span className='home-features__br768'/>и растирающий массаж <br/>
                компрессионными подушками
            </>
        ),
        name: 'section-5',
        src: '/image/Home/HomeFeatures/HomeFeatures-5.png'
    },
    {
        name: 'section-6',
        src: '/image/Home/HomeFeatures/HomeFeatures-none.png'
    },
    {
        title: 'Компрессионные подушки',
        subtitle: (
            <>
                Воздушно-компрессионные подушки <br/>
                расположены в области шеи,<span className='home-features__br375'/> <br/>
                12 независимые друг от друга воздушно- <br/>
                компрессионные подушки <span className='home-features__br768'/>в подлокотнике<span className='home-features__br375'/>  <br/>
                и 8 подушек <span className='home-features__br768'/>в икроножной зоне
            </>
        ),
        name: 'section-7',
        src: '/image/Home/HomeFeatures/HomeFeatures-7.png'
    },
]


export const homeTechnologyArr = [
    {
        title: (
            <>
                Механизм<br/>
                <span className='main-color'>DeltaWave</span>
            </>
        ),
        subtitle: (
            <>
                Создан для выполнения реалистичного <span className='home-technology__br375'/><br/>
                <span className='main-color'>4D-массажа</span>, имитирующего руки <span className='home-technology__br375'/><br/>
                профессионального массажиста.
                <span className='home-technology__innerBr'/>
                В дополнение к основным движениям, <br/>
                таким как постукивание и прокатывание, <br/>
                кресло <span className='home-technology__br375'/>на ходу определяет и меняет <br/>
                скорость движения роликов, силу нажима <br/>
                <span className='home-technology__br375'/>на отдельные точки.
            </>
        ),
        src: '/image/Home/HomeTechnology/HomeTechnology1.png'
    },
    {
        title: (
            <>
                <span className='main-color'>
                    3D-сканирование тела
                </span><br/>
                перед началом массажа
            </>
        ),
        subtitle: (
            <>
                Массажное кресло <span className='main-color'>OHCO M.8</span> выстраивает <span className='home-technology__br375'/><br/>
                индивидуальную программу массажа <span className='home-technology__br375'/> исходя <span className='home-technology__br768'/><br/>
                из вашего роста и положения тела. <br/>
                <span className='home-technology__hide375'>
                    Например, массажный механизм определит положение <br/>
                    ваших коленей, чтобы правильно их разогреть или размять.
                </span>
            </>
        ),
        src: '/image/Home/HomeTechnology/HomeTechnology2.png'
    },
    {
        title: (
            <>
                Каретка <span className='main-color'>MaxTrack</span>
            </>
        ),
        subtitle: (
            <>
                Удлинённая до <span className='main-color'>125 см </span><span className='home-technology__br375'/><span className='home-technology__br768'/> <br/>
                L-образная массажная каретка. <br/>
                <span className='home-technology__innerBr'/>
                Позволяет механизмам кресла дотянуться <span className='home-technology__br375'/><br/>
                до всех массажных зон и делать массаж <br/>
                от <span className='home-technology__br375'/>шеи до стоп. В том числе, людям с ростом <span className='home-technology__br375'/><br/>
                выше 185 см и весом более 100 кг
            </>
        ),
        src: '/image/Home/HomeTechnology/HomeTechnology3.png'
    },
]


export const tooltipsArr = [
    {
        subtitle: <>Прогрев спины<br/> и шейно-плечевой области</>
    },
    {
        subtitle: 'Прогрев ладоней'
    },
    {
        subtitle: 'Прогрев области ягодиц и бедер'
    },
    {
        subtitle: 'Прогрев стоп'
    },
]

export const homeComplexArr = [
    {
        title: <><span className='main-color'>Обволакивающий</span><br/> массаж рук</>,
        subtitle: (
            <>
                12 независимых друг от друга<span className='home-complex__br375'/> воздушно-компрессионные<span className='home-complex__br375'/> подушки в подлокотнике - словно<span className='home-complex__br375'/> руки профессионального массажиста, удерживают и аккуратно разминают предплечья, ладони и кончики<span className='home-complex__br375'/> ваших пальцев
            </>
        ),
        src: '/image/Home/HomeComplex/HomeComplex1.jpg',
        number: 1
    },
    {
        title: <>Массаж голеней<br/><span className='main-color'>Тheraelliptical™</span></>,
        subtitle: (
            <>Сложные движения механизма Тheraelliptical™ направлены на снятие мышечного напряжения в области голеней. Этот мягкий массаж улучшает кровообращение, снимает усталость<span className='home-complex__br375'/> в ногах. В дополнение к этому, в М.8 есть роликовый массаж зоны икр.</>
        ),
        src: '/image/Home/HomeComplex/HomeComplex2.jpg',
        number: 2
    },
    {
        title: <><span className='main-color'>Обволакивающий</span><br/> массаж шеи</>,
        subtitle: (
            <>
                Ощутите нежное прикосновение воздушно-компрессионных подушек<span className='home-complex__br375'/> в области шеи, <span className='home-complex__br768'/>а ролики с функцией<span className='home-complex__br375'/> прогрева снимут напряжение мышц шейно-воротниковой зоны.
            </>
        ),
        src: '/image/Home/HomeComplex/HomeComplex3.jpg',
        number: 3
    }
]


export const homeMassageArr = [
    {title: <>Терапевтический<br/> и релаксационный массаж</>},
    {title: <>Обволакивающий массаж<br/> рук выполняют 12 подушек<br/> с каждой стороны</>},
    {title: <>Скручивающий массаж <br/> для талии</>},
    {title: <>Настраиваемый ИК-прогрев каждой <br/> зоны кресла для улучшения <br/> циркуляции крови и достижения <br/> максимального комфорта</>},
    {title: <>Роликовый массаж стоп <br/> с подогревом роликов</>},
    {title: <>Воздушно-компрессионный массаж <br/> всего тела c настройкой <br/> интенсивности и скорости</>},
    {title: <>Обволакивающий <br/> и растягивающий массаж шеи</>},
    {title: 'Вытягивающий массаж'},
    {title: 'Массаж Шиацу'},
]

export const changeModal = (setState, newState) => {
    setState(newState)
}
