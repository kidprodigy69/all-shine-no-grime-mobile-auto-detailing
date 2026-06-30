
CREATE TABLE IF NOT EXISTS all_shine_no_grime_mobile_auto_detailing_contact_submissions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz DEFAULT now(),
  name text NOT NULL, phone text, email text, message text,
  status text DEFAULT 'pending'
);
ALTER TABLE all_shine_no_grime_mobile_auto_detailing_contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert" ON all_shine_no_grime_mobile_auto_detailing_contact_submissions
  FOR INSERT WITH CHECK (true);
