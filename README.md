# Mathius Moyano — Professional portfolio

Bilingual (English first, Spanish optional) software engineering portfolio built with Next.js 15, React, TypeScript and Tailwind CSS.

## Local setup

Requires Node.js 22 and npm.

```bash
npm ci
npm run dev
```

If port 3000 is occupied, use `npx next dev --turbopack -p 3001`.

## Validation

```bash
npm run typecheck
npm run build
npm audit --omit=dev
```

Do not use `npm audit fix --force` without reviewing breaking updates. Next.js 15 still has a transitive PostCSS advisory; review the audit before deployment.

## Localization

The default language is English. The EN/ES switch updates page text and the document language. Language context is in `src/context/language-context.tsx`. Resumes:

- `public/docs/MathiusMoyano_EN.pdf`
- `public/docs/MathiusMoyano.pdf`

## Contact

The direct email link works without server configuration. The optional contact form uses Resend and requires `RESEND_API_KEY`, `CONTACT_TO`, and `CONTACT_FROM` (see `.env.example`). Test delivery before publication. Do not commit secrets.

## Publication checklist

- Confirm the semantic search project's public name (Ragvig / Reactic).
- Verify external URLs and approved public details for SpotVue.
- Check keyboard navigation and mobile layouts.
- Run the build and dependency audit.
- Verify the contact form on the deployed environment if enabled.
- Review a pull request before merging to `main`.
