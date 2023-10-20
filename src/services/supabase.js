import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kbcwkvghvparcyrtswyl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtiY3drdmdodnBhcmN5cnRzd3lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc0OTgzMjEsImV4cCI6MjAxMzA3NDMyMX0.6PaLj0p6YV5A9vvU3GbQ1SdScU1dFg0R0U2RxlcAxsQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
