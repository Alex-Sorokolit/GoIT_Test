import React from "react";
import css from "./Card.module.css";
import { ReactComponent as Logo } from "../img/Logo.svg";
import { ReactComponent as Circle } from "../img/Ellipse.svg";

import background from "../img/background.png";
import defaultAvatar from "../img/default_avatar.png";

const Card = ({
  user: { id, user, avatar, tweets, followers, isSubscribed },
  subscribe,
  unsubscribe,
}) => {
  return (
    <div className={css.card}>
      <Logo className={css.logo} />

      <img
        className={css.background}
        src={background}
        alt="background"
        width={308}
        height={168}
      />
      <div className={css.line}></div>

      <p>{avatar}</p>
      <div className={css.avatar_thumb}>
        {avatar ? (
          <img className={css.avatar} src={avatar} alt="avatar" width={62} />
        ) : (
          <img
            className={css.avatar}
            src={defaultAvatar}
            alt="avatar"
            width={62}
          />
        )}
      </div>

      <div className={css.circle_thumb}>
        <Circle className={css.circle} />
      </div>

      <div className={css.stats}>
        <p className={css.name}>{user}</p>
        <p className={css.tweets}>{tweets} tweets</p>
        <p className={css.followers}>{followers} Followers</p>
      </div>

      {isSubscribed ? (
        <button
          className={`${css.button} ${css.followingBtn}`}
          onClick={() => unsubscribe(id)}
        >
          Following
        </button>
      ) : (
        <button
          className={`${css.button} ${css.followBtn}`}
          onClick={() => subscribe(id)}
        >
          Follow
        </button>
      )}
    </div>
  );
};

export default Card;
