# Trello Clone App 📋

¡Bienvenido a **Trello Clone App**! Este es un proyecto desarrollado con un enfoque 100% **educativo**, creado para experimentar con las últimas tecnologías del ecosistema frontend y poner en práctica conceptos avanzados de desarrollo con React.

## 🚀 Características y Enfoque

Al ser un proyecto de aprendizaje, el objetivo principal es explorar patrones de diseño y optimizaciones de rendimiento en aplicaciones interactivas (tipo Kanban).

**💡 Rendimiento Optimizado**: En esta aplicación se ha puesto especial énfasis en el estado global. Los componentes utilizan **selectores granulares** (a través de Zustand) para suscribirse únicamente a los fragmentos de estado que necesitan. Esto evita renderizados innecesarios en el árbol de componentes y mejora drásticamente el rendimiento, un factor crítico en aplicaciones de drag & drop con muchos elementos en pantalla.

## 🛠️ Tecnologías Utilizadas

- **[React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)**: Interfaz de usuario y superconjunto tipado.
- **[Vite](https://vite.dev/)**: Entorno de desarrollo ultrarrápido y empaquetado.
- **[Zustand 5](https://zustand-demo.pmnd.rs/)**: Manejo del estado global de forma simple y eficiente.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Estilos bajo demanda y diseño altamente flexible.
- **[@dnd-kit](https://dndkit.com/)**: Lógica de "Arrastrar y Soltar" (Drag & Drop) potente, accesible y configurable.
- **[shadcn/ui](https://ui.shadcn.com/)** y **[Radix UI](https://www.radix-ui.com/)**: Colección de componentes UI accesibles y personalizables.
- **[Sonner](https://sonner.emilkowal.ski/)**: Sistema de notificaciones minimalista (toast).
- **[React Compiler](https://react.dev/learn/react-compiler)**: Habilitado para optimizar el ciclo de renderizado de React de forma nativa.

## 📦 Instalación y Ejecución Local

Si quieres desplegar el proyecto y jugar con él en tu entorno local, sigue estos pasos utilizando `pnpm`:

```bash
# 1. Clona el repositorio
git clone <url-del-repo>

# 2. Navega al directorio del proyecto
cd trello-app

# 3. Instala las dependencias
pnpm install

# 4. Inicia el servidor de desarrollo
pnpm dev
```

## 💬 Feedback y Comentarios

Dado que este proyecto está construido estrictamente con **fines de aprendizaje y experimentación**, no cuenta con guías de contribución ni se están aceptando Pull Requests de funcionalidades.

¡Sin embargo, **agradezco enormemente tu feedback**! Si tienes sugerencias, comentarios sobre la arquitectura del código, notas alguna oportunidad de mejora en la implementación o encuentras algún detalle interesante, no dudes en abrir un **Issue**. ¡Toda retroalimentación constructiva suma mucho y es la principal razón de ser de este repositorio!
