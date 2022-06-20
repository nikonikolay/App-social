import React from 'react'
import './dialogs.css'
import DialogsItem from './dialogsItem/dialogsItem'
import Message from './message/message'

function Dialog(props){
    return(
        <div className='dialogs'>
            <div className='dialog'>
                {props.dialogsPage.dialogNames.map((e)=> <DialogsItem name={e.name} id={e.id}/>)}
            </div>
            <div className='message'>
            {props.dialogsPage.messageItems.map((e)=> <DialogsItem name={e.message} id={e.id}/>)}
            </div>
            <div className='code'>
                <input type="text"/>
                <button>Send</button>
            </div>
        </div>
    );
}
export default Dialog