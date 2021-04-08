import React from "react";
import ParticipantDetails from './ParticipantDetails';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import useStyles from "./ParticipantList.styles";
import Chip from "../Chip/Chip";

const AllParticipants = ({ participantList }) => {
  const classes = useStyles();
  if (!participantList) {
    return null;
  }
  return (
    <div id="list">
      <h1>
        Showing {participantList.data.length} Participants
      </h1>
      <Grid container spacing={3} direction="row">
        {participantList.data.map((participant) => (
          <Grid item key={participant.id} xs={12} sm={6} md={3}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    {participant.firstName} {participant.lastName}
                    <Chip props={participant.company} />
                    <ParticipantDetails
                      firstName={participant.firstName}
                      lastName={participant.lastName}
                      email={participant.email}
                      jobTitle={participant.jobTitle}
                      company={participant.company}
                      id={participant.id}
                    />
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllParticipants;

