import {
  Body,
  Header,
  GithubLogo,
  ProfileName,
  ProfilePic,
  ProfilelLink,
  ProfilelNameLink,
  GitActivityContainer,
  Event,
  EventContainer,
  EventIcon,
} from "../UpdatesElements.js";

import {
  GitForkIcon,
  GitCommitIcon,
  GitPullRequestIcon,
  GitBranchIcon,
  GitMergeIcon,
  RepoIcon,
  StarFillIcon,
} from "@primer/octicons-react";
const GitActivity = (props) => {
  return (
    <GitActivityContainer>
      <Header>
        <ProfilelLink href={props.profileUrl} target="_blank">
          <ProfilePic src={props.profilePic} />
        </ProfilelLink>

        <ProfileName>
          <ProfilelNameLink href={props.profileUrl} target="_blank">
            {props.profileName}
          </ProfilelNameLink>
        </ProfileName>

        <GithubLogo />
      </Header>
      <Body>
        <EventContainer>
          {props.events.map((item, index) => {
            return (
              <Event key={index}>
                <EventIcon>
                  {item.type === "PushEvent" ? (
                    <GitCommitIcon />
                  ) : item.type === "PullRequestEvent" ? (
                    item.payload.action === "opened" ? (
                      <GitPullRequestIcon />
                    ) : item.payload.action === "closed" &&
                      item.payload.pull_request.merged === true ? (
                      <GitMergeIcon />
                    ) : null
                  ) : item.type === "ForkEvent" ? (
                    <GitForkIcon />
                  ) : item.type === "CreateEvent" ? (
                    item.payload.ref_type === "branch" ? (
                      <GitBranchIcon />
                    ) : item.payload.ref_type === "repository" ? (
                      <RepoIcon />
                    ) : null
                  ) : item.type === "WatchEvent" ? (
                    <StarFillIcon />
                  ) : null}
                </EventIcon>
              </Event>
            );
          })}
        </EventContainer>
      </Body>
    </GitActivityContainer>
  );
};

export default GitActivity;
