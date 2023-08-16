import React from "react";
import UserCardWithLastMessageCard from "./UserCardWithLastMessageCard";

type Props = {};

const ListOfUser = (props: Props) => {
  return (
    <aside>
      <UserCardWithLastMessageCard />
    </aside>
  );
};

export default ListOfUser;
