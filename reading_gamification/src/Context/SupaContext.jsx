import { useState, createContext, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

export const SupaContext = createContext(null);

const supaURL = "https://wdhsblcbpdlovrfqloqi.supabase.co";
const supaKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkaHNibGNicGRsb3ZyZnFsb3FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAwNjAxNzQsImV4cCI6MjAyNTYzNjE3NH0.-yYvrqwuQJmDLW6qwN0lV5LZHdvC6H-iUBMKRs3mbKI";

export const SupaContextProvider = ({ children }) => {
  const supabase = createClient(supaURL, supaKey);
  return (
    <SupaContext.Provider value={{ supabase }}>{children}</SupaContext.Provider>
  );
};
