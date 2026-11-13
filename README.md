# Portfólio

Meu site pessoal: **[andrenatividade.is-a.dev](https://andrenatividade.is-a.dev)**

Next.js com export estático, publicado no Cloudflare Pages. Em português, inglês e espanhol, com tema claro e escuro automático.

- Todo o conteúdo fica em [`src/data/resume.tsx`](src/data/resume.tsx).
- O visual fica em [`src/app/portfolio.css`](src/app/portfolio.css) e está documentado em [`DESIGN.md`](DESIGN.md).
- As prévias animadas dos projetos são componentes próprios: a demo do DumpIt ([`dumpit-demo.tsx`](src/components/dumpit-demo.tsx)) e o diagrama do Clover MMO ([`arch-diagram.tsx`](src/components/arch-diagram.tsx)).

## Rodar

```bash
npm install
npm run dev
```

## Publicar

```bash
CLOUDFLARE_ACCOUNT_ID=... npm run deploy
```

Baseado no template de [Dillion Verma](https://github.com/dillionverma/portfolio) (MIT), redesenhado do zero.
