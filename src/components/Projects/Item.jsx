import React, { useState } from "react";
import {
  ItemContent,
  ItemDescription,
  ItemTitle,
  LogoContainer,
  ItemButton,
} from "./ProjectsElements";

const ItemWrapper = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <>
      <ItemButton onClick={handleClick}>
        <ItemTitle>{props.item.title}</ItemTitle>
      </ItemButton>
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
