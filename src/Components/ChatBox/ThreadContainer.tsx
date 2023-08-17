import ListOfMessages from "../Common/ListOfMessages";
import TextFeildInput from "../Common/TextFeildInput";
import Message from "../Common/Message";

type Props = {
  messageDataThread: any;
  onSendInThread: any;
};

const ThreadContainer = (props: Props) => {
  const { messageDataThread = {}, onSendInThread } = props;
  return (
    <section>
      {Object.keys(messageDataThread).length > 0 && (
        <Message message={messageDataThread} isThreadMessage={true} />
      )}
      <ListOfMessages
        messages={messageDataThread?.replies ?? []}
        isThread={true}
      />
      <TextFeildInput
        onSendClick={(msg) => {
          onSendInThread(msg);
        }}
        isReply={true}
      />
    </section>
  );
};

export default ThreadContainer;
