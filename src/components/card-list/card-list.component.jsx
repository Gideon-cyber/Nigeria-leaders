import React from "react";
import { Card } from "../card/card.component";

import "./card-list.styles.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.leaders.map((leader) => (
        <Card key={leader.id} leader={leader} />
      ))}
      {/*  */}
    </div>
  );
};
