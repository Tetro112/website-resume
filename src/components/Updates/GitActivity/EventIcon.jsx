import React from "react";
import { EventIcon } from "../UpdatesElements";
import {
  GitForkIcon,
  GitCommitIcon,
  GitPullRequestIcon,
  GitBranchIcon,
  GitMergeIcon,
  RepoIcon,
  StarFillIcon,
} from "@primer/octicons-react";

const Icon = (props) => {
  return (
    <EventIcon>
      {props.item.type === "PushEvent" ? (
        <GitCommitIcon />
      ) : props.item.type === "PullRequestEvent" ? (
        props.item.payload.action === "opened" ? (
          <GitPullRequestIcon />
        ) : props.item.payload.action === "closed" &&
          props.item.payload.pull_request.merged === true ? (
          <GitMergeIcon />
        ) : null
      ) : props.item.type === "ForkEvent" ? (
        <GitForkIcon />
      ) : props.item.type === "CreateEvent" ? (
        props.item.payload.ref_type === "branch" ? (
          <GitBranchIcon />
        ) : props.item.payload.ref_type === "repository" ? (
          <RepoIcon />
        ) : null
      ) : props.item.type === "WatchEvent" ? (
        <StarFillIcon />
      ) : null}
    </EventIcon>
  );
};

export default Icon;
