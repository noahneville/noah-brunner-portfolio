import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { validateEmail } from '../../util/emailValidator';
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
const defaultValues = {
  name: "",
  age: 0,
  gender: "",
  os: "",
  favoriteNumber: 0,
};
const Contact = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState ] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { name, email, message } = formState;
  const [formValues, setFormValues ] = useState(defaultValues);
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({
  //     ...formValues,
  //     [name]: value,
  //   });
  // };
  // const handleSliderChange = (name) => (e, value) => {
  //   setFormValues({
  //     ...formValues,
  //     [name]: value,
  //   });
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formValues);
		// formValues.name = "";
  };

  const handleChange = (event) => {
    if(event.target.name === 'email') {
      const isValid = validateEmail(event.target.value);
      if(!isValid) {
        setErrorMessage('Not a valid email.');
        console.log('not valid')
      } else {
        setErrorMessage('');
      }
    } else {
    if(!event.target.value.length) {
      setErrorMessage(`${event.target.name} is required.`)
      console.log("working");
    } else {
      setErrorMessage('');
    }
  }
  } 
  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <input id="name-input" name="name" label="Name" type="text"  onBlur={handleChange} />
          <input id="email-input" name="email" label="Email" type="text"  onBlur={handleChange}  />
          
        </Grid>
				<TextField
          id="message"
          label="Message"
          multiline
          rows={4}
          value= {formValues.message}
        />
				{/* <TextField error id="outlined-error-helper-text" label="Error" defaultValue="Hello World" helperText="Incorrect entry." /> */}
        {errorMessage && (
          <div>
            <p className='error-text'>{errorMessage}</p>
        </div>
        )}
        
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default Contact;
