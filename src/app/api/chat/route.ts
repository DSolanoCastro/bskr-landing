import { SessionsClient } from "@google-cloud/dialogflow-cx";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

// Configura las credenciales (Se asume que gcloud auth está activo o hay un .json configurado)
// En producción se deben usar variables de entorno
const projectId = "enduring-wharf-492723-v8";
const location = "us-central1";
const agentId = "2fe660b4-4a6b-4c63-881e-679a74efb910";

const client = new SessionsClient({
  apiEndpoint: `${location}-dialogflow.googleapis.com`,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const text = body.text;
    const sessionId = body.sessionId || uuidv4();

    const sessionPath = client.projectLocationAgentSessionPath(
      projectId,
      location,
      agentId,
      sessionId
    );

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: text,
        },
        languageCode: "es",
      },
    };

    const [response] = await client.detectIntent(request);
    
    const messages = response.queryResult?.responseMessages || [];
    
    // Unimos todos los fragmentos de texto devueltos por la IA
    const responseText = messages
      .filter((m) => m.text && m.text.text)
      .map((m) => m.text.text.join("\n"))
      .join("\n")
      .trim();

    return NextResponse.json({
      text: responseText || "No se ha generado una respuesta de texto. Por favor, verifica la configuración de Bexa en el panel de Dialogflow.",
      sessionId: sessionId,
    });
  } catch (error: any) {
    console.error("Error en Bexa API:", error.message);
    return NextResponse.json(
      { error: "Error de comunicación con el Agente AI", details: error.message },
      { status: 500 }
    );
  }
}
