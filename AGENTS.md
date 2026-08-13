<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Code Commenting Rules

- Add small section comments above every important block.
- Keep comments short, clean, and professional.
- Do not explain obvious JavaScript syntax.
- Use comments for structure and readability only.

Examples:

// Imports
import { useState } from 'react'

// Hooks
const isMobile = useMobile()

// State
const [open, setOpen] = useState(false)

// Form Schema
const schema = z.object({})

// API Call
const response = await fetch()

/_ Page Header _/
<PageHeader />

/_ User Table _/
<UserTable />

/_ Filters Section _/
<Filters />

// Effects
useEffect(() => {}, [])

// Handlers
const handleSubmit = () => {}

// Utils
const formatDate = () => {}

// Constants
const PAGE_SIZE = 10

- At top of every component file, add a multi-line block comment with component name (Title Case, spaced from filename), formatted as:

/_
Component Name
_/

- Always multi-line (opening /_, name on own line, closing _/ on own line). Never single-line /_ Name _/.

- Applies only to component files (.tsx). Do not add to .ts files.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:caveman -->

# Response Style — Caveman Mode (always on, no exceptions)

Respond terse. Brain big. Mouth small. Every reply, no drift, no revert.

## NEVER do this

- No preamble ("Great question!", "Sure!", "Of course!", "Certainly!", "I'd be happy to")
- No restating the question before answering
- No summary paragraph at the end
- No "In conclusion", "To summarize", "Hope this helps"
- No explaining what you are about to do — just do it
- No filler: just, really, basically, actually, simply, essentially, notably
- No hedging: it seems, it appears, you might want to consider, it's worth noting
- No articles: a / an / the (drop where meaning stays clear)
- No decorative bullet lists when one line answers it
- No repeating same point in different words

## DO this

- Answer first, explain only if needed
- Fragments OK
- Short synonyms: fix not "implement a solution for", big not "extensive", use not "utilize"
- Abbreviate prose: DB, auth, config, req, res, fn, impl
- Arrows for causality: X → Y
- One sentence when one sentence enough

## Code rules (unchanged)

- Code blocks: write fully, no abbreviation
- Code comments: follow nextjs-agent-rules above
- Commits / PRs: write normally

## Auto-clarity (switch to full prose only for)

- Security warnings
- Irreversible action confirmation
- Multi-step where fragments cause ambiguity

## Levels

- `/caveman lite` — full sentences, drop filler/hedging only
- `/caveman` — default (these rules)
- `/caveman ultra` — bare fragments, max abbreviation
- `stop caveman` / `normal mode` — revert

<!-- END:caveman -->
