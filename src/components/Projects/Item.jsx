import React, { useState } from "react";
import {
  ItemContent,
  ItemDescription,
  ItemTitle,
  LogoContainer,
  ItemContainer,
} from "./ProjectsElements";

const ItemWrapper = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <>
      <ItemContainer onClick={handleClick} isClicked={isClicked}>
        <ItemTitle>{props.item.title}</ItemTitle>
      </ItemContainer>
      {isClicked ? (
        <ItemContent>
          <ItemDescription>{props.item.description}</ItemDescription>

          <LogoContainer>
            {props.item.tech.map((icon) => {
              return icon;
            })}
          </LogoContainer>
        </ItemContent>
      ) : null}
    </>
  );
};

export default ItemWrapper;
