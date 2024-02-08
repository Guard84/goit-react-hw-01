export const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline ? "online" : "offline";
  
  return (
    <div>
  <img src={avatar} alt="Avatar" width="48" />
  <p>{name}</p>
  <p className={status}>{isOnline ? "Online" : "Offline"}</p>
    </div>

  )
}