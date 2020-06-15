import React from "react";

import "./previews.styles.scss";

import CollectionItem from "../collection-item/collection-item";

const Previews = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...itemProps }) => {
            return <CollectionItem key={id} {...itemProps} />;
          })}
      </div>
    </div>
  );
};

export default Previews;
