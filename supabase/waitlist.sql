-- Q-Pay · Tabla de waitlist (validación de producto)
-- Ejecuta este script en Supabase: Dashboard -> SQL Editor -> New query -> Run

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text default '',
  email text not null unique,
  role text not null default 'solicitante'
    check (role in ('solicitante', 'inversor')),
  interest text,
  experience text,
  concern text
);

-- Migración idempotente para tablas existentes
alter table public.waitlist alter column name drop not null;
alter table public.waitlist alter column name set default '';
alter table public.waitlist add column if not exists interest text;
alter table public.waitlist add column if not exists experience text;
alter table public.waitlist add column if not exists concern text;

-- Seguridad a nivel de fila
alter table public.waitlist enable row level security;

-- Permite que cualquier visitante (anon) inserte su registro,
-- pero NADIE puede leer/editar/borrar con la anon key (solo el service role del backend).
drop policy if exists "waitlist_anon_insert" on public.waitlist;
create policy "waitlist_anon_insert"
  on public.waitlist
  for insert
  to anon
  with check (true);
