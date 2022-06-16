import React from "react";

import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card">
      {/* <img alt="leader" src={require(`./img/image${props.leader.id}.jpg`)} /> */}
      <img
        alt=""
        src={process.env.PUBLIC_URL + `/image${props.leader.id}.jpg`}
      />
      <h2>{props.leader.name}</h2>
      <p>{props.leader.year}</p>

      {/**/}
    </div>
  );
};
