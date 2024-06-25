import axios from "axios";
import { server } from "../../server";


// create mail request 
export const sendMail = (senderName,message,senderEmail,subject) => async (dispatch)=>{
    try{
      dispatch({
        type: "createMailRequest",
      })
  
      const {data} = await axios.post(
        `${server}/mail/send-email`,
          senderName,
          senderEmail,
          subject,
          message
      )

      dispatch({
        type: "createMailSuccess",
        payload: data.mail,
      });
    }catch(error){
      dispatch({
        type: "createMailFailed",
        payload: error.response.data.message,
      });
    }
  }

// subscribe newsletter
export const subscribe = (senderEmail) => async (dispatch) => {
  try{
    dispatch({
      type: "subscribeRequest"
    })

    const {data} = await axios.post(
      `${server}/mail/subscribe`,
      senderEmail
    )

    dispatch({
      type: "subscribeSuccess",
      payload: data.mail
    })

  }catch(error){
    dispatch({
      type: "subscribeFailed",
      payload: error.response.data.message
    })
  }
}
  
// get all mails
export const getMails = () => async (dispatch) => {
  try{

    dispatch({
      type: "getMailsRequest"
    })

    const {data} = await axios.get(
      `${server}/mail/all-mails`,
      {withCredentials: true}
    )

    dispatch({
      type: "getMailsSuccess",
      payload: data.mails
    })

  }catch(error){
    dispatch({
      type: "getMailsFailed",
      payload: error.response.data.message
    })
  }
}

// delete email 
export const deleteSubscriber = (id) => async (dispatch) => {
  try{

    dispatch({
      type: "deleteMailRequest"
    })

    const {data} = await axios.delete(
      `${server}/mail/delete-subscriber/${id}`,
      {withCredentials: true}
    )

    dispatch({
      type: "deleteMailSuccess",
      payload: data.mail
    })

  }catch(error){
    dispatch({
      type: "deleteMailFailed",
      payload: error.response.data.message
    })
  }
}