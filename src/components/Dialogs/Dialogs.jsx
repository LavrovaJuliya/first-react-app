import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';



const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElement = state.messages.map(m => <Message message={m.message} />);
  let newMessageText = state.newMessageText;



  let onSendMessageClick = () => {
    props.sendMessage();
}
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageText(body);
  }


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElement}</div>
        <div>
          <div><textarea value={newMessageText}
            onChange={onNewMessageChange}
            placeholder='Enter your message'></textarea></div>
          <div><button onClick={onSendMessageClick}>Send</button></div>

        </div>
      </div>
    </div>
  )

}
export default Dialogs;