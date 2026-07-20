# Guia de Contribuição

## Setup local

1. Clone o repo
2. `npm install`
3. Copy `.env.example` para `.env.local`
4. `npm run dev`

## Padrões de código

- Use TypeScript, não JavaScript puro
- Components no padrão Feature-based
- Exports centralizados em `index.ts`
- Nomes de componentes em PascalCase

## Antes de fazer commit

```bash
npm run type-check
npm run lint
npm run format
```
