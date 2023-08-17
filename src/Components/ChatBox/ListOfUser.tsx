import React from "react";
import UserCardWithLastMessageCard, {
  UserCardWithLastMessageCardType,
} from "./UserCardWithLastMessageCard";

type Props = {
  userDetailMsgDetails: UserCardWithLastMessageCardType[];
};

const ListOfUser = (props: Props) => {
  const { userDetailMsgDetails, setUserSelected } = props;
  return (
    <aside className="userDetailBox">
      {userDetailMsgDetails.map((userData) => {
        return (
          <UserCardWithLastMessageCard
            key={userData?.userId}
            name={userData?.name}
            lastMsg={userData?.lastMsg}
            lastMsgSentDate={userData?.lastMsgSentDate}
            onClick={() => {
              setUserSelected?.(userData?.userId);
            }}
          />
        );
      })}
    </aside>
  );
};

export default ListOfUser;
