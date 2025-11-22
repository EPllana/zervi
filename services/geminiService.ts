import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client
// The API key is assumed to be available in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const draftInquiry = async (
  eventType: string,
  guestCount: string,
  keyDetails: string
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      Du bist ein hilfreicher Assistent für eine Event-Location namens "The Shadi Hall by Zeervi".
      Erstelle einen höflichen, förmlichen Text für eine Kundenanfrage auf Deutsch.
      
      Der Kunde möchte eine Anfrage für folgendes Event stellen:
      - Art des Events: ${eventType}
      - Ungefähre Gästeanzahl: ${guestCount}
      - Weitere Details: ${keyDetails}

      Der Text sollte direkt in das Nachrichtenfeld eines Kontaktformulars passen (aus der Ich-Perspektive des Kunden). 
      Halte es prägnant, freundlich und professionell. Keine Platzhalter, formuliere einen fertigen Text.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Entschuldigung, ich konnte keinen Text generieren. Bitte versuchen Sie es erneut.";
  } catch (error) {
    console.error("Error generating inquiry draft:", error);
    return "Fehler bei der Generierung des Entwurfs. Bitte schreiben Sie Ihre Nachricht manuell.";
  }
};