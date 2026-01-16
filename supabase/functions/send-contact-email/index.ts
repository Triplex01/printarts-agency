import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();

    const { name, email, phone, company, service, message } = formData;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return new Response(
        JSON.stringify({ error: 'Champs obligatoires manquants' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Create HTML email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #c53030, #9b2c2c); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f7f7f7; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #c53030; margin-bottom: 5px; display: block; }
          .value { background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #c53030; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          .intro { font-size: 16px; margin-bottom: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📬 Nouvelle demande de devis reçue</h1>
            <p>Via le site Print's Arts Multimedia</p>
          </div>
          <div class="content">
            <p class="intro">Bonjour l'équipe Print's Arts Multimedia,</p>
            <p>Une nouvelle demande de devis a été soumise via le formulaire de contact de notre site web. Voici les détails :</p>
            <div class="field">
              <span class="label">👤 Nom du client</span>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <span class="label">📧 Email</span>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            ${phone ? `
            <div class="field">
              <span class="label">📞 Téléphone</span>
              <div class="value"><a href="tel:${phone}">${phone}</a></div>
            </div>
            ` : ''}
            ${company ? `
            <div class="field">
              <span class="label">🏢 Entreprise</span>
              <div class="value">${company}</div>
            </div>
            ` : ''}
            <div class="field">
              <span class="label">🎯 Service souhaité</span>
              <div class="value">${service}</div>
            </div>
            <div class="field">
              <span class="label">💬 Description du projet</span>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
            <p>Veuillez contacter le client dans les plus brefs délais pour discuter de leur projet.</p>
          </div>
          <div class="footer">
            <p>Ce message a été envoyé automatiquement depuis le formulaire de contact du site web.</p>
            <p>© ${new Date().getFullYear()} Print's Arts Multimedia - L'agence des conquérants</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email using Resend API directly
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not set');
      return new Response(
        JSON.stringify({ error: 'Configuration email manquante' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Print\'s Arts Multimedia <contact@printsartsmultimedia.com>',
        to: ['email@printsartsmultimedia.com'],
        subject: `Nouvelle demande de devis - ${name}`,
        html: htmlContent,
        reply_to: email
      })
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error('Resend API error:', errorData);
      return new Response(
        JSON.stringify({ error: 'Erreur lors de l\'envoi de l\'email' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Votre demande a été envoyée avec succès'
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ error: 'Erreur lors de l\'envoi du message' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});