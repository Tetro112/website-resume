import React from "react";
import { EventAction } from "../UpdatesElements";

const Action = (props) => {
  return (
    <>
      {props.item.type === "PushEvent" ? (
        <EventAction>pushed to</EventAction>
      ) : props.item.type === "PullRequestEvent" ? (
        props.item.payload.action === "opened" ? (
          <EventAction>opened</EventAction>
        ) : props.item.payload.action === "closed" &&
          props.item.payload.pull_request.merged === true ? (
          <EventAction>merged to</EventAction>
        ) : null
      ) : props.item.type === "ForkEvent" ? (
        <EventAction>forked</EventAction>
      ) : props.item.type === "CreateEvent" ? (
        props.item.payload.ref_type === "branch" ? (
          <EventAction>created a branch of</EventAction>
        ) : props.item.payload.ref_type === "repository" ? (
          <EventAction>created</EventAction>
        ) : null
      ) : props.item.type === "WatchEvent" ? (
        <EventAction>stared</EventAction>
      ) : null}
    </>
  );
};

export default Action;
