import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);
const TABLE_NAME = 'planning_leads';

export async function GET() {
  try {
    const { data, error } = await supabase.from(TABLE_NAME).select('*').order('created_at', { ascending: false });
    if (error) throw error;
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Error fetching leads from Supabase:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newLead = await request.json();
    
    // Add a timestamp for ordering
    newLead.created_at = new Date().toISOString();

    // Check for duplicates before inserting (by ID)
    const { data: existingLead, error: checkError } = await supabase
      .from(TABLE_NAME)
      .select('id')
      .eq('id', newLead.id)
      .single();

    if (checkError && checkError.code !== 'PGRST116') { // PGRST116 means no rows found
      throw checkError;
    }

    if (existingLead) {
      return NextResponse.json({ success: true, message: 'Lead already exists' });
    }

    const { data, error } = await supabase.from(TABLE_NAME).insert([newLead]);
    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Error inserting lead into Supabase:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
