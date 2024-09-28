import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  Container,
  Box,
  Paper,
} from "@mui/material";
import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedData({ name, email });
    setName("");
    setEmail("");
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Material UI Form</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box mt={4}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <Typography variant="h5" gutterButton>
              Введите свои данные
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Имя"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Box mt={2}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={!name || !email}
                >
                  Отправить
                </Button>
              </Box>
            </form>
          </Paper>
        </Box>
        {submittedData && (
          <Box mt={4}>
            <Paper elevation={3} style={{ padding: 16 }}>
              <Typography variant="h6" gutterButton>
                Введите данные:
              </Typography>
              <Typography variant="body1">
                <strong>Имя: </strong>
                {submittedData.name}
              </Typography>
              <Typography variant="body1">
                <strong>Email:</strong>
                {submittedData.email}
              </Typography>
            </Paper>
          </Box>
        )}
      </Container>
    </div>
  );
}

export default Form;
