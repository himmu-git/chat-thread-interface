import React from "react";
import ListOfMessages from "../Common/ListOfMessages";
import TextFeildInput from "../Common/TextFeildInput";
import Message from "../Common/Message";

type Props = {};

const ThreadContainer = (props: Props) => {
  const { messageDataThread = {} } = props;
  return (
    <section>
      {Object.keys(messageDataThread).length > 0 && (
        <Message message={messageDataThread} isThreadMessage={true} />
      )}
      <ListOfMessages
        messages={messageDataThread?.replies ?? []}
        isThread={true}
      />
      <TextFeildInput />
    </section>
  );
};

export default ThreadContainer;
