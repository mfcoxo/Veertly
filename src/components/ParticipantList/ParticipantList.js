import React from "react";
import ParticipantDetails from "./ParticipantDetails";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import useStyles from "./ParticipantList.styles";
import Chip from "../Chip/Chip";

const AllParticipants = ({ participantList, offset }) => {
  const classes = useStyles();
  if (!participantList) {
    return null;
  }
  const firstRecord = offset * participantList.data.length;
  const lastRecord = firstRecord + participantList.data.length;
  return (
    <div id="list" className={classes.gridWrapper}>
      <h1>
        Participants from {firstRecord + 1} to {lastRecord}
      </h1>
      <Grid container spacing={3} direction="row">
        {participantList.data.map(participant => (
          <Grid item key={participant.id} xs={12} sm={6} md={3}>
            <Card className={classes.root}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {participant.firstName} {participant.lastName}
                  <Chip label={participant.company} className={classes.chip} />
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
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllParticipants;
