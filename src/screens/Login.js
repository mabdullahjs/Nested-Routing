import React, { useState } from "react";
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function Login() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginUser = () => {
    // console.log(name , email , password);
    navigate(`home`, {
      state: {
        name: name,
        email: email,
        password: password,
      },
    });
  };

  return (
    <div style={{ marginTop: "15%" }}>
      <h1 className="text-center" style={{ color: "#3b71ca" }}>
        LOGIN
      </h1>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          wrapperClass="mb-4"
          label="Full Name"
          id="form0"
          type="text"
        />
        <MDBInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          wrapperClass="mb-4"
          label="Email address"
          id="form1"
          type="email"
        />
        <MDBInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          wrapperClass="mb-4"
          label="Password"
          id="form2"
          type="password"
        />

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Remember me"
          />
        </div>

        <MDBBtn onClick={loginUser} className="mb-4">
          LOGIN
        </MDBBtn>
      </MDBContainer>
    </div>
  );
}

export default Login;
