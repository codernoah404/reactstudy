import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Category = () => {
  return (
    <div className="category-container">
      <ButtonGroup vertical>
        <button className="category">추천순</button>
        <button className="category">인기순</button>
        <button className="category">색다름</button>
      </ButtonGroup>
    </div>
  );
};

export default Category;
