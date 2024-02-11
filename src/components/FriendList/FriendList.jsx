import { FriendListItem } from "../FriendListItem/FriendListItem"
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.listFriend}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={css.itemFriend}>
          <FriendListItem 
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
