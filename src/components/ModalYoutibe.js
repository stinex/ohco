export const ModalYoutibe = ({ active, setActive }) => {
    return (
        <>
            <div className="modal_yotobe__wrapper" onClick={() => setActive(false)}>
                <div className="modal_yotobe" onClick={(e) => e.stopPropagation()}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/QPHkZbKr4Do?autoplay=1" title="YouTube video player" frameborder="0" autoplay='1' allow="accelerometer; autoplay clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </>
    )
}