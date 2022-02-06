import React from 'react';
import { updateNewMessageTextCreator } from '../../redux/dialogReducer';
import { sendMessageCreator } from '../../redux/dialogReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps= (state) => {
  return {
    dialogsPage: state.dialogsPage
  }

}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage:()=>{
      dispatch(sendMessageCreator());
    },
    updateNewMessageText:(body)=>{
      dispatch(updateNewMessageTextCreator(body));
    }

  }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs);
export default DialogsContainer;