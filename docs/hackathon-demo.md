# CarbonWise Hackathon Demo Pack

## One-sentence pitch

CarbonWise turns personal carbon awareness into a decision: it explains the footprint, simulates the change, and gives the next practical action.

## Three-minute script

### 0:00–0:20 — The problem

“Most carbon calculators stop at a number. They do not explain what caused it, what a person can change, or what that change is worth. CarbonWise is a personal carbon decision engine.”

### 0:20–0:50 — Smart Activity Input

Open Today and tap **Add activity**. Enter `15 km by bus`.

Say: “The user can write naturally. Before anything is saved, CarbonWise parses the activity and shows the category, quantity, unit, range, confidence, and source.”

Open the Why? section.

Say: “This is important for trust. The app shows quantity multiplied by an emission factor, and it avoids false precision by returning a range.”

Save the activity.

### 0:50–1:20 — Carbon Twin and dashboard

Show the updated Today dashboard.

Say: “The Carbon Twin is a running pattern model built from the user's actual activities. The dashboard makes the largest categories and current budget visible without shaming the user.”

Point out the weekly signal and biggest lever.

### 1:20–2:05 — Carbon Time Machine

Open Time Machine. Select **Bus one short car trip** and **Choose two plant meals**. Switch between **Current**, **Balanced**, and **Intentional**.

Say: “Instead of telling the user to be more sustainable, CarbonWise lets them test a realistic change before making it. The combined before-and-after result updates with CO2e, money, and time impact.”

### 2:05–2:35 — AI Action Engine

Open Actions.

Say: “The Action Engine returns exactly three ranked recommendations. Each one is tied to the user's logged footprint and includes impact, effort, money, time, and a first step.”

Tap a first step.

Say: “The user can turn the recommendation into a small completed action. The product is designed to create momentum, not guilt.”

### 2:35–2:55 — Trust and reliability

Open More and show the Daily Carbon Receipt and Offline Demo Mode.

Say: “The prototype works without an API key through deterministic local logic. That makes the core experience reliable for a live demo, while the architecture is ready for a future server-side AI layer.”

### 2:55–3:00 — Close

“CarbonWise does not just tell people their footprint. It helps them decide what to do next, shows what that choice is worth, and makes the reasoning visible.”

## Judge questions and answers

| Question | Answer |
|---|---|
| What is novel here? | The product connects transparent footprint modeling, scenario simulation, and personalized action ranking in one loop. |
| How do you avoid misleading estimates? | Every calculation is a range with a confidence tier and a Why? methodology explanation. Unknown activities fall back to explicitly labeled low-confidence averages. |
| Does it require AI? | The architecture supports AI, but the core prototype works offline with deterministic parsing and recommendations so the product is reliable without an API key. |
| Why exactly three actions? | Limiting the output creates focus. The ranking balances potential reduction, effort, money impact, time, and the user's context. |
| What would you build next? | Receipt/meal image confirmation, persistent weekly progress, optional reminders, and live AI-backed recognition while keeping the deterministic fallback. |

## Pre-demo reset

1. Open More.
2. Tap **Reload demo data**.
3. Return to Today.
4. Confirm the dashboard is populated.
5. Perform the walkthrough once without explaining every implementation detail.
6. Keep a screen recording or screenshots available in case of network or device failure.

## Pass/fail checklist

- Today loads with demo data.
- Add activity opens.
- `15 km by bus` produces a transport parse.
- Review shows range, confidence, and Why? details.
- Save updates the dashboard.
- Time Machine accepts two selected changes.
- Current, Balanced, and Intentional presets update the result.
- Actions shows exactly three recommendations.
- One recommendation can be completed.
- More opens Daily Carbon Receipt and Demo Mode.
- No text is clipped on the target phone.
- The complete demo fits in three minutes.
