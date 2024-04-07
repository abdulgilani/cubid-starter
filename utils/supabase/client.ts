import { createBrowserClient } from "@supabase/ssr";

export const createClient = () =>
  createBrowserClient(
   'https://gcqrpwugnwuprqbbleay.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjcXJwd3Vnbnd1cHJxYmJsZWF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwMDEzMTMsImV4cCI6MjAyNzU3NzMxM30.OyhO-x42brB6bha_l4Fen6h-RxrItSvP5IM7ug9f8ag',
  );