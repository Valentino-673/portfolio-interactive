# Portfolio Interactivo

Un portfolio profesional moderno construido con React, TypeScript, Vite, TailwindCSS y Framer Motion.

## 🚀 Características

- ⚡ **Vite** - Build tool ultra rápido
- ⚛️ **React 18** - Biblioteca de UI moderna
- 🔷 **TypeScript** - Tipado estático para JavaScript
- 🎨 **TailwindCSS** - Framework CSS utility-first
- 🎭 **Framer Motion** - Animaciones fluidas y atractivas
- 🧭 **React Router DOM** - Navegación del lado del cliente
- 📝 **React Hook Form** - Manejo eficiente de formularios
- 📱 **Responsive Design** - Optimizado para todos los dispositivos
- 🎯 **SEO Optimizado** - Meta tags y estructura semántica

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Layout.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── features/           # Características organizadas por funcionalidad
│   ├── hero/
│   ├── about/
│   ├── skills/
│   ├── projects/
│   ├── contact/
│   └── experience/
├── pages/             # Páginas principales
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── hooks/             # Hooks personalizados
├── utils/             # Utilidades y helpers
├── types/             # Definiciones de TypeScript
├── styles/            # Estilos globales
└── assets/            # Recursos estáticos
    ├── images/
    └── icons/
```

## 🛠️ Instalación

### Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

### Pasos de instalación

1. **Clona el repositorio:**
   ```bash
   git clone <tu-repositorio>
   cd portfolio-interactive
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abre tu navegador:**
   Navega a `http://localhost:3000` para ver la aplicación.

## 📜 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter de ESLint

## 🎨 Personalización

### Colores

Los colores principales se pueden personalizar en `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Tus colores primarios
      },
      secondary: {
        // Tus colores secundarios
      }
    }
  }
}
```

### Contenido

1. **Información personal:** Edita `src/utils/constants.ts`
2. **Proyectos:** Modifica los datos en `src/features/projects/Projects.tsx`
3. **Experiencia:** Actualiza la información en `src/features/experience/Experience.tsx`
4. **Habilidades:** Personaliza las skills en `src/features/skills/Skills.tsx`

### Imágenes

- Coloca tus imágenes en `src/assets/images/`
- Actualiza las rutas en los componentes correspondientes
- Para el avatar, reemplaza el placeholder en `src/features/about/About.tsx`

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. Vercel detectará automáticamente que es un proyecto Vite
3. El despliegue se realizará automáticamente

### Netlify

1. Conecta tu repositorio a [Netlify](https://netlify.com)
2. Configura el build command: `npm run build`
3. Configura el publish directory: `dist`

### GitHub Pages

1. Instala `gh-pages`: `npm install --save-dev gh-pages`
2. Agrega el script al `package.json`:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Ejecuta: `npm run build && npm run deploy`

## 📱 Responsive Design

El portfolio está optimizado para:

- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktop (1280px+)

## 🎭 Animaciones

Las animaciones están implementadas con Framer Motion:

- Transiciones suaves entre páginas
- Animaciones de scroll
- Efectos hover interactivos
- Animaciones de entrada para elementos

## 🔧 Tecnologías Utilizadas

- **Frontend:** React, TypeScript, Vite
- **Styling:** TailwindCSS, PostCSS
- **Animaciones:** Framer Motion
- **Routing:** React Router DOM
- **Formularios:** React Hook Form
- **Iconos:** Lucide React
- **Linting:** ESLint
- **Build:** Vite

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

Si tienes preguntas o sugerencias, no dudes en contactarme:

- Email: contacto@ejemplo.com
- LinkedIn: [Tu LinkedIn](https://linkedin.com/in/tu-usuario)
- GitHub: [Tu GitHub](https://github.com/tu-usuario)

---

⭐ ¡No olvides darle una estrella al proyecto si te gusta!
