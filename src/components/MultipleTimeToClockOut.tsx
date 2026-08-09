import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type TimePair = {
  entry: string;
  exit: string;
};

const MultipleTimeToClockOut = () => {
  const [timePairs, setTimePairs] = useState<TimePair[]>([
    {
      entry: new Date().toTimeString().slice(0, 5),
      exit: new Date().toTimeString().slice(0, 5),
    },
  ]);
  const [targetHours, setTargetHours] = useState<number | "">(8);
  const [result, setResult] = useState("");

  const addTimePair = () => {
    setTimePairs([
      ...timePairs,
      {
        entry: new Date().toTimeString().slice(0, 5),
        exit: new Date().toTimeString().slice(0, 5),
      },
    ]);
  };

  const updateTimePair = (
    index: number,
    field: "entry" | "exit",
    value: string,
  ) => {
    setTimePairs((prev) =>
      prev.map((pair, i) => (i === index ? { ...pair, [field]: value } : pair)),
    );
  };

  const removeTimePair = (index: number) => {
    setTimePairs((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCalculateMultipleTimeToClockOut = () => {
    let totalMinutes = 0;

    timePairs.forEach(({ entry, exit }) => {
      const entryMinutes =
        Number(entry.split(":")[0]) * 60 + Number(entry.split(":")[1]);

      const exitMinutes =
        Number(exit.split(":")[0]) * 60 + Number(exit.split(":")[1]);

      let difference = exitMinutes - entryMinutes;
      if (difference < 0) difference += 24 * 60;
      totalMinutes += difference;
    });

    const targetMinutes = Number(targetHours) * 60;
    const remainingMinutes = targetMinutes - totalMinutes;
    const lastExit = timePairs.at(-1)?.exit;

    if (!lastExit) return;
    const lastExitDate = new Date();

    lastExitDate.setHours(
      Number(lastExit.split(":")[0]),
      Number(lastExit.split(":")[1]),
    );
    lastExitDate.setMinutes(lastExitDate.getMinutes() + remainingMinutes);

    setResult(
      lastExitDate.toLocaleTimeString([], {
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
          Required Hours
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Add your office periods and required working hours to find when you
          can leave.
        </Typography>
        <Stack spacing={2}>
          {timePairs.map((pair, index) => (
            <Stack
              key={index}
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              sx={{ alignItems: { xs: "stretch", sm: "center" } }}
            >
              <TextField
                label={`Entry ${index + 1}`}
                type="time"
                value={pair.entry}
                onChange={(e) => updateTimePair(index, "entry", e.target.value)}
                slotProps={{ inputLabel: { shrink: true } }}
                fullWidth
              />
              <TextField
                label={`Exit ${index + 1}`}
                type="time"
                value={pair.exit}
                onChange={(e) => updateTimePair(index, "exit", e.target.value)}
                slotProps={{ inputLabel: { shrink: true } }}
                fullWidth
              />
              <IconButton
                color="error"
                onClick={() => removeTimePair(index)}
                aria-label="Remove entry"
              >
                <DeleteIcon />
              </IconButton>
            </Stack>
          ))}
          <Button variant="outlined" onClick={addTimePair}>
            Add Period
          </Button>
          <TextField
            label="Required hours"
            type="number"
            value={targetHours}
            onChange={(e) => {
              const v = e.target.value;

              if (v === "" || /^(?:[1-9]|1\d|2[0-4])$/.test(v))
                setTargetHours(v === "" ? "" : Number(v));
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
          <Button variant="contained" onClick={handleCalculateMultipleTimeToClockOut}>
            Calculate
          </Button>
          {result && (
            <Card variant="outlined">
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Clock out time
                </Typography>

                <Typography variant="h5">{result}</Typography>
              </CardContent>
            </Card>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default MultipleTimeToClockOut;
