<!--
Sync Impact Report
Version change: unversioned template → 1.0.0 (initial constitution; no prior version recorded)
Modified principles:
- Principle slot 1 → I. Next.js App Router
- Principle slot 2 → II. Strict TypeScript and Consistent UI
- Principle slot 3 → III. Server-First Component Boundaries
- Principle slot 4 → IV. Security and Authentication
- Principle slot 5 → V. Testing and Validation
Added sections: Additional Constraints and Development Workflow (filled the template section slots)
Removed sections: None
Templates/customization:
- ✅ Updated `.specify/templates/plan-template.md`
- ✅ Updated `.specify/templates/spec-template.md`
- ✅ Updated `.specify/templates/tasks-template.md`
- ✅ Updated `.specify/templates/agent-file-template.md`
- ✅ Updated `.github/agents/speckit.tasks.agent.md` and the constitution workflow's
  customization audit path in `.github/agents/speckit.constitution.agent.md`
- ✅ Reviewed `.github/agents`, `.github/prompts`, `README.md`, and `AGENTS.md`; no conflicting
  runtime guidance required changes.
- `.specify/templates/commands/` does not exist; project command customizations are under
  `.github/agents/` and `.github/prompts/`.
Deferred:
- Original ratification date is unknown; see the TODO in the metadata line.
- No automated test runner is configured yet; a feature plan must select and set one up
  before feature tests are added.
-->

# Simple Recipe App Constitution

## Core Principles

### I. Next.js App Router

All application routes MUST use the Next.js 16 App Router and its file-based conventions
under `app/`. New features MUST NOT introduce the Pages Router or a competing routing
system. Contributors MUST consult the installed Next.js documentation for version-sensitive
APIs before using them, because framework conventions can change between major versions.

### II. Strict TypeScript and Consistent UI

Application code MUST use strict TypeScript and MUST NOT use the `any` type; use `unknown`
with explicit narrowing when the type is not known. UI styling MUST use Tailwind CSS utility
classes by default; global or custom CSS is limited to styles that utilities cannot express
clearly. Changes MUST pass the repository's ESLint and Prettier conventions to keep the
codebase predictable and maintainable.

### III. Server-First Component Boundaries

Components MUST be Server Components by default. A component MUST use the Client Component
boundary only when it needs browser-only APIs, local interactivity, or client-side state;
that boundary MUST remain as small as practical. Server-only credentials and private data
MUST NOT be sent to the browser. Data mutations and privileged operations MUST execute on
the server and validate their inputs and access rights.

### IV. Security and Authentication

Features that read or change private or user-owned data MUST authenticate the user and
authorize each operation against that user's permissions and data ownership. Unauthenticated
or unauthorized requests MUST fail closed. Authentication MUST use a maintained,
established solution rather than custom cryptography or hand-rolled credential protocols.
Secrets MUST be kept out of source control and client bundles; inputs MUST be validated at
the server boundary. Features that do not yet have authentication MUST NOT expose
user-specific data or privileged operations.

### V. Testing and Validation

Every behavior change MUST include automated tests at the appropriate level, or a documented
reason why an automated test is not feasible. Feature plans and task lists MUST identify
relevant test cases and required validation. Before a change is proposed for merge, the author MUST run the relevant tests, ESLint,
Prettier validation, TypeScript validation, and a production build; any unavailable check
MUST be identified with a reason and follow-up. This gate catches regressions before they
reach the shared branch.

## Additional Constraints

- The application MUST use Next.js 16, React, strict TypeScript, and Tailwind CSS with the
  App Router and file-based routing.
- ESLint and Prettier MUST be used for code quality and formatting. TypeScript validation
  MUST use the project's strict compiler configuration.
- Plans MUST identify the test runner and commands used for feature tests and validation.
  If a suitable test runner is not configured, its selection and setup MUST be included in
  the plan before behavior tests are added.
- Database and authentication products are not fixed by this constitution. Plans MUST
  document and justify a choice when a feature requires them, and MUST preserve the security
  requirements in Principle IV.

## Development Workflow

- Each feature or fix MUST be developed on a dedicated feature branch; contributors MUST NOT
  make feature changes directly on the shared default branch.
- Completed changes MUST be submitted through a pull request. As a solo developer, the
  author MUST self-review the complete diff, verify the validation results, and resolve or
  document all findings before merging. A second human reviewer is not required.
- Pull requests MUST describe the change, reference its specification or rationale, and
  report tests and validation performed. The author MUST NOT merge while required checks
  fail or while an unresolved security or constitution violation remains.
- Work MUST proceed in small, reviewable increments. Parallel execution is optional; plans
  and task lists MUST remain usable by one developer working sequentially.

## Governance

This constitution is the project's governing engineering standard and takes precedence over
conflicting templates or informal practices. The project owner may amend it by updating this
file, recording the impact in a Sync Impact Report, revising affected templates and runtime
guidance, and incrementing the version. Changes that remove or materially redefine a
principle require a MAJOR version increment; new principles or materially expanded
requirements require a MINOR increment; clarifications and non-semantic corrections require
a PATCH increment. The ratification date records the original adoption date and MUST remain
unchanged in later amendments; the last-amended date MUST be updated for each amendment.
Feature plans MUST check compliance before and after design, and pull request self-reviews
MUST verify compliance. Any exception MUST be explicit, justified in the plan, and accepted
by the project owner before implementation.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): Original adoption date is unknown; the
constitution is untracked and has no repository history. | **Last Amended**: 2026-11-07
