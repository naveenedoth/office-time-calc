import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const SingleTimeSpent = () => {
  const [clockinTime, setClockinTime] = useState<string>(
    new Date().toTimeString().slice(0, 5),
  );
  const [clockoutTime, setClockoutTime] = useState<string>(
    new Date().toTimeString().slice(0, 5),
  );
  const [timeSpent, setTimeSpent] = useState<string>("");

  const handleCalculateSingleTimeSpent = () => {
    const clockInDate = new Date();
    clockInDate.setHours(
      Number(clockinTime.split(":")[0]),
      Number(clockinTime.split(":")[1]),
    );

    const clockOutDate = new Date();
    clockOutDate.setHours(
      Number(clockoutTime.split(":")[0]),
      Number(clockoutTime.split(":")[1]),
    );

    const totalMinutes = Math.round(
      (clockOutDate.getTime() - clockInDate.getTime()) / 60000,
    );
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    setTimeSpent(`${hours} hours ${minutes} mins`);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Time Spent
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Enter your clock-in and clock-out times to calculate your total time
          spent in the office.
        </Typography>
        <Stack spacing={2}>
          <TextField
            label="Clock-in time"
            type="time"
            value={clockinTime}
            onChange={(e) => setClockinTime(e.target.value)}
            slotProps={{ inputLabel: { shrink: true } }}
            fullWidth
            sx={{
              "& .MuiInputBase-input": {
                cursor: "text",
              },
              "& input[type='time']::-webkit-calendar-picker-indicator": {
                cursor: "pointer",
                filter: "invert(1)",
              },
            }}
          />
          <TextField
            label="Clock-out time"
            type="time"
            value={clockoutTime}
            onChange={(e) => setClockoutTime(e.target.value)}
            slotProps={{ inputLabel: { shrink: true } }}
            fullWidth
            sx={{
              "& .MuiInputBase-input": {
                cursor: "text",
              },
              "& input[type='time']::-webkit-calendar-picker-indicator": {
                cursor: "pointer",
                filter: "invert(1)",
              },
            }}
          />
          <Button variant="contained" onClick={handleCalculateSingleTimeSpent}>
            Calculate
          </Button>
          {timeSpent && (
            <Card variant="outlined">
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Time spent
                </Typography>

                <Typography variant="h5">{timeSpent}</Typography>
              </CardContent>
            </Card>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SingleTimeSpent;
