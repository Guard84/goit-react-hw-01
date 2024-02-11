import css from './FriendListItem.module.css';
import clsx from 'clsx';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = clsx(isOnline ? css.online : css.offline);
  return (
    <div className={css.friendInfo}>
  <img src={avatar} alt="Avatar" width="48" />
  <p className={css.friendName}>{name}</p>
  <p className={statusClass}>{isOnline ? "Online" : "Offline"}</p>
    </div>

  )
}