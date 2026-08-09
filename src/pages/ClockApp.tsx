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
import { FOOTER_NAME, FOOTER_LINK, APPBAR_APPNAME } from "../utils/constants";

export default function ClockApp() {
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
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 50% -10%, rgba(124,77,255,0.18), transparent 35%)",
      }}
    >

      <AppBar position="sticky">
        <Toolbar
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "stretch", sm: "center" },
            gap: { xs: 1, sm: 0 },
            py: { xs: 1.5, sm: 1 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            {APPBAR_APPNAME}
          </Typography>
          <Stack
            direction={{ xs: "row", sm: "row" }}
            spacing={1}
            sx={{
              width: { xs: "100%", sm: "auto" },
              display: { xs: "grid", sm: "flex" },
              gridTemplateColumns: { xs: "1fr 1fr", sm: "none" },
            }}
          >
            {features.map((feature, index) => (
              <Button
                key={feature.title}
                color="inherit"
                variant={selectedFeature === index ? "outlined" : "text"}
                onClick={() => setSelectedFeature(index)}
                sx={{
                  minWidth: { xs: 0, sm: "auto" },
                  fontSize: { xs: "0.75rem", sm: "0.875rem" },
                  px: { xs: 0.75, sm: 1 },
                }}
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
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                  border: "1px solid",
                  borderColor:
                    selectedFeature === index
                      ? "rgba(124,77,255,0.7)"
                      : "rgba(255,255,255,0.08)",
                  background:
                    selectedFeature === index
                      ? "linear-gradient(145deg, rgba(124,77,255,0.16), rgba(0,212,255,0.04))"
                      : "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                  boxShadow:
                    selectedFeature === index
                      ? "0 0 30px rgba(124,77,255,0.18)"
                      : "0 10px 30px rgba(0,0,0,0.25)",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    borderColor: "rgba(124,77,255,0.6)",
                    boxShadow: "0 0 35px rgba(124,77,255,0.18)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "2px",
                    background: "linear-gradient(90deg, #7c4dff, #00d4ff)",
                    opacity: selectedFeature === index ? 1 : 0,
                    transition: "opacity 0.25s ease",
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
      <Box
        component="footer"
        sx={{
          py: 3,
          mt: 4,
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Made by{" "}
          <Box
            component="a"
            href={FOOTER_LINK}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#00d4ff",
              textDecoration: "none",
              fontWeight: 600,
              transition: "all 0.2s ease",
              "&:hover": {
                color: "#7c4dff",
                textDecoration: "underline",
              },
            }}
          >
            {FOOTER_NAME}
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}
