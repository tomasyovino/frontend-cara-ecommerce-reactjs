import { ProfileData, ProfileOrders } from "../";

const ProfileBanner = ({ user, orders, dispatch }) => {
  return (
    <section id="profile" className="profile section-p1">
        <ProfileData user={user} dispatch={dispatch} />
        <ProfileOrders orders={orders} />
    </section>
  )
}

export default ProfileBanner