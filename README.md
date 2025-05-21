# PsnStoreAngular

Este projeto é uma loja fictícia de jogos PlayStation desenvolvida em Angular, com suporte a SSR (Server-Side Rendering) utilizando Express. Ele demonstra a construção de uma interface moderna para exibição de cards de jogos, menu de navegação e organização modular de componentes. Projeto desenvolvido para fins educacionais no BootCamp Fullstack da DIO.

## Funcionalidades

- Listagem de jogos em destaque com informações de preço, tipo e rótulo.
- Componentização reutilizável (cards, menu, labels, pricing).
- Layout responsivo e estilização customizada.
- Estrutura pronta para expansão de rotas e integração com APIs.
- Suporte a SSR para melhor performance e SEO.

## Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute:

```bash
ng serve
```

Depois, acesse `http://localhost:4200/` no navegador. O aplicativo recarrega automaticamente ao salvar alterações nos arquivos fonte.

## Estrutura do Projeto

- `src/app/components`: Componentes reutilizáveis (menu-bar, card, card-label, card-pricing).
- `src/app/pages`: Páginas principais da aplicação (ex: Home).
- `public/assets`: Imagens e recursos estáticos.
- Suporte a SSR configurado em `src/server.ts`.

## Gerando Componentes

Para criar um novo componente:

```bash
ng generate component nome-do-componente
```

Para ver todos os schematics disponíveis:

```bash
ng generate --help
```

## Build

Para compilar o projeto:

```bash
ng build
```

Os artefatos serão gerados em `dist/`. O build de produção é otimizado por padrão.

## Testes

Para rodar os testes unitários com Karma:

```bash
ng test
```

## SSR (Server-Side Rendering)

Para buildar e rodar com SSR:

```bash
ng build
npm run serve:ssr:psn-store-angular
```

O servidor Express será iniciado na porta 4000 por padrão.

## Recursos adicionais

- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
- [Documentação Angular](https://angular.dev/)
