# Client State Plan

- `App` owns the authenticated `user` and browser `cart` because both are needed by
  navigation, protected routes, checkout, and the order history flow.
- `Layout` receives read-only `user` and derived `cartCount` values plus `logout`.
- `Products` and `Product` own fetched catalog/detail state because it is local to each
  route and can be discarded when navigating away.
- `Orders` owns fetched order history and refreshes it when the authenticated user changes.
- `useStored` persists the user and cart in browser storage; server session cookies remain
  the authority for API authentication.
