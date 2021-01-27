import React, { useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { AuthContext } from "../contexts/AuthContext";
import {
  InputLabel,
  FormHelperText,
  FormControl,
  FilledInput,
  Button,
} from "@material-ui/core";
import "../styles/loginpage.css";

export default function Loginpage(props) {
  const [Error, setError] = useState(null);
  const context = useContext(AuthContext);
  const [values, setvalues] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    console.log(e.target.name);
    setvalues({ ...values, [e.target.name]: e.target.value });
  }

  const [loginUser, { loading, error }] = useMutation(LOGIN_USER, {
    update(proxy, result) {
      context.login(result.data.login);
      props.history.push("/");
    },

    variables: values,
    onError(ApolloError) {
      setError(ApolloError);
    },
  });

  function onSubmit(e) {
    e.preventDefault();
    loginUser();
  }

  return (
    <div className="main2">
      <div className="containerx container0">
        <div className="containerx container1">
          <div className="containerx container2">
            <form style={{ opacity: 1 }} onSubmit={onSubmit}>
              <div className="form-item"></div>{" "}
              <FormControl>
                <InputLabel htmlFor="username">username </InputLabel>
                <FilledInput
                  value={values.username}
                  onChange={handleChange}
                  name="username"
                  variant="filled"
                  aria-describedby="my-helper-text"
                />
                <FormHelperText id="password">
                  We'll never share your email.
                </FormHelperText>
              </FormControl>{" "}
              <br />
              <FormControl>
                <InputLabel htmlFor="password">Password</InputLabel>
                <FilledInput
                  value={values.password}
                  onChange={handleChange}
                  name="password"
                  color="secondary"
                  variant="filled"
                  type="password"
                  aria-describedby="password"
                />
              </FormControl>{" "}
              <br />
              <Button color="secondary" variant="contained" type="submit">
                Submit{" "}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      username
      createdAt
    }
  }
`;
