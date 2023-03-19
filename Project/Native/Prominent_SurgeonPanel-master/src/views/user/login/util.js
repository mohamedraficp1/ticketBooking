import { useCallback,  useState } from "react";
import { useHistory } from "react-router";
import { setCurrentUser } from "../../../helpers/Utils";

const useLogin = () => {
  const [email, setEmail] = useState("app.user@email.com");
  const [password, setPassword] = useState("app@123");
  const history = useHistory();

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    if (email === "app.user@email.com" && password === "app@123") {
      const user = { Email: email, Password: password };
      console.log(user);
      setCurrentUser(user);
      history.push("/app");
    }
  };


  return { email, password, onChangeEmail, onChangePassword, onSubmit };
};

export default useLogin;
