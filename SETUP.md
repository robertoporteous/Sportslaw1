# 🚀 GUÍA RÁPIDA - Publica tu Sitio en 5 Minutos

## ¿Qué tienes?

✅ Sitio web profesional completo para firma de derecho deportivo
✅ 6 páginas HTML + CSS + JavaScript
✅ Multilingüe (Español/English)
✅ Completamente responsive
✅ Listo para GitHub Pages

## PASO 1: Descarga los Archivos

1. Ya tienes todos los archivos en esta carpeta:
   ```
   index.html, about.html, services.html, cases.html, 
   blog.html, contact.html, css/style.css, js/script.js
   ```

## PASO 2: Crea un Repositorio en GitHub

1. Ve a: https://github.com/new
2. Nombre: **sportslaw** (o tu preferencia)
3. Marca: **Public**
4. Crea el repositorio

## PASO 3: Sube los Archivos (Opción A - Más Fácil)

### En GitHub Web:

1. En tu nuevo repositorio, busca botón verde "Add file" → "Upload files"
2. Arrastra todos los archivos (mantén la estructura css/ y js/)
3. Mensaje de commit: "Initial commit: Sports Law Firm website"
4. Commit changes

## PASO 3 ALTERNATIVA: Sube los Archivos (Opción B - Terminal)

```bash
# Abre terminal en la carpeta de los archivos

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/sportslaw.git
git push -u origin main
```

## PASO 4: Habilita GitHub Pages

1. En tu repositorio → **Settings** (arriba)
2. En el menú izquierdo → **Pages**
3. En "Source" → selecciona **main** (rama)
4. Clic en **Save**

✨ **¡LISTO!** Tu sitio estará en: `https://tu-usuario.github.io/sportslaw`

(Espera 1-2 minutos para que se publique)

## PERSONALIZACIÓN RÁPIDA

### 1. Cambiar Nombre y Contacto

Edita estos archivos en GitHub (botón de lapicero):

**contact.html - Línea ~95:**
```html
<form id="contact-form" method="POST" action="https://formspree.io/f/YOUR_FORM_ID">
```
Obtén YOUR_FORM_ID en: https://formspree.io

**En varios archivos, reemplaza:**
- `info@sportslaw.example` → tu email real
- `+1 (XXX) XXX-XXXX` → tu teléfono real
- `+1 (XXX) XXX-XXXX` en contacto WhatsApp → enlace real

### 2. Cambiar "Sports Law" por tu Nombre

En **index.html, about.html, services.html, cases.html, blog.html, contact.html**

Búsqueda y reemplaza:
- `<span>Sports Law</span>` → `<span>Tu Nombre Firma</span>`
- `Sports Law Firm` → `Tu Nombre Completo`

### 3. Agregar Redes Sociales

En cualquier archivo, busca:
```html
<a href="#" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
```

Reemplaza `#` con tus URLs:
- LinkedIn: `https://linkedin.com/company/tu-empresa`
- Instagram: `https://instagram.com/tu-perfil`
- Twitter: `https://twitter.com/tu-perfil`
- Facebook: `https://facebook.com/tu-pagina`

## ¿TIENES DOMINIO PROPIO?

(ej: www.miderechodeportivo.com)

1. Settings → Pages
2. "Custom domain" → miderechodeportivo.com
3. En tu registrador (GoDaddy, Namecheap, etc):
   - Apunta DNS a: `tu-usuario.github.io`

## AGREGAR CONTENIDO

### Blog: Agregar Artículo

1. Abre `blog.html`
2. Copia esta sección:
```html
<article class="blog-card arbitraje">
    <div class="card-image">
        <div class="placeholder-image"><i class="fas fa-image"></i></div>
    </div>
    <div class="card-content">
        <span class="category arbitraje">Arbitraje</span>
        <h3>Título del Artículo</h3>
        <p>Descripción...</p>
        <div class="article-meta">
            <span class="date">Fecha</span>
            <span class="read-time">5 min lectura</span>
        </div>
        <a href="#" class="read-more">Leer más →</a>
    </div>
</article>
```
3. Pégalo en `.blog-grid` y actualiza contenido
4. Commit y push

### Casos: Agregar Caso de Éxito

1. Abre `cases.html`
2. Copia un `.case-card` (busca `<div class="case-card`)
3. Actualiza contenido
4. Commit y push

### Equipo: Agregar Abogado

1. Abre `about.html`
2. Copia un `.team-member`
3. Actualiza nombre y biografía
4. Commit y push

## CONTRASEÑA DE FORMSPREE

Para que funcione el contacto:

1. Ve a: https://formspree.io
2. Regístrate (es gratis)
3. Crea un "New Form"
4. Copia el ID (ej: `mkgfvmvz`)
5. En `contact.html`, reemplaza en línea ~95:
   ```html
   action="https://formspree.io/f/mkgfvmvz"
   ```

## COLORES DE LA FIRMA

¿Quieres cambiar azul/dorado/rojo?

Abre `css/style.css`, línea 4:

```css
:root {
    --primary-color: #1a3a52;    /* Azul marino */
    --secondary-color: #d4af37;  /* Dorado */
    --accent-color: #e74c3c;     /* Rojo */
}
```

Cambia los códigos hex (#) por tus colores.

## VERIFICAR QUE TODO FUNCIONA

1. Ve a tu sitio: `https://tu-usuario.github.io/sportslaw`
2. Prueba:
   - ✅ Cambio de idioma (ES/EN)
   - ✅ Links de navegación
   - ✅ Responsividad (zoom out)
   - ✅ Formulario de contacto
   - ✅ Redes sociales

## ¿PROBLEMAS?

**El sitio no carga:**
- Espera 2 minutos, GitHub tarda a veces
- Abre en incógnito (sin caché)
- Revisa: Settings → Pages → verifica que está en "main"

**Formulario no funciona:**
- Abre Formspree y obtén el ID correcto
- Reemplaza en contact.html línea ~95

**Estilos no se ven:**
- Fuerza actualización: Ctrl+Shift+R (Windows) o Cmd+Shift+R (Mac)

**¿Necesitas ayuda?**
- Lee el README.md completo
- Documentación GitHub Pages: https://docs.github.com/pages

## PRÓXIMOS PASOS

1. ✅ Publica el sitio (pasos 1-4)
2. ✅ Personaliza información de contacto
3. ✅ Agrega tus casos reales
4. ✅ Agrega equipo de abogados
5. ✅ Publica blog regularmente

---

**¡Listo para usar!** Tu sitio está profesional y competitivo. Ahora solo necesitas contenido actualizado y promocionarlo.

**Última actualización:** Noviembre 2024
