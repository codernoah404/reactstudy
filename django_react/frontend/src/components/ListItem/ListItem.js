import React from "react";

const ListItem = ({ items }) => {
  console.log(items);
  return (
    <div className="Listcontainer">
      <ul className="item-container">
        {items.map((item, idx) => (
          <li className="item" key={idx}>
            <div className="d-flex li-box">
              <div className="thumbnail-div">
                <img className="thumbnail" src={item.thumbnail} />
              </div>
              <div className="li-box-text ">
                <p className="text">
                  <a href={`/${item.id}`} className="them-title">
                    {/* <strong>{item.title}</strong> */}
                  </a>
                  <br />
                  {item.companyName}
                  <br />
                  난이도: {item.level}/5
                  <br />
                  시간: {item.time}분
                  <br />
                  평점: {item.grade}점
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItem;
