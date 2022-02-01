import React, {useEffect, useState} from 'react';
import {Dialog, useMediaQuery, makeStyles} from "@material-ui/core";
import AnyFormData from "../../components/AnyFormData";
import CloseModal from "../icon/CloseModal";
import SuccessForm from "../icon/SuccessForm";
import MassageZoneDialog from "../../components/MassageZoneDialog";


const useStyles = makeStyles((theme) => ({
    wrapper: {
        borderRadius: '10px !important',
        backgroundColor: '#F5F5F7',
        margin: '0px !important'
    },
    container: {
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: -1,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            filter: 'blur(10px)'
        }
    },
    paperWidthMd: {
        width: 980,
        maxWidth: "none",
        [theme.breakpoints.down(1024)]: {
            width: 560,
        },
        [theme.breakpoints.down(600)]: {
            width: 350,
        }
    }
}));




const DialogUI = ({state, title, subtitle, massageZone = false}) => {

    const classes = useStyles()
    const {open, setOpen} = state

    const [success, setSuccess] = useState(false);
    const media800 = useMediaQuery('(max-width: 800px)')

    const paragraph = media800 ? (
        <>Оставьте свои данные для связи.<br/>Наши менеджеры решат все ваши вопросы. </>
    ) : (
        <>
            Свяжемся с вами в течение 15 минут. <br/>
            Наш менеджер ответит на все ваши вопросы.
        </>
    )


    const handlerCloseDialog = () => {
        setOpen(false)
    }

    const handleSendSuccess = () => {
        setSuccess(true)
    }

    return (
        <Dialog
            open={open}
            maxWidth='md'
            onClose={handlerCloseDialog}
            classes={{container: classes.container, paper: classes.wrapper, paperWidthMd: massageZone ? classes.paperWidthMd : ''}}
        >
            <div className={`modal ${success ? 'modal-send' : ''} ${massageZone ? 'modal-mz' : ''}`}>
                <div className='modal__close' onClick={handlerCloseDialog}>
                    <CloseModal/>
                </div>
                {massageZone ? (<MassageZoneDialog/>) : (
                  success ? (
                        <div className='modal__success'>
                            <div className='modal__icon'>
                                <SuccessForm stroke='#FFF'/>
                            </div>
                            <div className='modal__success-ttl'>
                                Спасибо, ваша заявка принята!
                            </div>
                            <p className='modal__success-subtitle'>
                                {paragraph}
                            </p>
                        </div>
                      ) : (
                        <>
                            <div className='modal__text'>
                                <h2 className='modal__title'>
                                    {title}
                                </h2>
                                <p className='modal__subtitle'>
                                    {subtitle}
                                </p>
                            </div>
                            <AnyFormData
                              mainColor='#BC8762'
                              success={handleSendSuccess}
                              modal
                            />
                        </>
                      )
                )}
            </div>
        </Dialog>
    );
};

export default DialogUI;
