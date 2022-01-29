import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';


const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElement = props.state.messages.map(m => <Message message={m.message} />);
  let newMessage = React.createRef();
  let addMes = () =>{
    let text = newMessage.current.value;
    alert(text);
  }


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElement}
      </div>
      <div>
          <textarea ref = {newMessage} ></textarea>
        </div>
        <div>
        <button onClick={addMes}>add message</button>
        </div>

    </div>
  )

}
export default Dialogs;