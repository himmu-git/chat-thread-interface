import { useState } from "react";
import sendIcon from "../../assets/sendButtonIcon.svg";
import { MSG_TYPE } from "../Layout/ContainerLayout";
import { v4 as uuidv4 } from "uuid";

type Props = {
  onSendClick: any;
  isReply?: any;
};

const genrateSendMessageObj = (value, isReply) => {
  const msgObject = {
    msgId: uuidv4(),
    msgTxt: value,
    msgStatus: MSG_TYPE.SENT,
    msgTime: new Date(),
    isSent: true,
    replies: [],
  };
  if (isReply) delete msgObject.replies;
  return msgObject;
};
const TextFeildInput = (props: Props) => {
  const { onSendClick, isReply = false } = props;
  const [msgValue, setMsgValue] = useState("");
  const sendMsg = (msgValue) => {
    if (!msgValue) return;
    const obj = genrateSendMessageObj(msgValue, isReply);
    onSendClick(obj);
    setMsgValue("");
  };
  return (
    <div
      className="inputBoxAndSend"
      onKeyDown={(e) => {
        if (e.key == "Enter") {
          if (msgValue) sendMsg(msgValue.trim());
        }
      }}
    >
      <textarea
        onChange={(e) => {
          if (e.target.value) setMsgValue(e.target.value);
        }}
        value={msgValue}
        className="textAreaInput"
      ></textarea>
      <button
        onClick={() => {
          if (msgValue) sendMsg(msgValue.trim());
        }}
        className="sendButton"
      >
        <img src={sendIcon} />
      </button>
    </div>
  );
};

export default TextFeildInput;
