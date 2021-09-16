import { useHistory } from "react-router";
import axios from "axios";

import UserForm from "../components/user/UserForm";

export default function LoginPage(props) {
  const history = useHistory();

  const loginHandler = async (user) => {
    const response = await axios({
      url: `https://${user.company}.ox-sys.com/security/auth_check`,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: `_username=${user.username}&_password=${user.password}&_subdomain=${user.company}`,
    });

    if (response.status === 200) {
      const token = await response.data.token;
      if (token) {
        props.addUser({ ...user, token });
        localStorage.setItem("user", JSON.stringify({ ...user, token }));
      }
      history.push("/products");
    }
  };

  return <UserForm login={loginHandler} />;
}
