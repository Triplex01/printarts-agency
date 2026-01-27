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

// Logo URL (hosted publicly)
const LOGO_URL = 'https://vlogwdreodotajwdefpe.supabase.co/storage/v1/object/public/email-assets/printsarts-logo.png';

// Email template for the owner (notification)
const createOwnerEmailTemplate = (data: ContactFormData) => `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nouvelle demande de devis</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">
          
          <!-- Header with gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, #c53030 0%, #9b2c2c 100%); padding: 40px 30px; text-align: center;">
              <img src="${LOGO_URL}" alt="Print's Arts Multimedia" style="height: 50px; margin-bottom: 20px;" />
              <h1 style="color: #ffffff; font-size: 24px; font-weight: 700; margin: 0; letter-spacing: -0.5px;">
                📬 Nouvelle demande de devis
              </h1>
              <p style="color: rgba(255,255,255,0.9); font-size: 14px; margin: 10px 0 0 0;">
                Via le formulaire de contact
              </p>
            </td>
          </tr>
          
          <!-- Body -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
                Bonjour l'équipe Print's Arts Multimedia,
              </p>
              <p style="color: #666; font-size: 15px; line-height: 1.6; margin: 0 0 30px 0;">
                Une nouvelle demande de devis a été soumise via le formulaire de contact. Voici les détails :
              </p>
              
              <!-- Info Card -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #fafafa; border-radius: 12px; overflow: hidden;">
                <tr>
                  <td style="padding: 24px;">
                    <!-- Name -->
                    <div style="margin-bottom: 20px;">
                      <p style="color: #c53030; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0;">
                        👤 Client
                      </p>
                      <p style="color: #1a1a1a; font-size: 16px; font-weight: 600; margin: 0;">
                        ${data.name}
                      </p>
                    </div>
                    
                    <!-- Email -->
                    <div style="margin-bottom: 20px;">
                      <p style="color: #c53030; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0;">
                        📧 Email
                      </p>
                      <a href="mailto:${data.email}" style="color: #1a1a1a; font-size: 16px; text-decoration: none;">
                        ${data.email}
                      </a>
                    </div>
                    
                    ${data.phone ? `
                    <!-- Phone -->
                    <div style="margin-bottom: 20px;">
                      <p style="color: #c53030; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0;">
                        📞 Téléphone
                      </p>
                      <a href="tel:${data.phone}" style="color: #1a1a1a; font-size: 16px; text-decoration: none;">
                        ${data.phone}
                      </a>
                    </div>
                    ` : ''}
                    
                    ${data.company ? `
                    <!-- Company -->
                    <div style="margin-bottom: 20px;">
                      <p style="color: #c53030; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0;">
                        🏢 Entreprise
                      </p>
                      <p style="color: #1a1a1a; font-size: 16px; margin: 0;">
                        ${data.company}
                      </p>
                    </div>
                    ` : ''}
                    
                    <!-- Service -->
                    <div style="margin-bottom: 20px;">
                      <p style="color: #c53030; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0;">
                        🎯 Service souhaité
                      </p>
                      <span style="display: inline-block; background: linear-gradient(135deg, #c53030, #9b2c2c); color: #fff; font-size: 14px; font-weight: 500; padding: 6px 16px; border-radius: 20px;">
                        ${data.service}
                      </span>
                    </div>
                    
                    <!-- Message -->
                    <div>
                      <p style="color: #c53030; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0;">
                        💬 Message
                      </p>
                      <div style="background: #fff; border-left: 4px solid #c53030; padding: 16px; border-radius: 0 8px 8px 0;">
                        <p style="color: #333; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-line;">
                          ${data.message}
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
              
              <!-- CTA -->
              <div style="margin-top: 30px; text-align: center;">
                <a href="mailto:${data.email}?subject=Re: Demande de devis - Print's Arts Multimedia" style="display: inline-block; background: linear-gradient(135deg, #c53030 0%, #9b2c2c 100%); color: #fff; font-size: 15px; font-weight: 600; text-decoration: none; padding: 14px 32px; border-radius: 30px; box-shadow: 0 4px 16px rgba(197, 48, 48, 0.3);">
                  Répondre au client →
                </a>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background: #1a1a1a; padding: 30px; text-align: center;">
              <p style="color: #888; font-size: 13px; margin: 0 0 8px 0;">
                Ce message a été envoyé automatiquement depuis le formulaire de contact
              </p>
              <p style="color: #666; font-size: 12px; margin: 0;">
                © ${new Date().getFullYear()} Print's Arts Multimedia — L'agence des conquérants
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

// Email template for the visitor (auto-reply/acknowledgment)
const createVisitorEmailTemplate = (data: ContactFormData) => `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirmation de votre demande</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #c53030 0%, #9b2c2c 100%); padding: 50px 30px; text-align: center;">
              <img src="${LOGO_URL}" alt="Print's Arts Multimedia" style="height: 50px; margin-bottom: 24px;" />
              <h1 style="color: #ffffff; font-size: 28px; font-weight: 700; margin: 0; letter-spacing: -0.5px;">
                Merci pour votre demande ! ✨
              </h1>
              <p style="color: rgba(255,255,255,0.9); font-size: 16px; margin: 12px 0 0 0;">
                Nous avons bien reçu votre message
              </p>
            </td>
          </tr>
          
          <!-- Body -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="color: #333; font-size: 18px; line-height: 1.6; margin: 0 0 8px 0;">
                Bonjour <strong>${data.name}</strong>,
              </p>
              <p style="color: #666; font-size: 15px; line-height: 1.7; margin: 0 0 24px 0;">
                Nous vous remercions pour l'intérêt que vous portez à Print's Arts Multimedia. Votre demande concernant <strong style="color: #c53030;">${data.service}</strong> a bien été enregistrée.
              </p>
              
              <!-- Confirmation Box -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: linear-gradient(135deg, #fef2f2 0%, #fff5f5 100%); border-radius: 12px; border: 1px solid #fecaca;">
                <tr>
                  <td style="padding: 24px; text-align: center;">
                    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #c53030, #9b2c2c); border-radius: 50%; margin: 0 auto 16px auto; display: flex; align-items: center; justify-content: center;">
                      <span style="font-size: 28px;">✓</span>
                    </div>
                    <p style="color: #333; font-size: 16px; font-weight: 600; margin: 0 0 8px 0;">
                      Demande confirmée
                    </p>
                    <p style="color: #666; font-size: 14px; margin: 0;">
                      Notre équipe vous contactera dans les <strong>24 à 48 heures</strong>
                    </p>
                  </td>
                </tr>
              </table>
              
              <!-- What's next -->
              <div style="margin-top: 30px;">
                <h3 style="color: #1a1a1a; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                  Prochaines étapes :
                </h3>
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                        <tr>
                          <td style="width: 36px; vertical-align: top;">
                            <span style="display: inline-block; width: 28px; height: 28px; background: #fef2f2; border-radius: 50%; text-align: center; line-height: 28px; font-size: 14px;">1</span>
                          </td>
                          <td style="color: #555; font-size: 14px; line-height: 1.6;">
                            Nous analysons votre demande en détail
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                        <tr>
                          <td style="width: 36px; vertical-align: top;">
                            <span style="display: inline-block; width: 28px; height: 28px; background: #fef2f2; border-radius: 50%; text-align: center; line-height: 28px; font-size: 14px;">2</span>
                          </td>
                          <td style="color: #555; font-size: 14px; line-height: 1.6;">
                            Un conseiller vous contacte pour discuter de votre projet
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                        <tr>
                          <td style="width: 36px; vertical-align: top;">
                            <span style="display: inline-block; width: 28px; height: 28px; background: #fef2f2; border-radius: 50%; text-align: center; line-height: 28px; font-size: 14px;">3</span>
                          </td>
                          <td style="color: #555; font-size: 14px; line-height: 1.6;">
                            Nous vous envoyons un devis personnalisé
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
              
              <!-- Recap of message -->
              <div style="margin-top: 30px; background: #fafafa; border-radius: 12px; padding: 20px;">
                <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 12px 0;">
                  Récapitulatif de votre demande
                </p>
                <p style="color: #333; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-line;">
                  ${data.message.substring(0, 200)}${data.message.length > 200 ? '...' : ''}
                </p>
              </div>
              
              <!-- CTA -->
              <div style="margin-top: 30px; text-align: center;">
                <a href="https://printsartsmultimedia.com" style="display: inline-block; background: linear-gradient(135deg, #c53030 0%, #9b2c2c 100%); color: #fff; font-size: 15px; font-weight: 600; text-decoration: none; padding: 14px 32px; border-radius: 30px; box-shadow: 0 4px 16px rgba(197, 48, 48, 0.3);">
                  Visiter notre site →
                </a>
              </div>
            </td>
          </tr>
          
          <!-- Contact Info -->
          <tr>
            <td style="background: #fafafa; padding: 24px 30px; text-align: center; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 14px; margin: 0 0 8px 0;">
                Une question ? Contactez-nous directement :
              </p>
              <p style="margin: 0;">
                <a href="mailto:contact@printsartsmultimedia.com" style="color: #c53030; text-decoration: none; font-weight: 500;">
                  contact@printsartsmultimedia.com
                </a>
                <span style="color: #ccc; margin: 0 8px;">|</span>
                <a href="tel:+2250708788486" style="color: #c53030; text-decoration: none; font-weight: 500;">
                  +225 07 08 78 84 86
                </a>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background: #1a1a1a; padding: 30px; text-align: center;">
              <p style="color: #888; font-size: 13px; margin: 0 0 12px 0;">
                Suivez-nous sur les réseaux sociaux
              </p>
              <div style="margin-bottom: 16px;">
                <a href="https://facebook.com/printsartsmultimedia" style="display: inline-block; margin: 0 6px; color: #888; text-decoration: none;">Facebook</a>
                <span style="color: #444;">•</span>
                <a href="https://instagram.com/printsartsmultimedia" style="display: inline-block; margin: 0 6px; color: #888; text-decoration: none;">Instagram</a>
                <span style="color: #444;">•</span>
                <a href="https://linkedin.com/company/printsartsmultimedia" style="display: inline-block; margin: 0 6px; color: #888; text-decoration: none;">LinkedIn</a>
              </div>
              <p style="color: #666; font-size: 12px; margin: 0;">
                © ${new Date().getFullYear()} Print's Arts Multimedia — L'agence des conquérants
              </p>
              <p style="color: #555; font-size: 11px; margin: 8px 0 0 0;">
                Abidjan, Côte d'Ivoire
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

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

    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not set');
      return new Response(
        JSON.stringify({ error: 'Configuration email manquante' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Send notification email to owner
    const ownerEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Print\'s Arts Multimedia <contact@printsartsmultimedia.com>',
        to: ['email@printsartsmultimedia.com'],
        subject: `📬 Nouvelle demande de devis - ${name}`,
        html: createOwnerEmailTemplate(formData),
        reply_to: email
      })
    });

    if (!ownerEmailResponse.ok) {
      const errorData = await ownerEmailResponse.text();
      console.error('Resend API error (owner email):', errorData);
      return new Response(
        JSON.stringify({ error: 'Erreur lors de l\'envoi de l\'email' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Owner notification email sent successfully');

    // Send auto-reply acknowledgment email to visitor
    const visitorEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Print\'s Arts Multimedia <contact@printsartsmultimedia.com>',
        to: [email],
        subject: `✨ Confirmation de votre demande - Print's Arts Multimedia`,
        html: createVisitorEmailTemplate(formData),
        reply_to: 'contact@printsartsmultimedia.com'
      })
    });

    if (!visitorEmailResponse.ok) {
      const errorData = await visitorEmailResponse.text();
      console.error('Resend API error (visitor email):', errorData);
      // Don't fail the whole request if auto-reply fails
      console.log('Auto-reply failed but owner was notified');
    } else {
      console.log('Visitor auto-reply email sent successfully');
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Votre demande a été envoyée avec succès. Vous recevrez une confirmation par email.'
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
