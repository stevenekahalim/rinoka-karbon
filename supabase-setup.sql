-- Rinoka Karbon - Contact Form Database Table
-- Run this SQL in Supabase SQL Editor

CREATE TABLE contacts (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  company TEXT,
  message TEXT NOT NULL,
  ip_address TEXT,
  user_agent TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_contacts_email ON contacts(email);
CREATE INDEX idx_contacts_submitted_at ON contacts(submitted_at DESC);

-- Enable Row Level Security (RLS) - Important for security!
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Policy: Allow backend to insert (using service_role key)
-- For now, we'll use service_role key in backend, so no RLS policies needed
-- In production, you'd create specific policies

-- Add comment to table
COMMENT ON TABLE contacts IS 'Contact form submissions from Rinoka Karbon website';
