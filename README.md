
## Yema
:+1: :punch:

Crea una aplicación en react que contenga lo siguiente:

1. Página principal
   - [x] Debes de obtener la información con GraphQL de este endpoint (https://api.spacex.land/graphql/).
   - [x] Deben de mostrarse 12 cards por página de los "past launches" en un grid de 4x3 y en dispositivos más pequeños únicamente mostrar 1 por row. Puedes usar el breakpoint de tu preferencia.
   - [x] Debes de poder mostrar las primeras 3 páginas (Como pagination)

2. Cada card debe contener lo siguiente:
   - [x] Nombre de la misión (Si fue exitosa texto en verde, si fracasó el texto en rojo)
   - [x] Foto al azar de flickr de la misión (links > flickr_images dentro de la query)
   - [x] Fecha y hora de lanzamiento (zona horaria CDMX)
   - [x] Botón con link a Wikipedia

3. Página de "Acerca de"
   - [x] Información acerca de la compañía, al menos nombre, descripción y links relevantes (Debes obtener estos datos de GraphQL de "company")

4. Navegación entre ambas páginas.
   - [x] Ambas deben de contener links para navegar.

5. Reutilizar componentes / Buena estructura

Puedes usar create react app, y librerías o templates a tu gusto.

6. Bonus points:
   - [x] React Hooks
   - [x] Usar NextJs
   - Tailwind
   - [x] Hosting (puede ser en plataformas como Netlify, Vercel, etc)



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).