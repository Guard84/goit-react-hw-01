import css from "./Profile.module.css";

export const Profile = ({ name, tag, location, image, stats: { followers, views, likes } }) => {
  return (
    <div className={css.wrapperProfile}>
 <div>
  <img className={css.imgProfile}
    src={image}
      alt="User avatar"
        />
  <p className={css.usernameTitle}>{name}</p>
  <p className={css.valueTitle}>@{tag}</p>
  <p className={css.valueTitle}>{location}</p>
 </div>

 <ul className={css.listProfile}>
  <li className={css.itemProfile}>
   <span className={css.itemTitle}>Followers</span>
   <span className={css.itemValue}>{followers}</span>
  </li>
  <li className={css.itemProfile}>
   <span className={css.itemTitle}>Views</span>
   <span className={css.itemValue}>{views}</span>
  </li>
  <li className={css.itemProfile}>
   <span className={css.itemTitle}>Likes</span>
   <span className={css.itemValue}>{likes}</span>
  </li>
  </ul>
</div>
  )
}