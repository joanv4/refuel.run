const CONSTANTS = {

    BASE_CALORIC_EXPENDITURE: {
        base: 40,
        weight_factor: 0.3
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
    sodium_loss: 850,
    potassium_loss: 160,
    electrolyte_factor: 0.7,
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
            cho_range: { min: 45, max: 60 }
        },
        temprana_sostenida: {
            start: 2, end: 4,
            carb_factor: 0.70,
            hydration_factor: 0.9,
            cho_range: { min: 50, max: 70 }
        },
        media_sostenida: {
            start: 4, end: 8,
            carb_factor: 0.75,
            hydration_factor: 1.0,
            cho_range: { min: 45, max: 75 }
        },
        temprana_fatiga: {
            start: 8, end: 12,
            carb_factor: 0.68,
            hydration_factor: 1.1,
            cho_range: { min: 35, max: 55 }
        },
        avanzada_fatiga: {
            start: 12, end: 16,
            carb_factor: 0.62,
            hydration_factor: 1.15,
            cho_range: { min: 25, max: 45 }
        },
        critica: {
            start: 16, end: 999,
            carb_factor: 0.35,
            hydration_factor: 1.2,
            cho_range: { min: 15, max: 35 }
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
        { name: "Gel energético", carbs: 35, protein: 0, evidence: "ISSN 2019: Elite 100 millas 71±20g/h. Absorción optimizada glucosa/fructosa." },
        { name: "Bebida isotónica 6%", carbs: 30, protein: 0, evidence: "ISSN 2019: Finalizadores vs no-finalizadores mayor consumo líquidos. 30g CHO/500ml." },
        { name: "Gominolas energéticas", carbs: 25, protein: 0, evidence: "ISSN 2019: Transportadores múltiples CHO. Estudio Ultra Mallorca 30g/h promedio." },
        { name: "Dátiles frescos", carbs: 20, protein: 1, evidence: "ISSN 2019: Fuente natural documentada estudios de campo. 20g CHO/2 unidades." },

        { name: "Plátano maduro", carbs: 22, protein: 1, evidence: "Más común avituallamientos según análisis 11 corredores trail. 22g CHO/unidad." },
        { name: "Puré de frutas (compota)", carbs: 25, protein: 0, evidence: "Textura suave, mejor tolerancia GI. USDA: 25g CHO/100g." },
        { name: "Fresas frescas (puñado)", carbs: 15, protein: 1, evidence: "Baja osmolalidad, hidratación. USDA: 15g CHO/100g." },

        { name: "Naranja fresca", carbs: 18, protein: 1, evidence: "ADVERTENCIA ISSN: Cítricos pueden causar distress GI. Usar con precaución." },
        { name: "Kiwi", carbs: 12, protein: 1, evidence: "Alta fibra puede comprometer absorción. USDA: 12g CHO/100g." },
    ],

    temprana_sostenida: [
        // COMBINACIÓN CHO + PROTEÍNA - Evidencia Categoría A
        { name: "Sandwich queso + membrillo", carbs: 35, protein: 18, evidence: "Proteína + CHO + sal. Finalizadores 100 millas: 131.2±79.0g proteína total. Queso manchego: ~18g proteína/porción." },
        { name: "Barrita energética con proteína", carbs: 28, protein: 10, evidence: "ISSN 2019: Proteína mejora rendimiento muscular. 20-30g CHO + 5-10g proteína. Barritas especializadas: 10g proteína." },

        // ALIMENTOS SÓLIDOS SUAVES
        { name: "Bocadillo pan blanco + miel", carbs: 45, protein: 8, evidence: "ISSN 2019: Combinación CHO rápidos/lentos. Eliud Kipchoge protocolo validado. Pan blanco: ~8g proteína/porción." },

        // FRUTAS + PROTEÍNA
        { name: "Plátano con queso fresco", carbs: 28, protein: 12, evidence: "ISSN: Combinación fruta + proteína mejora tolerancia GI. 22g + 6g CHO. Queso fresco: ~12g proteína/porción." },
    ],

    // FASE MEDIA SOSTENIDA (4-8 horas) - Energía prolongada, alimentos mixtos
    media_sostenida: [
        { name: "Barrita energética de avena", carbs: 30, protein: 6, evidence: "ISSN 2019: Finalizadores 100 millas mayor ingesta sólidos. 30g CHO/porción. Barrita avena: ~6g proteína." },
        { name: "Pasta cocida con salsa", carbs: 35, protein: 12, evidence: "ISSN 2019: Común ultras largos. Mayor palatabilidad mejora ingesta. Pasta con salsa boloñesa: ~12g proteína." },
        { name: "Arroz con verduras", carbs: 32, protein: 4, evidence: "Base dieta élite. ISSN: Combinación CHO + micronutrientes. Arroz + verduras: ~4g proteína." },
        { name: "Yogur con frutas", carbs: 25, protein: 15, evidence: "ISSN 2019: 5-10g proteína/h recomendado. CHO+proteína mejora síntesis muscular. Yogur natural: ~15g proteína/100g." },
        { name: "Sandwich atún + pan", carbs: 38, protein: 20, evidence: "Proteína marina + CHO. ISSN: Ácidos grasos omega-3 mejoran recuperación. Atún enlatado: ~20g proteína/porción." },
        { name: "Yogur griego con miel", carbs: 22, protein: 18, evidence: "ISSN 2019: Proteína alta mejora síntesis. 15g proteína + 22g CHO. Yogur griego: ~18g proteína/porción." },
        { name: "Barrita salada", carbs: 28, protein: 3, evidence: "ISSN 2019: >575mg/L sodio necesario. Combinación CHO+sal efectiva. Barrita salada: ~3g proteína." },
        { name: "Uvas pasas con almendras", carbs: 25, protein: 6, evidence: "Azúcares naturales + grasas. Tolerancia comprobada campo. Almendras: ~6g proteína/porción." },
    ],

    // FASE FATIGA TEMPRANA (8-12 horas) - Mayor necesidad sal, alimentos calientes
    temprana_fatiga: [
        { name: "Sopa puré patatas", carbs: 25, protein: 3, evidence: "ISSN: Alimentos calientes recomendados >50 millas. Sodio + CHO crítico. Sopa patatas: ~3g proteína." },
        { name: "Pasta cocida salada", carbs: 28, protein: 8, evidence: "ISSN 2019: Preferencia alimentos salados aumenta >6h. 28g CHO + NaCl. Pasta cocida: ~8g proteína." },
        { name: "Caldo de verduras", carbs: 15, protein: 2, evidence: "ISSN: Líquidos calientes mejoran apetito. Sodio natural + CHO bajo. Caldo verduras: ~2g proteína." },
        { name: "Pasta cocida (no integral)", carbs: 30, protein: 5, evidence: "ISSN 2019: Común ultras largos. Mejor digestión que integrales en competición. Pasta cocida: ~5g proteína/porción." },
        { name: "Arroz blanco cocido", carbs: 30, protein: 3, evidence: "Base dieta élite keniana. ISSN: Evitar integrales día competición. Arroz blanco: ~3g proteína/porción." },
        { name: "Yogur con miel", carbs: 20, protein: 15, evidence: "Proteína 20g cada 3h recomendado ISSN. CHO+proteína 4:1 ratio. Yogur natural: ~15g proteína." },
        { name: "Queso fresco con pan", carbs: 30, protein: 15, evidence: "ISSN: Proteína + CHO mejora recuperación muscular. 15g proteína + 30g CHO. Queso fresco: ~15g proteína." },
        { name: "Bocadillo pan + queso + membrillo", carbs: 30, protein: 15, evidence: "ISSN: Finalizadores 5x más grasa que no-finalizadores. Variedad sabores. Queso + pan: ~15g proteína." },
    ],

    // FASE FATIGA AVANZADA (12-16 horas) - Recuperación rápida, estrategias combinadas
    avanzada_fatiga: [
        { name: "Miel pura", carbs: 18, protein: 0, evidence: "CHO directo. Kipchoge: 3 cucharadas azúcar té entrenamiento intenso." },
        { name: "Yogur con frutas + miel", carbs: 28, protein: 15, evidence: "ISSN: Combinación recuperación + energía. Proteína + CHO múltiple. Yogur: ~15g proteína." },
        { name: "Plátano con miel", carbs: 30, protein: 1, evidence: "ISSN: Fruta + CHO simple mejora absorción. 22g + 8g CHO." },
        { name: "Bebida electrolitos + Gel", carbs: 35, protein: 0, evidence: "ISSN: Combinación líquidos+sólidos previene monotonía >12h." },
        { name: "Gel + barrita salada", carbs: 32, protein: 3, evidence: "ISSN 2019: Estrategias múltiples mejoran ingesta. 35g + 28g CHO." },
        { name: "Manzana fresca", carbs: 18, protein: 0, evidence: "Tolerancia individual variable. Fibra puede ser problemática >12h." },
        { name: "Uvas frescas + miel", carbs: 28, protein: 1, evidence: "ISSN: Combinación natural + CHO directo. Mejor tolerancia GI." },
    ],

    // FASE CRÍTICA (>16 horas) - Supervivencia nutricional
    critica: [
        // LÍQUIDOS PRIORITARIOS - Evidencia Categoría A
        { name: "Zumo frutas diluido", carbs: 18, protein: 1, evidence: "ISSN: Tolerancia sólidos disminuye duración. Líquidos críticos >16h." },
        { name: "Gel líquido + cafeína", carbs: 22, protein: 0, evidence: "ISSN: Elite 100 millas 912±322mg cafeína total. 50mg/h para fases tardías." },
        { name: "Caldo miso + arroz", carbs: 20, protein: 3, evidence: "ISSN: Comidas calientes estratégicas >50 millas. Sodio crítico EAH." },

        // EMERGENCIA NUTRICIONAL
        { name: "Miel pura", carbs: 18, protein: 0, evidence: "CHO puro. Western States: 96% atletas síntomas GI, miel mejor tolerada." },
        { name: "Plátano en rodajas", carbs: 25, protein: 1, evidence: "ISSN: Textura suave crítica. Plátanos más común avituallamientos." },

        // CONSIDERACIONES ESPECIALES
        { name: "Bebida electrolitos concentrada", carbs: 15, protein: 0, evidence: "ISSN: >575mg/L sodio obligatorio. EAH riesgo fatal >16h ejercicio." }
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
        fluids_ml: 500, // ml por porción (más diluida)
        sodium_mg: 150, // 150 mg sodio por porción (300 mg/L - muy baja concentración)
        potassium_mg: 30, // 30 mg potasio por porción (60 mg/L)
        recommendedHoursRange: "0-2 horas", // Rango óptimo: fases muy tempranas o pérdidas bajas
        hourlySodiumMg: 150, // 150 mg sodio/hora
        hourlyPotassiumMg: 30, // 30 mg potasio/hora
        evidence: "ISSN 2017: <200 mg sodio/hora para pérdidas mínimas. Ideal para adaptación inicial o pérdidas <200 mg/hora."
    },
    {
        name: "Bebida isotónica 6%",
        fluids_ml: 400, // ml por porción para dilución
        sodium_mg: 400, // 400 mg sodio por porción (1000 mg/L concentración típica)
        potassium_mg: 100, // 100 mg potasio por porción (250 mg/L concentración típica)
        recommendedHoursRange: "2-8 horas", // Rango óptimo: fases sostenidas
        hourlySodiumMg: 400, // 400 mg sodio/hora (400 mg/porción asumiendo 1 porción/hora - ISSN 2017: 400-600 mg/hora para reposición moderada)
        hourlyPotassiumMg: 100, // 100 mg potasio/hora (100 mg/porción - JISSN 2018: 50-200 mg/hora para balance)
        evidence: "ISSN 2017: 400-600 mg sodio/hora en 2-8h para balance GI. Cálculo: 1000 mg/L sodio x 400 ml/hora = 400 mg/hora. Óptimo para fases sostenidas (2-8h)."
    },
    {
        name: "Cápsula de sal + agua",
        fluids_ml: 250, // ml de agua para diluir la cápsula
        sodium_mg: 300, // REDUCIDO: 300 mg sodio por cápsula (reposición moderada)
        potassium_mg: 0, // 0 mg potasio (cápsulas de sal pura)
        recommendedHoursRange: "4-16 horas", // Rango óptimo: fases de fatiga
        hourlySodiumMg: 300, // AJUSTADO: 300 mg sodio/hora para evitar sobredosificación
        hourlyPotassiumMg: 0, // 0 mg potasio/hora (sin potasio en cápsulas puras)
        evidence: "ISSN 2017: 300-600 mg sodio/hora en 4-16h para reposición moderada. Evita sobrecarga GI."
    },
    {
        name: "Bebida hipotónica",
        fluids_ml: 400, // ml por porción
        sodium_mg: 200, // 200 mg sodio por porción (500 mg/L)
        potassium_mg: 50, // 50 mg potasio por porción (125 mg/L)
        recommendedHoursRange: "0-4 horas", // Rango óptimo: fases tempranas
        hourlySodiumMg: 200, // 200 mg sodio/hora (200 mg/porción - ISSN 2017: <400 mg/hora para absorción rápida)
        hourlyPotassiumMg: 50, // 50 mg potasio/hora (50 mg/porción - JISSN 2018: 50 mg/hora para reposición baja)
        evidence: "ISSN 2017: <400 mg sodio/hora en 0-4h para evitar sobrecarga GI. Cálculo: 500 mg/L sodio x 400 ml/hora = 200 mg/hora. Óptimo para fases tempranas (0-4h)."
    },
    {
        name: "Bebida hipertónica",
        fluids_ml: 250, // ml por porción
        sodium_mg: 600, // 600 mg sodio por porción (2400 mg/L)
        potassium_mg: 150, // 150 mg potasio por porción (600 mg/L)
        recommendedHoursRange: "8-16+ horas", // Rango óptimo: fases avanzadas y críticas
        hourlySodiumMg: 600, // 600 mg sodio/hora (600 mg/porción - ISSN 2017: >600 mg/hora para reposición crítica)
        hourlyPotassiumMg: 150, // 150 mg potasio/hora (150 mg/porción - EFSA: 150 mg/hora para límites diarios)
        evidence: "ISSN 2017: >600 mg sodio/hora en 8-16+h para EAH crítica. Cálculo: 2400 mg/L sodio x 250 ml/hora = 600 mg/hora. Óptimo para fases avanzadas (>8h)."
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
    
    // Opcional: Scroll al inicio de la página
    window.scrollTo(0, 0);
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

        // CÁLCULO MEJORADO: Adaptar porciones a pérdidas estimadas con precisión decimal
        let sodiumPortions, potassiumPortions, totalPortions;

        if (hydrationRecommendation.potassium_mg === 0) {
            // Solo sodio: calcular porciones basadas únicamente en sodio
            // Usar precisión decimal para dosis más exactas
            sodiumPortions = Math.max(0.25, Math.round((hourlySodiumLossMg / safeSodiumMg) * 4) / 4);
            potassiumPortions = 0; // No hay potasio en esta bebida
            totalPortions = sodiumPortions;
        } else {
            // Ambos electrolitos: calcular con precisión decimal para mejor adaptación
            // Calcular porciones necesarias para cada electrolito por separado
            const sodiumPortionsNeeded = hourlySodiumLossMg / safeSodiumMg;
            const potassiumPortionsNeeded = hourlyPotassiumLossMg / safePotassiumMg;

            // Usar el máximo de los dos, pero con precisión decimal (mínimo 0.25)
            const maxPortionsNeeded = Math.max(sodiumPortionsNeeded, potassiumPortionsNeeded);
            totalPortions = Math.max(0.25, Math.round(maxPortionsNeeded * 4) / 4);

            // Calcular porciones individuales basadas en el total decidido
            sodiumPortions = Math.max(0.25, Math.round((hourlySodiumLossMg / safeSodiumMg) * 4) / 4);
            potassiumPortions = Math.max(0.25, Math.round((hourlyPotassiumLossMg / safePotassiumMg) * 4) / 4);
        }

        // Total mg recomendados por hora - AJUSTADO para aproximarse a pérdidas
        let recommendedSodiumMg = totalPortions * safeSodiumMg;
        let recommendedPotassiumMg = hydrationRecommendation.potassium_mg === 0 ? 0 : totalPortions * safePotassiumMg;

        // AJUSTE FINAL: Si la recomendación excede significativamente las pérdidas, reducir
        // Solo reducir si la diferencia es mayor al 50% para evitar sub-dosificación
        const sodiumRatio = recommendedSodiumMg / hourlySodiumLossMg;
        const potassiumRatio = recommendedPotassiumMg / hourlyPotassiumLossMg;

        if (sodiumRatio > 1.5 && hourlySodiumLossMg > 100) {
            // Reducir porciones de sodio si excede demasiado
            const adjustedSodiumPortions = Math.max(0.25, Math.round((hourlySodiumLossMg / safeSodiumMg) * 4) / 4);
            recommendedSodiumMg = adjustedSodiumPortions * safeSodiumMg;
            totalPortions = Math.max(totalPortions, adjustedSodiumPortions);
        }

        if (potassiumRatio > 1.5 && hourlyPotassiumLossMg > 50 && hydrationRecommendation.potassium_mg > 0) {
            // Reducir porciones de potasio si excede demasiado
            const adjustedPotassiumPortions = Math.max(0.25, Math.round((hourlyPotassiumLossMg / safePotassiumMg) * 4) / 4);
            recommendedPotassiumMg = adjustedPotassiumPortions * safePotassiumMg;
            totalPortions = Math.max(totalPortions, adjustedPotassiumPortions);
        }

        // VALIDACIÓN: Evitar NaN/Infinity y asegurar valores mínimos razonables
        let safeRecommendedSodiumMg = isFinite(recommendedSodiumMg) ? Math.max(Math.round(recommendedSodiumMg), 0) : 0;
        let safeRecommendedPotassiumMg = isFinite(recommendedPotassiumMg) ? Math.max(Math.round(recommendedPotassiumMg), 0) : 0;

        // Valores mínimos para pérdidas muy bajas
        if (hourlySodiumLossMg < 50) safeRecommendedSodiumMg = Math.max(safeRecommendedSodiumMg, 100);
        if (hourlyPotassiumLossMg < 25 && hydrationRecommendation.potassium_mg > 0) safeRecommendedPotassiumMg = Math.max(safeRecommendedPotassiumMg, 50);

        // Agua sugerida para diluir (basada en ml por porción)
        const suggestedWaterForElectrolytes = totalPortions * hydrationRecommendation.fluids_ml;
        
        const foodCombination = generateFoodCombination(targetCHO, targetProtein, phase);
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
            suggestedWaterForElectrolytes: suggestedWaterForElectrolytes,
            sodiumLoss: Math.round(hourlySodiumLossMg),
            potassiumLoss: Math.round(hourlyPotassiumLossMg)
        });
    }
    
    return recommendations;
}

// Función getHydrationRecommendation AJUSTADA con validaciones adicionales
function getHydrationRecommendation(hourlySodiumLossMg, hourlyPotassiumLossMg, distance, phase, totalHours = null) {
    // VALIDACIÓN: Asegurar valores finitos y positivos
    if (!isFinite(hourlySodiumLossMg) || hourlySodiumLossMg < 0) hourlySodiumLossMg = 0;
    if (!isFinite(hourlyPotassiumLossMg) || hourlyPotassiumLossMg < 0) hourlyPotassiumLossMg = 0;

    // Si no hay pérdidas de electrolitos, usar bebida básica
    if (hourlySodiumLossMg === 0 && hourlyPotassiumLossMg === 0) {
        return ELECTROLYTE_DATABASE.find(d => d.name === 'Bebida hipotónica') || ELECTROLYTE_DATABASE[0];
    }

    // CRITERIOS AJUSTADOS POR DISTANCIA, HORAS Y MG - ACSM 2023 + ISSN 2023
    // Umbrales reducidos para activar cápsula/hipertónica más temprano y más aleatoriedad

    const hoursRange = totalHours || Math.ceil(totalTime);

    // RANGO 0-4 HORAS: Priorizar hipotónica (menos isotónica)
    if (hoursRange <= 4) {
        if (hourlySodiumLossMg > 150) { // Umbral reducido
            return Math.random() > 0.7 ? // Más aleatoriedad
                ELECTROLYTE_DATABASE.find(d => d.name === 'Bebida isotónica 6%') :
                ELECTROLYTE_DATABASE.find(d => d.name === 'Bebida hipotónica') || ELECTROLYTE_DATABASE[0];
        } else if (hourlySodiumLossMg > 75) { // NUEVO: Umbral para bebida muy hipotónica
            return Math.random() > 0.6 ? // Más probabilidad de hipotónica
                ELECTROLYTE_DATABASE.find(d => d.name === 'Bebida hipotónica') :
                ELECTROLYTE_DATABASE.find(d => d.name === 'Bebida muy hipotónica') || ELECTROLYTE_DATABASE[0];
        } else {
            return ELECTROLYTE_DATABASE.find(d => d.name === 'Bebida muy hipotónica') || ELECTROLYTE_DATABASE[0];
        }
    }

    // RANGO 4-12 HORAS: Más variedad (menos isotónica, más cápsula)
    else if (hoursRange <= 12) {
        if (hourlySodiumLossMg > 250) { // Umbral reducido
            return Math.random() > 0.5 ? // Más variedad
                ELECTROLYTE_DATABASE.find(d => d.name === 'Cápsula de sal + agua') : 
                ELECTROLYTE_DATABASE.find(d => d.name === 'Bebida isotónica 6%') || ELECTROLYTE_DATABASE[0];
        } else if (hourlySodiumLossMg > 100) { // Umbral reducido
            return Math.random() > 0.6 ? // Más variedad
                ELECTROLYTE_DATABASE.find(d => d.name === 'Bebida isotónica 6%') : 
                ELECTROLYTE_DATABASE.find(d => d.name === 'Bebida hipotónica') || ELECTROLYTE_DATABASE[0];
        } else {
            return ELECTROLYTE_DATABASE.find(d => d.name === 'Bebida hipotónica') || ELECTROLYTE_DATABASE[0];
        }
    }

    // RANGO 12+ HORAS: Priorizar reposición alta (menos isotónica)
    else {
        if (hourlySodiumLossMg > 300) { // Umbral reducido para fases críticas
            return Math.random() > 0.3 ? // Más probabilidad de hipertónica
                ELECTROLYTE_DATABASE.find(d => d.name === 'Bebida hipertónica') : 
                ELECTROLYTE_DATABASE.find(d => d.name === 'Cápsula de sal + agua') || ELECTROLYTE_DATABASE[0];
        } else if (hourlySodiumLossMg > 150) { // Umbral reducido
            return Math.random() > 0.4 ? // Más probabilidad de cápsula
                ELECTROLYTE_DATABASE.find(d => d.name === 'Cápsula de sal + agua') : 
                ELECTROLYTE_DATABASE.find(d => d.name === 'Bebida isotónica 6%') || ELECTROLYTE_DATABASE[0];
        } else {
            return ELECTROLYTE_DATABASE.find(d => d.name === 'Bebida hipotónica') || ELECTROLYTE_DATABASE[0];
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
            foods: [{ name: "Alimento básico (fallback)", carbs: Math.max(targetCHO, 30), protein: Math.max(targetProtein, 5) }],
            totalCHO: Math.max(targetCHO, 30),
            totalProtein: Math.max(targetProtein, 5),
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
                // Permitir alimentos similares pero no idénticos
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

    // VALIDACIÓN FINAL: Asegurar valores no-zero
    const finalCHO = Math.max(Math.round(currentCHO), 1);
    const finalProtein = Math.max(Math.round(currentProtein), 0);

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
                            <p><small>Diluir con ${rec.suggestedWaterForElectrolytes} ml de agua. Pérdida estimada: ${rec.sodiumLoss} mg sodio, ${rec.potassiumLoss} mg potasio</small></p>
                            <small>Referencia: ISSN Position Stand 2017 - Reposición electrolítica en mg para precisión</small>
                        </div>
                    `).join('') : '<p>No hay recomendaciones por hora disponibles</p>'}

                    <div class="hour-block-simple">
                        <h4>Consideraciones Adicionales</h4>
                        <p>Estos resultados son una guía basada en evidencia científica. Ajusta según tus necesidades y respuestas individuales.</p>
                        <p>Consulta con un profesional de la salud o nutricionista deportivo para un plan personalizado.</p>
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
    if (time < 4 && proteinPerHourDuringExercise !== 0) isValid = false;
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
            }, 1500);
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
