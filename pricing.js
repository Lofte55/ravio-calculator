/* ═══════════════════════════════════════════════════════════════════════
   RAVIO — ПОДРЯДЧИКИ, ЦЕНЫ И КОЭФФИЦИЕНТЫ
   ───────────────────────────────────────────────────────────────────────
   ЭТО ЕДИНСТВЕННЫЙ ФАЙЛ, который нужно править для изменения цен и подрядчиков.
   Интерфейс (index.html) трогать НЕ нужно.

   ── КАК ИЗМЕНИТЬ ЦЕНУ ──
   Найди нужного подрядчика ниже → внутри его блока "prices" поменяй число.
   Например, у "РемПро" сделать ламинат дороже: floorLaminateM2: 13000 → 14000.

   ── КАК ДОБАВИТЬ НОВОГО ПОДРЯДЧИКА ──
   Скопируй любой блок { ... } внутри "contractors: [ ... ]",
   вставь рядом (через запятую) и поменяй:
     • id        — уникальный, латиницей (contractor_3, contractor_4 …)
     • name      — название (видит клиент)
     • rating    — звёзды 4.0–5.0 (или null если нет)
     • priceLevel— "cheap" (дешёвый) / "mid" (средний) / "premium" (дорогой)
     • services  — true = делает этот этап, false = НЕ делает
     • prices    — его цены (если services:false для этапа → ставь 0)

   ── ЧТО ОЗНАЧАЮТ КЛЮЧИ ЦЕН ──
   *M2     — цена за 1 м²;   *Fixed — фикс. цена за работу;
   *Price  — цена за 1 шт (розетка/выключатель/светильник);
   *Meter* — цена за 1 погонный метр труб;
   materialsPercent — доля материалов от работ (0.37 = +37%).

   ВАЖНО: после правок — сохранить файл и сообщить, чтобы залить на сайт.
   Цены видны в браузере (калькулятор считает у клиента) — это не секрет,
   секреты (токены) лежат отдельно на сервере.
   ═══════════════════════════════════════════════════════════════════════ */

window.RAVIO_CONFIG = {
  city: "Павлодар",
  localEstimatesCount: 2480,

  // ── БАЗОВЫЙ ОРИЕНТИР (рыночная независимая оценка) ──
  independent: {
    id: "independent", name: "Независимая оценка",
    type: "baseline", subtitle: "Рыночный ориентир",
    services: {
      demolition:true, wasteRemoval:true, roughWorks:true,
      electric:true, plumbing:true, bathroom:true,
      kitchen:true, ceiling:true, floor:true, walls:true,
    },
    prices: {
      demolitionLightM2:  4000,
      demolitionMediumM2: 8000,
      demolitionFullM2:   12000,
      wasteRemovalFixed:  70000,
      plasteringM2:    2000,
      screedM2:        3000,
      selfLevelingM2:  2000,
      radiatorUnit:   18000,
      soundproofingM2: 3500,
      electricOutletPrice:  4500,
      electricSwitchPrice:  3500,
      electricLightPrice:   3000,
      plumbingMeterPartial: 9000,
      plumbingMeterFull:    15000,
      plumbingPartialFixed: 250000,
      plumbingFullFixed:    600000,
      electricGroovingM2:  3000,        // штрабление стен ₸/м²
      bathroomReplaceFixed:    350000,  // только замена сантехники
      bathroomCosmeticFixed:   450000,
      bathroomPartialFixed:    800000,  // частичный ремонт
      bathroomFullOneFixed:    1200000,
      bathroomFullTwoFixed:    2200000,
      kitchenBasicFixed:       500000,
      kitchenWithApronFixed:   750000,
      ceilingStretchM2:  4000,
      ceilingPaintM2:    8000,
      ceilingGypsumM2:   8500,          // гипсокартон
      floorLinoleumM2:   7000,
      floorLaminateM2:   12000,
      floorSpcM2:        16000,
      floorTileM2:       20000,
      floorLevelingM2:   5000,
      wallsWallpaperM2:  10000,
      wallsPaintM2:      14000,
      wallsDecorativeM2: 22000,
      wallLevelingM2:    6000,
      materialsPercent:  0.37,
    },
    priceLevel: "mid", rating: null,
  },

  // ── ПОДРЯДЧИКИ (добавляй сюда новые блоки) ──
  contractors: [
    {
      id: "contractor_1", name: "РемПро",
      type: "company", subtitle: "Строительная компания",
      rating: 4.8, priceLevel: "mid",
      services: {
        demolition:true, wasteRemoval:false, roughWorks:true,
        electric:true, plumbing:true, bathroom:true,
        kitchen:false, ceiling:true, floor:true, walls:true,
      },
      prices: {
        demolitionLightM2:3500, demolitionMediumM2:7500, demolitionFullM2:11000,
        wasteRemovalFixed:0,
        plasteringM2:2200, screedM2:3200, selfLevelingM2:2200, radiatorUnit:20000, soundproofingM2:3800,
        electricOutletPrice:5000, electricSwitchPrice:4000, electricLightPrice:3500,
        plumbingMeterPartial:10000, plumbingMeterFull:16000,
        plumbingPartialFixed:270000, plumbingFullFixed:650000,
        electricGroovingM2:3500, bathroomReplaceFixed:370000, bathroomPartialFixed:850000,
        bathroomCosmeticFixed:480000, bathroomFullOneFixed:1300000, bathroomFullTwoFixed:2400000,
        kitchenBasicFixed:0, kitchenWithApronFixed:0,
        ceilingStretchM2:4500, ceilingPaintM2:8500, ceilingGypsumM2:9000,
        floorLinoleumM2:7000, floorLaminateM2:13000, floorSpcM2:17000, floorTileM2:21000, floorLevelingM2:5500,
        wallsWallpaperM2:11000, wallsPaintM2:15000, wallsDecorativeM2:23000, wallLevelingM2:6500,
        materialsPercent:0.35,
      },
    },
    {
      id: "contractor_2", name: "МастерСтрой",
      type: "company", subtitle: "Строительная компания",
      rating: 4.6, priceLevel: "cheap",
      services: {
        demolition:true, wasteRemoval:true, roughWorks:true,
        electric:false, plumbing:true, bathroom:true,
        kitchen:true, ceiling:true, floor:true, walls:true,
      },
      prices: {
        demolitionLightM2:3800, demolitionMediumM2:7800, demolitionFullM2:11500,
        wasteRemovalFixed:65000,
        plasteringM2:1900, screedM2:2800, selfLevelingM2:1900, radiatorUnit:17000, soundproofingM2:3300,
        electricOutletPrice:0, electricSwitchPrice:0, electricLightPrice:0,
        plumbingMeterPartial:8000, plumbingMeterFull:13000,
        plumbingPartialFixed:240000, plumbingFullFixed:580000,
        electricGroovingM2:2800, bathroomReplaceFixed:330000, bathroomPartialFixed:750000,
        bathroomCosmeticFixed:460000, bathroomFullOneFixed:1250000, bathroomFullTwoFixed:2300000,
        kitchenBasicFixed:480000, kitchenWithApronFixed:720000,
        ceilingStretchM2:3800, ceilingPaintM2:7800, ceilingGypsumM2:8000,
        floorLinoleumM2:6800, floorLaminateM2:11500, floorSpcM2:15500, floorTileM2:19500, floorLevelingM2:4800,
        wallsWallpaperM2:9500, wallsPaintM2:13500, wallsDecorativeM2:21000, wallLevelingM2:5800,
        materialsPercent:0.36,
      },
    },
  ],

  // ── КОЭФФИЦИЕНТЫ (трогать осторожно) ──
  coefs: {
    condition: { new_building:1.00, secondary_normal:1.10, old_full_repair:1.25, very_bad:1.40 },
    living:    { yes:1.07, no:1.0 },
    lift:      { yes:1.0,  no:1.03 },
    plumbingLocation: { sanuzul:1.0, kitchen:0.8, all:1.5, "":1.0 },
  },

  // диапазон погрешности итоговой суммы (±)
  range: { min:0.90, max:1.15 },
};
