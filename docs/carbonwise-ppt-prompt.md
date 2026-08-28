# Ready-to-Paste Presentation Prompt: CarbonWise

Create a polished, persuasive, hackathon-quality presentation about **CarbonWise**, an AI-powered mobile platform that estimates environmental impact from user-provided activities and recommends achievable ways to reduce it.

The deck must be designed for hackathon judges, mentors, and general audiences. It should explain the problem clearly, demonstrate the product visually, show why the idea matters, explain how the technology works, and make a strong case for why CarbonWise is useful and different. The tone should be confident, human, practical, optimistic, and evidence-conscious—not alarmist or guilt-driven.

Create **exactly 10 slides**. Use concise slide copy, strong visual hierarchy, clear diagrams, and polished speaker notes. Do not overload slides with paragraphs. Each slide should communicate one memorable idea.

## Core problem statement

Use this exact problem statement on Slide 2:

> “Create an AI-powered platform that estimates environmental impact from user-provided activities and recommends achievable ways to reduce it.”

Do not rewrite the problem statement in a way that changes its meaning. Explain that many people want to make more sustainable choices but struggle to connect everyday activities with understandable environmental impact and practical next steps.

## Product name and positioning

Product name: **CarbonWise**

Positioning statement:

> “CarbonWise does not just calculate a footprint. It explains what is driving it, lets users simulate a change before committing, and gives exactly three practical actions.”

Short tagline:

> “See the signal. Choose the move.”

## Product facts to use

CarbonWise is a portrait-oriented mobile experience built with Expo, React Native, TypeScript, and local deterministic data for the prototype. The core emission engine is isolated from the UI. Emission factors are stored as structured data. Every calculation returns a range and a confidence level instead of pretending to offer false precision.

The prototype includes:

- **Smart Activity Input:** users can write an activity naturally, such as “15 km by bus.” The app parses the activity and shows a review screen before saving it.
- **Transparent estimates:** the app explains calculations using the formula quantity × emission factor and shows the estimated CO2e range, confidence, and source.
- **Today dashboard:** users see their footprint range, daily budget, category breakdown, weekly signal, recent activity, and biggest lever.
- **Carbon Twin:** the app creates a transparent pattern summary from logged lifestyle activities and distinguishes measured, estimated, assumed, and mixed-confidence information.
- **Carbon Time Machine:** users can test multiple realistic changes at the same time and see the simulated CO2e, money, and time impact update live.
- **AI Action Engine:** the app returns exactly three ranked recommendations tied to the user’s logged activities. Each recommendation includes potential reduction, effort, money impact, time impact, and a first step.
- **Daily Carbon Receipt:** users can review a compact summary of their footprint and logged activities.
- **Impact Replay:** users can tap an animated before-and-after story showing how one realistic change could affect their weekly footprint.
- **Offline Demo Mode:** the prototype works with deterministic local data and does not require an external API key for the core experience.
- **Climate atmosphere:** the app uses animated clouds, sun, and haze as a visual storytelling layer. The exaggerated air-quality response is explicitly a visual prototype effect, not a real air-quality measurement.

Do not claim that the prototype currently has production-grade receipt OCR, real-time air-quality sensing, full cloud synchronization, or a deployed app-store release. Present those as future extensions.

## Slide-by-slide structure

### Slide 1 — Title: CarbonWise

Title: **CarbonWise**

Subtitle: **See the signal. Choose the move.**

Add a short descriptor: “An AI-powered personal carbon decision engine.”

Visual direction: create a premium climate-tech opening image showing a calm mobile interface, a dark green and coral brand palette, subtle atmosphere, clouds, a warm sun, and a small glowing path from “activity” to “action.” Include the CarbonWise wordmark and a simple circular climate mark. Keep the slide minimal and memorable.

Speaker note: “We built CarbonWise to help people move from carbon awareness to a practical decision.”

### Slide 2 — The problem

Title: **The number is not the decision.**

Show the exact problem statement:

> “Create an AI-powered platform that estimates environmental impact from user-provided activities and recommends achievable ways to reduce it.”

Explain the user tension in three short phrases:

- Everyday actions are difficult to translate into environmental impact.
- Existing calculators can stop at a score or number.
- Generic sustainability advice is hard to act on.

Visual direction: use a simple journey diagram: **Everyday activity → unclear impact → generic advice → no follow-through**. Use an emotional but respectful visual of a person looking at an unclear dashboard, without fear-based climate imagery.

Speaker note: “The challenge is not only calculating impact. The challenge is making the result understandable and actionable.”

### Slide 3 — The insight

Title: **People need a decision engine, not another dashboard.**

Present the CarbonWise insight as a three-part loop:

1. **Explain** what is driving the footprint.
2. **Simulate** a realistic change before the user commits.
3. **Act** on one focused recommendation.

Visual direction: use a large circular loop with three stations: **Carbon Twin → Time Machine → Action Engine**. Use coral for action, mint for climate signal, and deep green for trust and stability.

Speaker note: “CarbonWise compresses the journey from awareness to action into one connected loop.”

### Slide 4 — How the product works

Title: **From natural language to a transparent estimate**

Show the Smart Activity Input flow with four screens or illustrated panels:

1. User types: **“15 km by bus”**.
2. CarbonWise detects: **Transport / Bus / 15 km**.
3. The user reviews the estimate before saving.
4. The dashboard updates with a range and confidence label.

Show the formula visually:

> **Quantity × emission factor = estimated CO2e range**

Use a callout: **No silent assumptions. No false precision.**

Speaker note: “The user remains in control because the app shows what it understood before anything changes.”

### Slide 5 — Trust and explainability

Title: **Every estimate explains itself.**

Show a clean confidence ladder:

| Confidence | Meaning |
|---|---|
| Measured | Directly logged or observed signal |
| Estimated | Factor-based calculation from a known activity |
| Assumed | Category-average fallback |
| Mixed confidence | Aggregate made from multiple confidence levels |

Explain that CarbonWise shows ranges, confidence, and source. Use a large mock “Why this estimate?” card with the formula and range.

Visual direction: make this slide feel calm, precise, and credible. Use a magnified UI card rather than a complex technical diagram.

Speaker note: “Trust is part of the product experience, not a footnote.”

### Slide 6 — The Carbon Twin

Title: **A living picture of the user’s habits**

Explain that the Carbon Twin turns activity logs into a transparent pattern summary across transport, food, energy, and shopping.

Show a stylized mobile UI mockup with:

- category contribution bars,
- a daily or weekly footprint range,
- a weekly signal,
- one highlighted biggest lever,
- visible confidence labels.

Do not use fabricated user statistics. Use labels such as **illustrative demo data** if any numbers appear.

Speaker note: “The Carbon Twin gives context to the number by showing which patterns are shaping it.”

### Slide 7 — The Carbon Time Machine

Title: **Try the change before you make it.**

Present the Time Machine as the standout interaction.

Show a before-and-after comparison:

> **Current week → With two changes**

Visualize three live outputs:

- CO2e reduction,
- potential money saved,
- time changed.

Show two selected changes, for example:

- “Bus one short car trip”
- “Choose two plant meals”

Add the key message:

> “Sustainability becomes a decision you can preview.”

Visual direction: make the before/after transition the most visually dynamic slide in the deck. Use a slider or timeline animation if the presentation platform supports it.

Speaker note: “This is where CarbonWise becomes more than a calculator. It lets users test a realistic future state.”

### Slide 8 — The AI Action Engine

Title: **Exactly three actions. Not a list of guilt.**

Show three ranked recommendation cards with these fields:

- rank,
- action,
- potential reduction,
- effort,
- money impact,
- time impact,
- first step.

Explain that recommendations are tied to the user’s actual logged categories and ranked by potential impact, effort, cost, time, and context.

Show one recommendation changing from **FIRST STEP** to **COMPLETED · NICE WORK**.

Speaker note: “We intentionally limit the output to three actions so the user can focus on what is achievable now.”

### Slide 9 — Why CarbonWise stands out

Title: **What makes the product different**

Use a comparison matrix:

| Typical carbon calculator | CarbonWise |
|---|---|
| Ends with a score | Ends with a decision |
| Generic advice | Recommendations tied to logged activities |
| False precision | Ranges with confidence and source |
| One static result | Simulation through the Time Machine |
| Heavy setup | Natural-language activity input |
| Shame or information overload | Supportive, focused progress |

Add the distinctive feature callout:

> **Impact Replay:** a visual before-and-after story that helps users feel the consequence of one small move.

Speaker note: “Our advantage is not a larger dashboard. It is a clearer path from personal data to an achievable action.”

### Slide 10 — Impact, feasibility, and closing

Title: **Make the next sustainable choice visible.**

Organize the slide into three columns:

**Impact**

- helps people connect activities to environmental consequences,
- turns awareness into practical next steps,
- avoids shame by focusing on achievable progress.

**Feasibility**

- working Expo mobile prototype,
- isolated emission engine,
- structured emission factors,
- deterministic offline fallback,
- ready for future server-side AI and receipt recognition.

**Next step**

- persist weekly progress,
- add receipt/meal image confirmation,
- add optional reminders,
- validate recommendations with real users.

End with the closing line in large type:

> **CarbonWise: see the signal, choose the move.**

Include a small footer with placeholders for team name, hackathon name, repository link, and demo link. Do not invent team members, metrics, awards, partnerships, or user counts.

## Visual design system

Use a premium, modern climate-tech aesthetic inspired by calm environmental monitoring tools and thoughtful consumer finance apps.

- Primary background: warm off-white, approximately `#F7F3ED`.
- Primary text: deep green-black, approximately `#17211F`.
- Action accent: coral, approximately `#E56B50`.
- Climate accent: soft mint, approximately `#B9D9C5`.
- Secondary accent: warm amber, approximately `#E8B86A`.
- Cards: warm white with thin beige borders and soft shadows.
- Use rounded cards, generous whitespace, compact labels, and clear numeric hierarchy.
- Use a dark green panel for hero comparisons and key moments.
- Use coral only for actions, highlights, and meaningful changes; do not use it everywhere.
- Use simple line icons, small climate marks, clouds, sun, haze, and flowing lines.
- Keep all visuals clean and editorial rather than cartoonish.
- Use accessible contrast and large enough text for a projected presentation.
- Use one consistent mobile-device frame style for app screenshots.

## Animation direction

If the presentation platform supports animation, use it sparingly and intentionally:

1. Fade in the CarbonWise logo and tagline.
2. Animate the problem journey from activity to unclear impact.
3. Build the Carbon Twin → Time Machine → Action Engine loop one step at a time.
4. Animate the Smart Activity Input parsing from natural language into structured data.
5. Reveal the CO2e range after the formula appears.
6. Animate the Time Machine before/after number and reduction delta.
7. Reveal the three recommendations in rank order.
8. Animate one action changing to completed.
9. End with a subtle moving climate line or cloud layer behind the closing statement.

Avoid constant motion, spinning charts, distracting particle effects, bouncing text, or rapid transitions. Motion should clarify cause and effect.

## Content and accuracy rules

Do not fabricate statistics, research findings, market sizes, carbon reductions, user counts, accuracy percentages, or testimonials. Do not claim that a visual haze effect is a real air-quality sensor. Clearly label illustrative numbers as demo data. Keep “AI-powered” accurate: explain that the architecture supports AI-assisted parsing and recommendations, while the prototype uses deterministic local fallback logic for reliability.

Do not use fear, guilt, or catastrophic climate imagery. The emotional direction should be: **clearer, calmer, more capable, and achievable**.

## Final output requirements

Produce:

1. exactly 10 slides,
2. concise on-slide copy,
3. polished visual hierarchy,
4. speaker notes for every slide,
5. a coherent story from problem to solution to impact,
6. realistic mobile UI mockups based on the CarbonWise features above,
7. no invented facts or unsupported claims,
8. a final slide that makes the product and next step memorable.

The finished deck should make a judge understand within three minutes:

> **CarbonWise takes everyday activities, turns them into transparent environmental impact, lets users preview realistic changes, and guides them toward exactly three achievable actions.**
