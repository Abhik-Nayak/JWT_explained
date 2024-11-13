import { useState } from "react";
import axios from "axios";
import { Button, TextField, Typography, Container } from "@mui/material";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/register", { username, email, password });
      alert("Registration successful");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  const handleRegister = async (e) => {
    console.log('called')
    e.preventDefault();

    let tempErrors = {};
    if (!username) tempErrors.username = "Username is required";
    if (!email) tempErrors.email = "Email is required";
    if (!password || password.length < 6)
      tempErrors.password = "Password must be at least 6 characters";

    if (Object.keys(tempErrors).length === 0) {
      // Call register API
      try {
        await axios.post("http://localhost:5000/api/auth/register", { username, email, password });
        alert("Registration successful");
      } catch (error) {
        console.error("Registration error:", error);
      }
    } else {
      setErrors(tempErrors);
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleRegister}>
      <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={!!errors.username}
          helperText={errors.username}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Register;
