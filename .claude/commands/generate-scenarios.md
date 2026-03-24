Generate training scenarios from the NASA Systems Engineering Handbook PDF.

Run: `pnpm generate-scenarios [options]`

Options:
- `--dry-run` — Parse PDF, show discovered sections, don't call API
- `--section X.Y` — Generate only one specific section
- `--retry-failed` — Re-attempt previously failed sections
- `--model <model-id>` — Override Claude model (default: claude-sonnet-4-20250514)
- `--concurrency <n>` — Parallel API calls (default: 3)

Requires:
- `ANTHROPIC_API_KEY` environment variable
- `pdftotext` installed (`brew install poppler`)
