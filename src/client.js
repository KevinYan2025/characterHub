import {createClient} from '@supabase/supabase-js'
const URL = 'https://dwafqbduuizfbcgtsclw.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3YWZxYmR1dWl6ZmJjZ3RzY2x3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAzNzM1OTQsImV4cCI6MjAxNTk0OTU5NH0.wLv9GMH7q45B27s82PZlJOtVR-gbUSwyOFeu4C50k20'
export const supabase = createClient(URL, API_KEY);