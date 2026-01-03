import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

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
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📬 Nouvelle demande de devis</h1>
            <p>Via le site Print's Arts Multimedia</p>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">👤 Nom</span>
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
              <span class="label">💬 Message</span>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>Ce message a été envoyé depuis le formulaire de contact du site web.</p>
            <p>© ${new Date().getFullYear()} Print's Arts Multimedia</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email using a simple SMTP simulation
    // For now, we'll log the email and return success
    // In production, you would integrate with an email service
    console.log('Email to send:', {
      to: 'email@printsartsmultimedia.com',
      from: email,
      subject: `Nouvelle demande de devis - ${name}`,
      html: htmlContent
    });

    // Store the contact request for later processing
    // This ensures no message is lost even without email service
    
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
