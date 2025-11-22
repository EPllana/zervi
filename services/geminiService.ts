import { GoogleGenAI } from "@google/genai";

export const draftInquiry = async (
  eventType: string,
  guestCount: string,
  keyDetails: string
): Promise<string> => {
  try {
    // Initialize client inside the function to prevent top-level crashes
    // if process.env is not available immediately on module load in the browser.
    // We check if process is defined to avoid ReferenceErrors.
    const apiKey = typeof process !== "undefined" && process.env ? process.env.API_KEY : "";
    
    if (!apiKey) {
      console.warn("API Key not found. AI features will not work.");
      return "Entschuldigung, der KI-Dienst ist derzeit nicht konfiguriert.";
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
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