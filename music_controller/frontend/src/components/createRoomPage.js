import React from "react";
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
const CreateRoomPage = () => {
  var defaultVotes = 2;
  return (
    <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography component='h4' variant="h4">
            Create A Room
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <FormControl component="fieldset">
            <FormHelperText>
              <div align='center'>
                Guest Control of Playback State
              </div>    
            </FormHelperText>
            <RadioGroup row defaultValue='true'>
              <FormControlLabel 
                value="true"  
                control={<Radio color="primary" />}
                label="Play/Pause"
                labelPlacement="bottom"
              />
              <FormControlLabel 
                value="false"  
                control={<Radio color="secondary" />}
                label="No Control"
                labelPlacement="bottom"
              />
              <Grid item xs={12} align="center">
                <FormControl>
                  <TextField 
                    required={true}
                    type="number" 
                    default={defaultVotes} 
                    inputProps={{
                      min: 1,
                      style: {
                        textAlign: "center"
                      }
                    }}
                  />
                  <FormHelperText>
                    <div align="center">Votes required to skip song</div>
                  </FormHelperText>
                </FormControl>
              </Grid>
            </RadioGroup>
          </FormControl>
        </Grid>
    </Grid>
    


  )
}
export default CreateRoomPage

  