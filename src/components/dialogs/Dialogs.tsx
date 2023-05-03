import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './dialogItem/DialogItem';


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog} >
                <DialogItem name="Иван" id={1} />
                <DialogItem name="Колян" id={2} />
                <DialogItem name="Масян" id={3} />
                <DialogItem name="Олег" id={4} />
            </div>
            <div className={s.messages}>
                <ul className={s.messagesList}>
                    2
                </ul>
                <form className={s.myMessage} action="post">
                    <div className={s.formWrap}>
                        <label htmlFor="story">Tell us your story:</label>
                        <textarea id="myMessageText" value={'eee'} name="myMessageText" placeholder="So..." rows={parseInt('5')} />
                    </div>
                    <input id="myMessage" type="button" value="Отправить" className={s.formBtn} />
                </form>
            </div>
        </div>

    )
}
