/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required) - Customer's full name
      - `email` (text, required) - Customer's email address
      - `phone` (text, required) - Customer's phone number
      - `subject` (text, required) - Inquiry subject
      - `message` (text, required) - Detailed message from customer
      - `created_at` (timestamptz) - When the submission was created
      - `status` (text) - Submission status (new, contacted, resolved)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for public insert (anyone can submit a contact form)
    - Add policy for authenticated admin users to view submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);