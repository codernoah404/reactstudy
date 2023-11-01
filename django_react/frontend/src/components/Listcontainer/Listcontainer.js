import React from "react";
import "./container.css";
import ListItem from "../ListItem/ListItem_copy";

const Listcontainer = ({ itemList }) => {
  console.log(itemList);
  return (
    <div>
      <ListItem items={itemList} />
    </div>
  );
};

export default Listcontainer;
