import { createBrowserClient } from "@supabase/ssr";

export const createClient = () =>
  createBrowserClient(
    'https://cggycnbvljcdptzyjpju.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnZ3ljbmJ2bGpjZHB0enlqcGp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA0NjI0NzAsImV4cCI6MTk5NjAzODQ3MH0.cIg2RrzebYEWwHfnWPis_nPnFbsqv4EebBVu9NyxdWw',
  );