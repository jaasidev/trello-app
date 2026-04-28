# Trello Clone App 📋

Welcome to **Trello Clone App**! This is a project developed with a 100% **educational** focus, created to experiment with the latest technologies in the frontend ecosystem and put advanced React development concepts into practice.

## 🚀 Features and Focus

As a learning project, the main goal is to explore design patterns and performance optimizations in interactive applications (Kanban-style).

**💡 Optimized Performance**: Special emphasis has been placed on global state in this application. The components use **granular selectors** (via Zustand) to subscribe only to the pieces of state they need. This avoids unnecessary re-renders in the component tree and drastically improves performance, a critical factor in drag & drop applications with many on-screen elements.

## 🛠️ Technologies Used

- **[React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)**: User interface and typed superset.
- **[Vite](https://vite.dev/)**: Lightning-fast development environment and bundler.
- **[Zustand 5](https://zustand-demo.pmnd.rs/)**: Simple and efficient global state management.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Utility-first styles and highly flexible design.
- **[@dnd-kit](https://dndkit.com/)**: Powerful, accessible, and configurable Drag & Drop logic.
- **[shadcn/ui](https://ui.shadcn.com/)** and **[Radix UI](https://www.radix-ui.com/)**: Collection of accessible and customizable UI components.
- **[Sonner](https://sonner.emilkowal.ski/)**: Minimalist notification system (toast).
- **[React Compiler](https://react.dev/learn/react-compiler)**: Enabled to optimize the React rendering cycle natively.

## 📦 Installation and Local Execution

If you want to deploy the project and play with it in your local environment, follow these steps using `pnpm`:

```bash
# 1. Clone the repository
git clone <url-del-repo>

# 2. Navigate to the project directory
cd trello-app

# 3. Install dependencies
pnpm install

# 4. Start the development server
pnpm dev
```

## 💬 Feedback and Contributions

Although this project is built strictly with an **educational and experimental focus**, all collaborations and Pull Requests are welcome! Feel free to contribute with improvements, but please keep in mind that the primary goal of the project remains educational.

I also greatly appreciate your feedback! If you have suggestions, comments about the code architecture, notice any opportunity for improvement in the implementation, or find an interesting detail, don't hesitate to open an **Issue**. All constructive feedback adds a lot of value and is the main reason for this repository's existence!
