import React, { useState, useContext } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  InputLabel,
  FormHelperText,
  FormControl,
  FilledInput,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import "../styles/loginpage.css";

export default function RegisterPage(props) {
  const context = useContext(AuthContext);

  const [Error, setError] = useState();
  const [values, setvalues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    console.log(e.target.name, values);
    setvalues({ ...values, [e.target.name]: e.target.value });
  }

  const [addUser, { loading, error }] = useMutation(REGISTER_USER, {
    update(proxy, result) {
      context.login(result.data.login); //since on registration -- we have to login on client
      props.history.push("/");
    },
    variables: values,
    onError(ApolloError) {
      setError(ApolloError);
    },
  });

  function onSubmit(e) {
    e.preventDefault();
    addUser();
    //FEEDING VARIBLES FROM REACT TO GQL
  }
  return (
    <div className="main2">
      <div className="containerx container0">
        <div className="containerx container1">
          <div className="containerx container2">
            <form style={{ opacity: 1 }} onSubmit={onSubmit}>
              <FormControl>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <FilledInput
                  onChange={handleChange}
                  name="email"
                  variant="filled"
                  type="email"
                  color="secondary"
                  aria-describedby="my-helper-text"
                />
                <FormHelperText id="password">
                  We'll never share your email.
                </FormHelperText>
              </FormControl>{" "}
              <br />
              <FormControl>
                <InputLabel htmlFor="username">username</InputLabel>
                <FilledInput
                  onChange={handleChange}
                  name="username"
                  color="secondary"
                  variant="filled"
                  type="username"
                  aria-describedby="username"
                />
              </FormControl>{" "}
              <br />
              <FormControl>
                <InputLabel htmlFor="password">Password</InputLabel>
                <FilledInput
                  name="password"
                  onChange={handleChange}
                  color="secondary"
                  variant="filled"
                  type="password"
                  aria-describedby="password"
                />
              </FormControl>{" "}
              <br />
              <FormControl>
                <InputLabel htmlFor="confirmPassword">
                  Confirm Password
                </InputLabel>
                <FilledInput
                  name="confirmPassword"
                  onChange={handleChange}
                  color="secondary"
                  variant="filled"
                  type="password"
                  aria-describedby="password"
                />
              </FormControl>{" "}
              <br />
              <Button color="primary" variant="contained" type="submit">
                Submit
              </Button>{" "}
              <br />
              <Button color="secondary" variant="contained">
                <Link to="/auth/l">
                  {" "}
                  <p
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    {" "}
                    Sign In Instead{" "}
                  </p>{" "}
                </Link>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const REGISTER_USER = gql`
  mutation registerUser(
    $email: String!
    $username: String!
    $password: String!
    $confirmPassword: String!
  ) {
    registerUser(
      email: $email
      username: $username
      password: $password
      confirmPassword: $confirmPassword
    ) {
      token
      username
      createdAt
      email
    }
  }
`;
