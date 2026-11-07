---
description: 'Task list template for feature implementation'
---

# Tasks: [FEATURE NAME]

**Input**: Design documents from `/specs/[###-feature-name]/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Automated tests for changed behavior are REQUIRED by the project constitution.
Include test tasks for every user story and identify the test runner in `plan.md`.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Next.js web app**: `app/` for App Router routes, `components/` for shared UI,
  `lib/` for shared utilities, and `tests/` for automated tests
- Paths shown below assume this repository's root-level Next.js App Router structure;
  adjust them to the feature's `plan.md`

<!--
  ============================================================================
  IMPORTANT: The tasks below are SAMPLE TASKS for illustration purposes only.

  The /speckit.tasks command MUST replace these with actual tasks based on:
  - User stories from spec.md (with their priorities P1, P2, P3...)
  - Feature requirements from plan.md
  - Entities from data-model.md
  - Endpoints from contracts/

  Tasks MUST be organized by user story so each story can be:
  - Implemented independently
  - Tested independently
  - Delivered as an MVP increment

  DO NOT keep these sample tasks in the generated tasks.md file.
  ============================================================================
-->

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create project structure per implementation plan
- [ ] T002 Initialize [language] project with [framework] dependencies
- [ ] T003 [P] Configure linting, formatting, and a test runner if not already present

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

Examples of foundational tasks (adjust based on your project):

- [ ] T004 Setup database schema and migrations framework
- [ ] T005 [P] Configure authentication/authorization if required by the feature
- [ ] T006 [P] Setup API routing and middleware structure
- [ ] T007 Create base models/entities that all stories depend on
- [ ] T008 Configure error handling and logging infrastructure
- [ ] T009 Setup environment configuration management

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - [Title] (Priority: P1) 🎯 MVP

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Tests for User Story 1

> **NOTE: Add automated tests for the story's changed behavior.**

- [ ] T010 [P] [US1] Add a test for [behavior] in tests/[test-file].test.tsx
- [ ] T011 [P] [US1] Add an integration test for [user journey] in tests/[test-file].test.tsx

### Implementation for User Story 1

- [ ] T012 [P] [US1] Create [Entity1] type in lib/[entity1].ts
- [ ] T013 [P] [US1] Create [Entity2] type in lib/[entity2].ts
- [ ] T014 [US1] Implement [service] in lib/[service].ts (depends on T012, T013)
- [ ] T015 [US1] Implement [route or UI feature] in app/[route]/[file].tsx
- [ ] T016 [US1] Add validation and error handling
- [ ] T017 [US1] Add logging for user story 1 operations

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - [Title] (Priority: P2)

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Tests for User Story 2

- [ ] T018 [P] [US2] Add a test for [behavior] in tests/[test-file].test.tsx
- [ ] T019 [P] [US2] Add an integration test for [user journey] in tests/[test-file].test.tsx

### Implementation for User Story 2

- [ ] T020 [P] [US2] Create [Entity] type in lib/[entity].ts
- [ ] T021 [US2] Implement [service] in lib/[service].ts
- [ ] T022 [US2] Implement [route or UI feature] in app/[route]/[file].tsx
- [ ] T023 [US2] Integrate with User Story 1 components (if needed)

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - [Title] (Priority: P3)

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Tests for User Story 3

- [ ] T024 [P] [US3] Add a test for [behavior] in tests/[test-file].test.tsx
- [ ] T025 [P] [US3] Add an integration test for [user journey] in tests/[test-file].test.tsx

### Implementation for User Story 3

- [ ] T026 [P] [US3] Create [Entity] type in lib/[entity].ts
- [ ] T027 [US3] Implement [service] in lib/[service].ts
- [ ] T028 [US3] Implement [route or UI feature] in app/[route]/[file].tsx

**Checkpoint**: All user stories should now be independently functional

---

[Add more user story phases as needed, following the same pattern]

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] TXXX [P] Documentation updates in docs/
- [ ] TXXX Code cleanup and refactoring
- [ ] TXXX Performance optimization across all stories
- [ ] TXXX [P] Add or update tests for cross-cutting behavior in tests/
- [ ] TXXX Verify authentication, authorization, input validation, and secret handling
- [ ] TXXX Run quickstart.md validation
- [ ] TXXX Run tests, lint, Prettier, TypeScript validation, and production build per plan.md
- [ ] TXXX Self-review the feature-branch diff and report validation in the pull request

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - A solo developer proceeds sequentially in priority order (P1 → P2 → P3)
  - Independent tasks may be parallelized when dependencies and available tooling allow
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Tests MUST cover the story's changed behavior and be run as part of validation
- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All tests for a user story marked [P] can run in parallel
- Models within a story marked [P] can run in parallel
- Independent user stories may be parallelized only when collaborators are available

---

## Parallel Example: User Story 1

```bash
# Work on independent test files or components only when dependencies allow:
Task: "Add a test for [behavior] in tests/[test-file].test.tsx"
Task: "Add an integration test for [user journey] in tests/[test-file].test.tsx"

# Independent types or shared components may also be parallelized:
Task: "Create [Entity1] type in lib/[entity1].ts"
Task: "Create [Entity2] type in lib/[entity2].ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Solo Developer Strategy

For the solo developer workflow:

1. Complete Setup and Foundational tasks on the feature branch.
2. Implement and validate user stories in priority order, one at a time unless independent
   tasks are safe to parallelize.
3. Self-review the complete diff, run required checks, and submit a pull request before
   merging.

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Complete automated tests for changed behavior and run the relevant checks
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
