import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import SingleTimeToClockOut from "../components/SingleTimeToClockOut";
import SingleTimeSpent from "../components/SingleTimeSpent";
import MultipleTimeSpent from "../components/MultipleTimeSpent";
import MultipleTimeToClockOut from "../components/MultipleTimeToClockOut";

const ClockApp = () => {
  const [selectedFeature, setSelectedFeature] = useState<number>(0);

  const features = [
    {
      title: "Clock Out Time",
      description:
        "Find your clock-out time from your start time and required hours.",
      component: <SingleTimeToClockOut />,
    },
    {
      title: "Time Spent",
      description:
        "Calculate your office time from a single clock-in and clock-out.",
      component: <SingleTimeSpent />,
    },
    {
      title: "Total Time",
      description:
        "Calculate total office time across multiple entry and exit periods.",
      component: <MultipleTimeSpent />,
    },
    {
      title: "Required Hours",
      description:
        "Find your clock-out time after accounting for multiple office periods.",
      component: <MultipleTimeToClockOut />,
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Office Time
          </Typography>
          <Stack direction="row" spacing={1}>
            {features.map((feature, index) => (
              <Button
                key={feature.title}
                color="inherit"
                variant={selectedFeature === index ? "outlined" : "text"}
                onClick={() => setSelectedFeature(index)}
              >
                {feature.title}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: { xs: 3, md: 6 } }}>
        <Stack spacing={1} sx={{ mb: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            Office Time Calculator
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Simple tools to calculate your working hours and clock-out time.
          </Typography>
        </Stack>

        {selectedFeature === 0 && features[0].component}
        {selectedFeature === 1 && features[1].component}
        {selectedFeature === 2 && features[2].component}
        {selectedFeature === 3 && features[3].component}

        <Grid container spacing={2} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={feature.title}>
              <Card
                onClick={() => setSelectedFeature(index)}
                sx={{
                  height: "100%",
                  cursor: "pointer",
                  transition: "0.2s",
                  border: selectedFeature === index ? 2 : 1,
                  borderColor:
                    selectedFeature === index ? "primary.main" : "divider",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {feature.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ClockApp;
