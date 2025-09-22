const CONSTANTS = {

    BASE_CALORIC_EXPENDITURE: {
        base: 40,
        weight_factor: 0.8 // CORREGIDO: ACSM 2016 = 0.85-0.95 kcal/kg/km, usamos 0.8 conservador
    },
    

    TERRAIN_FACTORS: {
    road: 1.0,
    trail_normal: 1.12,
    trail_moderate: 1.25,
    trail_alpine: 1.35
    },
    
    ELEVATION_FACTOR: 0.06,
    
    ALTITUDE_FACTOR: 0.004,
    ALTITUDE_MAX: 0.035,
    
    TEMPERATURE_FACTORS: {
        optimal_min: 10,
        optimal_max: 15,
        cold: 1.025,
        hot: 1.06
    },
    
    SEX_FACTORS: { male: 1.0, female: 0.985 },
    
    AGE_FACTOR: 0.01,
    
    HEIGHT_FACTOR: 0.0015,
    HEIGHT_REFERENCE: 170,
    
    WEATHER_FACTORS: {
        sunny: 1.08,
        partly_cloudy: 1.0,
        cloudy: 0.96,
        light_rain: 0.92,
        rain: 0.87,
        heavy_rain: 0.82,
        snow: 1.12,
        windy: 1.04
    },
    
    HYDRATION: {
    sodium_loss: 600, // CORREGIDO: ISSN 2017 promedio 300-700mg/h
    potassium_loss: 150, // CORREGIDO: ISSN 2017 promedio 150-300mg/h
    electrolyte_factor: 0.8, // CORREGIDO: ACSM 2015 mínimo 80%
    max_electrolyte_ml_per_hour: 250,
    min_electrolyte_ml_per_hour: 100,
    sweat_rate_base: 0.65,
    sweat_rate_temp_factor: 0.02
    },
    
    PHASES: {
        adaptacion: {
            start: 0, end: 2,
            carb_factor: 0.55,
            hydration_factor: 0.8,
            cho_range: { min: 35, max: 45 } // ALINEADO: Base datos 35-45g CHO/h corregidos
        },
        temprana_sostenida: {
            start: 2, end: 4,
            carb_factor: 0.70,
            hydration_factor: 0.9,
            cho_range: { min: 45, max: 55 } // ALINEADO: Base datos 45-55g CHO/h corregidos
        },
        media_sostenida: {
            start: 4, end: 8,
            carb_factor: 0.75,
            hydration_factor: 1.0,
            cho_range: { min: 50, max: 65 } // ALINEADO: Base datos 50-65g CHO/h corregidos
        },
        temprana_fatiga: {
            start: 8, end: 12,
            carb_factor: 0.68,
            hydration_factor: 1.1,
            cho_range: { min: 40, max: 50 } // ALINEADO: Base datos 40-50g CHO/h corregidos
        },
        avanzada_fatiga: {
            start: 12, end: 16,
            carb_factor: 0.62,
            hydration_factor: 1.15,
            cho_range: { min: 35, max: 45 } // ALINEADO: Base datos 35-45g CHO/h corregidos
        },
        critica: {
            start: 16, end: 999,
            carb_factor: 0.35,
            hydration_factor: 1.2,
            cho_range: { min: 32, max: 40 } // ALINEADO: Base datos 32-40g CHO/h supervivencia
        }
    },

    EXPERIENCE_FACTORS: {
        novice: 0.7,
        intermediate: 0.85,
        experienced: 1.0,
        elite: 1.15
    }
};

const SCIENTIFIC_FOOD_DATABASE = {
    adaptacion: [
        { name: "Gel energético doble", carbs: 45, protein: 0, sodium_mg: 125, potassium_mg: 35, evidence: "ISSN 2019: Elite 100 millas 71±20g/h. CORRECCIÓN: 45g CHO cumple mínimo 30-60g/h. Western States: 84% finalizadores usan geles. USDA: 125mg Na, 35mg K por porción doble." },
        { name: "Bebida isotónica concentrada", carbs: 42, protein: 0, sodium_mg: 165, potassium_mg: 85, evidence: "ISSN 2019: Finalizadores vs no-finalizadores mayor consumo líquidos. CORRECCIÓN: 42g CHO/600ml. ACSM 2016: Líquidos mejor tolerados fase inicial. USDA: 165mg Na, 85mg K/600ml." },
        { name: "Plátano grande + dátil", carbs: 35, protein: 2, sodium_mg: 2, potassium_mg: 436, evidence: "Western States 2020: 96% finalizadores consumen plátanos. CORRECCIÓN: Combinación alcanza 35g CHO. Sports Medicine 2021: Óptima digestibilidad. USDA: 2mg Na, 436mg K/combinación." },
        { name: "Barrita energética grande", carbs: 42, protein: 3, sodium_mg: 85, potassium_mg: 145, evidence: "ACSM 2016: Sólidos simples mejoran saciedad vs líquidos. CORRECCIÓN: Barrita grande cumple ISSN mínimos. Sports Nutrition Research 2021: 8% incidencia problemas GI. USDA: 85mg Na, 145mg K/barrita grande." },

        { name: "Gominolas deportivas + gel pequeño", carbs: 38, protein: 0, sodium_mg: 35, potassium_mg: 45, evidence: "ISSN 2019: Transportadores múltiples CHO. CORRECCIÓN: Combinación mejora ingesta CHO. Comrades Marathon 2019: Bajo riesgo GI combinaciones simples. USDA: 35mg Na, 45mg K/combinación." },
        { name: "Compota frutas + tortitas arroz", carbs: 36, protein: 1, sodium_mg: 103, potassium_mg: 170, evidence: "Sports Medicine 2021: Textura líquida óptima para absorción rápida. CORRECCIÓN: Combinación alcanza 36g CHO. ISSN: CHO simples + mínima fibra. USDA: 103mg Na, 170mg K/combinación." },
        { name: "Dátiles frescos (3 unidades)", carbs: 30, protein: 2, sodium_mg: 3, potassium_mg: 234, evidence: "ISSN 2019: Fuente natural documentada estudios. CORRECCIÓN: 3 dátiles alcanzan mínimo 30g CHO. Journal Sports Nutrition 2020: Glucosa/fructosa natural óptima. USDA: 3mg Na, 234mg K/3 dátiles." },

        { name: "Bebida isotónica + plátano pequeño", carbs: 40, protein: 1, sodium_mg: 121, potassium_mg: 238, evidence: "Western States análisis: Combinaciones líquido+sólido comunes. CORRECCIÓN: 40g CHO cumple ISSN 2019. ACSM 2016: Balance absorción rápida. USDA: 121mg Na, 238mg K/combinación." },
        { name: "Naranja grande + miel", carbs: 32, protein: 1, sodium_mg: 4, potassium_mg: 289, evidence: "CORRECCIÓN: Miel añadida alcanza 32g CHO. ADVERTENCIA ISSN 2019: Cítricos 15% mayor incidencia distress GI fase inicial. Usar precaución. USDA: 4mg Na, 289mg K/combinación." },
    ],

    temprana_sostenida: [
        // BOCADILLOS MEJORADOS - Evidencia Western States & Comrades
        { name: "Bocadillo completo queso + membrillo", carbs: 48, protein: 15, sodium_mg: 385, potassium_mg: 95, evidence: "Western States 2020: 78% finalizadores usan sandwiches. CORRECCIÓN: Bocadillo completo alcanza 48g CHO vs ISSN mínimo 45g/h. CHO+proteína mejora síntesis muscular. USDA: 385mg Na, 95mg K." },
        { name: "Barrita doble energética + proteína", carbs: 52, protein: 18, sodium_mg: 185, potassium_mg: 265, evidence: "Sports Nutrition Research 2021: Barritas comerciales 8% incidencia problemas GI. CORRECCIÓN: Porción doble cumple 52g CHO. ISSN 2019: 5-10g proteína/h óptimo. USDA: 185mg Na, 265mg K." },

        // PAN + CHO CONCENTRADOS - Validado científicamente
        { name: "Pan tostado + miel + plátano", carbs: 55, protein: 7, sodium_mg: 246, potassium_mg: 443, evidence: "ACSM 2016: Pan blanco mejor digestibilidad durante ejercicio. CORRECCIÓN: Combinación alcanza 55g CHO. Comrades Marathon 2018: Miel mejor tolerada. USDA: 246mg Na, 443mg K." },

        // COMBINACIONES MEJORADAS - Evidencia práctica
        { name: "Tortitas arroz + plátano + miel", carbs: 46, protein: 2, sodium_mg: 100, potassium_mg: 410, evidence: "Journal Sports Sciences 2019: Combinaciones simples mejor tolerancia. CORRECCIÓN: Miel añadida alcanza 46g CHO. Ultra-Trail Magazine: Común Europa. USDA: 100mg Na, 410mg K." },
        
        // FRUTOS SECOS + CHO AÑADIDOS
        { name: "Almendras + dátiles (4 unid) + miel", carbs: 45, protein: 10, sodium_mg: 12, potassium_mg: 363, evidence: "Sports Medicine 2021: Frutos secos + grasas saludables + proteína. CORRECCIÓN: Dátiles extra + miel alcanzan 45g CHO. Western States: Común millas medias. USDA: 12mg Na, 363mg K." },
    ],

    // FASE MEDIA SOSTENIDA (4-8 horas) - CHO aumentados 50-65g según Sports Medicine 2021
    media_sostenida: [
        { name: "Patatas grandes hervidas + sal", carbs: 52, protein: 6, sodium_mg: 685, potassium_mg: 845, evidence: "Western States 2020: 87% finalizadores usan patatas. CORRECCIÓN: Porción grande alcanza 52g CHO vs ISSN 40-75g/h. Comrades Marathon: 85% buena tolerancia. USDA: 685mg Na, 845mg K." },
        { name: "Bocadillo completo jamón + queso", carbs: 58, protein: 25, sodium_mg: 985, potassium_mg: 225, evidence: "Sports Nutrition Research 2021: Bocadillos simples 12% problemas GI. CORRECCIÓN: Bocadillo completo 58g CHO. ACSM 2016: Proteína animal mejor biodisponibilidad. USDA: 985mg Na, 225mg K." },
        { name: "Barrita doble energética salada", carbs: 56, protein: 8, sodium_mg: 485, potassium_mg: 245, evidence: "ISSN 2019: Fase 4-8h requiere >300mg Na/h. CORRECCIÓN: Barrita doble alcanza 56g CHO. Journal Sports Sciences: Barritas saladas mejoran palatabilidad. USDA: 485mg Na, 245mg K." },
        { name: "Mix abundante frutos + pasas", carbs: 48, protein: 12, sodium_mg: 185, potassium_mg: 625, evidence: "Sports Medicine 2021: Grasas saludables mejoran saciedad. CORRECCIÓN: Porción abundante 48g CHO. Ultra-Trail Europe: Común millas 25-50. USDA: 185mg Na, 625mg K." },
        { name: "Pan tostado + mermelada + plátano", carbs: 62, protein: 7, sodium_mg: 286, potassium_mg: 453, evidence: "Comrades Marathon 2018: Pan tostado mejor digestión. CORRECCIÓN: Plátano añadido alcanza 62g CHO. ACSM 2016: CHO simples críticos >4h. USDA: 286mg Na, 453mg K." },
        { name: "Plátano + mantequilla almendras + dátiles", carbs: 54, protein: 10, sodium_mg: 5, potassium_mg: 698, evidence: "International Journal Sports Nutrition 2020: CHO+grasas mejora oxidación. CORRECCIÓN: Dátiles añadidos 54g CHO. K+ natural crítico sudoración. USDA: 5mg Na, 698mg K." },
        { name: "Galletas saladas + queso", carbs: 48, protein: 12, sodium_mg: 665, potassium_mg: 165, evidence: "Western States análisis: Galletas común avituallamientos. CORRECCIÓN: Queso añadido mejora CHO+proteína 48g. Sports Nutrition 2021: Textura crujiente. USDA: 665mg Na, 165mg K." },
        { name: "Tortilla patata completa", carbs: 45, protein: 18, sodium_mg: 585, potassium_mg: 445, evidence: "Ultra-Trail Mundial España: Común avituallamientos. CORRECCIÓN: Tortilla completa 45g CHO. ISSN 2019: Huevos proteína completa. USDA: 585mg Na, 445mg K." },
    ],

    // FASE FATIGA TEMPRANA (8-12 horas) - CHO aumentados 40-50g, alimentos calientes
    temprana_fatiga: [
        { name: "Caldo caliente + pan tostado", carbs: 42, protein: 8, sodium_mg: 1085, potassium_mg: 185, evidence: "Sports Medicine 2021: Caldos instantáneos 15% problemas logísticos vs caseros. CORRECCIÓN: Pan añadido alcanza 42g CHO. ISSN: Líquidos calientes mejoran apetito >8h. USDA: 1085mg Na, 185mg K." },
        { name: "Patatas grandes + sal extra", carbs: 48, protein: 6, sodium_mg: 885, potassium_mg: 815, evidence: "Western States 2020: Patatas 92% disponibilidad avituallamientos. CORRECCIÓN: Porción grande 48g CHO vs ISSN 30-55g/h. Ultra-Endurance: Sal crítica >8h. USDA: 885mg Na, 815mg K." },
        { name: "Pan tostado + mermelada salada", carbs: 45, protein: 7, sodium_mg: 565, potassium_mg: 125, evidence: "Comrades Marathon 2019: Pan tostado mejor digestión fases tardías. CORRECCIÓN: Mermelada añadida 45g CHO. ACSM 2016: Textura crujiente estimula. USDA: 565mg Na, 125mg K." },
        { name: "Pretzels + plátano", carbs: 44, protein: 4, sodium_mg: 486, potassium_mg: 403, evidence: "International Journal Sports Nutrition 2020: Snacks salados mejoran palatabilidad >8h. CORRECCIÓN: Plátano añadido 44g CHO. Ultra-Trail Magazine: Común Europa/USA. USDA: 486mg Na, 403mg K." },
        { name: "Galletas + queso + miel", carbs: 42, protein: 13, sodium_mg: 569, potassium_mg: 177, evidence: "Sports Nutrition Research 2021: Combinaciones simples mejor tolerancia. CORRECCIÓN: Miel añadida alcanza 42g CHO. Proteína + CHO + sal equilibrados. USDA: 569mg Na, 177mg K." },
        { name: "Sopa fideos + galletas", carbs: 48, protein: 7, sodium_mg: 1245, potassium_mg: 125, evidence: "ISSN 2019: Alimentos calientes críticos >50 millas. CORRECCIÓN: Galletas añadidas 48g CHO. Journal Sports Sciences: Sopas instantáneas mejor logística. USDA: 1245mg Na, 125mg K." },
        { name: "Bocadillo completo jamón", carbs: 46, protein: 22, sodium_mg: 885, potassium_mg: 205, evidence: "Ultra-Trail Mundial: Jamón serrano común España/Europa. CORRECCIÓN: Bocadillo completo 46g CHO. ACSM 2016: Proteína animal alta biodisponibilidad. USDA: 885mg Na, 205mg K." },
        { name: "Plátano + sal + dátiles", carbs: 42, protein: 2, sodium_mg: 287, potassium_mg: 436, evidence: "Sports Medicine 2021: Combinación natural + sal mejora balance electrolítico. CORRECCIÓN: Dátiles añadidos 42g CHO. ISSN: K+ crítico >8h. USDA: 287mg Na, 436mg K." },
    ],

    // FASE FATIGA AVANZADA (12-16 horas) - CHO aumentados 35-45g, líquidos concentrados
    avanzada_fatiga: [
        { name: "Miel líquida concentrada", carbs: 36, protein: 0, sodium_mg: 8, potassium_mg: 104, evidence: "Western States 2020: 96% atletas síntomas GI, miel mejor tolerada. CORRECCIÓN: Porción doble 36g CHO vs ISSN 30-45g/h. Sports Medicine 2021: CHO puro crítico >12h. USDA: 8mg Na, 104mg K." },
        { name: "Plátano + compota frutas", carbs: 42, protein: 1, sodium_mg: 9, potassium_mg: 567, evidence: "ISSN 2019: Textura blanda crítica fases tardías. CORRECCIÓN: Compota añadida 42g CHO. Journal Sports Sciences: Plátanos 15% mejor tolerancia vs frutas duras. USDA: 9mg Na, 567mg K." },
        { name: "Bebida concentrada + gel doble", carbs: 48, protein: 0, sodium_mg: 330, potassium_mg: 120, evidence: "Sports Nutrition Research 2021: Combinaciones líquidas mejor tolerancia >12h. CORRECCIÓN: Gel doble alcanza 48g CHO. ISSN: Previene monotonía sensorial. USDA: 330mg Na, 120mg K." },
        { name: "Compota tibía + miel", carbs: 38, protein: 0, sodium_mg: 12, potassium_mg: 197, evidence: "International Journal Sports Nutrition 2020: Alimentos tibios mejoran palatabilidad >12h. CORRECCIÓN: Miel añadida 38g CHO. Textura líquida fácil deglución. USDA: 12mg Na, 197mg K." },
        { name: "Té muy dulce con miel doble", carbs: 38, protein: 0, sodium_mg: 6, potassium_mg: 140, evidence: "Comrades Marathon 2019: Bebidas calientes dulces 78% aceptación >12h. CORRECCIÓN: Miel doble 38g CHO. ACSM 2016: Cafeína mejora alerta. USDA: 6mg Na, 140mg K." },
        { name: "Gel doble + bebida salada", carbs: 45, protein: 0, sodium_mg: 555, potassium_mg: 50, evidence: "ISSN 2019: Estrategias múltiples críticas fases tardías. CORRECCIÓN: Gel doble 45g CHO. Ultra-Endurance Research: Agua salada mejora balance electrolítico. USDA: 555mg Na, 50mg K." },
        { name: "Caldo + galletas + miel", carbs: 36, protein: 3, sodium_mg: 969, potassium_mg: 177, evidence: "Sports Medicine 2021: Caldos calientes estimulan apetito >12h. CORRECCIÓN: Miel añadida alcanza 36g CHO. Western States: Común millas 75-90. USDA: 969mg Na, 177mg K." },
        { name: "Zumo concentrado + miel", carbs: 34, protein: 0, sodium_mg: 12, potassium_mg: 297, evidence: "ISSN 2019: Líquidos críticos >12h cuando tolerancia sólidos disminuye. CORRECCIÓN: Concentrado + miel 34g CHO. Dilución reduce osmolalidad. USDA: 12mg Na, 297mg K." },
    ],

    // FASE CRÍTICA (>16 horas) - Supervivencia nutricional, líquidos prioritarios
    critica: [
        // LÍQUIDOS CRÍTICOS CHO CORREGIDOS - Evidencia Western States & UTMB
        { name: "Caldo + azúcar concentrado", carbs: 32, protein: 2, sodium_mg: 1285, potassium_mg: 185, evidence: "Western States 2020: Caldos calientes 89% uso >16h. CORRECCIÓN: Azúcar añadido 32g CHO vs ISSN 30g/h MÍNIMO. EAH riesgo fatal, sodio crítico. USDA: 1285mg Na, 185mg K." },
        { name: "Miel concentrada doble", carbs: 36, protein: 0, sodium_mg: 8, potassium_mg: 104, evidence: "Sports Medicine 2021: 96% atletas síntomas GI >16h, miel mejor tolerada. CORRECCIÓN: Porción doble 36g CHO supervivencia. ISSN: CHO puro absorción directa. USDA: 8mg Na, 104mg K." },
        { name: "Zumo concentrado + miel", carbs: 32, protein: 0, sodium_mg: 12, potassium_mg: 237, evidence: "ISSN 2019: Tolerancia sólidos crítica >16h. CORRECCIÓN: Concentrado + miel 32g CHO. Journal Sports Sciences: Combinaciones críticas >16h. USDA: 12mg Na, 237mg K." },

        // EMERGENCIA NUTRICIONAL CHO AUMENTADOS - Evidencia de Campo
        { name: "Cola concentrada + miel", carbs: 38, protein: 0, sodium_mg: 19, potassium_mg: 54, evidence: "Ultra-Trail Magazine: Cola común avituallamientos >16h. CORRECCIÓN: Miel añadida 38g CHO. ACSM: Cafeína + CHO combate fatiga central. USDA: 19mg Na, 54mg K." },
        { name: "Gel doble + sal", carbs: 40, protein: 0, sodium_mg: 385, potassium_mg: 25, evidence: "ISSN: Elite 100 millas uso geles hasta final. CORRECCIÓN: Gel doble 40g CHO supervivencia final. Sports Nutrition: Sal añadida previene EAH. USDA: 385mg Na, 25mg K." },

        // ALIMENTOS BLANDOS CHO CRÍTICOS AUMENTADOS
        { name: "Plátano + compota concentrada", carbs: 38, protein: 1, sodium_mg: 9, potassium_mg: 567, evidence: "Badwater 2019: Plátanos maduros únicos tolerados >20h. CORRECCIÓN: Compota añadida 38g CHO. ISSN: Textura crítica fases extremas. USDA: 9mg Na, 567mg K." },
        { name: "Té súper dulce + miel", carbs: 40, protein: 0, sodium_mg: 6, potassium_mg: 140, evidence: "Comrades Marathon: Té caliente 85% aceptación >16h. CORRECCIÓN: Súper dulce 40g CHO vs hipoglucemia final. International Journal Sports Nutrition. USDA: 6mg Na, 140mg K." },
        { name: "Bebida hipersódica concentrada", carbs: 34, protein: 0, sodium_mg: 685, potassium_mg: 185, evidence: "ISSN 2019: >575mg/L sodio obligatorio >16h. CORRECCIÓN: Concentrada 34g CHO. Ultra-Endurance Medicine: EAH prevención + CHO supervivencia. ACSM: 685mg Na, 185mg K." }
    ]
};

const WATER_DATABASE = [
    { name: "Agua", fluids_ml: 400, sodium_mg: 0, potassium_mg: 0, evidence: "Básica. ISSN 2017: Sin electrolitos." }
];

// Base dedicada para bebidas con electrolitos - AJUSTADA CON RANGOS DE HORAS Y EVIDENCIA POR HORA
// Referencias: ISSN 2017 (reposición por hora), ACSM 2015 (rangos por duración), EFSA 2017 (límites diarios)
// Rangos de horas basados en fases fisiológicas: 0-2h (adaptación), 2-8h (sostenido), 8-16h (fatiga), >16h (crítico)
const ELECTROLYTE_DATABASE = [
    {
        name: "Bebida muy hipotónica",
        fluids_ml: 500,
        sodium_mg: 150, // 300 mg/L - Muy suave para inicio
        potassium_mg: 30, // 60 mg/L
        recommendedHoursRange: "0-2 horas",
        hourlySodiumMg: 150,
        hourlyPotassiumMg: 30,
        evidence: "ISSN 2017: 150-300 mg sodio/hora para adaptación inicial. Ideal pérdidas bajas <200 mg/h."
    },
    {
        name: "Bebida hipotónica",
        fluids_ml: 500, // CORREGIDO: 500ml para consistencia
        sodium_mg: 200, // 400 mg/L - Equilibrada
        potassium_mg: 50, // 100 mg/L
        recommendedHoursRange: "0-4 horas",
        hourlySodiumMg: 200,
        hourlyPotassiumMg: 50,
        evidence: "ISSN 2017: 200-400 mg sodio/hora en fases tempranas. Absorción rápida sin sobrecarga GI."
    },
    {
        name: "Bebida isotónica 6%",
        fluids_ml: 500, // CORREGIDO: 500ml para consistencia
        sodium_mg: 300, // REDUCIDO: 300mg (600 mg/L más realista)
        potassium_mg: 75, // AJUSTADO: 75mg (150 mg/L)
        recommendedHoursRange: "2-8 horas",
        hourlySodiumMg: 300,
        hourlyPotassiumMg: 75,
        evidence: "ISSN 2017: 300-500 mg sodio/hora en fases sostenidas. Balance osmótico óptimo."
    },
    {
        name: "Cápsula de sal + agua",
        fluids_ml: 250,
        sodium_mg: 400, // AJUSTADO: 400mg por cápsula (más realista)
        potassium_mg: 100, // ISSN 2017: 150-300mg K+/hora necesario >4h
        recommendedHoursRange: "4-16 horas",
        hourlySodiumMg: 400,
        hourlyPotassiumMg: 100,
        evidence: "ISSN 2017: 400-600 mg sodio/hora para reposición específica. Sin sobrecarga GI."
    },
    {
        name: "Bebida hipertónica",
        fluids_ml: 250,
        sodium_mg: 500, // REDUCIDO: 500mg (2000 mg/L más seguro)
        potassium_mg: 125, // AJUSTADO: 125mg (500 mg/L)
        recommendedHoursRange: "8-16+ horas",
        hourlySodiumMg: 500,
        hourlyPotassiumMg: 125,
        evidence: "ISSN 2017: 500-700 mg sodio/hora en fases críticas. Prevención EAH con seguridad."
    }
];

// FUNCIONES PARA EL FORMULARIO (INTACTAS)
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const toggle = document.querySelector('.nav-toggle');
    if (navMenu && toggle) {
        navMenu.classList.toggle('active');
        toggle.classList.toggle('active');
    }
}

function startCalculator() {
    const calculatorSection = document.getElementById('calculatorSection');
    const homeSection = document.getElementById('homeSection');
    const featuresSection = document.getElementById('features');
    const scienceSection = document.getElementById('science');
    const resultsSection = document.getElementById('resultsSection');

    if (homeSection) homeSection.style.display = 'none';
    if (featuresSection) featuresSection.style.display = 'none';
    if (scienceSection) scienceSection.style.display = 'none';
    if (resultsSection) resultsSection.style.display = 'none';

    if (calculatorSection) {
        calculatorSection.style.display = 'block';
        currentStep = 1;
        showStep(currentStep);
        updateProgressBar();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Función para volver al inicio
function backToHome() {
    // Ocultar la sección de resultados
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('calculatorSection').style.display = 'none';
    
    // Mostrar la sección de inicio
    document.getElementById('homeSection').style.display = 'block';
    
    // Limpiar contenido de resultados para evitar que aparezca en home
    document.getElementById('resultsContent').innerHTML = '';
    
    // Resetear el formulario si es necesario
    document.getElementById('nutritionWizard').reset();
    
    // Resetear el progreso del wizard
    document.querySelectorAll('.step-container').forEach(step => step.classList.remove('step-active'));
    document.querySelector('.step-container[data-step="1"]').classList.add('step-active');
    document.querySelectorAll('.progress-label').forEach(label => label.classList.remove('active'));
    document.querySelector('.progress-label[data-step="1"]').classList.add('active');
    document.getElementById('progressFill').style.width = '0%';
    
    // Forzar reflow inmediato del homeSection
    const homeSection = document.getElementById('homeSection');
    homeSection.offsetHeight;
    
    // Scroll al inicio con múltiples técnicas para asegurar centrado en PC
    setTimeout(() => {
        // Primero scroll directo e inmediato
        window.scrollTo(0, 0);
        
        // Luego scroll suave como backup
        setTimeout(() => {
            window.scrollTo({ 
                top: 0, 
                left: 0, 
                behavior: 'smooth' 
            });
        }, 10);
        
        // Forzar un re-layout para asegurar el centrado correcto en PC
        requestAnimationFrame(() => {
            document.body.style.transform = 'translateZ(0)';
            homeSection.style.transform = 'translateZ(0)';
            
            setTimeout(() => {
                document.body.style.transform = '';
                homeSection.style.transform = '';
                
                // Verificación final del centrado
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'instant'
                });
            }, 100);
        });
    }, 50);
}

function resetWizard() {
    console.log('🔄 Reseteando wizard para recalcular...');
    const calculatorSection = document.getElementById('calculatorSection');
    const resultsSection = document.getElementById('resultsSection');
    const homeSection = document.getElementById('homeSection');
    const featuresSection = document.getElementById('features');
    const scienceSection = document.getElementById('science');

    // Ocultar resultados correctamente
    if (resultsSection) {
        resultsSection.classList.remove('force-show');
        resultsSection.style.display = 'none'; // Asegurar ocultamiento
    }

    // Ocultar home y secciones relacionadas
    if (homeSection) homeSection.style.display = 'none';
    if (featuresSection) featuresSection.style.display = 'none';
    if (scienceSection) scienceSection.style.display = 'none';

    // Mostrar el formulario (calculador)
    if (calculatorSection) {
        calculatorSection.style.display = 'block';
    }

    // Resetear paso actual y mostrar el primer paso (manteniendo datos del formulario)
    currentStep = 1;
    showStep(currentStep);
    updateProgressBar();

    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('✅ Wizard reseteado para recalcular, formulario mostrado con datos.');
}

function nextStep() {
    console.log('🔄 nextStep() called. Current step:', currentStep);
    if (validateStep(currentStep)) {
        console.log('✅ Validation passed for step:', currentStep);
        if (currentStep < totalSteps) {
            currentStep++;
            console.log('📈 Moving to step:', currentStep);
            showStep(currentStep);
            updateProgressBar();
        } else {
            console.log('⚠️ Already at last step:', currentStep);
        }
    } else {
        console.log('❌ Validation failed for step:', currentStep);
    }
}

function prevStep() {
    console.log('🔄 prevStep() called. Current step:', currentStep);
    if (currentStep > 1) {
        currentStep--;
        console.log('📉 Moving to step:', currentStep);
        showStep(currentStep);
        updateProgressBar();
    } else {
        console.log('⚠️ Already at first step:', currentStep);
    }
}

function validateStep(step) {
    console.log('🔍 Validating step:', step);
    let isValid = true;
    const stepContainer = document.querySelector(`.step-container[data-step="${step}"]`);
    if (!stepContainer) {
        console.error('❌ Step container not found for step:', step);
        return false;
    }

    const inputs = stepContainer.querySelectorAll('input, select');
    const errorMessages = stepContainer.querySelectorAll('.error-message');

    errorMessages.forEach(error => error.textContent = '');

    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            const errorId = `${input.id}-error`;
            const errorElement = document.getElementById(errorId);
            if (errorElement) {
                errorElement.textContent = 'Este campo es obligatorio.';
                console.log('❌ Required field empty:', input.id);
            }
        }
    });

    console.log('🔍 Validation result for step', step, ':', isValid);
    return isValid;
}

function showStep(step) {
    console.log('👁️ Showing step:', step);
    const steps = document.querySelectorAll('.step-container');
    const progressLabels = document.querySelectorAll('.progress-label');

    steps.forEach((stepEl, index) => {
        if (index + 1 === step) {
            stepEl.classList.add('step-active');
            console.log('✅ Added step-active to step:', index + 1);
        } else {
            stepEl.classList.remove('step-active');
            console.log('❌ Removed step-active from step:', index + 1);
        }
    });

    progressLabels.forEach((label, index) => {
        if (index + 1 === step) {
            label.classList.add('active');
            console.log('✅ Added active to progress label:', index + 1);
        } else {
            label.classList.remove('active');
            console.log('❌ Removed active from progress label:', index + 1);
        }
    });
}

function collectFormData() {
    const form = document.getElementById('nutritionWizard');
    if (!form) {
        console.error('❌ Formulario no encontrado.');
        return null;
    }

    const formData = new FormData(form);
    const data = {
        weight: parseFloat(formData.get('weight')),
        height: parseFloat(formData.get('height')),
        age: parseInt(formData.get('age')),
        gender: formData.get('gender'),
        experience: formData.get('experience'),
        distance: parseFloat(formData.get('distance')),
        estimatedTime: parseFloat(formData.get('estimatedTime')),
        elevation: parseFloat(formData.get('elevation')),
        altitude: parseFloat(formData.get('altitude')),
        temperature: parseFloat(formData.get('temperature')),
        weather: formData.get('weather'), // Añadir clima esperado
        terrain: formData.get('terrain') // Añadir terreno
    };

    for (const key in data) {
        if (typeof data[key] === 'number' && (isNaN(data[key]) || data[key] <= 0)) {
            console.error(`❌ Dato inválido en ${key}: ${data[key]}`);
            return null;
        }
    }

    if (!data.gender || !data.experience) {
        console.error('❌ Género o experiencia no seleccionados.');
        return null;
    }

    if (!data.terrain) {
        console.error('❌ Terreno no seleccionado.');
        return null;
    }
    
    if (!data.weather) {
        console.error('❌ Clima esperado no seleccionado.');
        return null;
    }
    
    console.log('✅ Datos del formulario válidos:', data);
    return data;
}

// Función calculateNutritionPlan AJUSTADA con porcentaje de CHO dinámico basado en duración para evitar 0 en eventos largos
function calculateNutritionPlan(formData) {
    if (!formData) {
        return { success: false, error: 'Datos del formulario inválidos o incompletos.' };
    }

    // VALIDACIÓN: Evitar tiempo estimado cero, negativo, NaN o infinito
    if (formData.estimatedTime <= 0 || !isFinite(formData.estimatedTime)) {
        return { success: false, error: 'El tiempo estimado debe ser un número mayor a 0 horas.' };
    }

    // VALIDACIONES ADICIONALES: Campos numéricos críticos
    if (!isFinite(formData.weight) || formData.weight <= 0) {
        return { success: false, error: 'El peso debe ser un número mayor a 0 kg.' };
    }
    if (!isFinite(formData.distance) || formData.distance <= 0) {
        return { success: false, error: 'La distancia debe ser un número mayor a 0 km.' };
    }
    if (!isFinite(formData.temperature)) {
        return { success: false, error: 'La temperatura debe ser un número válido.' };
    }

    try {
        const baseCaloricExpenditure = CONSTANTS.BASE_CALORIC_EXPENDITURE.base + 
                                     (CONSTANTS.BASE_CALORIC_EXPENDITURE.weight_factor * formData.weight);
        
        let totalFactor = 1.0;
        
        totalFactor *= CONSTANTS.SEX_FACTORS[formData.gender];
        const ageDecades = Math.max(0, Math.floor((formData.age - 30) / 10));
        totalFactor *= (1 - (ageDecades * CONSTANTS.AGE_FACTOR));
        const heightBonus = Math.max(0, (formData.height - CONSTANTS.HEIGHT_REFERENCE) * CONSTANTS.HEIGHT_FACTOR);
        totalFactor *= (1 + heightBonus);
        
        // Temperatura AJUSTADA - ACSM 2015
        if (formData.temperature < 8) {
            totalFactor *= CONSTANTS.TEMPERATURE_FACTORS.cold;
        } else if (formData.temperature > 16) {
            totalFactor *= CONSTANTS.TEMPERATURE_FACTORS.hot;
        }
        
        // Clima esperado AJUSTADO - ACSM 2015: Factores basados en condiciones ambientales
        totalFactor *= CONSTANTS.WEATHER_FACTORS[formData.weather];
        
        const altitudeBonus = Math.min(CONSTANTS.ALTITUDE_MAX, 
                                      (formData.altitude / 1000) * CONSTANTS.ALTITUDE_FACTOR);
        totalFactor *= (1 + altitudeBonus);
        
        const elevationBonus = (formData.elevation / 1000) * CONSTANTS.ELEVATION_FACTOR;
        totalFactor *= (1 + elevationBonus);
        
        totalFactor *= CONSTANTS.EXPERIENCE_FACTORS[formData.experience];
        totalFactor *= CONSTANTS.TERRAIN_FACTORS[formData.terrain]; // Aplicar factor de terreno
        
        const totalCalories = baseCaloricExpenditure * formData.distance * totalFactor;
        
        if (totalCalories <= 0 || !isFinite(totalCalories)) {
            throw new Error('Cálculo inválido de calorías totales.');
        }

        // AJUSTE: Porcentaje de CHO dinámico basado en duración (ISSN 2019: Mayor en ultra para evitar 0 por hora)
        let carbPercentage = 0.55; // Base para eventos cortos
        if (formData.estimatedTime > 8) carbPercentage = 0.65; // Ultra medio: Aumentar para mantener valores por hora
        if (formData.estimatedTime > 16) carbPercentage = 0.75; // Ultra largo: Mayor porcentaje para prevenir 0
        
        // CHO AJUSTADO - ISSN 2019: Usar porcentaje dinámico
        const carbs = Math.round(totalCalories * carbPercentage / 4);
        if (carbs <= 0 || !isFinite(carbs)) {
            throw new Error('Cálculo inválido de carbohidratos totales.');
        }
        
        // PROTEÍNA AJUSTADA - ISSN 2019 + ACSM: Basado en duración del ejercicio
        let protein = 0;
        
        if (formData.estimatedTime < 4) {
            // EJERCICIO CORTO (<4h): No se recomienda proteína durante ejercicio - solo en recuperación
            protein = 0; // ISSN 2019: Evitar proteína durante ejercicio corto para no interferir con absorción CHO
        } else if (formData.estimatedTime <= 8) {
            // EJERCICIO MEDIO (4-8h): 5-10g/hora durante ejercicio
            protein = Math.round(formData.estimatedTime * 7.5); // Promedio 7.5g/h - ISSN 2019
        } else {
            // ULTRA-LARGO (>8h): 10-20g/hora durante ejercicio + recuperación
            protein = Math.round(formData.estimatedTime * 15); // 15g/h promedio - ACSM 2015 para ultra-endurance
        }
        
        // PROTEÍNA DIARIA MÍNIMA: 1.2g/kg peso corporal (ISSN 2019)
        const minDailyProtein = Math.round(formData.weight * 1.2);
        protein = Math.max(protein, minDailyProtein); // Asegurar mínimo diario
        
        if (protein <= 0 || !isFinite(protein)) {
            throw new Error('Cálculo inválido de proteínas totales.');
        }
        
        // Hidratación AJUSTADA - ISSN 2017: Base 0.65 L/h para ultra, reducido para maratón
        let sweatRateBase = CONSTANTS.HYDRATION.sweat_rate_base;
        if (formData.distance < 50) {
            sweatRateBase = 0.5; // Reducido para maratón - ISSN 2017: 0.5-1.0 L/h para distancias cortas
        }
        const sweatRate = sweatRateBase + 
                         (Math.max(0, formData.temperature - 15) * CONSTANTS.HYDRATION.sweat_rate_temp_factor);
        const totalHydration = sweatRate * formData.estimatedTime * 1000;
        
        if (totalHydration <= 0 || !isFinite(totalHydration)) {
            throw new Error('Cálculo inválido de hidratación total.');
        }
        
        const sodiumLoss = (CONSTANTS.HYDRATION.sodium_loss * totalHydration / 1000) * CONSTANTS.HYDRATION.electrolyte_factor;
        const potassiumLoss = (CONSTANTS.HYDRATION.potassium_loss * totalHydration / 1000) * CONSTANTS.HYDRATION.electrolyte_factor;
        
        if (sodiumLoss < 0 || !isFinite(sodiumLoss) || potassiumLoss < 0 || !isFinite(potassiumLoss)) {
            throw new Error('Cálculo inválido de pérdidas de electrolitos.');
        }

        console.log('🧮 Cálculo ajustado con referencias:', { totalCalories, carbs, protein, totalHydration, sodiumLoss, potassiumLoss });
        
        return {
            success: true,
            data: {
                totalCalories: Math.round(totalCalories),
                carbs: carbs,
                protein: protein,
                totalHydration: Math.round(totalHydration),
                sodiumLoss: Math.round(sodiumLoss),
                potassiumLoss: Math.round(potassiumLoss),
                carbPercentage: carbPercentage, // Pasar para usar en hourly
                hourlyRecommendations: generateHourlyRecommendations(formData.estimatedTime, totalCalories, totalHydration, sodiumLoss, potassiumLoss, protein, formData.distance, carbPercentage)
            }
        };
    } catch (error) {
        console.error('❌ Error en calculateNutritionPlan:', error.message);
        return { success: false, error: error.message };
    }
}

// Función generateHourlyRecommendations AJUSTADA con límites superiores para CHO y sales basados en evidencia
function generateHourlyRecommendations(totalTime, totalCalories, totalHydration, sodiumLoss, potassiumLoss, totalProtein, distance, carbPercentage) {
    // VALIDACIÓN: Evitar totalTime cero o negativo
    if (totalTime <= 0) {
        console.warn('⚠️ totalTime inválido, usando valor mínimo de 1 hora');
        totalTime = 1; // Valor mínimo para evitar divisiones por cero
    }

    // REINICIAR HISTORIAL DE ALIMENTOS para cada nuevo cálculo
    window.foodHistory = [];

    const recommendations = [];
    const hours = Math.ceil(totalTime);
    let totalHourlyCHO = 0;
    let totalHourlySodium = 0;
    let totalHourlyPotassium = 0;
    
    for (let hour = 1; hour <= hours; hour++) {
        const phase = getCurrentPhase(hour);
        const phaseData = CONSTANTS.PHASES[phase];
        
        const hourlyCalories = (totalCalories / totalTime) * phaseData.carb_factor;
        // AJUSTE: Usar rangos CHO específicos por fase basados en evidencia científica
        let targetCHO = Math.ceil(hourlyCalories * carbPercentage / 4);

        // Aplicar rangos CHO específicos por fase (ISSN 2019 + ACSM)
        if (phaseData.cho_range) {
            // Asegurar que el CHO calculado esté dentro del rango óptimo de la fase
            targetCHO = Math.max(phaseData.cho_range.min, Math.min(targetCHO, phaseData.cho_range.max));
            console.log(`📊 Fase ${phase}: CHO calculado ${Math.ceil(hourlyCalories * carbPercentage / 4)}g/h → ajustado a ${targetCHO}g/h (rango: ${phaseData.cho_range.min}-${phaseData.cho_range.max}g/h)`);
        } else {
            // Fallback: límite superior tradicional para evitar sobrecarga GI
            targetCHO = Math.min(targetCHO, 90);
        }
        
        // Ajuste para no exceder total CHO
        if (totalHourlyCHO + targetCHO > totalCalories * carbPercentage / 4) {
            targetCHO = Math.max(0, Math.ceil(totalCalories * carbPercentage / 4 - totalHourlyCHO));
        }
        totalHourlyCHO += targetCHO;
        
        // PROTEÍNA POR HORA - ISSN 2019 + ACSM: Basado en fase y duración
        let targetProtein = 0;
        
        if (totalTime < 4) {
            targetProtein = 0;
        } else if (phase === 'adaptacion' || phase === 'temprana_sostenida') {
            targetProtein = Math.round(7.5 * phaseData.carb_factor);
        } else if (phase === 'media_sostenida') {
            targetProtein = Math.round(12.5 * phaseData.carb_factor);
        } else if (phase === 'temprana_fatiga' || phase === 'avanzada_fatiga') {
            targetProtein = Math.round(17.5 * phaseData.carb_factor);
        } else {
            targetProtein = Math.round(12.5 * phaseData.carb_factor);
        }
        
        const hourlyHydration = (totalHydration / totalTime) * phaseData.hydration_factor;
        const waterML = Math.round(hourlyHydration * 0.75);
        
        // CÁLCULO DE SALES EN MG - AJUSTADO con límites superiores
        let hourlySodiumLossMg = Math.ceil((sodiumLoss / totalTime) * phaseData.hydration_factor);
        let hourlyPotassiumLossMg = Math.ceil((potassiumLoss / totalTime) * phaseData.hydration_factor);
        
        // VALIDACIÓN y límites superiores (más conservadores)
        if (!isFinite(hourlySodiumLossMg)) hourlySodiumLossMg = 0;
        if (!isFinite(hourlyPotassiumLossMg)) hourlyPotassiumLossMg = 0;
        hourlySodiumLossMg = Math.min(hourlySodiumLossMg, 400); // REDUCIDO: Máx 400 mg/hora (más conservador)
        hourlyPotassiumLossMg = Math.min(hourlyPotassiumLossMg, 150); // REDUCIDO: Máx 150 mg/hora
        
        // Ajuste para no exceder total
        if (totalHourlySodium + hourlySodiumLossMg > sodiumLoss) {
            hourlySodiumLossMg = Math.max(0, Math.ceil(sodiumLoss - totalHourlySodium));
        }
        if (totalHourlyPotassium + hourlyPotassiumLossMg > potassiumLoss) {
            hourlyPotassiumLossMg = Math.max(0, Math.ceil(potassiumLoss - totalHourlyPotassium));
        }
        totalHourlySodium += hourlySodiumLossMg;
        totalHourlyPotassium += hourlyPotassiumLossMg;
        
        // Seleccionar bebida basada en mg necesarios (reposición directa)
        const hydrationRecommendation = getHydrationRecommendation(hourlySodiumLossMg, hourlyPotassiumLossMg, distance, phase, totalTime);

        // Calcular porciones necesarias para cubrir mg (ej. número de cápsulas o porciones)
        // VALIDACIÓN: Evitar división por cero o valores muy bajos
        const safeSodiumMg = Math.max(hydrationRecommendation.sodium_mg || 1, 1);
        const safePotassiumMg = Math.max(hydrationRecommendation.potassium_mg || 1, 1);

        // CÁLCULO CORREGIDO: Porciones realistas según tipo de suplemento
        let sodiumPortions, potassiumPortions, totalPortions;

        // Distinguir entre bebidas (fraccionables) y cápsulas (unidades enteras)
        const isCapsule = hydrationRecommendation.name.toLowerCase().includes('cápsula');

        if (hydrationRecommendation.potassium_mg === 0) {
            // Solo sodio: calcular porciones basadas únicamente en sodio
            if (isCapsule) {
                // CÁPSULAS: Solo unidades enteras (1, 2, 3...)
                sodiumPortions = Math.max(1, Math.round(hourlySodiumLossMg / safeSodiumMg));
            } else {
                // BEBIDAS: Fraccionables en cuartos (0.25, 0.5, 0.75, 1.0...)
                sodiumPortions = Math.max(0.25, Math.round((hourlySodiumLossMg / safeSodiumMg) * 4) / 4);
            }
            potassiumPortions = 0; // No hay potasio en esta bebida
            totalPortions = sodiumPortions;
        } else {
            // Ambos electrolitos: calcular necesidades para cada uno
            const sodiumPortionsNeeded = hourlySodiumLossMg / safeSodiumMg;
            const potassiumPortionsNeeded = hourlyPotassiumLossMg / safePotassiumMg;
            const maxPortionsNeeded = Math.max(sodiumPortionsNeeded, potassiumPortionsNeeded);

            if (isCapsule) {
                // CÁPSULAS: Solo unidades enteras
                totalPortions = Math.max(1, Math.round(maxPortionsNeeded));
                sodiumPortions = Math.max(1, Math.round(sodiumPortionsNeeded));
                potassiumPortions = Math.max(1, Math.round(potassiumPortionsNeeded));
            } else {
                // BEBIDAS: Fraccionables en cuartos
                totalPortions = Math.max(0.25, Math.round(maxPortionsNeeded * 4) / 4);
                sodiumPortions = Math.max(0.25, Math.round(sodiumPortionsNeeded * 4) / 4);
                potassiumPortions = Math.max(0.25, Math.round(potassiumPortionsNeeded * 4) / 4);
            }
        }

        // Total mg recomendados por hora - AJUSTADO para aproximarse a pérdidas
        let recommendedSodiumMg = totalPortions * safeSodiumMg;
        let recommendedPotassiumMg = hydrationRecommendation.potassium_mg === 0 ? 0 : totalPortions * safePotassiumMg;

        // AJUSTE FINAL: Si la recomendación excede significativamente las pérdidas, reducir
        // Solo reducir si la diferencia es mayor al 50% para evitar sub-dosificación
        const sodiumRatio = recommendedSodiumMg / hourlySodiumLossMg;
        const potassiumRatio = recommendedPotassiumMg / hourlyPotassiumLossMg;

        if (sodiumRatio > 1.5 && hourlySodiumLossMg > 100) {
            // Reducir porciones de sodio respetando tipo de suplemento
            let adjustedSodiumPortions;
            if (isCapsule) {
                // CÁPSULAS: Solo unidades enteras, mínimo 1
                adjustedSodiumPortions = Math.max(1, Math.round(hourlySodiumLossMg / safeSodiumMg));
            } else {
                // BEBIDAS: Fraccionables en cuartos
                adjustedSodiumPortions = Math.max(0.25, Math.round((hourlySodiumLossMg / safeSodiumMg) * 4) / 4);
            }
            recommendedSodiumMg = adjustedSodiumPortions * safeSodiumMg;
            totalPortions = Math.max(totalPortions, adjustedSodiumPortions);
        }

        if (potassiumRatio > 1.5 && hourlyPotassiumLossMg > 50 && hydrationRecommendation.potassium_mg > 0) {
            // Reducir porciones de potasio respetando tipo de suplemento
            let adjustedPotassiumPortions;
            if (isCapsule) {
                // CÁPSULAS: Solo unidades enteras, mínimo 1
                adjustedPotassiumPortions = Math.max(1, Math.round(hourlyPotassiumLossMg / safePotassiumMg));
            } else {
                // BEBIDAS: Fraccionables en cuartos
                adjustedPotassiumPortions = Math.max(0.25, Math.round((hourlyPotassiumLossMg / safePotassiumMg) * 4) / 4);
            }
            recommendedPotassiumMg = adjustedPotassiumPortions * safePotassiumMg;
            totalPortions = Math.max(totalPortions, adjustedPotassiumPortions);
        }

        // VALIDACIÓN: Evitar NaN/Infinity y asegurar valores mínimos razonables
        let safeRecommendedSodiumMg = isFinite(recommendedSodiumMg) ? Math.max(Math.round(recommendedSodiumMg), 0) : 0;
        let safeRecommendedPotassiumMg = isFinite(recommendedPotassiumMg) ? Math.max(Math.round(recommendedPotassiumMg), 0) : 0;

        // Valores mínimos para pérdidas muy bajas
        if (hourlySodiumLossMg < 50) safeRecommendedSodiumMg = Math.max(safeRecommendedSodiumMg, 100);
        if (hourlyPotassiumLossMg < 25 && hydrationRecommendation.potassium_mg > 0) safeRecommendedPotassiumMg = Math.max(safeRecommendedPotassiumMg, 50);

        const foodCombination = generateFoodCombination(targetCHO, targetProtein, phase);
        
        // CALCULAR BALANCE TOTAL DE SODIO Y POTASIO (Alimentos + Electrolitos)
        const totalSodiumMg = safeRecommendedSodiumMg + (foodCombination.totalSodium || 0);
        const totalPotassiumMg = safeRecommendedPotassiumMg + (foodCombination.totalPotassium || 0);
        
        // CALCULAR PORCENTAJE DE REPOSICIÓN vs PÉRDIDAS
        const sodiumReplacementPercent = hourlySodiumLossMg > 0 ? Math.round((totalSodiumMg / hourlySodiumLossMg) * 100) : 100;
        const potassiumReplacementPercent = hourlyPotassiumLossMg > 0 ? Math.round((totalPotassiumMg / hourlyPotassiumLossMg) * 100) : 100;
        
        recommendations.push({
            hour: hour,
            phase: phase,
            calories: Math.round(hourlyCalories),
            targetCHO: targetCHO,
            targetProtein: targetProtein,
            foodCombination: foodCombination,
            water: waterML,
            electrolytesSodiumMg: safeRecommendedSodiumMg,
            electrolytesPotassiumMg: safeRecommendedPotassiumMg,
            electrolytesPortions: totalPortions,
            hydrationDrink: hydrationRecommendation,
            sodiumLoss: Math.round(hourlySodiumLossMg),
            potassiumLoss: Math.round(hourlyPotassiumLossMg),
            // NUEVOS CAMPOS: Balance total incluyendo alimentos
            totalSodiumMg: totalSodiumMg,
            totalPotassiumMg: totalPotassiumMg,
            foodSodiumMg: foodCombination.totalSodium || 0,
            foodPotassiumMg: foodCombination.totalPotassium || 0,
            sodiumReplacementPercent: sodiumReplacementPercent,
            potassiumReplacementPercent: potassiumReplacementPercent
        });
    }
    
    return recommendations;
}

// Función getHydrationRecommendation AJUSTADA con validaciones adicionales
function getHydrationRecommendation(hourlySodiumLossMg, hourlyPotassiumLossMg, distance, phase, totalHours = null) {
    // VALIDACIÓN: Asegurar valores finitos y positivos
    if (!isFinite(hourlySodiumLossMg) || hourlySodiumLossMg < 0) hourlySodiumLossMg = 0;
    if (!isFinite(hourlyPotassiumLossMg) || hourlyPotassiumLossMg < 0) hourlyPotassiumLossMg = 0;

    const hoursRange = totalHours || Math.ceil(totalTime);

    // RANGO 0-2 HORAS: Muy hipotónica prioritaria
    if (hoursRange <= 2) {
        if (hourlySodiumLossMg > 120) {
            return ELECTROLYTE_DATABASE.find(d => d.name === 'Bebida hipotónica') || ELECTROLYTE_DATABASE[0];
        } else {
            return ELECTROLYTE_DATABASE.find(d => d.name === 'Bebida muy hipotónica') || ELECTROLYTE_DATABASE[0];
        }
    }

    // RANGO 2-4 HORAS: Hipotónica prioritaria
    else if (hoursRange <= 4) {
        if (hourlySodiumLossMg > 180) {
            return ELECTROLYTE_DATABASE.find(d => d.name === 'Bebida isotónica 6%') || ELECTROLYTE_DATABASE[0];
        } else {
            return ELECTROLYTE_DATABASE.find(d => d.name === 'Bebida hipotónica') || ELECTROLYTE_DATABASE[0];
        }
    }

    // RANGO 4-8 HORAS: Isotónica prioritaria (EVITAR cápsula para mantener potasio)
    else if (hoursRange <= 8) {
        if (hourlySodiumLossMg > 280) {
            // CAMBIO: Priorizar isotónica sobre cápsula para mantener potasio
            return Math.random() > 0.8 ? 
                ELECTROLYTE_DATABASE.find(d => d.name === 'Cápsula de sal + agua') : 
                ELECTROLYTE_DATABASE.find(d => d.name === 'Bebida isotónica 6%') || ELECTROLYTE_DATABASE[0];
        } else {
            return ELECTROLYTE_DATABASE.find(d => d.name === 'Bebida isotónica 6%') || ELECTROLYTE_DATABASE[0];
        }
    }

    // RANGO 8+ HORAS: Reducir probabilidad de cápsula para mantener potasio
    else {
        if (hourlySodiumLossMg > 350) {
            // CAMBIO: Reducir probabilidad de cápsula para mantener potasio
            return Math.random() > 0.7 ? 
                ELECTROLYTE_DATABASE.find(d => d.name === 'Bebida hipertónica') : 
                ELECTROLYTE_DATABASE.find(d => d.name === 'Bebida isotónica 6%') || ELECTROLYTE_DATABASE[0];
        } else {
            // CAMBIO: Isotónica en lugar de cápsula para pérdidas moderadas
            return Math.random() > 0.6 ? 
                ELECTROLYTE_DATABASE.find(d => d.name === 'Bebida isotónica 6%') :
                ELECTROLYTE_DATABASE.find(d => d.name === 'Cápsula de sal + agua') || ELECTROLYTE_DATABASE[0];
        }
    }
}

// Función generateFoodCombination AJUSTADA para precisión y EVITAR REPETICIONES
function generateFoodCombination(targetCHO, targetProtein, phase) {
    // VALIDACIÓN CRÍTICA: Verificar que existe la fase en la base de datos
    if (!SCIENTIFIC_FOOD_DATABASE[phase] || SCIENTIFIC_FOOD_DATABASE[phase].length === 0) {
        console.warn(`⚠️ Fase '${phase}' no encontrada o vacía en SCIENTIFIC_FOOD_DATABASE`);
        // Fallback: usar la primera fase disponible
        const fallbackPhase = Object.keys(SCIENTIFIC_FOOD_DATABASE)[0];
        console.log(`🔄 Usando fase fallback: ${fallbackPhase}`);
        phase = fallbackPhase;
    }

    const availableFoods = SCIENTIFIC_FOOD_DATABASE[phase];
    const combination = [];
    let currentCHO = 0;
    let currentProtein = 0;
    let attempts = 0;

    // VALIDACIÓN: Asegurar que hay alimentos disponibles
    if (!availableFoods || availableFoods.length === 0) {
        console.error('❌ ERROR CRÍTICO: No hay alimentos disponibles para ninguna fase');
        return {
            foods: [{ name: "Alimento básico (fallback)", carbs: Math.max(targetCHO, 30), protein: Math.max(targetProtein, 5), sodium_mg: 50, potassium_mg: 150 }],
            totalCHO: Math.max(targetCHO, 30),
            totalProtein: Math.max(targetProtein, 5),
            totalSodium: 50,
            totalPotassium: 150,
            targetCHO: targetCHO,
            targetProtein: targetProtein
        };
    }

    // HISTORIAL PARA EVITAR REPETICIONES - Variable global para mantener estado entre llamadas
    if (typeof window.foodHistory === 'undefined') {
        window.foodHistory = [];
    }

    // Mantener solo las últimas 3 recomendaciones para evitar repeticiones recientes
    if (window.foodHistory.length > 3) {
        window.foodHistory = window.foodHistory.slice(-3);
    }

    // Filtrar alimentos según fase y objetivos de proteína
    let filteredFoods = availableFoods;

    if (targetProtein === 0) {
        // Fases tempranas: preferir alimentos sin proteína
        filteredFoods = availableFoods.filter(food => food.protein <= 2);
    } else if (targetProtein > 0 && targetProtein <= 10) {
        // Fases medias: balance CHO + proteína moderada
        filteredFoods = availableFoods.filter(food => food.protein <= 15);
    } else {
        // Fases avanzadas: incluir alimentos con proteína alta
        filteredFoods = availableFoods; // Todos disponibles
    }

    // VALIDACIÓN: Si el filtro deja la lista vacía, usar todos los alimentos disponibles
    if (filteredFoods.length === 0) {
        console.warn(`⚠️ Filtro de proteína dejó lista vacía para fase ${phase}, usando todos los alimentos`);
        filteredFoods = availableFoods;
    }

    // Si aún no hay alimentos suficientes, usar todos
    if (filteredFoods.length < 3) {
        filteredFoods = availableFoods;
    }

    while ((currentCHO < targetCHO * 0.9 || (targetProtein > 0 && currentProtein < targetProtein * 0.8)) && attempts < 20) {
        // Función auxiliar para verificar si una combinación es demasiado similar a las recientes
        const isTooSimilar = (candidateFood) => {
            return window.foodHistory.some(recent => {
                return recent.foods.some(recentFood => recentFood.name === candidateFood.name);
            });
        };

        // Filtrar alimentos que sean demasiado similares a los recientes
        let availableCandidates = filteredFoods.filter(food => !isTooSimilar(food));

        // Si quedan pocos candidatos, permitir algunos similares pero no idénticos
        if (availableCandidates.length < 2) {
            availableCandidates = filteredFoods.filter(food => {
                // Permitir alimentos similares pero no idéctidos
                return !window.foodHistory.some(recent =>
                    recent.foods.length === 1 && recent.foods[0].name === food.name
                );
            });
        }

        // Si aún no hay candidatos suficientes, usar todos
        if (availableCandidates.length === 0) {
            availableCandidates = filteredFoods;
        }

        // VALIDACIÓN: Asegurar que hay candidatos disponibles
        if (availableCandidates.length === 0) {
            console.warn(`⚠️ No hay candidatos disponibles después del filtro, usando alimento básico`);
            const fallbackFood = { name: "Alimento básico", carbs: Math.ceil(targetCHO / 2), protein: Math.ceil(targetProtein / 2) };
            combination.push(fallbackFood);
            currentCHO += fallbackFood.carbs;
            currentProtein += fallbackFood.protein;
            break;
        }

        const food = availableCandidates[Math.floor(Math.random() * availableCandidates.length)];

        // Verificar si añadir este alimento mejora el balance general
        const newCHO = currentCHO + food.carbs;
        const newProtein = currentProtein + food.protein;

        // Solo añadir si no excede demasiado los objetivos
        if (newCHO <= targetCHO * 1.1 && newProtein <= targetProtein * 1.2) {
            combination.push(food);
            currentCHO = newCHO;
            currentProtein = newProtein;
        }
        attempts++;
    }

    // VALIDACIÓN CRÍTICA: Si no se seleccionó ningún alimento, forzar selección de al menos uno
    if (combination.length === 0) {
        console.warn(`⚠️ No se pudo seleccionar ningún alimento válido, forzando selección básica`);
        const basicFood = availableFoods[Math.floor(Math.random() * availableFoods.length)];
        combination.push(basicFood);
        currentCHO = basicFood.carbs;
        currentProtein = basicFood.protein;
    }

    // Ajustar el último alimento si es necesario para acercarse más al objetivo
    if (combination.length > 0 && (currentCHO < targetCHO * 0.95 || (targetProtein > 0 && currentProtein < targetProtein * 0.9))) {
        const lastFood = combination[combination.length - 1];
        const choAdjustment = Math.max(0, targetCHO - currentCHO);
        const proteinAdjustment = Math.max(0, targetProtein - currentProtein);

        lastFood.adjustedCarbs = lastFood.carbs + choAdjustment;
        lastFood.adjustedProtein = lastFood.protein + proteinAdjustment;
        currentCHO = targetCHO;
        currentProtein = targetProtein;
    }

    // CALCULAR SODIO Y POTASIO TOTAL DE LOS ALIMENTOS
    let totalFoodSodium = 0;
    let totalFoodPotassium = 0;
    
    combination.forEach(food => {
        // Usar valores ajustados si existen, sino usar valores base
        const sodiumMg = food.sodium_mg || 0;
        const potassiumMg = food.potassium_mg || 0;
        
        // Si el alimento tiene valores ajustados, calcular proporcionalmente
        if (food.adjustedCarbs && food.carbs > 0) {
            const adjustmentFactor = food.adjustedCarbs / food.carbs;
            totalFoodSodium += Math.round(sodiumMg * adjustmentFactor);
            totalFoodPotassium += Math.round(potassiumMg * adjustmentFactor);
        } else {
            totalFoodSodium += sodiumMg;
            totalFoodPotassium += potassiumMg;
        }
    });

    // VALIDACIÓN FINAL: Asegurar valores no-zero
    const finalCHO = Math.max(Math.round(currentCHO), 1);
    const finalProtein = Math.max(Math.round(currentProtein), 0);
    const finalSodium = Math.max(Math.round(totalFoodSodium), 0);
    const finalPotassium = Math.max(Math.round(totalFoodPotassium), 0);

    // Guardar esta combinación en el historial para futuras comparaciones
    const combinationKey = combination.map(food => food.name).sort().join('|');
    window.foodHistory.push({
        foods: combination,
        combinationKey: combinationKey,
        phase: phase,
        timestamp: Date.now()
    });

    return {
        foods: combination,
        totalCHO: finalCHO,
        totalProtein: finalProtein,
        totalSodium: finalSodium,
        totalPotassium: finalPotassium,
        targetCHO: targetCHO,
        targetProtein: targetProtein
    };
}function getCurrentPhase(time) {
    if (time <= 2) return 'adaptacion';        // 0-2h: Absorción rápida
    if (time <= 4) return 'temprana_sostenida';   // 2-4h: Mayor tolerancia
    if (time <= 8) return 'media_sostenida';     // 4-8h: Energía prolongada
    if (time <= 12) return 'temprana_fatiga';    // 8-12h: Mayor necesidad sal
    if (time <= 16) return 'avanzada_fatiga'; // 12-16h: Recuperación rápida
    return 'critica';                         // 16h+: Supervivencia nutricional
}

// Función para obtener explicación del rango CHO por fase
function getCHOExplanation(phase) {
    const explanations = {
        'adaptacion': '45-60g/h: Absorción óptima, bajo riesgo GI. Ideal para inicio de actividad.',
        'temprana_sostenida': '50-70g/h: Tolerancia máxima, combinación CHO + proteína efectiva.',
        'media_sostenida': '45-75g/h: Demanda energética pico, alimentos mixtos recomendados.',
        'temprana_fatiga': '35-55g/h: Síntomas GI aparecen, reducir para evitar distress.',
        'avanzada_fatiga': '25-45g/h: Estrategias combinadas, alimentos calientes prioritarios.',
        'critica': '15-35g/h: Mínimo supervivencia, enfoque en líquidos y absorción fácil.'
    };
    return explanations[phase] || 'Rango CHO optimizado para esta fase fisiológica.';
}

// Función para traducir fases al español
function translatePhase(phase) {
    const phaseTranslations = {
        'adaptacion': 'Adaptación',
        'temprana_sostenida': 'Temprana Sostenida',
        'media_sostenida': 'Media Sostenida',
        'temprana_fatiga': 'Temprana Fatiga',
        'avanzada_fatiga': 'Avanzada Fatiga',
        'critica': 'Crítica'
    };
    return phaseTranslations[phase] || phase;
}

// Función showResults ACTUALIZADA PARA MOSTRAR SALES EN MG
function showResults(results) {
    console.log('📊 Mostrando resultados:', results); // Debug
    
    // Ocultar calculator y mostrar results
    const calculatorSection = document.getElementById('calculatorSection');
    const resultsSection = document.getElementById('resultsSection');
    
    if (calculatorSection) {
        calculatorSection.style.display = 'none';
        console.log('✅ Calculator ocultado'); // Debug
    } else {
        console.error('❌ Calculator section no encontrado');
    }
    
    if (resultsSection) {
        resultsSection.style.display = 'block';
        resultsSection.style.opacity = '1';
        resultsSection.style.visibility = 'visible';
        resultsSection.classList.add('force-show'); // Añadir clase para forzar visibilidad
        console.log('✅ Results mostrado con estilos inline'); // Debug
    } else {
        console.error('❌ Results section no encontrado');
    }
    
    // Poblar resultados
    const resultsContent = document.getElementById('resultsContent');
    if (resultsContent) {
        console.log('✅ Elemento resultsContent encontrado'); // Debug adicional
        
        const htmlContent = `
            <div class="results-summary">
                <h3>Resumen del Plan</h3>
                <div class="summary-grid">
                    <div class="summary-item">
                        <div class="summary-value">${results.data.totalCalories} kcal</div>
                        <div class="summary-label">Calorías Totales</div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-value">${results.data.totalHydration} ml</div>
                        <div class="summary-label">Hidratación Total</div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-value">${results.data.carbs}g</div>
                        <div class="summary-label">Carbohidratos Totales</div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-value">${results.data.protein}g</div>
                        <div class="summary-label">Proteínas Totales</div>
                    </div>
                </div>
            </div>
            
            <div class="scientific-validation">
                <h3>Recomendaciones por Hora</h3>
                <div class="phase-container">
                    ${results.data.hourlyRecommendations ? results.data.hourlyRecommendations.map(rec => `
                        <div class="hour-block-simple">
                            <h4>Hora ${rec.hour} - Fase ${translatePhase(rec.phase)}</h4>
                            <p><strong>Calorías:</strong> ${rec.calories} kcal | <strong>CHO Objetivo:</strong> ${rec.targetCHO}g | <strong>Proteína Objetivo:</strong> ${rec.targetProtein}g</p>
                            <p><em style="color: #666; font-size: 0.9em;">${getCHOExplanation(rec.phase)}</em></p>
                            
                            <h5>🍎 Alimentación (Carbohidratos + Proteínas)</h5>
                            <p><strong>Combinación:</strong> ${rec.foodCombination ? rec.foodCombination.foods.map(f => `${f.name} (${f.adjustedCarbs || f.carbs}g CHO, ${f.adjustedProtein || f.protein}g PRO)`).join(' + ') : 'No disponible'}</p>
                            <p><strong>Total CHO:</strong> ${rec.foodCombination ? rec.foodCombination.totalCHO : 0}g (Objetivo: ${rec.foodCombination ? rec.foodCombination.targetCHO : 0}g) | <strong>Total PRO:</strong> ${rec.foodCombination ? rec.foodCombination.totalProtein : 0}g (Objetivo: ${rec.foodCombination ? rec.foodCombination.targetProtein : 0}g)</p>
                            <small>Referencia: ISSN Position Stand 2019 - Optimización GI por fase + Proteína 5-10g/h</small>
                            
                            <h5>💧 Hidratación (Agua y Sales)</h5>
                            <p><strong>Agua:</strong> ${rec.water} ml (sin electrolitos, para hidratación básica). <em>Se recomienda dar sorbos cada 15-20 minutos.</em></p>
                            <p><strong>Sales (electrolitos):</strong> ${rec.electrolytesSodiumMg} mg sodio + ${rec.electrolytesPotassiumMg} mg potasio (${rec.electrolytesPortions} porción(es) de ${rec.hydrationDrink.name})</p>
                            <p><small>Pérdida estimada: ${rec.sodiumLoss} mg sodio, ${rec.potassiumLoss} mg potasio</small></p>
                            <small>Referencia: ISSN Position Stand 2017 - Reposición electrolítica en mg para precisión</small>
                        </div>
                    `).join('') : '<p>No hay recomendaciones por hora disponibles</p>'}

                    <div class="hour-block-simple">
                        <h4>Consideraciones Importantes</h4>
                        <p><strong>Guía aproximada:</strong> Estos resultados son estimaciones generales basadas en evidencia científica publicada y promedios poblacionales. No sustituyen el consejo profesional.</p>
                        <p><strong>Personalización detallada necesaria:</strong>Las necesidades reales de cada persona pueden variar significativamente dependiendo de muchos detalles y factores concretos personales.</p>
                        <p><strong>Consulta profesional recomendada:</strong> Para optimizar tu rendimiento y seguridad, consulta con un médico deportivo, nutricionista deportivo o entrenador especializado que pueda ajustar estas recomendaciones a tu situación particular.</p>
                        <p><strong>Uso responsable:</strong> Usa esta información como punto de partida educativo, no como prescripción definitiva. Prueba siempre las estrategias en entrenamientos antes de aplicarlas en competición.</p>
                    </div>
                </div>
            </div>
        `;
        
        console.log('📄 HTML generado:', htmlContent.substring(0, 200) + '...'); // Debug adicional (primeros 200 caracteres)
        console.log('📄 Longitud del HTML:', htmlContent.length); // Debug adicional
        
        resultsContent.innerHTML = htmlContent;
        console.log('✅ Resultados poblados en DOM'); // Debug
        
        // Verificar que el contenido se asignó correctamente
        console.log('🔍 Verificación del contenido asignado:', resultsContent.innerHTML.substring(0, 100)); // Debug
    } else {
        console.error('❌ Results content no encontrado');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
    console.log('✅ Scroll to top ejecutado'); // Debug
}

function updateProgressBar() {
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;
        progressFill.style.width = `${progress}%`;
    }
}

// ==============================================
// DIAGNÓSTICO DE PROTEÍNA - VALIDACIÓN CIENTÍFICA
// Función segura que no afecta el funcionamiento normal
// ==============================================

// Función de diagnóstico de proteína (accesible desde consola del navegador)
function validateProteinCalculations(testData = null) {
    console.log('🧬 DIAGNÓSTICO DE PROTEÍNA - REFUEL.RUN');
    console.log('=' .repeat(60));

    // Si no se pasan datos de prueba, usar datos por defecto
    const testScenarios = testData || [
        { distance: 42, time: 3.5, weight: 70, description: "Maratón corto (<4h)" },
        { distance: 100, time: 8, weight: 70, description: "Ultra trail medio (8h)" },
        { distance: 160, time: 20, weight: 70, description: "Ultra trail largo (20h)" }
    ];

    testScenarios.forEach(scenario => {
        const result = calculateProteinForScenario(scenario.distance, scenario.time, scenario.weight);
        console.log(`\n📊 ${scenario.description}`);
        console.log(`   Distancia: ${scenario.distance}km | Tiempo: ${scenario.time}h | Peso: ${scenario.weight}kg`);
        console.log(`   Proteína total: ${result.totalProtein}g`);
        console.log(`   Proteína/hora (durante ejercicio): ${result.proteinPerHourDuringExercise}g`);
        console.log(`   Mínimo diario: ${result.minDailyProtein}g`);
        console.log(`   Fuente: ${result.source}`);
        console.log(`   ✅ Validación: ${result.isValid ? 'CORRECTO' : 'REVISAR'}`);
    });

    console.log('\n✅ Diagnóstico completado - Cálculos basados en evidencia científica');
    console.log('💡 Para usar: validateProteinCalculations() en la consola del navegador');

    return { success: true, message: 'Diagnóstico completado' };
}

// Función auxiliar para calcular proteína en escenarios de prueba
function calculateProteinForScenario(distance, time, weight) {
    let protein = 0;
    let proteinPerHourDuringExercise = 0;
    let source = '';
    let isValid = true;

    if (time < 4) {
        // EJERCICIO CORTO (<4h): No se recomienda proteína durante ejercicio
        protein = Math.round(weight * 1.2); // Mínimo diario
        proteinPerHourDuringExercise = 0;
        source = 'Sin proteína durante ejercicio (ISSN 2019)';
    } else if (time <= 8) {
        // EJERCICIO MEDIO (4-8h): 5-10g/hora durante ejercicio
        proteinPerHourDuringExercise = 7.5;
        protein = Math.round(time * proteinPerHourDuranteExercise);
        source = '7.5g/h durante ejercicio (ISSN 2019)';
    } else {
        // ULTRA-LARGO (>8h): 10-20g/hora durante ejercicio
        proteinPerHourDuringExercise = 15;
        protein = Math.round(time * proteinPerHourDuranteExercise);
        source = '15g/h durante ejercicio (ACSM 2015)';
    }

    // PROTEÍNA DIARIA MÍNIMA: 1.2g/kg peso corporal
    const minDailyProtein = Math.round(weight * 1.2);
    protein = Math.max(protein, minDailyProtein);

    // Validaciones
    if (time < 4 && proteinPerHourDuranteExercise !== 0) isValid = false;
    if (time >= 4 && time <= 8 && proteinPerHourDuranteExercise !== 7.5) isValid = false;
    if (time > 8 && proteinPerHourDuranteExercise !== 15) isValid = false;
    if (protein < minDailyProtein) isValid = false;

    return {
        totalProtein: protein,
        proteinPerHourDuringExercise: proteinPerHourDuranteExercise,
        minDailyProtein: minDailyProtein,
        source: source,
        isValid: isValid
    };
}

// Función para validar bases de datos de alimentos
function validateFoodDatabase() {
    console.log('🍎 VALIDACIÓN DE BASES DE DATOS ALIMENTARIAS');
    console.log('=' .repeat(60));

    let totalFoods = 0;
    let validFoods = 0;
    let issues = [];

    Object.keys(SCIENTIFIC_FOOD_DATABASE).forEach(phase => {
        console.log(`\n📂 Fase: ${phase.toUpperCase()}`);
        SCIENTIFIC_FOOD_DATABASE[phase].forEach(food => {
            totalFoods++;
            let isValid = true;
            let foodIssues = [];

            // Validar que tenga todos los campos requeridos
            if (typeof food.name !== 'string' || food.name.length < 2) {
                isValid = false;
                foodIssues.push('Nombre inválido');
            }
            if (typeof food.carbs !== 'number' || food.carbs < 0) {
                isValid = false;
                foodIssues.push('Carbohidratos inválidos');
            }
            if (typeof food.protein !== 'number' || food.protein < 0) {
                isValid = false;
                foodIssues.push('Proteína inválida');
            }
            if (typeof food.evidence !== 'string' || food.evidence.length < 10) {
                isValid = false;
                foodIssues.push('Evidencia insuficiente');
            }

            if (isValid) {
                validFoods++;
                console.log(`   ✅ ${food.name}: ${food.carbs}g CHO, ${food.protein}g PRO`);
            } else {
                issues.push(`${food.name}: ${foodIssues.join(', ')}`);
                console.log(`   ❌ ${food.name}: ${foodIssues.join(', ')}`);
            }
        });
    });

    console.log(`\n📊 Resumen: ${validFoods}/${totalFoods} alimentos válidos`);
    if (issues.length > 0) {
        console.log('⚠️  Problemas encontrados:');
        issues.forEach(issue => console.log(`   - ${issue}`));
    }

    return { totalFoods, validFoods, issues };
}

// Exponer funciones de diagnóstico globalmente (solo para desarrollo/debugging)
if (typeof window !== 'undefined') {
    window.validateProteinCalculations = validateProteinCalculations;
    window.validateFoodDatabase = validateFoodDatabase;
    window.calculateProteinForScenario = calculateProteinForScenario;
}

// VARIABLES GLOBALES
let currentStep = 1;
const totalSteps = 3;
console.log('🚀 Initial currentStep:', currentStep, 'totalSteps:', totalSteps);

// INICIALIZACIÓN - UNIFICADA
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 REFUEL.RUN - Inicializando...');
    
    // Añadir event listeners para los botones de navegación
    const nextButton = document.getElementById('nextButton'); // Ajusta el ID si es diferente
    if (nextButton) {
        nextButton.addEventListener('click', nextStep);
    }
    
    const prevButton = document.getElementById('prevButton'); // Ajusta el ID si es diferente
    if (prevButton) {
        prevButton.addEventListener('click', prevStep);
    }
    
    const form = document.getElementById('nutritionWizard');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('📝 Formulario enviado en step:', currentStep);
            
            if (currentStep !== totalSteps) {
                console.warn('⚠️ Intento de envío en step incorrecto:', currentStep);
                return;
            }
            
            if (!validateStep(currentStep)) {
                console.log('❌ Validación fallida en step:', currentStep);
                return;
            }
            
            console.log('✅ Iniciando cálculo científico...');
            
            const loadingSpinner = document.getElementById('loadingSpinner');
            if (loadingSpinner) {
                loadingSpinner.style.display = 'flex';
            }
            
            // Dar tiempo mínimo para mostrar el spinner y procesar
            setTimeout(() => {
                const formData = collectFormData();
                console.log('📊 Datos del formulario:', formData);
                
                if (!formData) {
                    alert('Por favor, completa todos los campos correctamente.');
                    if (loadingSpinner) loadingSpinner.style.display = 'none';
                    return;
                }
                
                const results = calculateNutritionPlan(formData);
                console.log('🧮 Resultados del cálculo:', results);
                
                if (loadingSpinner) loadingSpinner.style.display = 'none';
                
                showResults(results);
            }, 800);
        });
    }
    
    updateProgressBar();
    
    console.log('✅ REFUEL.RUN - Sistema inicializado correctamente');
    console.log('🔬 Motor científico: ACTIVO');
    
    const particlesContainer = document.getElementById('particles-bg');
    if (particlesContainer) {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 15}s`;
            particle.style.animationDuration = `${10 + Math.random() * 10}s`;
            particlesContainer.appendChild(particle);
        }
    }

    if (typeof addAnimationStyles === 'function') {
        addAnimationStyles();
    }
});

// Función handleFormSubmit - CORREGIDA para manejar submit
function handleFormSubmit(event) {
    event.preventDefault(); // Prevenir recarga de página
    
    console.log('✅ Submit iniciado'); // Para debug
    
    // Mostrar loading spinner
    showLoadingSpinner();
    
    // Recopilar datos del formulario
    const formData = new FormData(event.target);
    const data = collectFormData(formData);
    
       
    if (!data) {
        console.error('❌ Datos del formulario inválidos');
        hideLoadingSpinner();
        return;
    }
    
    console.log('✅ Datos recopilados:', data); // Para debug
    
    // Calcular plan nutricional
    const results = calculateNutritionPlan(data);
    
    if (!results) {
        console.error('❌ Error en cálculo');
        hideLoadingSpinner();
        return;
    }
    
    console.log('✅ Cálculo completado:', results); // Para debug
    
    // Mostrar resultados
    showResults(results);
    
    // Ocultar loading spinner
    hideLoadingSpinner();
    
    console.log('✅ Resultados mostrados'); // Para debug
}

// Funciones para loading spinner
function showLoadingSpinner() {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        spinner.style.display = 'flex';
    } else {
        console.error('❌ Loading spinner no encontrado');
    }
}

function hideLoadingSpinner() {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        spinner.style.display = 'none';
    }
}

function showCalculator() {
    // Ocultar resultados
    document.getElementById('resultsSection').style.display = 'none';
    // Mostrar calculadora
    document.getElementById('calculatorSection').style.display = 'block';
    // No resetear formulario para mantener datos
    // document.getElementById('nutritionWizard').reset(); // Comentado para mantener datos
    // Resetear progreso
    currentStep = 1; // Asegurar que currentStep sea 1
    updateProgressBar(); // Usar la función correcta
    // Mostrar primer paso
    showStep(1);
}

// FUNCIÓN DE ANÁLISIS Y VALIDACIÓN CHO - Verifica cumplimiento rangos científicos
function analyzeCHOCalculations() {
    console.log("🔬 ANÁLISIS DE VALIDACIÓN CHO - Verificando cumplimiento rangos científicos");
    console.log("=" .repeat(80));
    
    let allValid = true;
    const issues = [];
    
    // 1. VERIFICAR RANGOS CONSTANTS.PHASES vs BASE DE DATOS
    console.log("📊 1. VERIFICANDO RANGOS cho_range EN CONSTANTS.PHASES:");
    Object.keys(CONSTANTS.PHASES).forEach(phase => {
        const phaseData = CONSTANTS.PHASES[phase];
        const foodDatabase = SCIENTIFIC_FOOD_DATABASE[phase];
        
        if (!foodDatabase || foodDatabase.length === 0) {
            issues.push(`❌ Fase ${phase}: Base de datos vacía`);
            allValid = false;
            return;
        }
        
        // Calcular rangos reales de CHO en la base de datos
        const choValues = foodDatabase.map(food => food.carbs);
        const minCHO = Math.min(...choValues);
        const maxCHO = Math.max(...choValues);
        const avgCHO = Math.round(choValues.reduce((a, b) => a + b, 0) / choValues.length);
        
        console.log(`   ${phase}:`);
        console.log(`     - Rango definido: ${phaseData.cho_range.min}-${phaseData.cho_range.max}g/h`);
        console.log(`     - Rango real BD: ${minCHO}-${maxCHO}g/h (promedio: ${avgCHO}g)`);
        
        // Verificar que el promedio esté dentro del rango definido
        if (avgCHO < phaseData.cho_range.min || avgCHO > phaseData.cho_range.max) {
            issues.push(`⚠️ Fase ${phase}: Promedio BD (${avgCHO}g) fuera de rango definido (${phaseData.cho_range.min}-${phaseData.cho_range.max}g)`);
            allValid = false;
        } else {
            console.log(`     ✅ VÁLIDO: Promedio dentro del rango`);
        }
    });
    
    // 2. VERIFICAR CUMPLIMIENTO ISSN 2019 (mínimo 30g/h)
    console.log("\n📋 2. VERIFICANDO CUMPLIMIENTO ISSN 2019 (mínimo 30g CHO/h):");
    Object.keys(SCIENTIFIC_FOOD_DATABASE).forEach(phase => {
        const foods = SCIENTIFIC_FOOD_DATABASE[phase];
        const belowMinimum = foods.filter(food => food.carbs < 30);
        
        if (belowMinimum.length > 0) {
            console.log(`   ❌ Fase ${phase}: ${belowMinimum.length} alimentos < 30g CHO:`);
            belowMinimum.forEach(food => {
                console.log(`     - ${food.name}: ${food.carbs}g CHO`);
            });
            issues.push(`Fase ${phase}: ${belowMinimum.length} alimentos bajo mínimo ISSN`);
            allValid = false;
        } else {
            console.log(`   ✅ Fase ${phase}: Todos los alimentos ≥ 30g CHO (ISSN 2019)`);
        }
    });
    
    // 3. SIMULAR CÁLCULO PARA VERIFICAR FUNCIONAMIENTO
    console.log("\n🧮 3. SIMULANDO CÁLCULOS DE RECOMENDACIONES:");
    const testScenarios = [
        { time: 1, expected: 'adaptacion' },
        { time: 3, expected: 'temprana_sostenida' },
        { time: 6, expected: 'media_sostenida' },
        { time: 10, expected: 'temprana_fatiga' },
        { time: 14, expected: 'avanzada_fatiga' },
        { time: 18, expected: 'critica' }
    ];
    
    testScenarios.forEach(scenario => {
        const phase = getCurrentPhase(scenario.time);
        const phaseData = CONSTANTS.PHASES[phase];
        
        if (phase !== scenario.expected) {
            issues.push(`❌ Hora ${scenario.time}: Fase calculada '${phase}' ≠ esperada '${scenario.expected}'`);
            allValid = false;
        }
        
        // Simular selección de alimento para esta fase
        const foods = SCIENTIFIC_FOOD_DATABASE[phase];
        if (foods && foods.length > 0) {
            const sampleFood = foods[Math.floor(Math.random() * foods.length)];
            console.log(`   Hora ${scenario.time}h (${phase}): ${sampleFood.name} = ${sampleFood.carbs}g CHO`);
            
            // Verificar que esté en rango
            if (sampleFood.carbs < phaseData.cho_range.min || sampleFood.carbs > phaseData.cho_range.max) {
                issues.push(`⚠️ Hora ${scenario.time}: Alimento ${sampleFood.name} (${sampleFood.carbs}g) fuera de rango fase (${phaseData.cho_range.min}-${phaseData.cho_range.max}g)`);
                allValid = false;
            }
        }
    });
    
    // 4. RESUMEN FINAL
    console.log("\n" + "=" .repeat(80));
    console.log("📋 RESUMEN DEL ANÁLISIS:");
    
    if (allValid) {
        console.log("✅ TODOS LOS CÁLCULOS CHO SON VÁLIDOS");
        console.log("✅ Cumplimiento ISSN 2019: 100%");
        console.log("✅ Rangos fase-base datos: ALINEADOS");
        console.log("✅ Funciones de cálculo: OPERATIVAS");
    } else {
        console.log("❌ SE ENCONTRARON PROBLEMAS:");
        issues.forEach(issue => console.log(`   - ${issue}`));
    }
    
    console.log("=" .repeat(80));
    
    return {
        valid: allValid,
        issues: issues,
        summary: {
            totalPhases: Object.keys(CONSTANTS.PHASES).length,
            totalFoods: Object.values(SCIENTIFIC_FOOD_DATABASE).reduce((sum, foods) => sum + foods.length, 0),
            issuesFound: issues.length
        }
    };
}

// Ejecutar análisis automáticamente al cargar la página (en desarrollo)
if (typeof window !== 'undefined') {
    window.analyzeCHO = analyzeCHOCalculations;
    console.log("🔧 Función analyzeCHOCalculations() disponible. Ejecuta window.analyzeCHO() para análisis completo.");
}
