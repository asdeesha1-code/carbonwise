# CarbonWise

**CarbonWise is an AI-powered personal carbon decision engine, not just a calculator.** It explains what is driving a person's footprint, lets them test a lifestyle change before committing, and gives exactly three ranked actions tied to their own logged data.

## Why this matters

Most carbon tools end with a number. CarbonWise is designed to end with a decision. The product loop is intentionally short: log an activity, understand the estimate, simulate one or more changes, and take one practical next step.

## Core experience

| Product surface | What it does |
|---|---|
| **Carbon Twin** | Builds a transparent lifestyle pattern from logged activities and labels each signal as measured, estimated, assumed, or mixed confidence. |
| **Carbon Time Machine** | Simulates multiple lifestyle changes and shows the before/after CO2e, money, and time delta live. |
| **AI Action Engine** | Ranks exactly three recommendations using footprint share, potential reduction, effort, money impact, time required, and the user's context. |
| **Smart Activity Input** | Turns natural language such as `15 km by bus` into a reviewable structured activity before saving. |
| **Daily Carbon Receipt** | Presents the day as a clear, supportive receipt with range-based totals and methodology notes. |

## Trust by design

Every estimate is calculated as `quantity × emission factor` and returned as a range rather than false precision. The app exposes the confidence tier and methodology source through a Why? explanation. When an activity is not directly measurable, CarbonWise uses a labeled category-average estimate with low confidence instead of pretending to know more than it does.

## Prototype highlights

The prototype runs locally with deterministic demo data and does not require external API keys. The app includes subtle value-update motion, web-safe haptics for meaningful actions, reduced-motion support, an optional daily check-in rhythm, and completion feedback for recommendations. The experience is optimized for portrait, one-handed mobile use.

## Demo walkthrough

1. Open **Today** and tap **Add activity**.
2. Enter `15 km by bus` and select **Review estimate**.
3. Inspect the parsed activity, CO2e range, confidence, and Why? calculation.
4. Save the activity and show the dashboard update.
5. Open **Time Machine**, select two changes, and change the sustainability preset.
6. Open **Actions** and show exactly three personalized recommendations.
7. Tap one recommendation's first step to show the completed state.
8. Open **More** and show Daily Carbon Receipt and Offline Demo Mode.

## Technical architecture

The app is built with Expo SDK 54, React Native, TypeScript, Expo Router, NativeWind, and local AsyncStorage persistence. The emission engine is isolated in `lib/carbon.ts`. Structured factors are stored in `data/emission-factors.json`. Shared activity state lives in `lib/carbon-context.tsx`. Motion and tactile feedback are isolated in `components/animated-metric.tsx`, `hooks/use-motion-preference.ts`, and `lib/haptics.ts`.

The codebase is ready for a future server-side AI layer, but the core experience remains deterministic and usable offline. This keeps the demo reliable when there is no network connection or API key.

## Run locally

```bash
pnpm install
pnpm dev
```

For automated validation:

```bash
pnpm test -- --run
pnpm exec tsc --noEmit
```

## Known prototype limitations

Receipt and meal image recognition, live server-side AI, full account synchronization, and app-store distribution are future production extensions. The hackathon prototype focuses on proving the decision engine, transparent estimates, simulation loop, and action recommendations.

## Repository

[github.com/asdeesha1-code/carbonwise](https://github.com/asdeesha1-code/carbonwise)
