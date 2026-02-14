import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
import 'expo-sqlite/localStorage/install';

const supabaseUrl = "https://dmehwnpsawasirosmmon.supabase.co"
const supabaseAnonKey = "sb_publishable_YkusP2xTtQD69yDd1Xdahw_SgNGSd5d"

// Table in Supabase must have RLS policy that allows read access to the data for the user. For testing purposes, set to true
// Realtime -> https://supabase.com/dashboard/project/dmehwnpsawasirosmmon/database/publications add table to supabase_realtime publication

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})