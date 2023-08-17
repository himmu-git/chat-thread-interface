type Props = {
  isSent?: boolean;
  message: any;
  onReplyClick?: any;
  isThreadMessage: boolean;
  onReplyButtonClick?: any;
};

const Message = (props: Props) => {
  const {
    message = {},
    onReplyClick,
    isThreadMessage = false,
    onReplyButtonClick,
  } = props;
  const { replies } = message ?? {};
  if (!message) return null;
  return (
    <div>
      <div
        className={`${message?.isSent ? "msgSent" : "msgBox"} ${
          replies?.length > 0 && !isThreadMessage ? "showReplies" : ""
        }`}
      >
        <div className="message">
          <span>{message?.msgTxt}</span>
          <div className="timeStatusBox">
            <span>{message?.msgTime?.toDateString()}</span>
            <span className="status">{message?.msgStatus}</span>
          </div>
        </div>
        {replies?.length > 0 && !isThreadMessage && (
          <div className="replies" onClick={onReplyClick}>
            {replies.length} reply
          </div>
        )}
        {replies?.length <= 0 && !isThreadMessage && (
          <div className="moreOption">
            <button onClick={onReplyButtonClick}>Reply</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
