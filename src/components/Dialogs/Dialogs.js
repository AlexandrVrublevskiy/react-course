import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Massage/Massage';

const Dialogs = (props) => {
    let usersElements = props.users.map((item, i) =>  <DialogItem name={item.name} id={item.id} key={i} />);
    let massagesElements = props.messages.map((item, i) =>  <Message messageBody={item.message} id={item.id} key={i} />);
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