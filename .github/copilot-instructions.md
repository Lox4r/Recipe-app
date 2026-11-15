
# Recipe App – Copilot Instructions

## Tech Stack
- Next.js 16 with App Router
- TypeScript
- Tailwind CSS
- MongoDB

## Architecture
- Use the app/ directory for pages and routes.
- Use components/ for reusable UI components.
- Keep Header and Footer in the shared layout.
- Use TypeScript for all new application code.

## Data Model
- User: id, name, email, passwordHash
- Recipe: id, title, description, instructions, authorId, categoryId, ingredients
- Ingredient: id, name
- Category: id, name

## Design
- Primary color: #2F6B4F
- Background: #F5F1E8
- Accent: #E8A65A
- Font: Geist Sans
- Use responsive layouts and consistent spacing.

## Development Guidelines
- Keep components small and reusable.
- Follow Next.js App Router conventions.
- Use accessible HTML elements.
- Validate data before saving it.
- Never expose database credentials.
- Run npm run build before committing.
