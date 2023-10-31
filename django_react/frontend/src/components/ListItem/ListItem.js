import React from "react";
import "../Listcontainer/Listcontainer";

const ListItem = ({ items }) => {
  console.log(items);
  return (
    <div className="Listcontainer">
      <h1>테스트</h1>
      <ul className="Item-container">
        {items.map((item, idx) => (
          <li className="Item" key={idx}>
            <a href={`/${item.id}`}>
              {/* <a href={get_url(item.id)}> */}
              <img className="Thumbnail" src={item.thumbnail} />
              <div className="TextBOX" />
              <p className="Text">
                {item.title}
                <br />
                {item.companyName}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItem;
