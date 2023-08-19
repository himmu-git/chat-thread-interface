import React from "react";

type Props = {};

const SearchField = (props: Props) => {
  const { onChange } = props;
  return (
    <>
      <input
        type="search"
        className="searchField"
        placeholder="Search User Name Here"
        onChange={onChange}
      />
    </>
  );
};

export default SearchField;
