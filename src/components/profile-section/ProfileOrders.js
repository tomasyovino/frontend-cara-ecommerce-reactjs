import { Order } from "../";
import { Link } from "react-router-dom";

const ProfileOrders = ({ orders }) => {
  return (
    <div className="orders-data">
      <h2>Tus ordenes</h2>
      <div className="orders-container">
        {
          orders && orders.length !== 0
            ?
              orders.map((order) => (
                <Order order={order} />
              ))
            : <span>Aún no tienes ordenes registradas.</span>
        }
      </div>
      <div className="orders-link">
        {
          orders && orders.length
            ? <Link to={`/orders/${orders[0].userId}`}>Ver más</Link>
            : <Link to={`/`} className="disabled">Ver más</Link>
        }
      </div>
    </div>
  );
};

export default ProfileOrders;