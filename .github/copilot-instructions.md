
# Recipe App – Copilot Instructions

## Tech Stack
- Next.js 16 with App Router
- TypeScript
- Tailwind CSS
- MongoDB (planned, not yet implemented)
- Authentication (planned)

## Architecture
- Use app/ for pages and routes.
- Use app/recipes/page.tsx for the recipe listing.
- Use app/recipes/[id]/page.tsx for recipe details.
- Use components/ for reusable UI components.
- Keep Header and Footer in the shared layout.
- Use TypeScript for all new application code.

## Data Model (Planned)
- User: id, name, email, passwordHash
- Recipe: id, title, description, instructions,
  authorId, categoryId, ingredients
- Ingredient: id, name
- Category: id, name

## Current Features
- Recipe listing with sample data.
- Dynamic recipe detail pages.
- Ingredients and cooking instructions.
- Navigation between recipe pages.
- Handling of missing recipes.

## Design
- Primary color: #2F6B4F
- Background: #F5F1E8
- Accent: #E8A65A
- Font: Geist Sans
- Use responsive layouts and consistent spacing.
- Ensure text is readable on dark backgrounds.

## Development Guidelines
- Keep components small and reusable.
- Follow Next.js App Router conventions.
- Use accessible HTML elements.
- Validate data before saving it.
- Never expose database credentials.
- Run npm run build before committing.
- Use feature branches for new functionality.
- Open Pull Requests into main for code review.
