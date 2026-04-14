
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://dqmcvrqvmwdmlpfgzfjt.supabase.co'
const supabaseKey = 'sb_publishable_xizraR4W8X3wZnQ8Mxiaaw_Eo7gB870'
export const supabase = createClient(supabaseUrl, supabaseKey)