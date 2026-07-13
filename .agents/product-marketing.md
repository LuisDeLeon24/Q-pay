# Product Marketing Context
 
*Última actualización: 2026-07-13 — V2. Actualizado tras sesión de mentoría de hackathon: pivote de marketplace P2P con comisión a modelo **Platform-as-a-Service (PaaS) embebido en bancas en línea**. Revisa y corrige lo marcado como `[POR CONFIRMAR]`.*
 
## Product Overview
**One-liner:** La infraestructura que le permite a cualquier banco ofrecer préstamos entre personas dentro de su propia banca en línea — sin construirla, sin asumir el riesgo crediticio, y adquiriendo clientes nuevos a costo marginal casi cero.
 
**Qué hace:** Q-Pay es un módulo de software (PaaS) que los bancos y Sofipos integran en su banca en línea para que sus clientes puedan ofrecer o pedir préstamos entre personas de su círculo de confianza. Documenta monto, plazo e interés, comparte la oferta por QR para aceptación instantánea, calcula un score de riesgo transparente, y da seguimiento automático a cada cuota — todo dentro del riel del banco. El dinero se mueve de cuenta a cuenta dentro de la institución financiera; Q-Pay nunca custodia fondos.
 
**Categoría de producto:** Fintech infrastructure / Banking-as-a-Service para préstamos P2P. También se puede buscar como "PaaS para bancos", "módulo de préstamos entre personas para banca en línea", "infraestructura de originación P2P".
 
**Tipo de producto:** Platform-as-a-Service (B2B2C) — se vende e integra a instituciones financieras (banco/Sofipo = cliente), quienes lo exponen a sus propios usuarios finales (solicitantes e inversores).
 
**Modelo de negocio:** Capital-light y **sin intermediación financiera**. Q-Pay no presta capital propio, no custodia fondos y no asume riesgo crediticio — el dinero siempre se mueve entre cuentas dentro del banco. El revenue viene de **reducir el costo de adquisición de clientes nuevos (CAC) para el banco**, no de una comisión al usuario final. `[POR CONFIRMAR: estructura exacta del fee — ver sección Goals]`.
 
**Etapa actual:** Pre-lanzamiento / pivote de modelo. Producto funcional (web + APK Android) construido originalmente como marketplace directo; en proceso de repensarse como módulo embebible para bancos. Backend en Supabase. Proyecto en contexto de **hackathon fintech** (criterios de evaluación: Oportunidad 30%, Innovación 30%, Viabilidad técnica 25%, Pitch 15%). `[POR CONFIRMAR: región objetivo — MX / GT / LATAM]`.
 
## Target Audience
 
### Cliente (quien paga — B2B)
**Bancos y Sofipos** que quieren:
- Reducir su costo de adquisición de clientes nuevos.
- Ofrecer un producto diferenciador de préstamos P2P sin construirlo internamente.
- Abrir un canal de crecimiento basado en referidos de confianza, no en publicidad tradicional.
### Usuario final (quien usa el producto dentro de la banca en línea del banco)
**Mercado / región:** LATAM, personas que prestan o piden dinero de manera informal (familia, amigos, comunidad), ahora como clientes o clientes potenciales de un banco. `[POR CONFIRMAR: país inicial]`.
 
**Dos perfiles:**
- **Solicitante:** necesita capital rápido, sin trámites eternos, con condiciones justas a su perfil. Puede ser cliente nuevo del banco (invitado) o cliente existente.
- **Inversor:** quiere hacer crecer su dinero con propósito, invirtiendo en personas de su comunidad con riesgo evaluado y diversificable, ya siendo cliente del banco.
**Caso de uso principal:** Formalizar y dar seguimiento a préstamos entre personas de confianza sin fricción, banca ni burocracia adicional — y para el banco, convertir esa red de confianza en adquisición de clientes nuevos.
 
**Jobs to be done:**
- *Del banco:* "Ayúdame a adquirir clientes nuevos a un costo menor que marketing/sucursales tradicional."
- *Del usuario solicitante:* "Consígueme financiamiento rápido y justo sin pasar por el proceso bancario tradicional." (aunque termine siendo cliente del banco)
- *Del usuario inversor:* "Haz crecer mi dinero apoyando a personas reales, con riesgo controlado, dentro de mi propio banco."
- *Del prestamista informal:* "Ayúdame a prestar/pedir sin que se dañe la relación ni se pierda el registro."
**Escenarios de uso:**
- Un cliente del banco quiere prestarle a un familiar que **no** tiene cuenta en ese banco → para aceptar el préstamo, el familiar abre cuenta → el banco adquiere un cliente nuevo con CAC marginal.
- Inversor cliente del banco que quiere diversificar en varios préstamos pequeños dentro de su comunidad, usando la app del banco que ya usa a diario.
- Persona sin acceso a crédito formal que recurre a su círculo cercano y, en el proceso, entra al sistema bancario formal.
## Personas
| Persona | Le importa | Su reto | Valor que prometemos |
|---------|------------|---------|----------------------|
| **Banco / Sofipo (cliente B2B)** | Reducir CAC, crecer base de clientes, diferenciarse sin invertir en desarrollo propio | Adquisición de clientes es cara; construir un módulo P2P internamente es lento y caro | Módulo plug-in que convierte a la red de confianza de sus clientes en nuevos clientes, a costo marginal bajo |
| Solicitante | Acceso rápido y condiciones justas | Trámites eternos / rechazo bancario | Financiamiento en 24-48h con score transparente, dentro de una app bancaria en la que ya confía |
| Inversor | Rendimiento con propósito y riesgo controlado | No sabe a quién prestar ni cómo evaluar riesgo | Score de riesgo + portafolio diversificable en su comunidad, dentro de su banco |
| Prestamista informal (amigo/familiar) | No dañar la relación, no perder el registro | Cobrar incomoda; se olvida quién debe | Contrato digital + seguimiento automático de cuotas |
 
## Problems & Pain Points
 
**Problema central (banco):** Adquirir clientes nuevos es caro y cada vez más difícil por canales tradicionales (marketing, sucursales, referidos no estructurados). Los bancos no tienen forma de capitalizar la red de confianza que ya existe entre sus propios clientes y las personas de su círculo.
 
**Problema central (usuario):** Prestar entre conocidos casi siempre termina mal — no hay papel, no hay fecha clara, nadie lleva la cuenta. La confianza no basta sin claridad.
 
**Por qué las alternativas se quedan cortas:**
- **Construir internamente:** los bancos podrían construir su propio módulo P2P, pero es lento, caro, y no es su core business.
- **Marketing tradicional / adquisición pagada:** CAC alto y creciente, sin aprovechar las redes de confianza existentes.
- **Marketplaces P2P independientes (modelo anterior de Q-Pay y competidores):** requieren que el usuario confíe en una fintech nueva con su dinero, y suelen caer en regulación de intermediación financiera.
- **Excel / WhatsApp:** no escalan, sin seguimiento ni contratos, y no generan ningún valor de adquisición para nadie.
**Qué les cuesta:**
- *Al banco:* CAC alto, oportunidad perdida de convertir redes de confianza en clientes.
- *Al usuario:* dinero no recuperado, tiempo persiguiendo pagos, costo emocional de una relación tensada.
**Tensión emocional (usuario):** incomodidad de cobrar a alguien cercano, miedo a que no paguen, culpa de ser "el malo" recordando cuotas.
 
## Competitive Landscape
 
**Directos:** Proveedores de infraestructura/BaaS para bancos `[POR CONFIRMAR: nombres]` — se quedan cortos porque no tienen un módulo específico de préstamos P2P con enfoque de confianza/comunidad + score + QR nativo.
 
**Secundarios:** Marketplaces P2P independientes (incluyendo el modelo anterior de Q-Pay) — resuelven el préstamo entre conocidos pero requieren que el usuario confíe en una fintech nueva y suelen enfrentar mayor carga regulatoria por intermediar fondos.
 
**Indirectos:**
- Canales de adquisición tradicionales de los bancos (marketing pagado, sucursales, programas de referidos genéricos) — más caros y menos dirigidos.
- Excel, notas y WhatsApp — el método actual "de palabra" entre personas: cero estructura, no genera ningún valor para el banco.
## Differentiation
 
**Diferenciadores clave:**
- **Modelo PaaS embebido**, no marketplace independiente: se integra directo en la banca en línea existente del banco.
- **Sin intermediación financiera**: el dinero se mueve banco-a-banco, Q-Pay nunca custodia fondos ni asume riesgo crediticio → carga regulatoria mucho menor.
- **Revenue alineado al banco**: cobramos por reducir su CAC, no una comisión que compite con el interés de sus propios clientes.
- **QR nativo** para compartir y aceptar ofertas al instante, dentro de la app que el usuario ya usa.
- **Score de riesgo transparente** (evaluación Smart).
- **Contratos digitales** + seguimiento automático de cuotas, potencialmente con firma electrónica / blockchain para reforzar validez. `[POR CONFIRMAR: si se implementa blockchain o solo firma electrónica]`
**Cómo lo hacemos distinto:** en vez de competir con los bancos por el usuario, nos volvemos su infraestructura — convertimos la confianza que ya existe entre las personas en un canal de adquisición medible y de bajo costo para la institución financiera.
 
**Por qué es mejor:** el banco no necesita construir nada, no asume riesgo regulatorio adicional, y convierte un comportamiento que ya ocurre informalmente (prestarse entre conocidos) en clientes nuevos.
 
**Por qué nos eligen (banco):** es el único módulo que convierte préstamos P2P informales en adquisición de clientes, sin que el banco tenga que intermediar el riesgo ni construir la tecnología.
 
## Objections
 
| Objeción | Respuesta |
|----------|-----------|
| "¿Esto no es intermediación financiera?" | No — Q-Pay no custodia fondos ni asume riesgo de crédito; el dinero se mueve entre cuentas dentro del propio banco. Q-Pay provee el software (score, contrato, QR, seguimiento). |
| "¿Por qué un banco nos pagaría por esto en vez de hacerlo ellos mismos?" | Construirlo internamente es lento y caro y no es su core business; Q-Pay lo entrega listo para integrar, con menor time-to-market. |
| "¿Cómo se mide realmente la reducción de CAC?" | `[POR CONFIRMAR: métrica exacta — ej. costo por cliente nuevo adquirido vía Q-Pay vs. costo por cliente adquirido por canales tradicionales del banco]` |
| "¿Y si el invitado ya es cliente del banco?" | `[POR CONFIRMAR: mecánica de revenue cuando no hay adquisición de cliente nuevo — ¿se cobra igual por engagement/retención?]` |
| "¿Es seguro / legal integrar esto a mi banca en línea?" | Cifrado de datos, contratos que ambas partes firman, operación diseñada para no intermediar fondos y respetar el marco normativo vigente. `[POR CONFIRMAR: marco regulatorio específico revisado]` |
 
**Anti-persona:** bancos sin banca en línea o sin capacidad de integración técnica; usuarios finales que buscan crédito formal de alto monto directamente con una institución, sin relación de confianza previa con quien presta. `[POR CONFIRMAR]`
 
## Switching Dynamics
 
**Push (qué aleja al banco del status quo):** CAC creciente, canales de adquisición saturados, presión por diferenciarse digitalmente sin invertir en desarrollo propio.
 
**Pull (qué atrae al banco a Q-Pay):** adquisición de clientes a costo marginal bajo, producto diferenciador listo para integrar, sin asumir riesgo de intermediación.
 
**Habit (qué mantiene al banco estancado):** procesos de adquisición tradicionales ya presupuestados y "conocidos", resistencia a integrar módulos de terceros.
 
**Anxiety (qué le preocupa al banco al cambiar):** seguridad de la integración, cumplimiento regulatorio, dependencia de un proveedor externo (Q-Pay) para una función de crecimiento. `[POR CONFIRMAR]`
 
**Push/Pull/Habit/Anxiety (usuario final):** se mantienen similares al modelo anterior — deudas olvidadas, conflictos por acuerdos verbales, incomodidad de cobrar, registro claro vía QR y seguimiento automático, hábito de "hacerlo de palabra", ansiedad de dar de alta datos financieros.
 
## Customer Language
 
**Cómo describe el problema el usuario final (verbatim, de la encuesta de waitlist):**
- "Que no me paguen"
- "Llevar el registro"
- "Cobrar sin incomodar"
- "Tasas justas"
- "He prestado / he pedido dinero entre familia o amigos"
**Cómo describir la propuesta al banco (nuevo, a desarrollar):**
- `[POR CONFIRMAR: copy B2B — ej. "Convierte la confianza de tus clientes en tu canal de adquisición más barato"]`
**Cómo describe la solución el usuario final (de la copy existente):**
- "Presta con confianza, sin dolores de cabeza"
- "Presta e invierte entre personas, sin perseguir pagos"
**Palabras a usar (B2C, dentro de la app del banco):** préstamo entre personas, confianza, comunidad, sin trámites, condiciones justas, seguimiento, QR, contrato digital, score transparente.
 
**Palabras a usar (B2B, hacia el banco):** costo de adquisición, canal de crecimiento, plug-in / módulo embebido, sin intermediación financiera, riesgo regulatorio reducido, time-to-market.
 
**Palabras a evitar:** jerga bancaria pesada hacia el usuario final, "crédito" en tono institucional, tecnicismos financieros que suenen a burocracia; hacia el banco, evitar sonar como "otro marketplace fintech más" — el mensaje debe ser infraestructura, no competencia. `[POR CONFIRMAR]`
 
**Glosario:**
| Término | Significado |
|---------|-------------|
| Cliente (B2B) | El banco o Sofipo que integra el módulo Q-Pay |
| Usuario (B2C) | Solicitante o inversor dentro de la banca en línea del banco |
| Solicitante | Usuario que pide/recibe el préstamo |
| Inversor | Usuario que presta/invierte capital |
| Score | Evaluación de riesgo transparente del perfil |
| Oferta | Préstamo propuesto (monto, plazo, interés) compartido por QR |
| CAC | Costo de adquisición de cliente — métrica central del pitch de valor al banco |
| MVT | Minimum Viable Traction — tracción mínima demostrable, más allá de solo tener un MVP |
 
## Brand Voice
 
**Tono (hacia usuario final, B2C):** cercano y claro, con calidez humana; serio en confianza/seguridad sin sonar bancario.
 
**Tono (hacia banco, B2B):** directo, orientado a métricas y ROI (CAC, time-to-market, riesgo regulatorio), sin perder cercanía — "hablamos su idioma de negocio, no solo el de producto."
 
**Estilo:** directo, conversacional, orientado al beneficio.
 
**Personalidad:** confiable, cercano, transparente, moderno, sin fricción.
 
## Proof Points
 
**Métricas:** `[POR CONFIRMAR: usuarios en waitlist, préstamos activos, volumen gestionado — hoy son placeholders en el pitch. Para el nuevo modelo, definir también: CAC estimado tradicional del banco vs. CAC proyectado vía Q-Pay]`.
 
**Producto como prueba:** producto real y funcional en web + Android (construido originalmente como marketplace directo; pendiente adaptar la arquitectura al modelo embebido/PaaS). `[POR CONFIRMAR: qué tan lista está la integración técnica tipo API/SDK para bancos]`
 
**Clientes/logos:** `[POR CONFIRMAR — ningún banco piloto confirmado aún]`
 
**Testimonios:** `[POR CONFIRMAR]`
 
**Temas de valor:**
| Tema | Prueba |
|------|--------|
| Reduce CAC del banco | Adquisición de clientes nuevos vía red de confianza, no publicidad paga |
| Sin riesgo de intermediación | El dinero se mueve banco-a-banco; Q-Pay solo provee software |
| Sin dolores de cabeza (usuario final) | QR + seguimiento automático de cuotas |
| Confianza y transparencia | Score transparente + contratos digitales + cifrado |
| Rentable y escalable | Fee ligado a adquisición/uso, costo marginal ~0 para Q-Pay |
 
## Goals
 
**Objetivo de negocio:** validar el nuevo modelo PaaS/B2B2C pre-lanzamiento y demostrar viabilidad de reducción de CAC para bancos (contexto hackathon, ponderando fuerte los criterios de Oportunidad e Innovación). `[POR CONFIRMAR: meta específica — ej. carta de intención de un banco piloto, proyección de CAC]`
 
**Acción de conversión clave (B2B, nueva prioridad):** conseguir una conversación / carta de intención con un banco o Sofipo piloto. `[POR CONFIRMAR: proceso de acercamiento a bancos]`
 
**Acción de conversión secundaria (B2C, se mantiene):** unirse a la waitlist (responder 3 preguntas + dejar correo); descargar la app Android como prueba de concepto del producto subyacente.
 
**Estructura de revenue a definir:** `[POR CONFIRMAR — opciones sobre la mesa: (a) fee variable por cliente nuevo adquirido para el banco vía Q-Pay, (b) fee de licencia/SaaS mensual por integración activa, (c) modelo híbrido: setup fee bajo + variable por adquisición, para alinear incentivos con el banco]`
 
**Preguntas abiertas de la mentoría, aún sin resolver:**
- Cómo asegurar los pagos / beneficios exactos que se comunican en el pitch.
- Mecanismo concreto de validación del modelo (piloto, LOI, encuesta a bancos).
- Marco regulatorio específico a revisar antes del pitch final.
- Definición precisa de "usuario ideal" vs. "cliente ideal" y el valor agregado de cada uno (parcialmente resuelto en este documento: cliente = banco, usuario = solicitante/inversor — falta profundizar el valor agregado diferenciado).
 