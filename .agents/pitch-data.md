# Q-Pay — Datos para el Pitch Deck (con fuentes)

*Investigación: 2026-07-13. Mercado objetivo: **Guatemala** (mercado inicial) + expansión Centroamérica.*

Este documento reúne datos reales y sus fuentes para reemplazar los placeholders `[EDITAR: ...]` del pitch en [public/pitch/index.html](../public/pitch/index.html).

> **Advertencia de uso.** Los valores de **mercado (TAM/SAM/SOM)** y **CAC vía Q-Pay** son *estimaciones bottom-up y benchmarks*, no cifras medidas de Guatemala. Abajo está el cálculo y el supuesto de cada uno para que puedas defenderlos o ajustarlos. Preséntalos como "estimación propia con fuentes", no como dato oficial.

---

## 1. Resumen: qué poner en cada placeholder

| Slide | Placeholder actual | Valor sugerido | Tipo |
|-------|--------------------|----------------|------|
| Mercado — TAM | `[EDITAR: $XXB]` | **~US$300 M / año** (préstamos informales entre personas en Centroamérica; Guatemala ~US$100 M) | Estimación bottom-up |
| Mercado — SAM | `[EDITAR: $XXB]` | **~US$40 M / año** (gasto en adquisición de clientes de bancos + fintechs en Guatemala) | Estimación bottom-up |
| Mercado — SOM | `[EDITAR: $XXM]` | **~US$2 M ARR en 3 años** (5–6 instituciones en GT + primeras de CA) | Estimación bottom-up |
| Modelo negocio — fee | `[EDITAR: estructura de fee]` | **Híbrido: SaaS mensual + fee por cliente nuevo adquirido** | Recomendación (benchmark BaaS) |
| Modelo negocio — CAC | `[EDITAR: $XX] → [EDITAR: $X]` | **~US$150 → ~US$15** (10× más barato) | Benchmark (no medido en GT) |

Datos de contexto fuertes para "¿Por qué ahora?" y Tracción:
- **62% de adultos sin cuenta financiera** en Guatemala (solo 38% incluida).
- **US$21,510 M en remesas** en 2024 (19% del PIB) — dinero moviéndose entre personas.
- **20.6 M de conexiones móviles** (113% de la población); 60% de penetración de internet.
- **Solo 8.3% de hogares** usa préstamos de familiares/amigos a nivel nacional, pero **hasta 23.8%** en departamentos como San Marcos → comportamiento real y concentrado.

---

## 2. Detalle por métrica

### TAM — Volumen de préstamos informales entre personas

**Qué es:** tamaño del comportamiento que Q-Pay digitaliza (prestar/pedir entre familia, amigos y comunidad).

**Cálculo bottom-up (Guatemala):**
- Hogares en Guatemala: ~4.05 M (17.84 M población / 4.4 personas por hogar).
- Hogares que piden prestado a familiares/amigos al año: **8.3%** → ~336,000 hogares/año.
- Monto promedio de préstamo informal: **~US$128** (Q1,000, préstamo de emergencia documentado).
- Piso: 336,000 × US$128 ≈ **US$43 M/año**.
- Con monto mixto (emergencia + préstamos mayores de prestamistas, hasta ~US$1,920): rango **US$43 M – US$135 M/año**.

**Extensión a Centroamérica:** población CA ~50 M vs 17.8 M de GT (~2.8×) → **~US$150 M – US$375 M/año**. Cifra headline redondeada: **~US$300 M**.

**Fuentes:**
- Hogares con préstamo de familiares/amigos (8.3% nacional; 23.8% San Marcos): *Evolución de la Inclusión Financiera en Guatemala 2013–2024* — https://doi.org/10.36958/sep.v8i2.351
- Estructura del crédito de hogares (15% con crédito; 12% informal): *SIINSAN/SESAN Tomo 4* — https://portal.siinsan.gob.gt/wp-content/uploads/Tomo-4.-Medios-de-vida-y-migracion.pdf
- Monto e interés de préstamos informales (~Q1,000; 20–50% moneylenders): *ConsumerCentrix – Guatemala Assessment* — https://consumercentrix.com/wp-content/uploads/2026/02/Guatemala-Assessment.pdf
- Población / hogares: *INE Guatemala* y *SEGEPLAN 2024* (17.84 M hab.) — https://www.ine.gob.gt/proyecciones/

### SAM — Gasto de bancos y fintechs en adquisición de clientes (lo que Q-Pay monetiza)

**Qué es:** el mercado que Q-Pay realmente cobra: lo que las instituciones gastan por adquirir clientes nuevos.

**Cálculo bottom-up (Guatemala):**
- El sistema (18 bancos + ~47 fintechs) adquiere del orden de **~1 M de clientes/usuarios nuevos al año** (Guatemala es el mayor mercado de usuarios fintech de CA con 6.3 M de usuarios de pagos digitales y crecimiento de +23.9% en productos financieros digitales en 2025).
- CAC combinado (tradicional + digital) razonable para la región: **~US$30–50** por cliente.
- 1 M × US$40 ≈ **US$40 M/año**.

**Fuentes:**
- 6.3 M usuarios de pagos digitales; fintech +23.9% en 2025; 47 fintechs: *Fintech News America* — https://fintechnews.am/guatemala/46962/fintech-in-guatemala/ ; *Prensa Libre (119 fintech, def. amplia)* — https://www.prensalibre.com/economia/que-es-una-fintech-cuantas-hay-en-guatemala-y-como-ganan-dinero/
- Mercado de pagos digitales GT US$12.7 B (2025): *US ITA vía The Fintech Times* — https://thefintechtimes.com/the-fintech-landscape-of-central-america-guatemala-in-2026/
- Benchmarks CAC (ver sección CAC abajo).

### SOM — Clientes alcanzables en 3 años (ARR capturable)

**Qué es:** lo que Q-Pay puede capturar realista en 3 años.

**Cálculo bottom-up:**
- Universo GT: **18 bancos** + **~47 fintechs** + wallets (Tigo Money, Fri, Yolo, Paggo, Osmo).
- Meta realista 3 años: **5–6 instituciones** integradas (GT + primeras de CA).
- ACV (valor anual por cliente) según benchmark BaaS/SaaS: fee de plataforma US$1k–25k/mes + fee por adquisición → **~US$150k–300k/institución/año** a escala.
- 5–6 × ~US$300k ≈ **~US$1.5–2 M ARR**. Headline: **~US$2 M ARR**.

**Fuentes:**
- 18 bancos en Guatemala (5 mayores = 78% de activos): *PCR Pacific Credit Rating* — https://ratingspcr.com.mx/ww2/guatemala-sector-bancos/ ; *Banguat – Participantes SIPA* — https://banguat.gob.gt/sites/default/files/banguat/Publica/SPagos/Participantes_SIPA.pdf
- Wallet Fri conectada a 6 bancos (G&T, Industrial, Banrural, Promerica, Interbanco, MiCoope): *Fintech News America* (arriba).
- Bancos Centroamérica (expansión): Costa Rica 14 (*FRED* — https://fred.stlouisfed.org/series/CRIFCIODCNUM), Panamá 66 (*World Bank* — https://documents1.worldbank.org/curated/en/099040424151021308/txt/P179962143f93d0531a2901588726639e71.txt).
- Benchmarks de pricing BaaS (ACV): ver sección Fee abajo.

### CAC — Tradicional vs. vía Q-Pay

**Línea del slide:** "CAC tradicional del banco **~US$150** → CAC vía Q-Pay **~US$15**".

**Base (benchmarks, no medido en GT):**
- Bancos tradicionales: **US$150–350** por cliente (*YouYaa 2024*). Banca retail-consumidor EEUU: US$561; banco digital: US$290 (*First Page Sage*).
- Neobancos / digital: **US$5–15** por cliente (*YouYaa 2024*).
- LATAM es la región con menor costo: CPI apps fintech **US$0.50–2.00**; CAC "fully-loaded" 2–3× el CPI (*Business of Apps*, *Adapty*).
- Q-Pay adquiere por **red de confianza / referido** (un usuario invita a otro para aceptar el préstamo), lo que se ubica en el rango bajo (neobanco + referido) → **~US$15**.

**Fuentes:**
- *YouYaa – Traditional Banks vs Neobanks CAC 2024* — https://youyaa.com/evolution-of-customer-acquisition-costs-traditional-banks-vs-neobanks-in-2024/
- *First Page Sage – Average CAC in Banking* — https://firstpagesage.com/seo-blog/average-customer-acquisition-cost-cac-in-banking/
- *Business of Apps – App User Acquisition Costs 2025* — https://www.businessofapps.com/marketplace/user-acquisition/research/user-acquisition-costs/
- *Adapty – CAC Benchmarks* — https://adapty.io/blog/customer-acquisition-cost/

---

## 3. Estructura de fee recomendada (placeholder del modelo de negocio)

**Recomendación: modelo híbrido**, estándar en Banking-as-a-Service:
1. **Fee SaaS mensual de plataforma** por integración activa (predecible para Q-Pay).
2. **Fee variable por cliente nuevo adquirido** vía Q-Pay (alinea incentivos: Q-Pay gana cuando el banco ahorra CAC).
3. (Opcional) **Setup fee** bajo de integración.

**Benchmarks BaaS/SaaS que lo respaldan:**
- Fee de plataforma: **US$1,000–25,000/mes**; por cuenta activa: **US$1–5/mes**; setup **US$0–50,000**.
- 31% de las empresas SaaS ya usan pricing híbrido (suscripción + consumo).
- Objetivo de unit economics: **LTV:CAC ≥ 3:1**, payback < 12 meses.

**Fuentes:**
- *Finantrix – What is BaaS* — https://www.finantrix.com/articles/what-is-banking-as-a-service-baas-sponsor-bank-vs-fintech-roles
- *Crassula – BaaS Providers 2026* — https://crassula.io/guides/baas-providers/
- *Phoenix Strategy Group – Unit Economics of BaaS* — https://www.phoenixstrategy.group/blog/unit-economics-banking-as-a-service
- *Zylo – Consumption-Based Pricing (High Alpha 2025 benchmark)* — https://zylo.com/blog/consumption-based-pricing-saas

---

## 4. Datos de contexto (para "¿Por qué ahora?", Mercado y Tracción)

| Dato | Valor | Fuente |
|------|-------|--------|
| Adultos con cuenta financiera (GT) | **38%** (62% sin cuenta) | Global Findex 2025 (datos 2024) — https://www.findevgateway.org/region/financial-inclusion-latin-america-and-caribbean |
| Adultos con préstamo bancario | 15.9% (2024) | Evolución Inclusión Financiera GT — https://doi.org/10.36958/sep.v8i2.351 |
| Hogares sin garantías formales | 56.1% | Plaza Pública / mismo estudio — https://wp2.plazapublica.com.gt/seccion/articulo/inclusion-financiera-en-guatemala-avances-medibles-y-desigualdades-que-persisten/ |
| Remesas 2024 | **US$21,510 M** (19% del PIB; +8.6%) | Banco de Guatemala — https://banguat.gob.gt/sites/default/files/banguat/estaeco/remesas/remfam2002_2024_12.htm |
| Conexiones móviles | 20.65 M (113% de la población) | DataReportal Digital 2024 GT — https://datareportal.com/reports/digital-2024-guatemala |
| Usuarios de internet | 10.99 M (60.3%) | DataReportal Digital 2024 GT — (arriba) |
| Población total / 15+ | 17.84 M / 12.0 M | SEGEPLAN 2024; INE ENEIC IV-2024 — https://www.ine.gob.gt/wp-content/uploads/2025/06/ENEIC-IV-2024.pdf |
| Usuarios de pagos digitales (GT, #1 en CA) | 6.3 M | Fintech News America — https://fintechnews.am/guatemala/46962/fintech-in-guatemala/ |
| Mercado de pagos digitales GT | US$12.7 B (2025) | US ITA / The Fintech Times — https://thefintechtimes.com/the-fintech-landscape-of-central-america-guatemala-in-2026/ |
| Bancos en Guatemala | 18 (5 mayores = 78% activos) | PCR — https://ratingspcr.com.mx/ww2/guatemala-sector-bancos/ |
| Fintechs en Guatemala | 47 (gremio) / ~50 (Tracxn) / 119 (def. amplia) | Fintech News America; Prensa Libre |

---

## 5. Placeholders que NO se pueden investigar (los defines tú)

Estos dependen de ti y del roadmap, no de investigación externa:
- **Bios del equipo** (Luis De León, Gabriel Hurtarte) — línea 414 y 420 del pitch.
- **Métricas reales de tracción** — hoy: ~100 en waitlist. Actualiza si hay más.
- **Metas de roadmap** (adopción/usuarios Q2, meta de piloto Q3, mercado #2 y partnerships Q4).
- **Estructura de fee final** — la recomendación de arriba es un punto de partida; el número exacto lo decides tú.

---

## 6. Nota sobre el modelo de mercado

El pitch plantea un "mercado doble": TAM = volumen de préstamos informales; SAM = gasto en adquisición. Ojo: **no es un embudo estricto** (el SAM no es un subconjunto del TAM, son mercados distintos). Es defendible si lo explicas así en el pitch: el TAM muestra el **tamaño del comportamiento** que digitalizas, y el SAM/SOM muestran el **dinero que realmente capturas** (ahorro de CAC del banco). Si un juez lo cuestiona, esa es la respuesta.
