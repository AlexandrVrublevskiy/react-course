import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/massages/' + props.id;
    return (
        <div className={style.dialog} >
            <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

const Massage = (props) => {
    return (
        <div className={style.message}>
            {props.messageBody}
        </div>
    )
}

const users = [
    {name: 'Dima', id: 1},
    {name: 'Jenya', id: 2},
    {name: 'Sasha', id: 3},
    {name: 'Petya', id: 4},
    {name: 'Egor', id: 5}
]


const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {users.map((item, i) => { 
                        return <DialogItem name={item.name} id={item.id} key={i} />
                    })
                }
            </div>
            <div className={style.messages}>
                <Massage messageBody='Hello!' />
                <Massage messageBody='How are you?' />
                <Massage messageBody="I'm allright and you?" />
                <Massage messageBody="I'm fine, thanks!" />
            </div>
        </div>
  
    )
}

export default Dialogs;