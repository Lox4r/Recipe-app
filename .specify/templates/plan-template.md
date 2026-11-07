# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

[Extract from feature spec: primary requirement + technical approach from research]

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: TypeScript 5 with strict compiler options  
**Primary Dependencies**: Next.js 16 App Router, React, Tailwind CSS 4  
**Storage**: [MongoDB or N/A; justify if this feature needs persistence]  
**Testing**: Feature tests; `npm run lint`, `npx prettier --check`, `npx tsc --noEmit`, and `npm run build`  
**Target Platform**: Web  
**Project Type**: Single Next.js web application  
**Performance Goals**: [Feature-specific measurable goals or N/A]  
**Constraints**: App Router, server-first components, no `any`, utility-first Tailwind  
**Scale/Scope**: [Feature-specific scope or NEEDS CLARIFICATION]

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

Record PASS, FAIL, or N/A for each gate before research and after design. Explain every
FAIL or N/A; constitution exceptions require explicit justification and project-owner
acceptance.

- [ ] Routes use Next.js 16 App Router conventions under `app/`; version-sensitive APIs
      have been checked against the installed Next.js documentation.
- [ ] TypeScript changes preserve strict typing and use no `any`; UI uses Tailwind utility
      classes by default.
- [ ] Server Components are the default; Client Component boundaries and any server-only
      data or secrets are identified.
- [ ] Security requirements identify applicable authentication, authorization, ownership,
      input validation, and failure behavior.
- [ ] Tests cover the feature's behavior; the plan names the test runner and commands for
      tests, ESLint, Prettier, TypeScript validation, and production build.
- [ ] The work is scoped to a feature branch and includes a pull-request self-review and
      validation report suitable for a solo developer.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
app/
├── layout.tsx
├── page.tsx
└── [feature-route]/
    ├── page.tsx
    ├── loading.tsx
    └── error.tsx

components/           # Shared UI components, when needed
lib/                  # Shared server/client utilities, separated by boundary
tests/                # Feature tests, organized by test level
public/               # Static assets
```

**Structure Decision**: Use the existing root-level `app/` App Router structure. Add
`components/`, `lib/`, or `tests/` only when the feature needs them, and list the actual
directories and route files above.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation                  | Why Needed         | Simpler Alternative Rejected Because |
| -------------------------- | ------------------ | ------------------------------------ |
| [e.g., 4th project]        | [current need]     | [why 3 projects insufficient]        |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient]  |
