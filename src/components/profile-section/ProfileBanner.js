import { ProfileData, ProfileOrders } from "../";

const ProfileBanner = ({ user, orders }) => {
  return (
    <section id="profile" className="profile section-p1">
        <ProfileData user={user} />
        <ProfileOrders orders={orders} />
    </section>
  )
}

export default ProfileBanner