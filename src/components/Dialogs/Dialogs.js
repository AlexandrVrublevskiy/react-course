import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Massage/Massage';


const users = [
    {name: 'Dima', id: 1},
    {name: 'Jenya', id: 2},
    {name: 'Sasha', id: 3},
    {name: 'Petya', id: 4},
    {name: 'Egor', id: 5}
]
const messages = [
    {message: 'Hello!', id: 1},
    {message: 'How are you?', id: 2},
    {message: 'I\'m allright and you?', id: 3},
    {message: 'I\'m fine, thanks!', id: 4}
]

let usersElements = users.map((item, i) =>  <DialogItem name={item.name} id={item.id} key={i} />);
let massagesElements = messages.map((item, i) =>  <Message messageBody={item.message} id={item.id} key={i} />);

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {usersElements}
            </div>
            <div className={style.messages}>
                {massagesElements}
            </div>
        </div>
  
    )
}

export default Dialogs;