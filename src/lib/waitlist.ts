import { supabase, isSupabaseConfigured } from './supabase'

export type WaitlistPayload = {
  email: string
  role: 'solicitante' | 'inversor'
  interest: string
  experience: string
  concern: string
}

export async function submitWaitlist(
  payload: WaitlistPayload
): Promise<{ ok: boolean; alreadyRegistered: boolean; error: string | null }> {
  if (!isSupabaseConfigured || !supabase) {
    return { ok: false, alreadyRegistered: false, error: 'La conexión con Supabase no está configurada.' }
  }

  const { error } = await supabase.from('waitlist').insert({
    email: payload.email.trim().toLowerCase(),
    name: '',
    role: payload.role,
    interest: payload.interest,
    experience: payload.experience,
    concern: payload.concern,
  })

  if (error) {
    if (error.code === '23505') {
      return { ok: true, alreadyRegistered: true, error: null }
    }
    return { ok: false, alreadyRegistered: false, error: 'No pudimos guardar tu respuesta. Inténtalo de nuevo.' }
  }

  return { ok: true, alreadyRegistered: false, error: null }
}
