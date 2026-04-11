# Bexa v1.0 — Guía de Configuración Paso a Paso (Google Cloud)
Fecha: 7 de abril de 2026

Sigue estos pasos para que Bexa funcione correctamente en tu consola de **Google Cloud**.

---

### Paso 1: Activar Vertex AI (Google Cloud Console)
1.  Busca "Vertex AI" en la barra de búsqueda de tu consola.
2.  Busca "Agent Builder" o "Search and Conversation".
3.  Activa las APIs necesarias (si no lo están).

### Paso 2: Crear el Data Store (Carpeta 01 en Drive)
1.  Haz clic en "Data Stores" -> "Create Data Store".
2.  Elige el tipo **"Cloud Storage"** o **"Google Drive"**.
3.  Selecciona la carpeta `BSKR_Bexa_Conocimiento` (la que vas a crear en Drive).
4.  Dale nombre: `bskr-knowledge-store`.

### Paso 3: Crear el Agente (Fábrica de Bexa)
1.  Ve a "Apps" o "Agents" -> "Create New App".
2.  Elige el tipo **"Chat"**.
3.  Ponle de nombre: `Bexa-AI-Assistant`.
4.  Vincula el Data Store created en el Paso 2.

### Paso 4: Programar a Bexa (Carpeta 02 en Drive)
1.  En la configuración del Agente, busca la sección **"Playbooks"** o las Instrucciones de Sistema.
2.  Copia y pega el contenido completo de nuestro archivo `02_Logica_Operativa.txt` (que creamos en la carpeta local).

### Paso 5: Conectar Extensiones (Calendar & Sheets)
1.  Busca la pestaña de **"Extensions"** o las Integraciones en Agent Builder.
2.  Activa la extensión de **"Google Calendar"** y la de **"Google Sheets"**.
3.  Dales permiso a tu cuenta de Google.

### Paso 6: Integrar en la Web (Landing Page)
1.  Busca el botón de **"Integrations"** -> "Widget" o "Dialogflow Messenger".
2.  Copia el fragmento de código HTML/JS que te da Google.
3.  **Pégalo en el chat de esta conversación** para que yo lo inserte en el archivo correcto de tu landing page.

---

**Nota:** Estos pasos aseguran que Bexa se comporte exactamente como lo diseñamos, sin usar n8n ni herramientas externas.
