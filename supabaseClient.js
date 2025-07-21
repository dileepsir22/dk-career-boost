import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

export const supabase = createClient(
  'https://puasmenkfqovkhbcevnj.supabase.co>.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1YXNtZW5rZnFvdmtoYmNldm5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxMTI0ODYsImV4cCI6MjA2ODY4ODQ4Nn0.fr8iOAXEd0W9Gwhcd4i7uNVe6PbuQp3Xn79cZmjVKXo'
);