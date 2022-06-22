import React from 'react';

const ShowRoomsMap = () => {
    return (
        <section className='showrooms-map'>
            <div className='showrooms-map__wrapper'>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A46af03b653282dad9f2fcd1807efa80aea8152fa7fb98d1816fd87f500150845&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
            </div>
        </section>
    );
};

export default ShowRoomsMap;
