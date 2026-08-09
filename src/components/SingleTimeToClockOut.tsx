import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const SingleTimeToClockOut = () => {
  const [clockinTime, setClockinTime] = useState<string>(
    new Date().toTimeString().slice(0, 5),
  );
  const [strictOfficeHours, setStrictOfficeHours] = useState<number | "">(8);
  const [calculatedTime24, setCalculatedTime24] = useState<string>("");
  const [calculatedTime12, setCalculatedTime12] = useState<string>("");

  const handleCalculateSingleTimeToClockOut = () => {
    setCalculatedTime24(
      new Date(
        new Date().setHours(
          Number(clockinTime.split(":")[0]) + Number(strictOfficeHours),
          Number(clockinTime.split(":")[1]),
        ),
      )
        .toTimeString()
        .slice(0, 5),
    );

    setCalculatedTime12(
      new Date(
        new Date().setHours(
          Number(clockinTime.split(":")[0]) + Number(strictOfficeHours),
          Number(clockinTime.split(":")[1]),
        ),
      ).toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
    );
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Clock Out Time
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Enter your clock-in time and required working hours to find your
          clock-out time.
        </Typography>
        <Stack spacing={2}>
          <TextField
            label="Clock-in time"
            type="time"
            value={clockinTime}
            onChange={(e) => setClockinTime(e.target.value)}
            slotProps={{ inputLabel: { shrink: true } }}
            fullWidth
          />
          <TextField
            label="Working hours"
            type="number"
            value={strictOfficeHours}
            onChange={(e) => {
              const v = e.target.value;
              if (v === "" || /^(?:[1-9]|1\d|2[0-4])$/.test(v))
                setStrictOfficeHours(v === "" ? "" : Number(v));
            }}
            onKeyDown={(e) => {
              if (["e", "E", "+", "-", "."].includes(e.key)) e.preventDefault();
            }}
            slotProps={{
              htmlInput: {
                min: 1,
                max: 24,
              },
            }}
            fullWidth
          />
          <Button variant="contained" onClick={handleCalculateSingleTimeToClockOut}>
            Calculate
          </Button>
          {calculatedTime12 && calculatedTime24 && (
            <Card variant="outlined">
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Clock out time
                </Typography>

                <Typography variant="h5">{calculatedTime12}</Typography>

                <Typography variant="body2" color="text.secondary">
                  {calculatedTime24}
                </Typography>
              </CardContent>
            </Card>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SingleTimeToClockOut;
