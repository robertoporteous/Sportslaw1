# Sports Law Firm Website

Sitio web profesional para firma especializada en derecho deportivo internacional con énfasis en la región CONCACAF.

## 📋 Características

✅ **Sitio Web Completo y Responsive**
- Página de inicio con hero section impactante
- Página sobre nosotros con equipo y credenciales
- Servicios detallados (arbitraje, contratos, transferencias, etc.)
- Casos de éxito con filtros por categoría
- Blog/Centro de recursos con búsqueda
- Página de contacto con formulario y múltiples opciones de comunicación

✅ **Multilingüe**
- Soporte para Español e Inglés
- Selector de idioma en la navegación
- Todas las páginas traducidas

✅ **Profesional y Moderno**
- Diseño limpio y profesional
- Colores corporativos (azul marino, dorado, rojo)
- Completamente responsive (funciona en móvil, tablet, desktop)
- Accesibilidad mejorada

✅ **Optimizado para Conversión**
- Llamadas a la acción prominentes
- Formulario de contacto simple
- Integración con WhatsApp
- Testimonios de clientes
- Estadísticas de casos

## 🚀 Cómo Publicar en GitHub Pages

### Paso 1: Crear un Repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repositorio: `sportslaw` (o tu preferencia)
3. Marca como **Public**
4. Clic en "Create repository"

### Paso 2: Preparar los Archivos Locales

```bash
# Clone o descarga los archivos a una carpeta local
# La estructura debe ser:
sportslaw/
├── index.html
├── about.html
├── services.html
├── cases.html
├── blog.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

### Paso 3: Inicializar Git y Subir a GitHub

```bash
# Abre terminal/CMD en la carpeta del proyecto

# Inicializa repositorio git
git init

# Agrega todos los archivos
git add .

# Realiza el primer commit
git commit -m "Initial commit: Sports Law Firm website"

# Añade el remote (reemplaza tu-usuario y sportslaw)
git remote add origin https://github.com/tu-usuario/sportslaw.git

# Crea la rama main
git branch -M main

# Sube los cambios
git push -u origin main
```

### Paso 4: Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Settings → Pages (en el menú izquierdo)
3. En "Source", selecciona: **main** branch
4. Clic en "Save"
5. GitHub te mostrará la URL: `https://tu-usuario.github.io/sportslaw`

El sitio estará en vivo en 1-2 minutos.

## 🔧 Configuración Personalizada

### Cambiar Información de Contacto

Edita estos archivos para agregar tu información:

**contact.html** - Búsqueda y reemplaza:
- `info@sportslaw.example` → tu email
- `+1 (XXX) XXX-XXXX` → tu teléfono
- `YOUR_WHATSAPP_NUMBER` → tu número WhatsApp
- `YOUR_FORM_ID` → ID de Formspree (ver abajo)

**about.html** - Actualiza:
- Nombres del equipo
- Bios y credenciales
- Instituciones

**cases.html** - Personaliza:
- Casos reales de tu firma
- Resultados y logros

### Integrar Formulario de Contacto

Para que funcione el formulario de contacto:

1. Ve a https://formspree.io
2. Regístrate con tu email
3. Crea un nuevo formulario
4. Copia el ID del formulario
5. En `contact.html`, línea ~95, reemplaza:
   ```html
   <form id="contact-form" method="POST" action="https://formspree.io/f/YOUR_FORM_ID">
   ```

### Agregar Enlaces Sociales

En **contact.html** (línea ~150) y **index.html** reemplaza:
```html
<a href="https://www.linkedin.com/company/tu-empresa">LinkedIn</a>
<a href="https://www.instagram.com/tu-perfil">Instagram</a>
<a href="https://twitter.com/tu-perfil">Twitter</a>
<a href="https://www.facebook.com/tu-pagina">Facebook</a>
```

### Cambiar Nombre y Logo

Para cambiar el nombre de la firma en todos lados:

```bash
# Busca y reemplaza "Sports Law" con tu nombre en todos los archivos
# O edita manualmente cada HTML
```

En el logo (navbar):
```html
<div class="logo">
    <i class="fas fa-gavel"></i>
    <span>Sports Law</span>  <!-- Cambia aquí -->
</div>
```

## 📝 Mantenimiento

### Agregar un Artículo al Blog

1. Abre `blog.html`
2. Copia cualquier `<article class="blog-card arbitraje">` (o la categoría deseada)
3. Pégalo en la sección `.blog-grid`
4. Actualiza el contenido (título, texto, fecha)
5. Haz commit y push:
   ```bash
   git add .
   git commit -m "Add new blog post: titulo"
   git push
   ```

### Actualizar Casos de Éxito

1. Abre `cases.html`
2. Copia cualquier `.case-card`
3. Actualiza la información
4. Los cambios se reflejarán automáticamente

### Agregar Nuevo Equipo

1. Abre `about.html`
2. Copia un `.team-member`
3. Actualiza foto (usando placeholder) y biografía

## 🎨 Colores Corporativos

Si quieres cambiar los colores, edita `css/style.css`:

```css
:root {
    --primary-color: #1a3a52;    /* Azul marino - CAMBIAR */
    --secondary-color: #d4af37;  /* Dorado - CAMBIAR */
    --accent-color: #e74c3c;     /* Rojo - CAMBIAR */
    /* ... más colores */
}
```

## 📱 Optimizaciones Futuras

- [ ] Integrar CMS para blog
- [ ] Agregar calendario de eventos
- [ ] Sistema de comentarios
- [ ] Newsletter automatizado
- [ ] Analytics avanzado
- [ ] Búsqueda de casos
- [ ] Calculadora de honorarios

## 🔒 Seguridad

- No almacena datos sensibles
- Formularios procesados por Formspree (tercero confiable)
- Sin base de datos expuesta
- SSL incluido (GitHub Pages)

## 📞 Soporte

Para problemas con GitHub Pages:
- Documentación: https://docs.github.com/en/pages
- Para errores de build: Revisa la sección "Actions" en tu repositorio

## 📄 Estructura de Carpetas

```
sportslaw/
├── index.html              # Página principal
├── about.html              # Sobre nosotros
├── services.html           # Servicios
├── cases.html              # Casos de éxito
├── blog.html               # Blog/Recursos
├── contact.html            # Contacto
├── css/
│   └── style.css          # Estilos principales
├── js/
│   └── script.js          # JavaScript
├── README.md              # Este archivo
└── .gitignore             # (Opcional) Archivos a ignorar
```

## 🌐 Dominio Personalizado (Opcional)

Para usar tu propio dominio (ej: www.miabogado.com):

1. Ve a Settings → Pages
2. En "Custom domain", ingresa: miabogado.com
3. Actualiza DNS en tu registrador (GoDaddy, Namecheap, etc.)
   - Apunta a: `tu-usuario.github.io`
4. Espera 24 horas para propagación

## 📈 Métricas y Tracking

Para agregar Google Analytics:

1. Crea cuenta en https://analytics.google.com
2. Copia el código de tracking
3. Pégalo antes del `</head>` en todos los archivos HTML

## ⚖️ Aviso Legal

Asegúrate de incluir:
- [ ] Política de privacidad
- [ ] Términos de servicio
- [ ] Disclaimer legal
- [ ] Información sobre abogados responsables

Plantillas disponibles en la sección de footer.

## 📧 Contacto del Desarrollador

Para actualizar o mantener este sitio, contacta al equipo de desarrollo.

---

**Última actualización:** Noviembre 2024
**Versión:** 1.0
