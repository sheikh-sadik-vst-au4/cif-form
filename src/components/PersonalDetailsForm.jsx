import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';

function PersonalDetailsForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
    // You can handle form submission here
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="left" gutterBottom>
      PART A-PERSONAL DETAILS: 
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} gutterBottom>
          <Grid item xs={12}>
            <TextField
              fullWidth
              {...register('fullName')}
              label="Full Name (First/Middle/Last)"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              {...register('fatherName')}
              label="Father’s Name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              {...register('dob')}
              label="Date of birth (DD/MM/YY)"
              variant="standard"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              {...register('nationality')}
              label="Nationality"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              {...register('phoneNumber')}
              label="Your Phone Number (Land Line and/or Mobile)"
              variant="standard"
              type="tel"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              {...register('ssn')}
              label="Social Security Number (If worked/studied in the US/Any other Country)"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
             <Typography variant="h6" align="left" gutterBottom>
               Change of Name if Applicable
             </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              {...register('formerName')}
              label="Former Name/Maiden Name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              {...register('nameChangeDate')}
              label="Date of Name Change"
              variant="standard"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              {...register('currentAddress')}
              label="Current Address (Complete details like Door Number, street, locality, etc.,)"
              variant="standard"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              {...register('currentLandline')}
              label="Landline (Current)"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              {...register('currentStayPeriod')}
              label="Period of Stay (Current)"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              {...register('permanentAddress')}
              label="Permanent Address"
              variant="standard"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              {...register('permanentLandline')}
              label="Landline (Permanent)"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              {...register('permanentStayPeriod')}
              label="Period of Stay (Permanent)"
              variant="standard"
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" fullWidth style={{margin: "20px"}}>
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default PersonalDetailsForm;
