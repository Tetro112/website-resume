import React, { useEffect, useState } from "react";
import GitActivity from "./GitActivity/GitActivity";
import { UpdatesContainer, UpdatesTitle } from "./UpdatesElements";
import "./Updates.css";
const Updates = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function getGitData() {
      const response = await fetch(
        "https://api.github.com/users/vikas-movva/events/public"
      );
      const data = await response.json();
      setEvents(data);
    }

    getGitData();
  }, []);

  //  Github information
  const profilePic = "https://avatars.githubusercontent.com/u/65259115?";
  const profileUrl = "https://github.com/vikas-movva";
  const profileName = "Vikas Movva";

  return (
    <>
      <UpdatesContainer id="Updates">
        <UpdatesTitle>Github Activity</UpdatesTitle>
        <GitActivity
          className="git-activity"
          profileUrl={profileUrl}
          profilePic={profilePic}
          profileName={profileName}
          events={events}
        />
        {console.log(events)}
      </UpdatesContainer>
    </>
  );
};

export default Updates;
