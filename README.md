# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## steps
```
    npm create vite@latest client
    cd client
    npm install
    npm run dev

```

# How it Works:
## Admin Page:
- Allows the admin to navigate through PDF slides.
- Changes made by the admin are broadcasted to all viewers.
## Viewer Page:
- Automatically updates the PDF slide based on the admin's changes.
- Real-time Sync:
## Uses Socket.io for instant communication between client and server.