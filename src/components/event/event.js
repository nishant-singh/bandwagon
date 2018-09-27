import React from "react";

import toDate from "../../utils/convertToDate";
import style from "./event.scss";
import locationIcon from "../../images/location_icon.png";

function EventDetails (props) {
  return ( 
    <div className={style.event}>
      <section className={style.row}>
        <div className={style.venue}>
          {props.data.venue.name}
        </div>
        <div className={style.venue_location}>
          <img className={style.icon} src={locationIcon} alt="location"/>
          {props.data.venue.city}, {props.data.venue.country}
        </div>
      </section>
      <section className={`${style.row} ${style.venue_date}`}>
        {toDate(props.data.datetime)}
      </section>
    </div>
  );
}
export default EventDetails;