<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## UrbanBite structure
- The site is one page: `src/routes/index.tsx` composes section components from `src/components/` and hash links handle in-page navigation, because the brief asked for smooth-scroll single-page navigation.
- Menu, offers, reviews and contact content live in `src/data/restaurant.ts`, kept out of components so copy can be edited without touching UI.
- Cart state lives in `src/hooks/useCart.tsx` (React context), so any section can add items and the cart panel stays in sync.
