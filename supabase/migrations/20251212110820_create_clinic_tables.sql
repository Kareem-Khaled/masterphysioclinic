/*
  # Create Physiotherapy Clinic Tables

  1. New Tables
    - `appointments`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `phone` (text, required)
      - `service` (text, required)
      - `preferred_date` (date)
      - `message` (text)
      - `status` (text, default 'pending')
      - `created_at` (timestamptz)
    
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `phone` (text, required)
      - `service_interest` (text)
      - `message` (text, required)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Allow public inserts only (for form submissions)
    - No public reads (admin only via service role)
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  preferred_date date,
  message text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  service_interest text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to submit appointments"
  ON appointments
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public to submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);