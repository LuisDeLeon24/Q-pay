# Product Marketing Context

*Última actualización: 2026-07-13 — V1 autogenerado desde el código (landing, waitlist, pitch deck, metadatos). Revisa y corrige lo marcado como `[POR CONFIRMAR]`.*

## Product Overview
**One-liner:** El marketplace P2P que le da estructura a los préstamos entre personas — score, contrato digital y seguimiento en una sola app.

**Qué hace:** Q-Pay conecta a quienes prestan/invierten con quienes necesitan financiamiento y convierte un acuerdo verbal en un préstamo con condiciones claras. Documenta monto, plazo e interés, comparte la oferta por QR para que la otra parte acepte al instante, y da seguimiento automático a cada cuota. Disponible en web y app Android.

**Categoría de producto:** Fintech / préstamos P2P (peer-to-peer lending). También se puede buscar como "app para préstamos entre amigos/familia", "control de préstamos personales", "plataforma de inversión P2P".

**Tipo de producto:** Marketplace de dos lados (solicitantes ↔ inversores) sobre una plataforma tipo PaaS.

**Modelo de negocio:** Capital-light. No prestamos capital propio ni asumimos riesgo crediticio; cobramos una **comisión por cada préstamo gestionado** en la plataforma. `[POR CONFIRMAR: % de comisión]`. Vías futuras: plan premium, contratos digitales y pagos integrados.

**Etapa actual:** Pre-lanzamiento. Producto funcional (web + APK Android), backend en Supabase, waitlist de validación activa. Proyecto en el contexto de un **hackathon fintech**. `[POR CONFIRMAR: región objetivo — MX / GT / LATAM]`.

## Target Audience
**Mercado / región:** LATAM, personas que prestan o piden dinero de manera informal (familia, amigos, comunidad). `[POR CONFIRMAR: país inicial]`.

**Dos perfiles de usuario (marketplace de dos lados):**
- **Solicitante:** necesita capital rápido, sin trámites eternos, con condiciones justas a su perfil.
- **Inversor:** quiere hacer crecer su dinero con propósito, invirtiendo en personas de su comunidad con riesgo evaluado y diversificable.

**Caso de uso principal:** Formalizar y dar seguimiento a préstamos entre personas de confianza sin fricción ni burocracia bancaria.

**Jobs to be done:**
- "Ayúdame a prestar/pedir sin que se dañe la relación ni se pierda el registro."
- "Consígueme financiamiento rápido y justo sin pasar por un banco." (solicitante)
- "Haz crecer mi dinero apoyando a personas reales, con riesgo controlado." (inversor)

**Escenarios de uso:**
- Préstamo entre familiares/amigos que hoy se maneja de palabra.
- Inversor de comunidad que quiere diversificar en varios préstamos pequeños.
- Persona sin acceso a crédito formal que recurre a su círculo cercano.

## Personas
| Persona | Le importa | Su reto | Valor que prometemos |
|---------|------------|---------|----------------------|
| Solicitante | Acceso rápido y condiciones justas | Trámites eternos / rechazo bancario | Financiamiento en 24-48h con score transparente |
| Inversor | Rendimiento con propósito y riesgo controlado | No sabe a quién prestar ni cómo evaluar riesgo | Score de riesgo + portafolio diversificable en su comunidad |
| Prestamista informal (amigo/familiar) | No dañar la relación, no perder el registro | Cobrar incomoda; se olvida quién debe | Contrato digital + seguimiento automático de cuotas |

## Problems & Pain Points
**Problema central:** Prestar entre conocidos casi siempre termina mal — no hay papel, no hay fecha clara, nadie lleva la cuenta. La confianza no basta sin claridad.

**Por qué las alternativas se quedan cortas:**
- **Bancos / Sofipos:** burocracia, rechazo, no aplican al préstamo entre conocidos.
- **Apps P2P existentes:** no tienen enfoque de comunidad/confianza ni QR nativo. `[POR CONFIRMAR: competidores concretos]`.
- **Excel / WhatsApp:** no escalan, sin seguimiento ni contratos.

**Qué les cuesta:** dinero no recuperado, tiempo persiguiendo pagos, y el costo emocional de una relación tensada.

**Tensión emocional:** incomodidad de cobrar a alguien cercano, miedo a que no paguen, culpa de ser "el malvado" recordando cuotas.

## Competitive Landscape
**Directos:** Otras apps de préstamos P2P `[POR CONFIRMAR: nombres]` — se quedan cortas porque no combinan enfoque de confianza/comunidad + score + QR nativo.

**Secundarios:** Bancos y Sofipos — resuelven crédito formal pero con burocracia y sin cubrir el préstamo entre conocidos.

**Indirectos:** Excel, notas y WhatsApp — el método actual "de palabra": cero estructura, seguimiento manual, no escala.

## Differentiation
**Diferenciadores clave:**
- Enfoque en préstamos de **confianza/comunidad**, no crédito anónimo.
- **QR nativo** para compartir y aceptar ofertas al instante.
- **Score de riesgo transparente** (evaluación Smart).
- **Contratos digitales** + seguimiento automático de cuotas.
- Modelo **capital-light**: gestionamos, no prestamos → sin exposición a impago.

**Cómo lo hacemos distinto:** estandarizamos cada préstamo P2P de punta a punta (oferta → QR → contrato → seguimiento) en una sola app web + móvil.

**Por qué es mejor:** claridad total sin burocracia; la confianza sigue siendo del usuario, la estructura la pone Q-Pay.

**Por qué nos eligen:** es el único que formaliza el préstamo entre conocidos sin convertirlo en un trámite bancario.

## Objections
| Objeción | Respuesta |
|----------|-----------|
| "¿Y si no me pagan?" | Score de riesgo transparente + contrato digital vinculante + seguimiento de cuotas. `[POR CONFIRMAR: garantías/cobranza]` |
| "¿Es seguro / legal?" | Cifrado de datos, contratos que ambas partes firman, operación dentro del marco normativo vigente. |
| "Ya lo llevo en Excel/WhatsApp" | Q-Pay automatiza recordatorios, registro y aceptación por QR; no depende de tu memoria. |

**Anti-persona:** quien busca crédito formal de alto monto con una institución bancaria, o quien quiere prestar a desconocidos sin ninguna relación de confianza. `[POR CONFIRMAR]`

## Switching Dynamics
**Push (qué los aleja del método actual):** deudas olvidadas, conflictos por acuerdos verbales, incomodidad de cobrar.
**Pull (qué los atrae a Q-Pay):** registro claro, QR para compartir, score y seguimiento automático.
**Habit (qué los mantiene estancados):** "siempre lo he hecho de palabra / en WhatsApp".
**Anxiety (qué les preocupa al cambiar):** dar de alta sus datos financieros, aprender una app nueva, que la otra persona no quiera usarla. `[POR CONFIRMAR]`

## Customer Language
**Cómo describen el problema (verbatim, tomado de la encuesta de waitlist):**
- "Que no me paguen"
- "Llevar el registro"
- "Cobrar sin incomodar"
- "Tasas justas"
- "He prestado / he pedido dinero entre familia o amigos"

**Cómo describen la solución (de la copy):**
- "Presta con confianza, sin dolores de cabeza"
- "Presta e invierte entre personas, sin perseguir pagos"

**Palabras a usar:** préstamo entre personas, confianza, comunidad, sin trámites, condiciones justas, seguimiento, QR, contrato digital, score transparente.
**Palabras a evitar:** jerga bancaria pesada, "crédito" en tono institucional, tecnicismos financieros que suenen a burocracia. `[POR CONFIRMAR]`

**Glosario:**
| Término | Significado |
|---------|-------------|
| Solicitante | Usuario que pide/recibe el préstamo |
| Inversor | Usuario que presta/invierte capital |
| Score | Evaluación de riesgo transparente del perfil |
| Oferta | Préstamo propuesto (monto, plazo, interés) compartido por QR |

## Brand Voice
**Tono:** cercano y claro, con calidez humana; serio en confianza/seguridad sin sonar bancario.
**Estilo:** directo, conversacional, orientado al beneficio.
**Personalidad:** confiable, cercano, transparente, moderno, sin fricción.

## Proof Points
**Métricas:** `[POR CONFIRMAR: usuarios en waitlist, préstamos activos, volumen gestionado, MRR — hoy son placeholders en el pitch]`.
**Producto como prueba:** producto real y funcional en web + Android (no una maqueta).
**Clientes/logos:** `[POR CONFIRMAR]`
**Testimonios:** `[POR CONFIRMAR]`
**Temas de valor:**
| Tema | Prueba |
|------|--------|
| Sin dolores de cabeza | QR + seguimiento automático de cuotas |
| Confianza y transparencia | Score transparente + contratos digitales + cifrado |
| Rentable y escalable | Comisión por préstamo, costo marginal ~0 |

## Goals
**Objetivo de negocio:** validar demanda pre-lanzamiento y demostrar un modelo rentable/escalable (contexto hackathon). `[POR CONFIRMAR: meta específica]`
**Acción de conversión clave:** unirse a la waitlist (responder 3 preguntas + dejar correo); secundaria: descargar la app Android.
**Métricas actuales:** `[POR CONFIRMAR]`
