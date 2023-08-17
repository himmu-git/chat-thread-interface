import React, { useEffect, useState } from "react";
import ThreadContainer from "./ThreadContainer";
import TextFeildInput from "../Common/TextFeildInput";
import ListOfMessages from "../Common/ListOfMessages";

type Props = {
  messageCorrespondingUser: any;
};

const ChatContainer = (props: Props) => {
  const { messageCorrespondingUser } = props;
  const [messageCorrespondingUserData, setMessageCorrespondingUserData] =
    useState(messageCorrespondingUser);
  const [messageDataThread, setMessageDataThread] = useState({});
  useEffect(() => {
    setMessageDataThread({});
    setMessageCorrespondingUserData(messageCorrespondingUser);
  }, [messageCorrespondingUser]);
  return (
    <>
      <section className="chatContainer">
        <ListOfMessages
          messages={messageCorrespondingUserData.messages}
          setMessageDataThread={setMessageDataThread}
        />
        <TextFeildInput
          onSendClick={(msg) => {
            setMessageCorrespondingUserData((prev) => {
              prev.messages.push(msg);
              return { ...prev };
            });
            // messageCorrespondingUser.message.push(msg);
          }}
        />
      </section>
      {Object.keys(messageDataThread).length > 0 && (
        <ThreadContainer
          messageDataThread={messageDataThread}
          onSendInThread={(msg) => {
            setMessageDataThread((prev) => {
              prev.replies.push(msg);
              return { ...prev };
            });
          }}
        />
      )}
    </>
  );
};

export default ChatContainer;
