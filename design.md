# CarbonWise Mobile Interface Design

## Product Direction

CarbonWise is a premium climate-tech decision engine for one-handed mobile use. The prototype should feel calm, precise, and supportive rather than like a generic green calculator. The core experience is built around three questions: what is driving my footprint, what happens if I change one behavior, and what should I do next?

The app uses a soft off-white base with deep ink typography, warm coral as the confident primary action accent, and restrained mint/amber status colors. Data meaning is never communicated by color alone; every estimate includes a visible confidence label and a Why? drill-down.

## Screen List

| Screen | Primary content and functionality |
|---|---|
| Today / Dashboard | Greeting, today's CO2e range, daily budget progress, measured/estimated/assumed legend, category breakdown bars, weekly trend, top three drivers, and a prominent Add activity action. |
| Add Activity | Free-text activity input with examples such as “15 km by bus”; deterministic parser preview; parsed category, type, quantity, and unit; confirm-before-save flow; optional confidence/source note. |
| Activity Detail | Recent activity list with category, timestamp, quantity, CO2e range, confidence tier, and expandable Why? calculation showing quantity × factor = estimate and source. |
| Carbon Twin | Running lifestyle pattern summary, weekly category mix, and clear measured versus estimated tagging. Includes a compact explanation of how the twin is built from logged activities. |
| Time Machine | Sustainability slider plus single- and multi-change scenario controls. Live before/after CO2e, money, and time deltas; at least two simultaneous changes can be selected; save scenario is a prototype-local action. |
| Action Engine | Exactly three ranked recommendations. Each recommendation displays impact, effort, money impact, time required, why it matters for the user's actual footprint, and a concrete first step. |
| Daily Receipt | Text-receipt-style daily summary with total range, category lines, budget status, supportive over-budget copy, and two concrete next steps. |
| Demo Mode / Settings | Offline demo-data reset and populate action, methodology/privacy copy, and an explicit indicator that all prototype AI-dependent behavior uses deterministic local mock logic when no key is configured. |

## Navigation

Use a five-tab portrait layout optimized for thumb reach: **Today**, **Twin**, **Time Machine**, **Actions**, and **More**. The Add Activity flow is a modal or pushed screen from Today and returns to the dashboard after confirmation. Activity Detail and Daily Receipt are pushed screens from Today. More contains Demo Mode, Daily Receipt, and methodology/privacy links.

## Key User Flows

### Log an activity

1. User taps **Add activity** on Today.
2. User enters natural language, for example, “15 km by bus.”
3. User taps **Review estimate**.
4. CarbonWise shows the parsed structure and the CO2e range, confidence tier, and source.
5. User expands **Why?** to inspect quantity × factor.
6. User taps **Save activity** or edits the parsed fields before saving.
7. Today updates the footprint, category breakdown, trend, drivers, and ranked recommendations.

### Explore a lifestyle change

1. User opens **Time Machine**.
2. User adjusts the sustainability slider or selects a transport, food, and energy change.
3. The before/after comparison updates live with animated CO2e, money, and time deltas.
4. User can select at least two simultaneous changes and see the combined result.
5. User taps **Save scenario** to keep the local scenario summary.

### Act on a recommendation

1. User opens **Actions** and sees exactly three ranked cards.
2. User reviews the action's connection to their measured or estimated footprint.
3. User expands the card for impact, effort, money, time, and first step.
4. User taps **Try this in Time Machine** to prefill the matching scenario.

### Understand an estimate

1. User taps any CO2e range or **Why?** affordance.
2. A bottom sheet shows the activity quantity, emission factor, unit, low/high estimate, confidence tier, and methodology source.
3. Copy stays supportive and uses CO2e consistently.

## Component and Layout Rules

Use large numeric hero metrics, rounded glass-like cards, 16–20 px corner radii, high-contrast text, and generous vertical spacing. Keep primary actions within the lower half of the screen where possible. Use press feedback and subtle 80–300 ms transitions, but prioritize complete flows over animation polish. Use FlatList for activity and recommendation lists, and ScreenContainer for every screen.

## Color Choices

| Token | Color | Purpose |
|---|---|---|
| Background | `#F7F4EF` | Soft warm off-white canvas |
| Surface | `#FFFDFC` | Elevated cards and sheets |
| Foreground | `#17211F` | Primary ink typography |
| Muted | `#68736E` | Secondary text and metadata |
| Primary | `#E56B50` | Confident coral for CTAs, active states, and key deltas |
| Primary dark | `#C9543D` | Pressed/strong coral state |
| Mint | `#B9D9C5` | Positive reduction and measured-state support |
| Mint dark | `#2D7058` | Positive labels and accessible text |
| Amber | `#E8B86A` | Estimated/attention state |
| Border | `#E6E0D8` | Subtle dividers and card edges |
| Ink soft | `#35433E` | Secondary headings and chart labels |

Confidence labels must include text such as **Measured**, **Estimated**, or **Assumed**, with a small supporting icon or border treatment in addition to color.
