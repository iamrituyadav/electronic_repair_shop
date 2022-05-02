import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Auth } from "../Redux/actions";
import { store } from "../Redux/store";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/users").then((res) => {
      setData(res.data);
    });
  }, []);

  const handleClick = () => {
    // axios.get("http://localhost:8080/users").then((res) => {
    //   // setData(res.data);

    const [user] = data.filter((item) => {
      if (item.username === username && item.pass === password) {
        return true;
      }

      return false;
    });

    dispatch(Auth(user));

    if (user.role === "admin") {
      return navigate("/newOrders", { replace: true });
    } else {
      return navigate("/orders", { replace: false });
    }
    // });
  };

  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button onClick={handleClick} className="submit">
        Login
      </button>
    </div>
  );
};
