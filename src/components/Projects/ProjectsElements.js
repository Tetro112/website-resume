import styled from "styled-components";
import ItemWrapper from "./ItemWrapper";

export const ProjectsWrapper = styled.div`
  height: ${window.innerHeight - 80}px;
  background: #000015;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ProjectsImage = styled.img`
  height: 50%;
  fill: #fff;
`;

export const ProjectsContainer = styled.div`
  display: none;
`;

export const ProjectItemWrapper = styled(ItemWrapper)`
  display: none;
`;
export const ItemButton = styled.button`
  display: none;
`;
export const ProjectItem = styled.div`
  display: none;
`;

export const ItemTitle = styled.h2`
  display: none;
`;

export const ItemLink = styled.a`
  display: none;
`;

export const ItemContentContainer = styled.div`
  display: none;
`;

export const ItemContent = styled.div`
  display: none;
`;

export const ItemDescription = styled.h4`
  display: none;
`;

export const LogoContainer = styled.div`
  display: none;
`;
