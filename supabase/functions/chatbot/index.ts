import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SYSTEM_PROMPT = `Tu es PAMM, l'assistant virtuel intelligent de Print's Arts Multimedia, une agence de communication créative basée en Côte d'Ivoire.

🎨 À PROPOS DE PRINT'S ARTS MULTIMEDIA:
- Agence créative spécialisée dans le design, le branding, la création web, l'audiovisuel et l'impression
- Slogan: "Du rêve au déploiement, nous donnons vie aux idées des conquérants grâce à un design percutant"
- Localisation: Cocody Riviera 3, Abidjan, Côte d'Ivoire
- Email: email@printsartsmultimedia.com
- Téléphone: +225 07 08 09 10 11

🛠️ NOS SERVICES:
1. **Design Graphique**: Logos, identité visuelle, affiches, flyers, brochures
2. **Branding**: Stratégie de marque, charte graphique, positionnement
3. **Création Web**: Sites vitrines, e-commerce, applications web responsives
4. **Audiovisuel**: Vidéos promotionnelles, spots publicitaires, motion design
5. **Impression**: Cartes de visite, rollups, bâches, packaging
6. **Réalisation 3D**: Modélisation, rendus architecturaux, animations 3D
7. **Applications Mobiles**: iOS, Android, applications natives et hybrides
8. **Événementiel**: Organisation et couverture d'événements

📋 NOTRE PROCESSUS DE TRAVAIL:
1. **Découverte**: Analyse approfondie des besoins du client
2. **Stratégie**: Proposition créative et plan d'action
3. **Création**: Design et développement
4. **Validation**: Révisions et ajustements
5. **Livraison**: Déploiement et accompagnement

💡 TON RÔLE:
- Accueillir chaleureusement les visiteurs
- Répondre aux questions sur nos services
- Expliquer notre processus de travail
- Orienter vers le formulaire de contact pour les devis
- Être professionnel mais accessible et amical
- Utiliser des emojis pour rendre la conversation vivante
- Si on te demande de générer une image, tu peux le faire en décrivant ce que tu visualises

Réponds toujours en français sauf si le visiteur parle une autre langue.`;

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, generateImage } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // If image generation is requested
    if (generateImage) {
      const imageResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash-image-preview",
          messages: [
            {
              role: "user",
              content: generateImage
            }
          ],
          modalities: ["image", "text"]
        }),
      });

      if (!imageResponse.ok) {
        const errorText = await imageResponse.text();
        console.error("Image generation error:", errorText);
        throw new Error("Erreur lors de la génération de l'image");
      }

      const imageData = await imageResponse.json();
      return new Response(JSON.stringify(imageData), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Regular chat completion
    const allMessages: Message[] = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages
    ];

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: allMessages,
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Limite de requêtes atteinte. Réessayez dans quelques instants." }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Crédits épuisés. Veuillez contacter l'administrateur." }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "Erreur du service IA" }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });

  } catch (error) {
    console.error("Chatbot error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Erreur inconnue" }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
