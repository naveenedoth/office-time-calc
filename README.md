# Office Time Calculator

A simple, responsive **Office Time Calculator** built with React and Vite.

The app provides multiple ways to calculate office working hours, including calculating clock-out time from a clock-in time and required working hours, calculating time spent between clock-in and clock-out, and handling multiple entry/exit periods.

## Features

* Calculate **clock-out time** from:
  * Clock-in time
  * Required working hours
* Calculate **total time spent in office** from:
  * Clock-in time
  * Clock-out time
* Add multiple **entry/exit** time periods and calculate total working time.
* Calculate the **clock-out time required to reach a target number of working hours** across multiple entry/exit periods.
* Add and remove multiple entry/exit periods.
* 12-hour and 24-hour time formats where applicable.
* Responsive UI for:
  * Desktop
  * Laptop
  * Tablet
  * Mobile

## Technologies Used

* **React** – UI library
* **TypeScript** – Type-safe JavaScript
* **Vite** – Development server and build tool
* **Material UI (MUI)** – UI components and styling
* **Emotion** – Styling engine used by Material UI
* **ESLint** – Code linting

## Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm
* Git

### Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd office-time-calc
```

### Install Dependencies

Install all required packages:

```bash
npm install
```

### Run the Development Server

Start the Vite development server:

```bash
npm run dev
```

The terminal will provide a local URL, usually:

```text
http://localhost:5173
```

* Open it in your browser.

After cloning the project, dependencies can always be restored with:

```bash
npm install
```

## License

This project is for personal and educational use.
