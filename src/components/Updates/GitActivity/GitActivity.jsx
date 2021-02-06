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
  EventRepoLink,
  EventRepo,
  EventTime,
} from "../UpdatesElements.js";
import Action from "./EventAction.jsx";
import moment from "moment";
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
                <EventRepo>
                  <EventRepoLink
                    href={"https://www.github.com/" + item.repo.name}
                    target="_blank"
                  >
                    {item.repo.name}
                  </EventRepoLink>
                </EventRepo>
                <EventTime>{moment(item.created_at).fromNow()}</EventTime>
              </Event>
            );
          })}
        </EventContainer>
      </Body>
    </GitActivityContainer>
  );
};

export default GitActivity;
