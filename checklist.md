# Pomodoro App — Phase 1: Just a Timer

**Goal:** A 25:00 countdown with Start, Pause, and Reset that counts down correctly without drifting or double-ticking.

---

## 1. Learn the Concepts

- [ ] Read [Vite: Getting Started](https://vite.dev/guide/) (scaffolding section only)
- [ ] Read [State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
- [ ] Read [Queueing a Series of State Updates](https://react.dev/learn/queueing-a-series-of-state-updates)
- [ ] Read [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects) (focus on cleanup functions)
- [ ] Skim MDN: [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval) and [clearInterval()](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearInterval)
- [ ] Do the challenges at the end of the React docs pages

## 2. Set Up the Project

- [ ] Create a new React project with Vite
- [ ] Run the dev server and confirm the starter page loads
- [ ] Delete the starter content so you have a blank component
- [ ] Initialize a Git repo and make the first commit

## 3. Display the Time

- [ ] Store the remaining time in state (start at 25 minutes)
- [ ] Display it in MM:SS format (e.g. 25:00, 09:05)
- [ ] Check that single digits get a leading zero

## 4. Start the Countdown

- [ ] Add a Start button
- [ ] Store whether the timer is running in state
- [ ] Use an effect that starts an interval only while running
- [ ] Decrease the time once per second using an updater function
- [ ] Return a cleanup function that clears the interval

## 5. Pause and Reset

- [ ] Add a Pause button that stops the countdown
- [ ] Resume from the same time after pausing
- [ ] Add a Reset button that stops the timer and returns to 25:00

## 6. Handle the Finish

- [ ] Stop the timer when it reaches 00:00
- [ ] Make sure it never goes negative
- [ ] Show a simple "Session complete" message

## 7. Test for Bugs

- [ ] Clicking Start multiple times does not make it tick faster
- [ ] Pause → Start → Pause repeatedly works correctly
- [ ] Reset works while running and while paused
- [ ] Time stays accurate (compare against your phone's stopwatch for a few minutes)
- [ ] Switch to another tab for a minute, come back, and check whether it drifted

## 8. Wrap Up

- [ ] Commit to Git with a clear message (e.g. "Phase 1: working timer")
- [ ] Note anything confusing to revisit later

---

## Stretch Goals (Optional)

- [ ] Fix tab drift by calculating remaining time from `Date.now()` instead of counting ticks
- [ ] Show the remaining time in the browser tab title
- [ ] Use a shorter test duration (like 10 seconds) while developing so you don't wait 25 minutes

**Reminder:** No styling yet. Ugly and working beats pretty and broken.
