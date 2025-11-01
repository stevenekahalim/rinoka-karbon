// PT Rinoka Karbon Indonesia - Backend Server
// Handles contact form submissions and sends emails

require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

console.log('✅ Supabase client initialized');

// Middleware
app.use(cors()); // Allow frontend to communicate with backend
app.use(express.json()); // Parse JSON data from frontend
app.use(express.static('.')); // Serve frontend files

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // Your Gmail address (from .env)
    pass: process.env.EMAIL_PASS   // Your Gmail app password (from .env)
  }
});

// Test email configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.log('❌ Email configuration error:', error);
  } else {
    console.log('✅ Email server is ready to send messages');
  }
});

// API endpoint: Handle contact form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  console.log('📧 New contact form submission:', { name, email });

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please fill in all required fields'
    });
  }

  // Save to Supabase database
  try {
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name: name,
          email: email,
          phone: phone || null,
          message: message,
          ip_address: req.ip,
          user_agent: req.get('user-agent')
        }
      ])
      .select();

    if (error) {
      console.error('❌ Error saving to database:', error);
      return res.status(500).json({
        success: false,
        message: 'Error saving your message to database'
      });
    }

    console.log('✅ Data saved to Supabase:', data[0].id);
  } catch (dbError) {
    console.error('❌ Database error:', dbError);
    return res.status(500).json({
      success: false,
      message: 'Database error occurred'
    });
  }

  // Email content sent to you
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Send to yourself
    subject: `🔔 New Contact from Rinoka Website: ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5;">
        <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px;">
          <h2 style="color: #00ff88; border-bottom: 2px solid #00ff88; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #333;">Name:</strong><br/>
              <span style="color: #666;">${name}</span>
            </p>

            <p style="margin: 10px 0;">
              <strong style="color: #333;">Email:</strong><br/>
              <a href="mailto:${email}" style="color: #00ff88;">${email}</a>
            </p>

            ${phone ? `
            <p style="margin: 10px 0;">
              <strong style="color: #333;">Phone:</strong><br/>
              <span style="color: #666;">${phone}</span>
            </p>
            ` : ''}

            <p style="margin: 10px 0;">
              <strong style="color: #333;">Message:</strong><br/>
              <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
                ${message.replace(/\n/g, '<br/>')}
              </div>
            </p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #999; font-size: 12px;">
            Sent from: rinoka-karbon.com contact form<br/>
            Time: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })} WIB
          </div>
        </div>
      </div>
    `
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully to', process.env.EMAIL_USER);

    res.json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.'
    });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Rinoka backend is running!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Rinoka backend server running on http://localhost:${PORT}`);
  console.log(`📧 Email configured for: ${process.env.EMAIL_USER || 'NOT SET'}`);
});
