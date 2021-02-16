import React from "react";
import {
  ItemContent,
  ItemContentContainer,
  ItemDescription,
  ItemLink,
  ItemTitle,
  LogoContainer,
  ProjectsItem,
} from "./ProjectsElements";

const ItemWrapper = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <ItemButton onClick={handleClick}>
      <ProjectItem>
        <ItemLink href={props.item.url}>
          <ItemTitle>{props.item.title}</ItemTitle>
        </ItemLink>
        {isClicked ? (
          <ItemContentContainer>
            <ItemContent>
              <ItemDescription>{props.item.description}</ItemDescription>
              <LogoContainer>
                {props.item.tech.map((icon) => {
                  return icon;
                })}
              </LogoContainer>
            </ItemContent>
          </ItemContentContainer>
        ) : null}
      </ProjectItem>
    </ItemButton>
  );
};

export default ItemWrapper;
