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
  EventUserName,
  EventNameLink,
} from "../UpdatesElements.js";
import Action from "./EventAction.jsx";

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
                <EventUserName>
                  <EventNameLink href={props.profileUrl} target="_blank">
                    {item.actor.login}
                  </EventNameLink>
                </EventUserName>
                <Action item={item} />
              </Event>
            );
          })}
        </EventContainer>
      </Body>
    </GitActivityContainer>
  );
};

export default GitActivity;
