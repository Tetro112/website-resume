import React from "react";
import { EventRepo, EventRepoLink } from "../UpdatesElements";

const Repo = (props) => {
  return (
    <>
      <EventRepo>
        <EventRepoLink href={props.item.repo.url} target="_blank">
          {props.item.repo.name}
        </EventRepoLink>
      </EventRepo>
    </>
  );
};

export default Repo;
