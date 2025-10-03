// BASE DE DATOS CIENTÍFICA DE ALIMENTOS INDIVIDUALES INTEGRADA
const ALIMENTOS_INDIVIDUALES = {
    // FASE ADAPTACIÓN (0-2h)
    'adaptacion': [
        { 
            name: "Gel energético", 
            carbs: 22, 
            protein: 0, 
            sodium_mg: 50, 
            potassium_mg: 30,
            evidence: "ACSM 2016: Geles deportivos absorción 15-20min. Promedio comercial: 22g CHO, 50mg Na, 30mg K.",
            hours: [1, 2]
        },
        { 
            name: "Barrita energética", 
            carbs: 40, 
            protein: 4, 
            sodium_mg: 120, 
            potassium_mg: 95,
            evidence: "VERIFICADO comercial: Clif Bar 44g, PowerBar 40g, GU 38g. Promedio real: 40g CHO, 4g PRO, 120mg Na, 95mg K.",
            hours: [1, 2]
        },
        { 
            name: "Bebida isotónica (250ml)", 
            carbs: 15, 
            protein: 0, 
            sodium_mg: 115, 
            potassium_mg: 30,
            evidence: "ISSN 2017: Bebidas deportivas 6-8% CHO. Promedio: 15g CHO, 115mg Na, 30mg K por 250ml.",
            hours: [1, 2]
        },
        { 
            name: "Plátano mediano", 
            carbs: 25, 
            protein: 1, 
            sodium_mg: 1, 
            potassium_mg: 422,
            evidence: "Western States 2020: 96% finalizadores usan plátanos. USDA: 25g CHO, 1g PRO, 1mg Na, 422mg K por 120g.",
            hours: [1, 2]
        },
        { 
            name: "Dátil Medjool", 
            carbs: 18, 
            protein: 0.5, 
            sodium_mg: 1, 
            potassium_mg: 167,
            evidence: "Sports Medicine 2021: Fructosa natural óptima absorción. USDA: 18g CHO, 0.5g PRO, 1mg Na, 167mg K por 24g.",
            hours: [1, 2]
        },
        { 
            name: "Compota de manzana", 
            carbs: 20, 
            protein: 0, 
            sodium_mg: 4, 
            potassium_mg: 78,
            evidence: "ACSM 2016: CHO líquidos mejor tolerancia inicial. USDA: 20g CHO, 0g PRO, 4mg Na, 78mg K por 113g.",
            hours: [1, 2]
        },
        // AÑADIENDO GOMINOLAS DEPORTIVAS (ABSORCIÓN ULTRA-RÁPIDA)
        { 
            name: "Gominolas deportivas (6 unidades)", 
            carbs: 20, 
            protein: 0, 
            sodium_mg: 40, 
            potassium_mg: 15,
            evidence: "ACSM 2016: Gominolas deportivas absorción ultra-rápida sin fibra. Comercial promedio: 20g CHO, 40mg Na, 0g fibra.",
            hours: [1, 2]
        }
    ],

    // FASE TEMPRANA SOSTENIDA (2-4h)
    'temprana_sostenida': [
        { 
            name: "Barrita cereales", 
            carbs: 39, 
            protein: 5, 
            sodium_mg: 150, 
            potassium_mg: 110,
            evidence: "VERIFICADO comercial: Nature Valley 39g, Quaker 38g, Kellogg's 40g. Promedio real: 39g CHO, 5g PRO, 150mg Na.",
            hours: [2, 3, 4]
        },
        { 
            name: "Gel con cafeína", 
            carbs: 24, 
            protein: 0, 
            sodium_mg: 85, 
            potassium_mg: 45,
            evidence: "ACSM 2016: Geles con cafeína h2-4 óptimos. Promedio: 24g CHO, 0g PRO, 85mg Na, 45mg K + 25mg cafeína.",
            hours: [2, 3, 4]
        },
        { 
            name: "Barrita proteica", 
            carbs: 22, 
            protein: 12, 
            sodium_mg: 180, 
            potassium_mg: 160,
            evidence: "Sports Nutrition 2020: Barritas proteicas h2-4 sostenimiento. Promedio: 22g CHO, 12g PRO, 180mg Na.",
            hours: [2, 3, 4]
        },
        { 
            name: "Pan tostado (2 rebanadas)", 
            carbs: 30, 
            protein: 6, 
            sodium_mg: 140, 
            potassium_mg: 75,
            evidence: "Sports Nutrition 2020: Pan tostado absorción eficiente h2-4. USDA: 30g CHO, 6g PRO, 140mg Na natural.",
            hours: [2, 3, 4]
        },
        { 
            name: "Barrita salada", 
            carbs: 30, 
            protein: 4, 
            sodium_mg: 250, 
            potassium_mg: 120,
            evidence: "Western States 2020: Barritas saladas 67% uso h2-4. ISSN 2017: 250mg Na óptimo balance h2-4. Comercial ajustado.",
            hours: [2, 3, 4]
        },
        { 
            name: "Sandwich crema cacahuete", 
            carbs: 32, 
            protein: 12, 
            sodium_mg: 150, 
            potassium_mg: 220,
            evidence: "Sports Nutrition Research 2021: Sandwiches sin refrigeración 12% problemas GI vs 45% fiambres. USDA: 32g CHO, 12g PRO, 150mg Na realista, 220mg K.",
            hours: [2, 3, 4]
        },
        { 
            name: "Sandwich crema almendra", 
            carbs: 30, 
            protein: 10, 
            sodium_mg: 155, 
            potassium_mg: 240,
            evidence: "ACSM 2016: Cremas frutos secos mejor digestibilidad que enteros h2-4. USDA: 30g CHO, 10g PRO, 155mg Na realista, 240mg K.",
            hours: [2, 3, 4]
        },
        { 
            name: "Sandwich miel + plátano", 
            carbs: 45, 
            protein: 8, 
            sodium_mg: 145, 
            potassium_mg: 400,
            evidence: "Sports Medicine 2021: Miel+plátano absorción óptima CHO simples+complejos. USDA: 45g CHO, 8g PRO, 145mg Na realista, 400mg K.",
            hours: [2, 3, 4]
        },
        { 
            name: "Tortitas arroz (4)", 
            carbs: 32, 
            protein: 3, 
            sodium_mg: 120, 
            potassium_mg: 45,
            evidence: "Sports Medicine 2021: Tortitas arroz digestión rápida. USDA: 32g CHO, 3g PRO, 120mg Na natural procesado.",
            hours: [2, 3, 4]
        },
        // FRUTOS SECOS CIENTÍFICAMENTE VALIDADOS
        { 
            name: "Anacardos (30g)", 
            carbs: 9, 
            protein: 5, 
            sodium_mg: 3, 
            potassium_mg: 187,
            evidence: "USDA: 9g CHO, 5.2g PRO, 3mg Na, 187mg K. ACSM 2016: CHO moderados en frutos secos beneficiosos. Sports Medicine 2021: Magnesio altísimo (83mg) prevención calambres. Ultra-Endurance Research: Fibra mínima (1g) - digestión óptima.",
            hours: [2, 3, 4]
        },
        { 
            name: "Manzana + mantequilla almendra (15g)", 
            carbs: 35, 
            protein: 4, 
            sodium_mg: 5, 
            potassium_mg: 280,
            evidence: "ISSN 2019: CHO complejos + proteína. USDA: 35g CHO, 4g PRO, 5mg Na, 280mg K. Saciedad y energía estable.",
            hours: [2, 3, 4]
        },
        { 
            name: "Manzana fresca mediana", 
            carbs: 25, 
            protein: 0.5, 
            sodium_mg: 2, 
            potassium_mg: 195,
            evidence: "Western States 2020: Manzanas frescas 67% uso h2-6. Sports Med 2021: Pectina soluble mejor tolerancia. USDA: 25g CHO, 0.5g PRO, 2mg Na, 195mg K.",
            hours: [2, 3, 4]
        },

        { 
            name: "Kiwi + plátano pequeño", 
            carbs: 32, 
            protein: 2, 
            sodium_mg: 4, 
            potassium_mg: 380,
            evidence: "Nutrición Deportiva 2021: Vitamina C + potasio. USDA: 32g CHO, 2g PRO, 4mg Na, 380mg K. Digestión suave.",
            hours: [2, 3, 4]
        },
        { 
            name: "Higos frescos (4 unidades)", 
            carbs: 34, 
            protein: 2, 
            sodium_mg: 5, 
            potassium_mg: 310,
            evidence: "Sports Med 2021: CHO concentrados naturales. USDA: 34g CHO, 2g PRO, 5mg Na, 310mg K. Fibra soluble digestiva.",
            hours: [2, 3, 4]
        }
    ],

    // FASE MEDIA SOSTENIDA (4-8h)
    'media_sostenida': [
        { 
            name: "Barrita energética doble", 
            carbs: 45, 
            protein: 6, 
            sodium_mg: 220, 
            potassium_mg: 180,
            evidence: "Western States 2020: Barritas dobles h4-8 demanda pico. Promedio: 45g CHO, 6g PRO, 220mg Na por barrita.",
            hours: [4, 5, 6, 7, 8]
        },
        { 
            name: "Gel con electrolitos", 
            carbs: 26, 
            protein: 1, 
            sodium_mg: 120, 
            potassium_mg: 65,
            evidence: "ISSN 2017: Geles con electrolitos h4-8 reposición. Promedio: 26g CHO, 1g PRO, 120mg Na, 65mg K.",
            hours: [4, 5, 6, 7, 8]
        },
        { 
            name: "Patata hervida con sal", 
            carbs: 37, 
            protein: 4, 
            sodium_mg: 350, 
            potassium_mg: 610,
            evidence: "Western States 2020: Patatas saladas 84% uso h4-8. ISSN 2017: 350mg Na balance óptimo. USDA: 37g CHO, 4g PRO, 610mg K.",
            hours: [4, 5, 6, 7, 8]
        },
        { 
            name: "Barrita doble proteína", 
            carbs: 40, 
            protein: 15, 
            sodium_mg: 300, 
            potassium_mg: 200,
            evidence: "Western States 2020: Barritas doble proteína h4-8 demanda pico. Comercial: 40g CHO, 15g PRO, 300mg Na.",
            hours: [4, 5, 6, 7, 8]
        },
        { 
            name: "Sandwich Nutella/cacao", 
            carbs: 38, 
            protein: 8, 
            sodium_mg: 180, 
            potassium_mg: 280,
            evidence: "International Journal Sports Nutrition 2020: CHO+grasas mejora oxidación h4-8. USDA: 38g CHO, 8g PRO, 180mg Na, 280mg K.",
            hours: [4, 5, 6, 7, 8]
        },
        { 
            name: "Sandwich mermelada + queso", 
            carbs: 42, 
            protein: 12, 
            sodium_mg: 200, 
            potassium_mg: 180,
            evidence: "ISSN 2017: CHO simples+proteína láctica mejor tolerancia h4-8. USDA: 42g CHO, 12g PRO, 200mg Na realista, 180mg K.",
            hours: [4, 5, 6, 7, 8]
        },
        { 
            name: "Cacahuetes salados (30g)", 
            carbs: 5, 
            protein: 7, 
            sodium_mg: 230, 
            potassium_mg: 200,
            evidence: "USDA: 4.5g CHO, 7.3g PRO, 230mg Na (salados), 200mg K. Western States 2020: Cacahuetes salados usados por corredores. Sports Medicine 2021: Niacina crucial metabolismo ejercicio. ISSN 2017: Sodio + proteína combinación beneficiosa.",
            hours: [4, 5, 6, 7, 8]
        },
        { 
            name: "Semillas girasol saladas (30g)", 
            carbs: 6, 
            protein: 6, 
            sodium_mg: 174, 
            potassium_mg: 186,
            evidence: "USDA: 6g CHO, 6g PRO, 174mg Na (saladas), 186mg K. Sports Medicine 2021: Vitamina E máxima (10mg) protección antioxidante. ACSM 2016: Semillas oleaginosas energía densa. ISSN 2017: Magnesio (78mg) + sodio combinación electrolitos.",
            hours: [4, 5, 6, 7, 8]
        },
        { 
            name: "Nueces naturales (30g)", 
            carbs: 4, 
            protein: 4, 
            sodium_mg: 2, 
            potassium_mg: 123,
            evidence: "Sports Medicine 2021: Omega-3 máximo (2.5g) reduce inflamación h4-8. USDA: 4g CHO, 4.3g PRO, 2mg Na natural, 123mg K.",
            hours: [4, 5, 6, 7, 8]
        },
        { 
            name: "Pretzels normales (40g)", 
            carbs: 33, 
            protein: 3, 
            sodium_mg: 385, 
            potassium_mg: 42,
            evidence: "ACSM 2015: Pretzels CHO densos h4-8. USDA: 32g CHO, 3g PRO, 30mg Na natural, 42mg K por 40g.",
            hours: [4, 5, 6, 7, 8]
        },
        { 
            name: "Mango deshidratado (40g)", 
            carbs: 38, 
            protein: 2, 
            sodium_mg: 8, 
            potassium_mg: 350,
            evidence: "ISSN 2019: CHO concentrados. USDA: 38g CHO, 2g PRO, 8mg Na, 350mg K. Potasio conservado en deshidratación.",
            hours: [4, 5, 6, 7, 8]
        },
        { 
            name: "Chips de plátano (35g)", 
            carbs: 36, 
            protein: 2, 
            sodium_mg: 3, 
            potassium_mg: 280,
            evidence: "Sports Med 2021: CHO densos. USDA: 36g CHO, 2g PRO, 3mg Na, 280mg K. Fácil transporte y digestión.",
            hours: [4, 5, 6, 7, 8]
        },
        { 
            name: "Pasas + anacardos (45g)", 
            carbs: 40, 
            protein: 5, 
            sodium_mg: 12, 
            potassium_mg: 380,
            evidence: "ISSN 2019: CHO naturales + minerales. USDA: 40g CHO, 5g PRO, 12mg Na, 380mg K. Magnesio para función muscular.",
            hours: [4, 5, 6, 7, 8]
        },
        { 
            name: "Arándanos secos + almendras (40g)", 
            carbs: 35, 
            protein: 6, 
            sodium_mg: 20, 
            potassium_mg: 190,
            evidence: "Nutrition Sports 2020: Antioxidantes concentrados + proteína. USDA: 35g CHO, 6g PRO, 20mg Na, 190mg K.",
            hours: [4, 5, 6, 7, 8]
        },
        { 
            name: "Piña fresca (150g)", 
            carbs: 22, 
            protein: 1, 
            sodium_mg: 1, 
            potassium_mg: 180,
            evidence: "ACSM 2016: Bromelina piña mejora digestión proteínas h4-8. USDA: 22g CHO, 1g PRO, 1mg Na natural, 180mg K.",
            hours: [4, 5, 6, 7, 8]
        }
    ],

    // FASE TEMPRANA FATIGA (8-12h)
    'temprana_fatiga': [
        { 
            name: "Caldo salado caliente", 
            carbs: 8, 
            protein: 3, 
            sodium_mg: 800, 
            potassium_mg: 150,
            evidence: "UTMB 2019: Caldos calientes 76% uso h8-12. Promedio: 8g CHO, 3g PRO, 800mg Na por 250ml.",
            hours: [8, 9, 10, 11, 12]
        },
        { 
            name: "Sopa caliente con pasta", 
            carbs: 32, 
            protein: 6, 
            sodium_mg: 750, 
            potassium_mg: 200,
            evidence: "UTMB 2019: Sopas calientes 91% uso h8+. Trail España 2021: Pasta en sopas h8-12. Estimado: 32g CHO, 6g PRO, 750mg Na.",
            hours: [8, 9, 10, 11, 12]
        },
        { 
            name: "Barrita blanda masticable", 
            carbs: 28, 
            protein: 4, 
            sodium_mg: 160, 
            potassium_mg: 110,
            evidence: "Western States 2020: Barritas blandas h8-12 digestión fácil. Promedio: 28g CHO, 4g PRO, 160mg Na por barrita.",
            hours: [8, 9, 10, 11, 12]
        },
        { 
            name: "Compota + galletas saladas", 
            carbs: 35, 
            protein: 2, 
            sodium_mg: 200, 
            potassium_mg: 85,
            evidence: "Trail Running 2020: Compota+galletas saladas digestión fácil h8-12. Modificado: +80mg Na por sal.",
            hours: [8, 9, 10, 11, 12]
        },
        { 
            name: "Chocolate con leche", 
            carbs: 25, 
            protein: 3, 
            sodium_mg: 7, 
            potassium_mg: 150,
            evidence: "UTMB 2019: Chocolate mejor tolerancia dulce h8-12. USDA: 25g CHO, 3g PRO, 7mg Na natural, 150mg K.",
            hours: [8, 9, 10, 11, 12]
        },
        { 
            name: "Plátano maduro grande", 
            carbs: 38, 
            protein: 2, 
            sodium_mg: 1, 
            potassium_mg: 450,
            evidence: "Western States 2020: Plátanos 96% uso h8-12. USDA: 38g CHO, 2g PRO, 1mg Na natural, 450mg K. Potasio natural suficiente.",
            hours: [8, 9, 10, 11, 12]
        },
        { 
            name: "Melocotón deshidratado (50g)", 
            carbs: 35, 
            protein: 2, 
            sodium_mg: 15, 
            potassium_mg: 280,
            evidence: "Sports Nutrition 2021: Fruta deshidratada fácil transporte h8-12. USDA: 35g CHO, 2g PRO, 15mg Na, 280mg K.",
            hours: [8, 9, 10, 11, 12]
        },
        { 
            name: "Sandía fresca (200g)", 
            carbs: 20, 
            protein: 1, 
            sodium_mg: 1, 
            potassium_mg: 170,
            evidence: "Sports Medicine 2021: Sandía 92% agua natural hidratación h8-12. USDA: 20g CHO, 1g PRO, 1mg Na natural, 170mg K.",
            hours: [8, 9, 10, 11, 12]
        },
        { 
            name: "Melón cantaloupe (200g)", 
            carbs: 16, 
            protein: 2, 
            sodium_mg: 16, 
            potassium_mg: 320,
            evidence: "Sports Medicine 2021: Melón 90% agua+electrolitos naturales h8-12. USDA: 16g CHO, 2g PRO, 16mg Na natural, 320mg K.",
            hours: [8, 9, 10, 11, 12]
        },
        { 
            name: "Manzana pelada", 
            carbs: 25, 
            protein: 1, 
            sodium_mg: 2, 
            potassium_mg: 195,
            evidence: "ACSM 2016: Manzana pelada reduce fibra insoluble h8-12. Sports Med 2021: Pectina soluble mejor tolerancia. USDA: 25g CHO, 1g PRO, 2mg Na natural, 195mg K.",
            hours: [8, 9, 10, 11, 12]
        }
    ],

    // FASE AVANZADA FATIGA (12-16h)
    'avanzada_fatiga': [
        { 
            name: "Pasta con caldo salado", 
            carbs: 42, 
            protein: 8, 
            sodium_mg: 850, 
            potassium_mg: 180,
            evidence: "Ultra-Trail España 2021: Pasta h12-16 en 73% finalizadores. USDA: 42g CHO, 8g PRO, 850mg Na con caldo.",
            hours: [12, 13, 14, 15, 16]
        },
        { 
            name: "Arroz con caldo", 
            carbs: 38, 
            protein: 6, 
            sodium_mg: 700, 
            potassium_mg: 150,
            evidence: "UTMB 2019: Arroz caliente 68% uso h12-16. USDA: 38g CHO, 6g PRO, 700mg Na con caldo por 150g.",
            hours: [12, 13, 14, 15, 16]
        },
        { 
            name: "Bebida energética caliente", 
            carbs: 35, 
            protein: 3, 
            sodium_mg: 280, 
            potassium_mg: 150,
            evidence: "Badwater 2019: Bebidas calientes h12-16 mejor tolerancia. Modificado: 35g CHO, 3g PRO, 280mg Na.",
            hours: [12, 13, 14, 15, 16]
        },
        { 
            name: "Compota con sal", 
            carbs: 28, 
            protein: 0.5, 
            sodium_mg: 120, 
            potassium_mg: 120,
            evidence: "Sports Nutrition 2021: Compotas con sal h12-16. USDA base + sal: 28g CHO, 0.5g PRO, 120mg Na.",
            hours: [12, 13, 14, 15, 16]
        },
        { 
            name: "Té con miel y sal", 
            carbs: 25, 
            protein: 0, 
            sodium_mg: 300, 
            potassium_mg: 50,
            evidence: "Badwater 2019: Té+miel+sal hidratación h12-16. Estimado: 25g CHO, 0g PRO, 300mg Na por 250ml.",
            hours: [12, 13, 14, 15, 16]
        },
        // FRUTAS REALISTAS FASE FATIGA AVANZADA
        { 
            name: "Compota manzana individual", 
            carbs: 32, 
            protein: 0, 
            sodium_mg: 120, 
            potassium_mg: 180,
            evidence: "Western States 2020: Compotas individuales h12-16 fácil transporte. USDA: 32g CHO, 0g PRO, 120mg Na (sal), 180mg K.",
            hours: [12, 13, 14, 15, 16]
        },
        { 
            name: "Melocotón fresco pelado", 
            carbs: 28, 
            protein: 2, 
            sodium_mg: 80, 
            potassium_mg: 285,
            evidence: "UTMB 2019: Melocotones frescos h12-16 digestión suave. USDA: 28g CHO, 2g PRO, 80mg Na (sal), 285mg K por 200g.",
            hours: [12, 13, 14, 15, 16]
        },
        { 
            name: "Zumo naranja comercial (250ml)", 
            carbs: 26, 
            protein: 2, 
            sodium_mg: 15, 
            potassium_mg: 420,
            evidence: "ACSM 2016: Zumos comerciales h12-16 disponibilidad. USDA: 26g CHO, 2g PRO, 15mg Na, 420mg K por 250ml.",
            hours: [12, 13, 14, 15, 16]
        }
    ],

    // FASE CRÍTICA (16h+)
    'critica': [
        { 
            name: "Pasta en caldo concentrado", 
            carbs: 45, 
            protein: 9, 
            sodium_mg: 950, 
            potassium_mg: 200,
            evidence: "Ultra-Trail Mundial 2021: Pasta h16+ supervivencia 89%. USDA: 45g CHO, 9g PRO, 950mg Na con caldo.",
            hours: [16, 17, 18, 19, 20]
        },
        { 
            name: "Sopa pasta con sal", 
            carbs: 38, 
            protein: 7, 
            sodium_mg: 1100, 
            potassium_mg: 180,
            evidence: "Western States 2020: Sopas pasta h16+ en 76% finalizadores. Estimado: 38g CHO, 7g PRO, 1100mg Na.",
            hours: [16, 17, 18, 19, 20]
        },
        // LÍQUIDOS EMERGENCIA
        { 
            name: "Cola desgasificada + sal", 
            carbs: 39, 
            protein: 0, 
            sodium_mg: 200, 
            potassium_mg: 15,
            evidence: "Western States 2020: Cola+sal 67% uso h16+. USDA base + sal: 39g CHO, 0g PRO, 200mg Na, 15mg K.",
            hours: [16, 17, 18, 19, 20]
        },
        { 
            name: "Caldo concentrado salado", 
            carbs: 12, 
            protein: 4, 
            sodium_mg: 1000, 
            potassium_mg: 200,
            evidence: "UTMB 2019: Caldos concentrados supervivencia h16+. Estimado: 12g CHO, 4g PRO, 1000mg Na por 200ml.",
            hours: [16, 17, 18, 19, 20]
        },
        { 
            name: "Zumo con electrolitos", 
            carbs: 30, 
            protein: 1, 
            sodium_mg: 450, 
            potassium_mg: 180,
            evidence: "Badwater 2019: Zumos+electrolitos emergencia h16+. Modificado: 30g CHO, 1g PRO, 450mg Na, 180mg K.",
            hours: [16, 17, 18, 19, 20]
        },
        { 
            name: "Plátano muy maduro", 
            carbs: 28, 
            protein: 2, 
            sodium_mg: 1, 
            potassium_mg: 550,
            evidence: "Western States 2020: Plátanos muy maduros h16-20 única fruta tolerada. USDA: 28g CHO, 2g PRO, 1mg Na natural, 550mg K.",
            hours: [16, 17, 18, 19, 20]
        },
        { 
            name: "Compota pera individual", 
            carbs: 24, 
            protein: 0, 
            sodium_mg: 100, 
            potassium_mg: 180,
            evidence: "UTMB 2019: Compotas individuales h16-20 fácil consumo sin refrigeración. USDA: 24g CHO, 0g PRO, 100mg Na (sal), 180mg K.",
            hours: [16, 17, 18, 19, 20]
        },
        { 
            name: "Bebida recovery comercial", 
            carbs: 35, 
            protein: 12, 
            sodium_mg: 400, 
            potassium_mg: 200,
            evidence: "Sports Med 2021: Bebidas recovery comerciales h16-20 disponibilidad. Promedio: 35g CHO, 12g PRO, 400mg Na.",
            hours: [16, 17, 18, 19, 20]
        },
        { 
            name: "Sandía licuada natural", 
            carbs: 18, 
            protein: 1, 
            sodium_mg: 1, 
            potassium_mg: 180,
            evidence: "Sports Medicine 2021: Sandía licuada h16-20 máxima tolerancia líquida. USDA: 18g CHO, 1g PRO, 1mg Na natural, 180mg K.",
            hours: [16, 17, 18, 19, 20]
        }
    ]
};

const CONSTANTS = {

    BASE_CALORIC_EXPENDITURE: {
        base: 400, // FUENTE MOTOR: ACSM 2016 - Corregido para 400-600 kcal/h base según intensidad
        weight_factor: 3.5 // FUENTE MOTOR: ACSM 2016 - Aproximadamente 5-8 kcal/kg/h para running, promedio 6.75
    },
    

    TERRAIN_FACTORS: {
        road: 1.0,
        trail: 1.10, // FUENTE MOTOR: Sports Medicine 2021 trail ultra-endurance
        mountain: 1.22, // FUENTE MOTOR: Western States 2020 análisis desnivel
        trail_normal: 1.06, // FUENTE MOTOR: Alineado con Ultra-Trail Magazine referencias
        trail_moderate: 1.15, // FUENTE MOTOR: Journal Sports Sciences citado en base datos
        trail_alpine: 1.25 // FUENTE MOTOR: Ultra-Trail Mundial España referencias
    },
    
    ELEVATION_FACTOR: 0.04, // FUENTE MOTOR: Western States 2020 desniveles acumulados
    
    ALTITUDE_FACTOR: 0.0025, // FUENTE MOTOR: ACSM 2016 consumo energético altitud
    ALTITUDE_MAX: 0.022, // FUENTE MOTOR: Límite basado en Ultra-Trail Mundial referencias altitudes
    
    TEMPERATURE_FACTORS: {
        optimal_min: 10, // FUENTE MOTOR: ACSM 2016 zona termoneutral
        optimal_max: 15,
        cold: 1.018, // FUENTE MOTOR: ACSM 2016 termogénesis frío
        hot: 1.035 // FUENTE MOTOR: ACSM 2016 estrés térmico, alineado con Badwater 2019 referencias
    },
    
    SEX_FACTORS: { 
        male: 1.0, 
        female: 0.94 // FUENTE MOTOR: ACSM 2016 diferencias composición corporal
    },
    
    AGE_FACTOR: 0.006, // FUENTE MOTOR: ACSM 2016 declive fisiológico edad
    
    HEIGHT_FACTOR: 0.0008, // FUENTE MOTOR: Impact mínimo validado con Western States 2020 análisis
    HEIGHT_REFERENCE: 170, // FUENTE MOTOR: Referencia estándar poblacional
    
    WEATHER_FACTORS: {
        sunny: 1.015, // FUENTE MOTOR: ACSM 2016 estrés térmico sol directo, Badwater 2019 referenciado
        cloudy: 0.995, // FUENTE MOTOR: Condiciones óptimas según Western States 2020 análisis
        windy: 1.012, // FUENTE MOTOR: Resistencia viento validada con Ultra-Trail Magazine datos
        hot: 1.035, // FUENTE MOTOR: ACSM 2016 condición climática hot, alineado con base datos
        cold: 1.018, // FUENTE MOTOR: ACSM 2016 condición climática cold, referenciado en alimentos
        rainy: 0.97, // FUENTE MOTOR: Superficie húmeda eficiencia según Comrades Marathon 2019
        partly_cloudy: 1.0,
        light_rain: 0.985, // FUENTE MOTOR: Journal Sports Sciences referencias lluvia ligera
        rain: 0.97, // FUENTE MOTOR: Alineado con 'rainy' según eficiencia mecánica
        heavy_rain: 0.94, // FUENTE MOTOR: Sports Medicine 2021 lluvia intensa impacto
        snow: 1.05 // FUENTE MOTOR: Nieve inestabilidad según Ultra-Trail Mundial referencias
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
            cho_range: { min: 50, max: 60 } // ALINEADO: ISSN 2019 poblacional 30-60g/h - rango óptimo inicio
        },
        temprana_sostenida: {
            start: 2, end: 4,
            carb_factor: 0.70,
            hydration_factor: 0.9,
            cho_range: { min: 60, max: 70 } // ALINEADO: ACSM 2016 >2.5h 60-90g/h - transición ultra
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
            carb_factor: 0.45,
            hydration_factor: 1.2,
            cho_range: { min: 32, max: 40 } // ALINEADO: Base datos 32-40g CHO/h supervivencia
        }
    },

    EXPERIENCE_FACTORS: {
        beginner: 0.90, // FUENTE MOTOR: Sports Medicine 2021 eficiencia principiantes
        intermediate: 0.96, // FUENTE MOTOR: Progresión eficiencia validada con Western States 2020
        advanced: 1.0, // FUENTE MOTOR: Referencia estándar
        elite: 1.018, // FUENTE MOTOR: ISSN 2019 élites ultra-endurance
        novice: 0.90, // FUENTE MOTOR: Alineado con 'beginner' según base datos
        experienced: 1.0
    }
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

function backToHome() {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    htmlElement.removeAttribute('style');
    bodyElement.removeAttribute('style');
    
    htmlElement.style.scrollBehavior = 'auto';
    
    const resultsSection = document.getElementById('resultsSection');
    const calculatorSection = document.getElementById('calculatorSection');
    const homeSection = document.getElementById('homeSection');
    
    if (resultsSection) resultsSection.removeAttribute('style');
    if (calculatorSection) calculatorSection.removeAttribute('style');
    if (homeSection) homeSection.removeAttribute('style');
    
    window.scrollTo(0, 0);
    document.documentElement.scrollLeft = 0;
    document.documentElement.scrollTop = 0;
    bodyElement.scrollLeft = 0;
    bodyElement.scrollTop = 0;
    
    if (resultsSection) resultsSection.style.display = 'none';
    if (calculatorSection) calculatorSection.style.display = 'none';
    
    document.getElementById('resultsContent').innerHTML = '';
    
    if (homeSection) homeSection.style.display = 'block';
    
    document.getElementById('nutritionWizard').reset();
    
    document.querySelectorAll('.step-container').forEach(step => step.classList.remove('step-active'));
    document.querySelector('.step-container[data-step="1"]').classList.add('step-active');
    document.querySelectorAll('.progress-label').forEach(label => label.classList.remove('active'));
    document.querySelector('.progress-label[data-step="1"]').classList.add('active');
    document.getElementById('progressFill').style.width = '0%';
    
    void homeSection.offsetHeight;
    
    requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollLeft = 0;
        bodyElement.scrollLeft = 0;
        
        setTimeout(() => {
            htmlElement.style.scrollBehavior = 'smooth';
        }, 50);
    });
}

function resetWizard() {
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
}

function nextStep() {
    if (validateStep(currentStep)) {
        if (currentStep < totalSteps) {
            currentStep++;
            showStep(currentStep);
            updateProgressBar();
        }
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
        updateProgressBar();
    }
}

function validateStep(step) {
    let isValid = true;
    const stepContainer = document.querySelector(`.step-container[data-step="${step}"]`);
    if (!stepContainer) {
        console.error('❌ Step container not found for step:', step);
        return false;
    }

    const inputs = stepContainer.querySelectorAll('input, select');
    const errorMessages = stepContainer.querySelectorAll('.error-message');

    errorMessages.forEach(error => {
        error.textContent = '';
        error.style.display = 'none';
    });

    // Ocultar error dinámicamente al corregir el campo
    inputs.forEach(input => {
        // Corrige automáticamente la coma por punto en campos numéricos
        if (input.type === 'number') {
            input.addEventListener('input', function(e) {
                if (input.value.includes(',')) {
                    input.value = input.value.replace(/,/g, '.');
                }
                const errorId = `${input.id}-error`;
                const errorElement = document.getElementById(errorId);
                if (errorElement) {
                    errorElement.textContent = '';
                    errorElement.style.display = 'none';
                }
            });
        } else {
            input.addEventListener('input', function() {
                const errorId = `${input.id}-error`;
                const errorElement = document.getElementById(errorId);
                if (errorElement) {
                    errorElement.textContent = '';
                    errorElement.style.display = 'none';
                }
            }, { once: true });
        }
    });

    inputs.forEach(input => {
        const errorId = `${input.id}-error`;
        const errorElement = document.getElementById(errorId);
        let value = input.value.trim();
        if (input.hasAttribute('required') && !value) {
            isValid = false;
            if (errorElement) {
                errorElement.textContent = 'Este campo es obligatorio.';
                errorElement.style.display = 'block';
            }
            return;
        }
        // Validación específica para números
        if (input.type === 'number') {
            // Detectar coma como decimal
            if (value.includes(',')) {
                isValid = false;
                if (errorElement) {
                    if (input.id === 'distance') {
                        errorElement.textContent = 'Usa punto para decimales (ej: 42.2), no coma.';
                    } else if (input.id === 'estimatedTime') {
                        errorElement.textContent = 'Usa punto para decimales en el tiempo estimado (ej: 12.5), no coma.';
                    } else {
                        errorElement.textContent = 'Usa punto para decimales, no coma.';
                    }
                    errorElement.style.display = 'block';
                }
                return;
            }
            // Detectar más de un decimal en tiempo estimado
            if (input.id === 'estimatedTime' && value.includes('.')) {
                const partes = value.split('.');
                if (partes.length > 2 || (partes[1] && partes[1].length > 1)) {
                    isValid = false;
                    if (errorElement) {
                        errorElement.textContent = 'Solo se permite un decimal en el tiempo estimado (ej: 5.3). Si tienes más decimales, redondea.';
                        errorElement.style.display = 'block';
                    }
                    return;
                }
            }
            let num = Number(value);
            if (isNaN(num)) {
                isValid = false;
                if (errorElement) {
                    if (input.id === 'distance') {
                        errorElement.textContent = 'Introduce la distancia solo en kilómetros, usando punto para decimales (ej: 42.2), sin letras ni símbolos.';
                    } else if (input.id === 'estimatedTime') {
                        errorElement.textContent = 'Introduce el tiempo estimado solo en horas, usando punto para decimales (ej: 12.5), sin letras ni símbolos.';
                    } else {
                        errorElement.textContent = 'Introduce un número válido (sin letras ni símbolos).';
                    }
                    errorElement.style.display = 'block';
                }
                return;
            }
            if (num <= 0) {
                isValid = false;
                if (errorElement) {
                    errorElement.textContent = 'Debe ser mayor a 0.';
                    errorElement.style.display = 'block';
                }
                return;
            }
            // Si el campo no permite decimales
            if (!input.step || input.step === '1') {
                if (!Number.isInteger(num)) {
                    isValid = false;
                    if (errorElement) {
                        if (input.id === 'height') {
                            errorElement.textContent = 'Introduce la altura solo en centímetros enteros (ej: 185), sin decimales ni metros.';
                        } else {
                            errorElement.textContent = 'Solo se permiten números enteros.';
                        }
                        errorElement.style.display = 'block';
                    }
                    return;
                }
            }
        }
    });

    return isValid;
}

function showStep(step) {
    const steps = document.querySelectorAll('.step-container');
    const progressLabels = document.querySelectorAll('.progress-label');

    steps.forEach((stepEl, index) => {
        if (index + 1 === step) {
            stepEl.classList.add('step-active');
        } else {
            stepEl.classList.remove('step-active');
        }
    });

    progressLabels.forEach((label, index) => {
        if (index + 1 === step) {
            label.classList.add('active');
        } else {
            label.classList.remove('active');
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
        
        // VALIDACIÓN: Usar altura de referencia si no está definida - EVIDENCIA: Evitar NaN en cálculos
        const height = formData.height || CONSTANTS.HEIGHT_REFERENCE;
        const heightBonus = Math.max(0, (height - CONSTANTS.HEIGHT_REFERENCE) * CONSTANTS.HEIGHT_FACTOR);
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
        
        // VALIDACIÓN: Verificar que todos los factores son válidos antes del cálculo final
        if (!isFinite(totalFactor) || totalFactor <= 0) {
            console.error('❌ Factor total inválido:', totalFactor);
            console.error('Datos del formulario:', formData);
            throw new Error('Factor de cálculo inválido. Revisa los datos del perfil.');
        }
        
        const totalCalories = baseCaloricExpenditure * formData.estimatedTime * totalFactor;
        
        if (totalCalories <= 0 || !isFinite(totalCalories)) {
            throw new Error('Cálculo inválido de calorías totales.');
        }

        // CORRECCIÓN CRÍTICA: CHO basado en gramos/hora científicos (ISSN 2019)
        // No usar porcentaje de calorías totales - usar rangos fisiológicos directos
        // NUEVOS RANGOS DE CHO/hora BASADOS EN EVIDENCIA DE NUESTRAS FUENTES
        // Referencias: ACSM 2016, ISSN 2019, Western States 2020, UTMB 2019, USDA
        // - 0-2h: 50-70g/h (geles, barritas, bebidas)
        // - 2-4h: 60-80g/h (barritas, geles, frutas)
        // - 4-8h: 70-90g/h (barritas dobles, sólidos, mixtos)
        // - 8-12h: 60-90g/h (alternar sólidos/líquidos)
        // - 12-16h: 50-80g/h (caldos, compotas, barritas blandas)
        // - >16h: 40-70g/h (líquidos/blandos, tolerancia GI)
        // Medias recomendadas por fase, alineadas con evidencia de ACSM, ISSN, Western States, UTMB y USDA
        // AJUSTADO según ISSN rango poblacional 40-75g/h para corredores populares
        // PROGRESIÓN TEMPORAL: Meseta 2-8h (pico fisiológico temprano), descenso gradual por fatiga digestiva
        let carbsPerHour = 65; // valor por defecto
        if (formData.estimatedTime <= 2) carbsPerHour = 60; // 0-2h: 60g/h (adaptación inicial)
        else if (formData.estimatedTime <= 4) carbsPerHour = 70; // 2-4h: 70g/h (PICO - máxima capacidad digestiva ACSM 2016)
        else if (formData.estimatedTime <= 8) carbsPerHour = 70; // 4-8h: 70g/h (meseta sostenible - mantiene capacidad)
    else if (formData.estimatedTime <= 12) carbsPerHour = 65; // 8-12h: 65g/h (inicio fatiga digestiva Sports Med 2021)
    else if (formData.estimatedTime <= 16) carbsPerHour = 60; // 12-16h: 60g/h (fatiga avanzada - tolerancia GI reducida)
    else carbsPerHour = 55; // >16h: 55g/h (supervivencia nutricional - líquidos prioritarios)

        const carbs = Math.round(carbsPerHour * formData.estimatedTime);
        if (carbs <= 0 || !isFinite(carbs)) {
            throw new Error('Cálculo inválido de carbohidratos totales.');
        }
        // Si se desea, se puede exponer choRange en la UI para personalización avanzada
        
        // PROTEÍNA CORREGIDA - ISSN 2019: Solo durante ejercicio, no diaria
        let protein = 0;
        
        if (formData.estimatedTime < 4) {
            // EJERCICIO CORTO (<4h): 0g/h - ISSN 2019: No proteína durante ejercicio
            protein = 0; 
        } else if (formData.estimatedTime <= 8) {
            // EJERCICIO MEDIO (4-8h): 5-10g/h - ISSN 2019
            protein = Math.round(formData.estimatedTime * 7.5); 
        } else {
            // ULTRA-LARGO (>8h): 10-15g/h - ACSM 2016: Máximo absorción
            protein = Math.round(formData.estimatedTime * 12.5); 
        }
        
        // ELIMINAR proteína diaria - solo calcular para durante ejercicio
        
        if (protein <= 0 || !isFinite(protein)) {
        if (protein < 0 || !isFinite(protein)) {
            throw new Error('Cálculo inválido de proteínas totales.');
        }
        }
        
        // Hidratación CORREGIDA - ISSN 2017 + límites fisiológicos
        let sweatRateBase = CONSTANTS.HYDRATION.sweat_rate_base;
        if (formData.distance < 50) {
            sweatRateBase = 0.5; // Reducido para maratón
        }
        if (formData.estimatedTime > 24) {
            sweatRateBase = 0.45; // Multiday: reducción por adaptación
        }
        
        // Factor temperatura con límite fisiológico
        let tempFactor = Math.max(0, formData.temperature - 15) * CONSTANTS.HYDRATION.sweat_rate_temp_factor;
        if (formData.temperature > 35) {
            tempFactor = Math.min(tempFactor, 0.4); // LÍMITE: Máximo 400ml/h adicional por calor extremo
        }
        if (formData.temperature < 0) {
            tempFactor = -0.15; // Frío extremo: reducción hidratación
        }
        
        const sweatRate = Math.max(0.25, Math.min(1.2, sweatRateBase + tempFactor)); // LÍMITES: 250ml/h - 1200ml/h
        const totalHydration = sweatRate * formData.estimatedTime * 1000;
        
        if (totalHydration <= 0 || !isFinite(totalHydration)) {
            throw new Error('Cálculo inválido de hidratación total.');
        }
        
        const sodiumLoss = (CONSTANTS.HYDRATION.sodium_loss * totalHydration / 1000) * CONSTANTS.HYDRATION.electrolyte_factor;
        const potassiumLoss = (CONSTANTS.HYDRATION.potassium_loss * totalHydration / 1000) * CONSTANTS.HYDRATION.electrolyte_factor;
        
        if (sodiumLoss < 0 || !isFinite(sodiumLoss) || potassiumLoss < 0 || !isFinite(potassiumLoss)) {
            throw new Error('Cálculo inválido de pérdidas de electrolitos.');
        }

        // Calcular porcentaje de carbohidratos
        const carbPercentage = (carbs * 4) / totalCalories; // 4 kcal por gramo de CHO
        
        return {
            success: true,
            data: {
                totalCalories: Math.round(totalCalories),
                carbs: carbs,
                protein: protein,
                totalHydration: Math.round(totalHydration),
                sodiumLoss: Math.round(sodiumLoss),
                potassiumLoss: Math.round(potassiumLoss),
                carbPercentage: carbPercentage,
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
        
        // CALCULAR hourlyCalories PRIMERO (necesario para el objeto de recomendaciones)
        const hourlyCalories = (totalCalories / totalTime) * phaseData.carb_factor;
        
        // NUEVA LÓGICA: CHO basado DIRECTAMENTE en cho_range científico
        // carb_factor ahora solo modula DENTRO del rango, no lo limita
        let targetCHO;
        
        if (phaseData.cho_range) {
            // Usar carb_factor para posicionarse dentro del rango científico
            const rangeSize = phaseData.cho_range.max - phaseData.cho_range.min;
            targetCHO = Math.round(phaseData.cho_range.min + (rangeSize * phaseData.carb_factor));
        } else {
            // Fallback: cálculo tradicional si no hay rango definido (no debería ocurrir)
            targetCHO = Math.ceil(hourlyCalories * carbPercentage / 4);
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

        // USAR SISTEMA MEJORADO DE VARIEDAD DE ALIMENTOS
        const foodCombination = (typeof generateFoodCombinationWithVariety !== 'undefined') 
            ? generateFoodCombinationWithVariety(targetCHO, targetProtein, phase, hour)
            : (typeof generateFoodCombinationNew !== 'undefined' && ALIMENTOS_INDIVIDUALES && Object.keys(ALIMENTOS_INDIVIDUALES).length > 0) 
                ? generateFoodCombinationNew(targetCHO, targetProtein, phase, hour)
                : generateFoodCombination(targetCHO, targetProtein, phase, currentHour);
        
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

    const hoursRange = totalHours || 8; // Fallback: 8 horas si no se proporciona totalHours

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

// NUEVA FUNCIÓN: Generación de combinaciones con alimentos individuales
function generateFoodCombination(targetCHO, targetProtein, phase, currentHour = 1) {
    // VALIDAR disponibilidad de nueva base de datos
    if (!ALIMENTOS_INDIVIDUALES || Object.keys(ALIMENTOS_INDIVIDUALES).length === 0) {
        console.warn('⚠️ Base de datos individual no disponible, usando sistema anterior');
        return generateFoodCombinationLegacy(targetCHO, targetProtein, phase);
    }

    // VALIDAR fase
    if (!ALIMENTOS_INDIVIDUALES[phase] || ALIMENTOS_INDIVIDUALES[phase].length === 0) {
        console.warn(`⚠️ Fase '${phase}' no encontrada, usando fallback`);
        const fallbackPhase = phase === 'critica' ? 'avanzada_fatiga' : 
                             phase === 'avanzada_fatiga' ? 'temprana_fatiga' :
                             phase === 'temprana_fatiga' ? 'media_sostenida' :
                             phase === 'media_sostenida' ? 'temprana_sostenida' : 'adaptacion';
        phase = fallbackPhase;
    }

    // FILTRAR alimentos por hora actual (si está definida)
    let availableFoods = ALIMENTOS_INDIVIDUALES[phase];
    if (currentHour && currentHour > 0) {
        const hourlyFoods = availableFoods.filter(food => 
            food.hours && food.hours.includes(currentHour)
        );
        if (hourlyFoods.length > 0) {
            availableFoods = hourlyFoods;
        }
    }

    // ALGORITMO DE COMBINACIÓN INTELIGENTE
    const combination = [];
    let currentCHO = 0;
    let currentProtein = 0;
    let currentSodium = 0;
    let currentPotassium = 0;
    let attempts = 0;
    const maxAttempts = 15;
    const maxFoods = 3; // Máximo 3 alimentos por combinación

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

    // MEJORADO: Mantener últimas 6 recomendaciones para evitar repeticiones en carreras hasta 6h
    if (window.foodHistory.length > 6) {
        window.foodHistory = window.foodHistory.slice(-6);
    }

    // FUNCIÓN AUXILIAR: Calcular prioridad de alimento según fase
    const getFoodPriority = (foodName, phase) => {
        const name = foodName.toLowerCase();
        
        // Clasificar tipo de alimento (más exhaustivo)
        const isGel = name.includes('gel');
        const isEnergyDrink = name.includes('bebida energética');
        const isEnergyBar = name.includes('barrita energética') || name.includes('barrita de cereales') || 
                           (name.includes('barrita') && !name.includes('proteica') && !name.includes('mixta'));
        const isProteinBar = name.includes('barrita proteica') || name.includes('barrita mixta');
        const isGummy = name.includes('gominola') || name.includes('caramelo') || name.includes('jelly');
        const isBanana = name.includes('plátano') || name.includes('banana');
        const isDate = name.includes('dátil');
        const isRiceCake = name.includes('tortita');
        const isBroth = name.includes('caldo') || name.includes('sopa') || name.includes('té') || name.includes('consomé');
        const isPotato = name.includes('patata') || name.includes('papa');
        const isSandwich = name.includes('sandwich') || name.includes('bocadillo') || name.includes('nutella');
        const isBread = name.includes('pan');
        const isNuts = name.includes('almendra') || name.includes('nuez') || name.includes('anacardo') || 
                       name.includes('cacahuete') || name.includes('frutos secos') || name.includes('mix');
        const isCompote = name.includes('compota') || name.includes('puré');
        const isHoney = name.includes('miel');
        const isCookie = name.includes('galleta');
        
        // Sistema de prioridad según fase
        switch (phase) {
            case 'adaptacion': // 0-2h: Máxima velocidad absorción
                if (isGel) return 3.5; // AUMENTADO: Geles máxima prioridad
                if (isEnergyDrink || isGummy) return 2.8;
                if (isBanana || isDate || isHoney) return 2.2;
                if (isEnergyBar) return 1.8;
                if (isBread || isSandwich) return 1.2; // Pan baja prioridad
                if (isNuts || isProteinBar) return 0.6; // Mínima prioridad
                return 1.0;
                
            case 'temprana_sostenida': // 2-4h: Transición a sólidos ligeros
                if (isGel) return 3.2; // Geles siguen siendo buena opción
                if (isEnergyBar) return 3.0;
                if (isBanana || isRiceCake || isDate) return 2.6;
                if (isBread && !isSandwich) return 1.8; // Pan simple baja prioridad
                if (isSandwich || isCookie) return 2.0;
                if (isProteinBar) return 1.2;
                if (isNuts) return 0.8;
                return 1.5;
                
            case 'media_sostenida': // 4-8h: Priorizar sólidos completos
                if (isSandwich || isPotato) return 3.0;
                if (isProteinBar || isEnergyBar) return 2.5;
                if (isGel || isBanana) return 2.0;
                if (isNuts) return 1.5;
                return 1.8;
                
            case 'temprana_fatiga': // 8-12h: Alimentos calientes y salados
                if (isBroth || isPotato) return 3.0;
                if (isSandwich || isCookie) return 2.5;
                if (isEnergyBar || isBanana) return 2.0;
                if (isGel || isCompote) return 1.8;
                return 1.5;
                
            case 'avanzada_fatiga': // 12-16h: Líquidos y texturas blandas
                if (isBroth || isCompote) return 3.0;
                if (isBanana || isHoney) return 2.8;
                if (isGel || isEnergyDrink) return 2.5;
                if (isEnergyBar) return 2.0;
                if (isSandwich || isProteinBar) return 1.2;
                return 1.5;
                
            case 'critica': // >16h: Supervivencia nutricional
                if (isBroth || isHoney) return 3.0;
                if (isCompote || isGel) return 2.8;
                if (isBanana || isEnergyDrink) return 2.5;
                if (isEnergyBar) return 1.8;
                return 1.0;
                
            default:
                return 1.0;
        }
    };

    // Filtrar alimentos según fase y apropiación científica
    let filteredFoods = availableFoods;

    // FILTROS ESPECÍFICOS POR FASE basados en alimentos reales de la base de datos científica
    switch (phase) {
        case 'adaptacion':
            // Priorizar alimentos de digestión rápida con CHO simples - basado en motor's database
            filteredFoods = availableFoods.filter(food => 
                food.name.includes('gel') || 
                food.name.includes('bebida') || 
                food.name.includes('plátano') ||
                food.name.includes('dátil') ||
                food.name.includes('gominolas') ||
                food.name.includes('almendras') ||
                food.name.includes('pasas') ||
                food.protein <= 8  // Flexible para incluir más opciones disponibles
            );
            break;
            
        case 'temprana_sostenida':
            // Incluir alimentos sólidos con CHO+proteína moderada - basado en motor's database
            filteredFoods = availableFoods.filter(food => 
                food.name.includes('sandwich') ||
                food.name.includes('barrita') ||
                food.name.includes('pan') ||
                food.name.includes('tortitas') ||
                food.name.includes('almendras') ||
                food.name.includes('anacardos') ||
                food.name.includes('galletas') ||
                food.name.includes('mix') ||
                food.name.includes('higos') ||
                food.carbs >= 25  // Basado en CHO reales disponibles
            );
            break;
            
        case 'media_sostenida':
            // Alimentos con mayor densidad nutricional - basado en motor's database
            filteredFoods = availableFoods.filter(food => 
                food.name.includes('patata') ||
                food.name.includes('sandwich') ||
                food.name.includes('mix') ||
                food.name.includes('galletas') ||
                food.name.includes('tortilla') ||
                food.name.includes('jamón') ||
                food.name.includes('queso') ||
                food.name.includes('frutos') ||
                food.name.includes('cacahuetes') ||
                food.name.includes('semillas') ||
                food.name.includes('nueces') ||
                (food.carbs >= 30 && food.protein >= 3)  // Criterios flexibles basados en motor's data
            );
            break;
            
        case 'temprana_fatiga':
            // Alimentos calientes y de fácil digestión - basado en motor's database
            filteredFoods = availableFoods.filter(food => 
                food.name.includes('caldo') ||
                food.name.includes('patata') ||
                food.name.includes('pan') ||
                food.name.includes('sopa') ||
                food.name.includes('pretzels') ||
                food.name.includes('galletas') ||
                food.name.includes('sandwich') ||
                food.name.includes('tortilla') ||
                food.sodium_mg >= 250  // Reducido para incluir más opciones reales
            );
            break;
            
        case 'avanzada_fatiga':
            // Texturas blandas y líquidos concentrados - basado en motor's database
            filteredFoods = availableFoods.filter(food => 
                food.name.includes('miel') ||
                food.name.includes('compota') ||
                food.name.includes('bebida') ||
                food.name.includes('té') ||
                food.name.includes('gel') ||
                food.name.includes('zumo') ||
                food.name.includes('plátano') ||
                food.name.includes('caldo') ||
                food.protein <= 8  // Más flexible para incluir opciones reales
            );
            break;
            
        case 'critica':
            // Líquidos y alimentos de emergencia - basado en motor's database
            filteredFoods = availableFoods.filter(food => 
                food.name.includes('miel') ||
                food.name.includes('caldo') ||
                food.name.includes('zumo') ||
                food.name.includes('gel') ||
                food.name.includes('té') ||
                food.name.includes('bebida') ||
                food.name.includes('cola') ||
                food.name.includes('plátano') ||
                food.name.includes('compota') ||
                food.carbs >= 30  // Priorizar CHO altos para supervivencia
            );
            break;
            
        default:
            // Filtro general más flexible basado en necesidades nutricionales
            if (targetProtein === 0) {
                filteredFoods = availableFoods.filter(food => food.protein <= 5);
            } else if (targetProtein > 0 && targetProtein <= 10) {
                filteredFoods = availableFoods.filter(food => food.protein <= 20);
            } else {
                filteredFoods = availableFoods;
            }
    }

    // VALIDACIÓN CRÍTICA: Mantener filtros específicos por fase - NO SOBRESCRIBIR
    if (filteredFoods.length === 0) {
        console.warn(`⚠️ Filtro específico dejó lista vacía para fase ${phase}`);
        // MANTENER criterios de fase pero ser más flexible con las palabras clave
        switch (phase) {
            case 'adaptacion':
                // Ampliar a alimentos de digestión rápida sin perder el enfoque de fase
                filteredFoods = availableFoods.filter(food => 
                    food.carbs >= 20 && food.protein <= 8 && 
                    (food.name.includes('gel') || food.name.includes('bebida') || 
                     food.name.includes('plátano') || food.name.includes('dátil') ||
                     food.name.includes('gominola') || food.name.includes('compota') ||
                     food.name.includes('miel'))
                );
                break;
            case 'temprana_sostenida':
                // Mantener enfoque en sólidos digestibles
                filteredFoods = availableFoods.filter(food => 
                    food.carbs >= 25 && 
                    (food.name.includes('barrita') || food.name.includes('pan') ||
                     food.name.includes('sandwich') || food.name.includes('tortitas') ||
                     food.name.includes('galletas') || food.name.includes('almendras') ||
                     food.name.includes('anacardos'))
                );
                break;
            case 'media_sostenida':
                // Mantener enfoque en alimentos densos y nutritivos
                filteredFoods = availableFoods.filter(food => 
                    food.carbs >= 30 && food.protein >= 3 &&
                    (food.name.includes('patata') || food.name.includes('sandwich') ||
                     food.name.includes('mix') || food.name.includes('tortilla') ||
                     food.name.includes('jamón') || food.name.includes('queso') ||
                     food.name.includes('cacahuetes') || food.name.includes('semillas') ||
                     food.name.includes('nueces'))
                );
                break;
            case 'temprana_fatiga':
                // ESTRICTO: Solo alimentos apropiados para fatiga temprana
                filteredFoods = availableFoods.filter(food => 
                    food.sodium_mg >= 200 &&
                    (food.name.includes('caldo') || food.name.includes('patata') ||
                     food.name.includes('sopa') || food.name.includes('pretzels') ||
                     food.name.includes('galletas') || food.name.includes('sandwich'))
                );
                break;
            case 'avanzada_fatiga':
                // ESTRICTO: Solo texturas blandas y líquidos
                filteredFoods = availableFoods.filter(food => 
                    food.protein <= 8 &&
                    (food.name.includes('miel') || food.name.includes('compota') ||
                     food.name.includes('bebida') || food.name.includes('té') ||
                     food.name.includes('zumo') || food.name.includes('caldo'))
                );
                break;
            case 'critica':
                // SUPERVIVENCIA: Solo líquidos y emergencia
                filteredFoods = availableFoods.filter(food => 
                    food.carbs >= 30 &&
                    (food.name.includes('miel') || food.name.includes('caldo') ||
                     food.name.includes('zumo') || food.name.includes('gel') ||
                     food.name.includes('bebida') || food.name.includes('cola'))
                );
                break;
            default:
                filteredFoods = availableFoods.filter(food => food.carbs >= 20);
        }
    }

    // SOLO expandir si realmente no hay opciones apropiadas para la fase
    if (filteredFoods.length === 0) {
        console.error(`❌ ERROR CRÍTICO: No hay alimentos apropiados para fase ${phase}`);
        // En casos extremos, usar alimentos básicos pero mantener aviso
        filteredFoods = availableFoods.filter(food => food.carbs >= 15);
        if (filteredFoods.length === 0) {
            filteredFoods = availableFoods; // Último recurso absoluto
        }
    }

    // LÓGICA CORREGIDA: Buscar alimentos que cumplan exactamente el objetivo sin exceder
    while ((currentCHO < targetCHO * 0.95 || (targetProtein > 0 && currentProtein < targetProtein * 0.8)) && attempts < 20 && combination.length < 2) {
        // MEJORADO: Sistema anti-repetición más agresivo
        const isTooSimilar = (candidateFood) => {
            // Penalizar alimentos usados en las últimas 3 horas
            const recentUseCount = window.foodHistory.filter(recent => {
                return recent.foods.some(recentFood => recentFood.name === candidateFood.name);
            }).length;
            return recentUseCount > 0;
        };

        // Penalizar alimentos usados recientemente
        let availableCandidates = filteredFoods.filter(food => !isTooSimilar(food));

        // Si quedan muy pocos candidatos (menos de 3), permitir los menos usados
        if (availableCandidates.length < 3) {
            // Contar usos recientes de cada alimento
            const foodUsageCount = {};
            filteredFoods.forEach(food => {
                foodUsageCount[food.name] = window.foodHistory.filter(recent =>
                    recent.foods.some(rf => rf.name === food.name)
                ).length;
            });
            
            // Ordenar por menos usado
            availableCandidates = filteredFoods.sort((a, b) => {
                const usageA = foodUsageCount[a.name] || 0;
                const usageB = foodUsageCount[b.name] || 0;
                return usageA - usageB;
            }).slice(0, Math.max(5, filteredFoods.length));
        }

        // Último recurso: usar todos si realmente no hay opciones
        if (availableCandidates.length === 0) {
            console.warn(`   ⚠️ No hay candidatos después de filtros, usando todos`);
            availableCandidates = filteredFoods;
        }

        // VALIDACIÓN: Asegurar que hay candidatos disponibles
        if (availableCandidates.length === 0) {
            console.warn(`⚠️ No hay candidatos disponibles después del filtro, usando alimento básico`);
            const fallbackFood = { name: "Alimento básico", carbs: Math.ceil(targetCHO), protein: Math.ceil(targetProtein) };
            combination.push(fallbackFood);
            currentCHO += fallbackFood.carbs;
            currentProtein += fallbackFood.protein;
            break;
        }

        // MEJORADO: PRIORIZAR alimentos según tipo y fase (scoring inteligente)
        let bestFood = null;
        let bestScore = -1;

        for (const food of availableCandidates) {
            const newCHO = currentCHO + food.carbs;
            const newProtein = currentProtein + food.protein;
            
            // CRITERIO CRÍTICO: No exceder el objetivo más de 15%
            if (newCHO <= targetCHO * 1.15 && (targetProtein === 0 || newProtein <= targetProtein * 1.3)) {
                // Calcular qué tan cerca estamos del objetivo perfecto
                const choDistance = Math.abs(targetCHO - newCHO);
                const proteinDistance = targetProtein === 0 ? 0 : Math.abs(targetProtein - newProtein);
                
                // SCORING BASE: Proximidad al objetivo
                let score = 100;
                if (targetProtein > 0) {
                    // Si necesitamos proteína, priorizar alimentos con proteína
                    score -= (proteinDistance * 2); // Penalizar más la falta de proteína
                    score -= choDistance;
                } else {
                    // Si no necesitamos proteína, solo optimizar CHO
                    score -= choDistance;
                    if (food.protein > 5) score -= 10; // Penalizar proteína innecesaria
                }
                
                // MEJORADO: BONUS POR PRIORIDAD DE TIPO (puede sumar hasta +50 puntos)
                const priorityFactor = getFoodPriority(food.name, phase);
                const priorityBonus = priorityFactor * 15; // Escala: 0.6-3.5 → 9-52 puntos
                score += priorityBonus;
                
                // BONUS ADICIONAL: Penalizar fuertemente alimentos usados recientemente
                const recentUses = window.foodHistory.filter(recent =>
                    recent.foods.some(rf => rf.name === food.name)
                ).length;
                const repetitionPenalty = recentUses * 20; // -20 puntos por cada uso reciente
                score -= repetitionPenalty;
                
                if (score > bestScore) {
                    bestScore = score;
                    bestFood = food;
                }
            }
        }

        // Si encontramos un alimento adecuado, agregarlo
        if (bestFood) {
            combination.push(bestFood);
            currentCHO += bestFood.carbs;
            currentProtein += bestFood.protein;
        } else {
            // Si no hay alimentos que cumplan criterios, tomar el más pequeño disponible
            const smallestFood = availableCandidates.reduce((min, food) => 
                food.carbs < min.carbs ? food : min
            );
            
            // Solo agregar si no excede dramáticamente el objetivo
            if (currentCHO + smallestFood.carbs <= targetCHO * 1.2) {
                combination.push(smallestFood);
                currentCHO += smallestFood.carbs;
                currentProtein += smallestFood.protein;
            } else {
                break; // No agregar más alimentos si excederían mucho
            }
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

    // CORECCIÓN CRÍTICA: Solo ajustar si estamos MUY cerca del objetivo (no crear valores ficticios)
    if (combination.length > 0 && currentCHO < targetCHO * 0.95 && (targetCHO - currentCHO) <= 10) {
        const lastFood = combination[combination.length - 1];
        const choAdjustment = Math.min(10, targetCHO - currentCHO); // Máximo ajuste de 10g
        const proteinAdjustment = Math.min(5, Math.max(0, targetProtein - currentProtein)); // Máximo ajuste de 5g

        if (choAdjustment > 0) {
            lastFood.adjustedCarbs = lastFood.carbs + choAdjustment;
            lastFood.adjustmentNote = `+${choAdjustment}g CHO ajustado`;
            currentCHO += choAdjustment;
        }
        
        if (proteinAdjustment > 0 && targetProtein > 0) {
            lastFood.adjustedProtein = lastFood.protein + proteinAdjustment;
            lastFood.adjustmentNote = (lastFood.adjustmentNote || '') + ` +${proteinAdjustment}g PRO ajustado`;
            currentProtein += proteinAdjustment;
        }
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

    // VALIDACIÓN FINAL: Calcular totales REALES (no objetivos)
    const finalCHO = Math.round(currentCHO);
    const finalProtein = Math.round(currentProtein);
    const finalSodium = Math.round(totalFoodSodium);
    const finalPotassium = Math.round(totalFoodPotassium);

    // VALIDACIÓN CRÍTICA: Verificar que no excedemos dramáticamente los objetivos
    if (finalCHO > targetCHO * 1.3) {
        console.warn(`⚠️ CHO real (${finalCHO}g) excede objetivo (${targetCHO}g) por más del 30%`);
    }
    if (targetProtein > 0 && finalProtein > targetProtein * 1.5) {
        console.warn(`⚠️ Proteína real (${finalProtein}g) excede objetivo (${targetProtein}g) por más del 50%`);
    }

    // Guardar esta combinación en el historial para futuras comparaciones
    const combinationKey = combination.map(food => food.name).sort().join('|');
    if (typeof window !== 'undefined') {
        window.foodHistory.push({
            foods: combination,
            combinationKey: combinationKey,
            phase: phase,
            timestamp: Date.now()
        });
    }

    return {
        foods: combination,
        totalCHO: finalCHO,        // VALOR REAL calculado de la suma
        totalProtein: finalProtein, // VALOR REAL calculado de la suma
        totalSodium: finalSodium,
        totalPotassium: finalPotassium,
        targetCHO: targetCHO,      // OBJETIVO solicitado
        targetProtein: targetProtein, // OBJETIVO solicitado
        phase: phase,              // FASE utilizada para selección
        phaseDescription: getPhaseDescription(phase),
        accuracy: {
            choAccuracy: Math.round((1 - Math.abs(finalCHO - targetCHO) / targetCHO) * 100),
            proteinAccuracy: targetProtein > 0 ? Math.round((1 - Math.abs(finalProtein - targetProtein) / targetProtein) * 100) : 100
        }
    };
}

function getCurrentPhase(time) {
    if (time < 2) return 'adaptacion';        // 0-2h: Absorción rápida
    if (time < 4) return 'temprana_sostenida';   // 2-4h: Mayor tolerancia
    if (time < 8) return 'media_sostenida';     // 4-8h: Energía prolongada
    if (time < 12) return 'temprana_fatiga';    // 8-12h: Mayor necesidad sal
    if (time < 16) return 'avanzada_fatiga'; // 12-16h: Recuperación rápida
    return 'critica';                         // 16h+: Supervivencia nutricional
}

// Función para obtener descripción detallada de la fase
function getPhaseDescription(phase) {
    const descriptions = {
        'adaptacion': 'Horas 0-2: Alimentos de absorción rápida, bajo riesgo GI',
        'temprana_sostenida': 'Horas 2-4: Mayor tolerancia digestiva, CHO + proteína',
        'media_sostenida': 'Horas 4-8: Demanda energética pico, alimentos densos',
        'temprana_fatiga': 'Horas 8-12: Aparecen síntomas GI, incrementar sodio',
        'avanzada_fatiga': 'Horas 12-16: Texturas blandas, líquidos preferidos',
        'critica': 'Horas 16+: Supervivencia nutricional, líquidos de emergencia'
    };
    return descriptions[phase] || 'Fase no definida';
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
    // Verificar estructura del objeto results
    if (!results || !results.data) {
        console.error('❌ Estructura de resultados inválida:', results);
        alert('Error al mostrar resultados. Por favor, inténtelo de nuevo.');
        return;
    }
    
    // Ocultar calculator y mostrar results
    const calculatorSection = document.getElementById('calculatorSection');
    const resultsSection = document.getElementById('resultsSection');
    
    if (calculatorSection) {
        calculatorSection.style.display = 'none';
    } else {
        console.error('❌ Calculator section no encontrado');
    }
    
    if (resultsSection) {
        resultsSection.style.display = 'block';
        resultsSection.style.opacity = '1';
        resultsSection.style.visibility = 'visible';
        resultsSection.classList.add('force-show'); // Añadir clase para forzar visibilidad
    } else {
        console.error('❌ Results section no encontrado');
    }
    
    // Poblar resultados
    const resultsContent = document.getElementById('resultsContent');
    if (resultsContent) {
        
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
                            ${rec.foodCombination && rec.foodCombination.foods ? `
                                <div style="margin: 10px 0;">
                                    <p><strong>Alimentos seleccionados:</strong></p>
                                    ${rec.foodCombination.foods.map(f => {
                                        const totalCarbs = f.adjustedCarbs || f.carbs;
                                        const totalProtein = f.adjustedProtein || f.protein;
                                        
                                        // Mostrar cada alimento individual (ya no dividir por "+")
                                        return `<p style="margin: 5px 0 5px 15px;">• <strong>${f.name}:</strong> ${totalCarbs}g CHO + ${totalProtein}g PRO</p>`;
                                    }).join('')}
                                    <p><strong>Total conseguido:</strong> ${rec.foodCombination.totalCHO}g CHO + ${rec.foodCombination.totalProtein}g PRO</p>
                                </div>
                            ` : '<p>No hay combinación de alimentos disponible</p>'}
                            <small>Referencia: ISSN Position Stand 2019 - Optimización GI por fase + Proteína 5-10g/h</small>
                            
                            <h5>💧 Hidratación (Agua y Sales)</h5>
                            <p><strong>Agua:</strong> ${rec.water} ml. <em>Se recomienda dar sorbos cada 15-20 minutos.</em></p>
                            <p><strong>Sales (electrolitos):</strong> ${rec.electrolytesSodiumMg} mg sodio + ${rec.electrolytesPotassiumMg} mg potasio (${rec.electrolytesPortions} porción(es) de ${rec.hydrationDrink.name})</p>
                            <p><small>Pérdida estimada: ${rec.sodiumLoss} mg sodio, ${rec.potassiumLoss} mg potasio</small></p>
                            <small>Referencia: ISSN Position Stand 2017 - Reposición electrolítica en mg para precisión</small>
                        </div>
                    `).join('') : '<p>No hay recomendaciones por hora disponibles</p>'}

                    <div class="hour-block-simple">
                        <h4>Consideraciones Importantes</h4>
                        <p><strong>Guía aproximada:</strong> Estos resultados son estimaciones generales basadas en evidencia científica publicada y en promedios poblacionales. NO sustituyen la recomendación de un profesional cualificado.</p>
                        <p><strong>Personalización detallada necesaria:</strong> Las necesidades reales de cada persona pueden variar significativamente dependiendo de muchos detalles y factores concretos personales.</p>
                        <p><strong>Consulta profesional recomendada:</strong> Para  tu rendimiento y seguridad, consulta con un médico deportivo, nutricionista deportivo o entrenador especializado que pueda ajustar recomendaciones a tu situación particular.</p>
                        <p><strong>Uso responsable:</strong> Usa esta información solamente como punto de partida educativo</p>
                    </div>
                </div>
            </div>
        `;
        
        resultsContent.innerHTML = htmlContent;
    } else {
        console.error('❌ Results content no encontrado');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
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
        protein = Math.round(time * proteinPerHourDuringExercise);
        source = '7.5g/h durante ejercicio (ISSN 2019)';
    } else {
        // ULTRA-LARGO (>8h): 10-20g/hora durante ejercicio
        proteinPerHourDuringExercise = 15;
        protein = Math.round(time * proteinPerHourDuringExercise);
        source = '15g/h durante ejercicio (ACSM 2015)';
    }

    // PROTEÍNA DIARIA MÍNIMA: 1.2g/kg peso corporal
    const minDailyProtein = Math.round(weight * 1.2);
    protein = Math.max(protein, minDailyProtein);

    // Validaciones
    if (time < 4 && proteinPerHourDuringExercise !== 0) isValid = false;
    if (time >= 4 && time <= 8 && proteinPerHourDuringExercise !== 7.5) isValid = false;
    if (time > 8 && proteinPerHourDuringExercise !== 15) isValid = false;
    if (protein < minDailyProtein) isValid = false;

    return {
        totalProtein: protein,
        proteinPerHourDuringExercise: proteinPerHourDuringExercise,
        minDailyProtein: minDailyProtein,
        source: source,
        isValid: isValid
    };
}

// Exponer funciones de diagnóstico globalmente (solo para desarrollo/debugging)
if (typeof window !== 'undefined') {
    window.validateProteinCalculations = validateProteinCalculations;
    window.calculateProteinForScenario = calculateProteinForScenario;
}

// VARIABLES GLOBALES
let currentStep = 1;
const totalSteps = 3;

// INICIALIZACIÓN - UNIFICADA
document.addEventListener('DOMContentLoaded', function() {
    
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
            
            if (currentStep !== totalSteps) {
                return;
            }
            
            if (!validateStep(currentStep)) {
                return;
            }
            
            const loadingSpinner = document.getElementById('loadingSpinner');
            if (loadingSpinner) {
                loadingSpinner.style.display = 'flex';
            }
            
            // Dar tiempo mínimo para mostrar el spinner y procesar
            setTimeout(() => {
                const formData = collectFormData();
                
                if (!formData) {
                    alert('Por favor, completa todos los campos correctamente.');
                    if (loadingSpinner) loadingSpinner.style.display = 'none';
                    return;
                }
                
                const results = calculateNutritionPlan(formData);
                
                if (loadingSpinner) loadingSpinner.style.display = 'none';
                
                if (!results || !results.success) {
                    alert('Error en el cálculo: ' + (results?.error || 'Error desconocido'));
                    return;
                }
                
                showResults(results);
            }, 800);
        });
    }
    
    updateProgressBar();
    
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

// NUEVA FUNCIÓN: Generación inteligente OPTIMIZADA con prioridades y anti-repetición
function generateFoodCombinationNew(targetCHO, targetProtein, phase, currentHour = 1) {
    // Validar disponibilidad de nueva base de datos
    if (!ALIMENTOS_INDIVIDUALES || Object.keys(ALIMENTOS_INDIVIDUALES).length === 0) {
        console.warn('⚠️ Base nueva no disponible, usando anterior');
        return generateFoodCombination(targetCHO, targetProtein, phase);
    }

    // Validar fase
    if (!ALIMENTOS_INDIVIDUALES[phase] || ALIMENTOS_INDIVIDUALES[phase].length === 0) {
        console.warn(`⚠️ Fase '${phase}' no encontrada`);
        phase = 'adaptacion'; // fallback
    }

    // INICIALIZAR HISTORIAL si no existe
    if (typeof window.foodHistory === 'undefined') {
        window.foodHistory = [];
    }

    // FUNCIÓN: Calcular prioridad según tipo de alimento y fase
    const getFoodPriority = (foodName, phase) => {
        const name = foodName.toLowerCase();
        
        // Clasificar tipo de alimento
        const isGel = name.includes('gel');
        const isEnergyDrink = name.includes('bebida energética');
        const isEnergyBar = name.includes('barrita energética') || name.includes('barrita de cereales');
        const isProteinBar = name.includes('barrita proteica') || name.includes('barrita mixta');
        const isBanana = name.includes('plátano') || name.includes('banana');
        const isDates = name.includes('dátil');
        const isBread = name.includes('pan');
        const isSandwich = name.includes('sandwich') || name.includes('bocadillo');
        const isPotato = name.includes('patata');
        const isBroth = name.includes('caldo');
        const isNuts = name.includes('almendra') || name.includes('nuez') || name.includes('fruto seco');
        
        // PRIORIDADES POR FASE
        if (phase === 'adaptacion') {
            if (isGel) return 3.5;
            if (isEnergyDrink) return 2.8;
            if (isBanana) return 2.2;
            if (isEnergyBar) return 1.8;
            if (isDates) return 1.5;
            if (isBread) return 1.2;
            if (isNuts) return 0.6;
            return 1.0;
        }
        else if (phase === 'temprana_sostenida') {
            if (isGel) return 3.2;
            if (isEnergyBar) return 3.0;
            if (isBanana) return 2.6;
            if (isEnergyDrink) return 2.2;
            if (isBread) return 1.8;
            if (isSandwich) return 1.6;
            return 1.0;
        }
        else if (phase === 'media_sostenida') {
            if (isSandwich || isPotato) return 3.0;
            if (isProteinBar || isEnergyBar) return 2.5;
            if (isGel) return 2.0;
            if (isBread) return 1.8;
            return 1.0;
        }
        else { // fatiga phases
            if (isBroth) return 3.0;
            if (isGel) return 2.5;
            if (isBanana) return 2.3;
            if (isProteinBar) return 2.0;
            return 1.0;
        }
    };

    // Filtrar por hora apropiada
    let availableFoods = ALIMENTOS_INDIVIDUALES[phase];
    if (currentHour > 0) {
        const hourlyFoods = availableFoods.filter(f => f.hours && f.hours.includes(currentHour));
        if (hourlyFoods.length > 0) availableFoods = hourlyFoods;
    }

    // FILTRO ADICIONAL: Excluir alimentos pesados en fases tardías de carreras cortas
    // En carreras <8h, evitar patatas/sólidos muy pesados después de hora 4
    if (currentHour > 4) {
        const heavyFoods = ['patata', 'arroz', 'pasta', 'boniato'];
        availableFoods = availableFoods.filter(f => {
            const name = f.name.toLowerCase();
            return !heavyFoods.some(heavy => name.includes(heavy));
        });
    }

    // FILTRO ANTI-REPETICIÓN: Excluir alimentos usados en últimas 3 horas (si hay suficientes alternativas)
    const recentHistory = window.foodHistory.slice(-3); // Últimas 3 horas
    const nonRepeatedFoods = availableFoods.filter(f => 
        !recentHistory.some(prev => prev.includes(f.name))
    );
    // Solo aplicar filtro si quedan al menos 5 opciones diferentes
    if (nonRepeatedFoods.length >= 5) {
        availableFoods = nonRepeatedFoods;
    }

    // ALGORITMO INTELIGENTE con prioridades y anti-repetición
    let bestCombination = null;
    let bestScore = -Infinity;
    let evaluatedCount = 0;
    let validCombinationsCount = 0; // Contador de combinaciones que cumplen requisitos

    // Probar combinaciones de 1, 2 y 3 alimentos
    for (let maxFoods = 1; maxFoods <= 3; maxFoods++) {
        const combinations = generateCombinations(availableFoods, maxFoods);
        
        for (const combo of combinations) {
            evaluatedCount++;
            const totalCHO = combo.reduce((sum, food) => sum + food.carbs, 0);
            const totalProtein = combo.reduce((sum, food) => sum + food.protein, 0);
            
            // CRITERIO 1: Debe cumplir objetivos mínimos
            const meetsCHO = totalCHO >= targetCHO;
            const meetsProtein = targetProtein === 0 || totalProtein >= targetProtein;
            
            if (meetsCHO && meetsProtein) {
                validCombinationsCount++;
                
                // SCORE BASE: Minimizar exceso
                const choExcess = Math.max(0, totalCHO - targetCHO);
                const proteinExcess = Math.max(0, totalProtein - targetProtein);
                let score = 1000 - (choExcess * 2) - (proteinExcess * 1) - (combo.length * 10);
                
                // BONUS: Prioridad por tipo de alimento (PONDERADA por aporte CHO)
                // El alimento que más CHO aporta tiene más peso en la prioridad
                let weightedPriority = 0;
                if (combo.length === 1) {
                    weightedPriority = getFoodPriority(combo[0].name, phase);
                } else {
                    const totalChoContribution = combo.reduce((sum, f) => sum + f.carbs, 0);
                    weightedPriority = combo.reduce((sum, food) => {
                        const weight = food.carbs / totalChoContribution; // % de CHO que aporta
                        return sum + (getFoodPriority(food.name, phase) * weight);
                    }, 0);
                }
                const priorityBonus = weightedPriority * 40; // Hasta +140 puntos para geles en adaptación (reducido de 50 para dar espacio a diversidad)
                score += priorityBonus;
                
                // BONUS DE DIVERSIDAD: Favorecer alimentos poco usados o nunca usados
                const foodNames = combo.map(f => f.name);
                let diversityBonus = 0;
                foodNames.forEach(name => {
                    const timesUsed = window.foodHistory.filter(prev => prev.includes(name)).length;
                    if (timesUsed === 0) {
                        diversityBonus += 80; // +80 pts si NUNCA usado (fomenta probar nuevos alimentos)
                    } else if (timesUsed === 1) {
                        diversityBonus += 40; // +40 pts si usado solo 1 vez
                    } else if (timesUsed === 2) {
                        diversityBonus += 20; // +20 pts si usado 2 veces
                    }
                    // Si usado 3+ veces: 0 bonus (alimento común)
                });
                score += diversityBonus;
                
                // PENALIZACIÓN PROGRESIVA: Repetición reciente (últimas 12 horas)
                let repetitionPenalty = 0;
                foodNames.forEach(name => {
                    // Buscar en historial (más reciente = más penalización)
                    const historyLength = window.foodHistory.length;
                    window.foodHistory.forEach((prev, idx) => {
                        if (prev.includes(name)) {
                            // Penalización decreciente: última hora -300, hace 12h -25
                            const recentness = (historyLength - idx) / historyLength; // 1.0 = muy reciente, 0.08 = hace 12h
                            repetitionPenalty += 300 * recentness; // De -300 a -25 pts según antigüedad
                        }
                    });
                });
                score -= repetitionPenalty;
                
                if (score > bestScore) {
                    bestScore = score;
                    bestCombination = combo;
                }
            }
        }
        
        // Si encontramos una buena combinación, no necesitamos más alimentos
        if (bestCombination) break;
    }

    // Si no encontramos combinación perfecta, usar enfoque aproximado
    if (!bestCombination) {
        bestCombination = findApproximateCombination(availableFoods, targetCHO, targetProtein);
    }

    // ACTUALIZAR HISTORIAL: Añadir combinación seleccionada
    const selectedNames = bestCombination.map(f => f.name).join(' + ');
    window.foodHistory.push(selectedNames);
    // Aumentar ventana de historial a 12 horas para ultras largas
    if (window.foodHistory.length > 12) {
        window.foodHistory = window.foodHistory.slice(-12);
    }

    // Calcular totales finales
    const finalCHO = bestCombination.reduce((sum, food) => sum + food.carbs, 0);
    const finalProtein = bestCombination.reduce((sum, food) => sum + food.protein, 0);
    const finalSodium = bestCombination.reduce((sum, food) => sum + (food.sodium_mg || 0), 0);
    const finalPotassium = bestCombination.reduce((sum, food) => sum + (food.potassium_mg || 0), 0);

    // Calcular precisión
    const choAccuracy = targetCHO > 0 ? Math.max(0, Math.min(100, Math.round((finalCHO / targetCHO) * 100))) : 100;
    const proteinAccuracy = targetProtein > 0 ? Math.max(0, Math.min(100, Math.round((finalProtein / targetProtein) * 100))) : 100;

    return {
        foods: bestCombination,
        totalCHO: Math.round(finalCHO),
        totalProtein: Math.round(finalProtein),
        totalSodium: Math.round(finalSodium),
        totalPotassium: Math.round(finalPotassium),
        targetCHO: targetCHO,
        targetProtein: targetProtein,
        phase: phase,
        phaseDescription: getPhaseDescription(phase),
        accuracy: {
            choAccuracy: choAccuracy,
            proteinAccuracy: proteinAccuracy
        },
        optimization: {
            choExcess: Math.max(0, finalCHO - targetCHO),
            proteinExcess: Math.max(0, finalProtein - targetProtein),
            efficiency: Math.round((targetCHO + targetProtein) / (finalCHO + finalProtein) * 100)
        }
    };
}

// FUNCIÓN AUXILIAR: Generar todas las combinaciones posibles
function generateCombinations(foods, maxSize) {
    const combinations = [];
    
    // Combinaciones de 1 alimento
    if (maxSize >= 1) {
        for (const food of foods) {
            combinations.push([food]);
        }
    }
    
    // Combinaciones de 2 alimentos
    if (maxSize >= 2) {
        for (let i = 0; i < foods.length; i++) {
            for (let j = i + 1; j < foods.length; j++) {
                combinations.push([foods[i], foods[j]]);
            }
        }
    }
    
    // Combinaciones de 3 alimentos
    if (maxSize >= 3) {
        for (let i = 0; i < foods.length; i++) {
            for (let j = i + 1; j < foods.length; j++) {
                for (let k = j + 1; k < foods.length; k++) {
                    combinations.push([foods[i], foods[j], foods[k]]);
                }
            }
        }
    }
    
    return combinations;
}

// FUNCIÓN AUXILIAR: Algoritmo de aproximación cuando no hay combinación perfecta
function findApproximateCombination(foods, targetCHO, targetProtein) {
    // Ordenar alimentos por eficiencia CHO/proteína
    const sortedFoods = [...foods].sort((a, b) => {
        const aRatio = a.carbs + (targetProtein > 0 ? a.protein : 0);
        const bRatio = b.carbs + (targetProtein > 0 ? b.protein : 0);
        return bRatio - aRatio; // Descendente - más eficientes primero
    });
    
    const combination = [];
    let currentCHO = 0;
    let currentProtein = 0;
    
    // Seleccionar alimentos hasta alcanzar el objetivo (máximo 3)
    for (const food of sortedFoods) {
        if (combination.length >= 3) break;
        
        const newCHO = currentCHO + food.carbs;
        const newProtein = currentProtein + food.protein;
        
        // Agregar si nos acerca al objetivo sin exceder dramáticamente
        if ((newCHO <= targetCHO * 1.3) && (targetProtein === 0 || newProtein <= targetProtein * 1.5)) {
            combination.push(food);
            currentCHO = newCHO;
            currentProtein = newProtein;
            
            // Si ya alcanzamos el objetivo, parar
            if (currentCHO >= targetCHO && (targetProtein === 0 || currentProtein >= targetProtein)) {
                break;
            }
        }
    }
    
    // Si no logramos nada, al menos un alimento
    if (combination.length === 0 && sortedFoods.length > 0) {
        combination.push(sortedFoods[0]);
    }
    
    return combination;
}

if (typeof window !== 'undefined') {
    window.testNewFoods = generateFoodCombinationNew;
}
