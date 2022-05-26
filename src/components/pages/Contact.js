// import React from 'react';

// export default function Contact() {
//     return (
//         <div>
//             <p>
//             Nunc vel lectus non sem porta faucibus. Duis ultrices vestibulum lectus, eu gravida elit pretium vel.
//             Nulla facilisi. Vivamus vitae cursus nisl. Mauris quam ipsum, pulvinar vel dolor vitae, dictum tincidunt urna.
//             Cras porttitor ligula magna, sit amet ultricies tortor egestas vel. Praesent at venenatis enim.
//             Maecenas consectetur cursus tortor, non vehicula ligula egestas at. Ut a mauris ut est gravida pretium. Cras id aliquet tortor.
//             </p>
//         </div>
//     )
// }

// function TODO:ChangeName() {
//     const [input, setInput] = useState('');
//     let [eagerness, setEagerness] = useState('');

//     const handleSubmit = (e) => {
//       e.preventDefault();

//       props.onSubmit({
//         id: Math.random(Math.floor() * 1000),
//         text: input,
//         eagerness: eagerness,
//       });

//       setInput('');
//       setEagerness('');
//     };

//     const handleChange = (e) => {
//       setInput(e.target.value);
//     };

// }

import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
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
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  // const handleSliderChange = (name) => (e, value) => {
  //   setFormValues({
  //     ...formValues,
  //     [name]: value,
  //   });
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
		formValues.name = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <TextField id="name-input" name="name" label="Name" type="text" value={formValues.name} onChange={handleInputChange} />
          <TextField id="email-input" name="email" label="Email" type="text" value={formValues.email} onChange={handleInputChange} />
          
        </Grid>
				<TextField
          id="message"
          label="Message"
          multiline
          rows={4}
          value= {formValues.message}
        />
				{/* <TextField error id="outlined-error-helper-text" label="Error" defaultValue="Hello World" helperText="Incorrect entry." /> */}
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default Contact;
