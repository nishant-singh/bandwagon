import React, {Fragment} from "react";

import EventDetails from "../event/event";
import styles from "./artist_profile.scss";

function ArtistProfile (props) {
  if(props.artist){
    const events = getEvents(props);
    return (
      <Fragment>
        <div className={styles.profileCard}>
          <img 
            src={props.artist.image_url} 
            alt={props.artist.name}
            className={styles.profileImage}
          />
          <div className={styles.background}></div>
          <div className={styles.backdrop}>
            <div className={styles.backdropInner}>
              <h2>{props.artist.name}</h2>
              <p>
                  <a href={props.artist.facebook_page_url} target="_blank">Follow on Facebook</a>
              </p>
            </div>
          </div>
        </div>
        <ul className={styles.eventList}>
          {events}
        </ul>
      </Fragment>
    );
  }
  else 
      return (null);
}

function getEvents(props){
  return props.artist.events.length ? props.artist.events.map(event => {
    return <li key = { event.id }><EventDetails data = {event}/></li>;
  }) : null;
}

export default ArtistProfile;