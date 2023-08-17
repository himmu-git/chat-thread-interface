import React from "react";

export type UserCardWithLastMessageCardType = {
  userId: number;
  name: string;
  lastMsg: string;
  lastMsgSentDate: Date;
};

const userImageFallback =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxLjQxNDIxOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyZWN0IGhlaWdodD0iMTI4IiBpZD0iVXNlciIgc3R5bGU9ImZpbGw6bm9uZTsiIHdpZHRoPSIxMjgiIHg9IjAuMTk1IiB5PSIwIi8+PHBhdGggZD0iTTY0LjQ2OCw3MGMyNS4yNzIsMC4xNDEgNDkuMDc4LDE2Ljc2NSA1Ny4yMjUsNDIuOTc2YzAuMjc3LDAuODkgMC42NzgsMS44MTQgMC40LDIuNjUyYy0wLjY0MSwxLjk0IC0zLjMyNSwxLjQ4IC00LjE2NCwtMS4yODRjLTUuNjQzLC0xOC4zMDggLTIwLjE4MiwtMzQuMDAxIC0zOS4xOTgsLTM4LjY2M2MtMTYuODU3LC00LjEzMiAtMzUuNzI4LC0wLjc2IC00OC42ODQsMTAuNDM0Yy04LjUyMyw3LjM2NCAtMTQuODc5LDE3LjQ2MyAtMTcuODUyLDI4LjE0NWMwLDAgLTEuNDM0LDIuNzc3IC0zLjI2MiwxLjI5MmMtMS44NiwtMS41MTIgMC4xMiwtNC45NTMgMS40MiwtOC4xNDZjOC41MzEsLTIwLjk1NCAyOC40MDQsLTM2Ljk4MyA1Mi43OTYsLTM3LjM5OGMwLjQ0LC0wLjAwNiAwLjg3OSwtMC4wMDggMS4zMTksLTAuMDA4Wm0tMC4xMDUsLTU3Ljk5OWMxMS44NzgsMC4xMTMgMjMuMDkzLDkuMjI1IDI1LjM2NiwyMS4wODFjMi4yMiwxMS41NzggLTQuNTI0LDI0LjI2MyAtMTUuNDE3LDI4Ljg3M2MtMTIuMDY3LDUuMTA3IC0yNy42NDYsLTAuNjI4IC0zMy40ODIsLTEyLjU0M2MtNi4wMjYsLTEyLjMwNCAtMC4zMywtMjkuMDQ0IDEyLjM4LC0zNC45ODFjMy40NzUsLTEuNjIzIDcuMjk4LC0yLjQ0MyAxMS4xNTMsLTIuNDNabS0wLjMxMSwzLjk5OWMtOS45NiwwLjA5NSAtMTkuMzExLDcuNjMgLTIxLjM4MiwxNy40MzNjLTIuMDg5LDkuODkgMy42MDksMjAuODc4IDEyLjk2NiwyNC44MzhjMTIuMTczLDUuMTUyIDI4LjMwOSwtMy4yNzQgMzAuMzI1LC0xNy4wNTdjMS43NzgsLTEyLjE1MiAtNy45OTMsLTI0LjgzIC0yMS4xOTgsLTI1LjIwN2MtMC4yMzcsLTAuMDA1IC0wLjQ3NCwtMC4wMDcgLTAuNzExLC0wLjAwN1oiIHN0eWxlPSJmaWxsLXJ1bGU6bm9uemVybzsiLz48L3N2Zz4=";
const UserCardWithLastMessageCard = (props: Props) => {
  const { name, lastMsg, lastMsgSentDate, onClick } = props;
  return (
    <div className="userCardWithLastMessage" onClick={onClick}>
      <div className="profileImageNameBox">
        <img
          className="profileImageInUserCard"
          src={userImageFallback}
          alt=""
        />
        <div>
          <div className="userNameInCard">{name}</div>
          <div className="userMsgInUserCard">{lastMsg}</div>
        </div>
      </div>
      <div className="lastSent">{lastMsgSentDate.toDateString()}</div>
    </div>
  );
};

export default UserCardWithLastMessageCard;
