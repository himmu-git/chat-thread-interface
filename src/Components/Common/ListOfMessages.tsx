import React from "react";
import Message from "./Message";

type Props = {
  messages: any;
  isThread?: boolean;
  setMessageDataThread?: React.SetStateAction<any>;
};

const ListOfMessages = (props: Props) => {
  const { messages = [], setMessageDataThread, isThread = false } = props;
  return (
    <div className="listOfMsgBox">
      {messages.map((message) => {
        return (
          <Message
            key={message.msgId}
            message={message}
            isThreadMessage={isThread}
            onReplyClick={() => {
              setMessageDataThread(message);
            }}
            onReplyButtonClick={() => {
              setMessageDataThread(message);
            }}
          />
        );
      })}
    </div>
  );
};

export default ListOfMessages;
