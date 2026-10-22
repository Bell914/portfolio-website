# E-Commerce Client Component Hierarchy

```text
BrowserRouter
└── App (session and cart state)
    └── Layout (header/navigation)
        ├── Home
        ├── Register -> Form
        ├── Login -> Form + Google OAuth link
        ├── Products -> Product cards
        ├── Product (detail)
        ├── Cart
        ├── ProtectedRoute
        │   └── Orders
        └── shared styles.css
```

The current client keeps the small MVP component set in `client/src/main.jsx`; the
hierarchy is deliberately shallow so the routes and data flow are easy to follow.
