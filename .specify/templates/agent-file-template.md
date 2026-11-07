# [PROJECT NAME] Development Guidelines

Auto-generated from all feature plans. Last updated: [DATE]

## Active Technologies

[EXTRACTED FROM ALL PLAN.MD FILES]

## Project Structure

```text
[ACTUAL STRUCTURE FROM PLANS]
```

## Commands

[ONLY COMMANDS FOR ACTIVE TECHNOLOGIES]

## Code Style

[LANGUAGE-SPECIFIC, ONLY FOR LANGUAGES IN USE]

## Recent Changes

[LAST 3 FEATURES AND WHAT THEY ADDED]

<!-- MANUAL ADDITIONS START -->

## Project Rules

- Use Next.js 16 App Router conventions under `app/`; check installed Next.js docs before
  using version-sensitive APIs.
- Use strict TypeScript with no `any`. Keep Server Components as the default and use small
  Client Component boundaries only when browser APIs or interactivity require them.
- Use Tailwind utility classes by default. Keep private data and secrets server-side, and
  authenticate and authorize access to user-owned data.
- Add automated tests for behavior changes. Before a pull request, run feature tests,
  ESLint, Prettier, TypeScript validation, and a production build; report any unavailable
  check.
- Work on a feature branch and self-review the complete diff before merging a pull request.

<!-- MANUAL ADDITIONS END -->
