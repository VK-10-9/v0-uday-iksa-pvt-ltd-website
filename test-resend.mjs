import { Resend } from 'resend';
const resend = new Resend('re_J1w4YNFN_JMpMkD52iYKoScwXKtxBMxqU');
(async function() {
  const result = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['contact@udayiksa.com'],
    subject: `New Lead: Test from City`,
    html: `<h2>New Enquiry Received!</h2>`
  });
  console.log(JSON.stringify(result));
})();
