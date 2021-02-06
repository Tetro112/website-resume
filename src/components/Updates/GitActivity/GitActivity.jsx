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
} from "../UpdatesElements.js";

import Icon from "./EventIcon.jsx";
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
                <Icon item={item} />
              </Event>
            );
          })}
        </EventContainer>
      </Body>
    </GitActivityContainer>
  );
};

export default GitActivity;
