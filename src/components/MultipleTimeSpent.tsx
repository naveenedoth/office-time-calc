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

const MultipleTimeSpent = () => {
  const [timePairs, setTimePairs] = useState<TimePair[]>([
    {
      entry: new Date().toTimeString().slice(0, 5),
      exit: new Date().toTimeString().slice(0, 5),
    },
  ]);
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

  const handleCalculateMultipleTimeSpent = () => {
    let totalMinutes = 0;

    timePairs.forEach(({ entry, exit }) => {
      const entryDate = new Date();
      entryDate.setHours(
        Number(entry.split(":")[0]),
        Number(entry.split(":")[1]),
      );

      const exitDate = new Date();
      exitDate.setHours(Number(exit.split(":")[0]), Number(exit.split(":")[1]));

      let difference = (exitDate.getTime() - entryDate.getTime()) / 60000;
      if (difference < 0) difference += 24 * 60;
      difference = Math.round(difference);
      totalMinutes += difference;
    });

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    setResult(`${hours} hours ${minutes} mins`);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Total Time
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Add multiple entry and exit periods to calculate your total office
          time.
        </Typography>
        <Stack spacing={2}>
          {timePairs.map((pair, index) => (
            <Stack
              key={index}
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              sx={{ alignItems: { sm: "center" } }}
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
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
            <Button variant="outlined" onClick={addTimePair}>
              Add Period
            </Button>
            <Button variant="contained" onClick={handleCalculateMultipleTimeSpent}>
              Calculate
            </Button>
          </Stack>
          {result && (
            <Card variant="outlined">
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Total time
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

export default MultipleTimeSpent;
