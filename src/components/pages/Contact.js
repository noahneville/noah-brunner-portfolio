import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { validateEmail } from "../../util/emailValidator";

const defaultValues = {
  name: "",
  email: "",
  message: "",
};
const Contact = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [formValues, setFormValues] = useState(defaultValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length && email.length && message.length) {
      window.location.href = `mailto: noahneville@gmail.com?cc=${email}&subject=portfolioContact&body=${message}}`;

      setFormState('')
  };
  };

  const handleChange = (event) => {
    if (event.target.name === "email") {
      const isValid = validateEmail(event.target.value);
      if (!isValid) {
        setErrorMessage("Not a valid email.");
        console.log("not valid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required.`);
        console.log("working");
      } else {
        setErrorMessage("");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className='container-fluid page-container Contact'>
      <h2>Contact Me</h2>
      <p >Enter your name, email and a message below to get in contact with me.</p>
      <Grid container alignItems="center" spacing={2} direction="column">
        <Grid item>
          <input id="name-input" name="name" label="Name" type="text" onBlur={handleChange} />
        </Grid>
        <Grid item>
          <input id="email-input" name="email" label="Email" type="text" onBlur={handleChange} />
        </Grid>
        <Grid item>
        <TextField id="message" label="Message" multiline rows={4} />
        </Grid>
        {/* <TextField error id="outlined-error-helper-text" label="Error" defaultValue="Hello World" helperText="Incorrect entry." /> */}
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

        <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default Contact;

{/* <Button
  onClick={() => {
    alert('clicked');
  }}
>
  Click me
</Button> */}
