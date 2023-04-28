import React from 'react'
import css from './Card.module.css'
import { ReactComponent as Logo } from '../img/Logo.svg';
import { ReactComponent as Circle } from '../img/Ellipse.svg';

import background from '../img/background.png';
import defaultAvatar from '../img/default_avatar.png'
const Card = () => {
  return (
    <div className={css.card}>
      <Logo className={css.logo} />
      <img className={css.background} src={background } alt='background' width={308} height={168} />
      <div className={css.line}></div>
      
      <div className={css.avatar_thumb}>
        <img className={css.avatar} src={defaultAvatar} alt='background' width={62} />
      </div>
      
      <div className={css.circle_thumb}>
        <Circle className={css.circle} />
      </div>

      <div className={css.stats}>
        <p className={css.tweets}>777 tweets</p>
        <p className={css.followers}>100,500 Followers</p>
      </div>
      
        <button className={css.followBtn}>Follow</button>
    </div>
  )
}

export default Card
