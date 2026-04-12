/* ===== i18n.js — Saco Group Language System ===== */
(function () {
  'use strict';

  var translations = {

    /* ────────────────────────────────────────────
       SHARED / NAVIGATION (all pages)
       ──────────────────────────────────────────── */
    en: {
      // Nav
      "nav-who":           "Who We Are",
      "nav-manufacturing": "Manufacturing",
      "nav-products":      "Products",
      "nav-sustainability":"Sustainability",
      "nav-studio":        "Design Studio",
      "nav-contact":       "Contact",

      // Overlay nav
      "overlay-clients":   "Clients & Markets",

      // Overlay footer
      "overlay-lowpact":   "Lowpact Textile Technology \u2197",

      // Footer
      "footer-clients":    "Clients",
      "footer-contact":    "Contact",
      "footer-lowpact":    "Lowpact \u2197",
      "footer-copy":       "\u00A9 2025 Saco Group. All rights reserved. \u2014 sacochina.com",

      /* ────── INDEX PAGE ────── */

      // Hero
      "hero-title":        "Low-Impact Textile Technologies<br>&amp; Finished Products",
      "hero-sub":          "Saco Group is a vertically integrated textile platform combining material innovation, advanced manufacturing and finished product development for premium global brands.",
      "hero-card-saco-name":   "Shanghai Saco Textile",
      "hero-card-saco-desc":   "Manufacturing &amp; finished product development<br>hosiery, seamless, underwear, babywear and silk",
      "hero-card-lowpact-name":"Lowpact Textile Technology",
      "hero-card-lowpact-desc":"Low-impact yarn, dyeing and material technologies<br>IndiDye<sup>\u00AE</sup>, SoftSpin<sup>\u2122</sup>, Resilkose<sup>\u2122</sup>",
      "hero-scroll":       "Scroll",

      // Who We Are
      "about-title":       "Who We Are",
      "about-body-1":      "SACO Group connects low-impact material technology with scalable manufacturing platforms in China. With decades of experience in hosiery, seamless and next-to-skin categories, we support premium brands from yarn development to industrial production.",
      "about-body-2":      "Our structure is built around two specialised platforms \u2014 Shanghai Saco Textile for manufacturing and product development, and Lowpact Textile Technology for material innovation and sustainable credentials.",

      // Shanghai Saco Textile section
      "saco-title":        "Shanghai Saco Textile Co. Ltd.",
      "saco-subtitle":     "Finished Products Platform",
      "saco-body-1":       "SACO is the manufacturing and product development platform of SACO Group, translating advanced materials and low-impact technologies into premium finished garments.",
      "saco-body-2":       "Building on decades of experience in hosiery, seamless and next-to-skin intimates, SACO combines industrial expertise, material know-how and responsible production to deliver consistent quality at scale.",
      "saco-body-3":       "Our role is to connect innovation with real-world application, supporting brands from product development and sampling to industrial production, with a strong focus on fit, comfort and long-term performance.",
      "why-saco":          "Why Saco",
      "why-item-1":        "Product-focused development",
      "why-item-2":        "Strong industrial base in Asia",
      "why-item-3":        "Flexibility across categories and volumes",
      "why-item-4":        "Experience with demanding international brands",
      "core-capabilities": "Core Capabilities",
      "explore-products":  "Explore Products \u2192",

      // Stats
      "stat-knitting-n":   "400",
      "stat-knitting-label":"Knitting Machines",
      "stat-knitting-sub": "\u2192 40M pairs socks / year",
      "stat-seamless-n":   "80",
      "stat-seamless-label":"Seamless Machines",
      "stat-seamless-sub": "\u2192 8M seamless garments / year",
      "stat-lines-n":      "12",
      "stat-lines-label":  "Production Lines",
      "stat-lines-sub":    "\u2192 10M pieces underwear & swimwear / year",
      "stat-flatknit-n":   "50",
      "stat-flatknit-label":"Flat Knit Machines",
      "stat-flatknit-sub": "\u2192 3M baby knitwear pieces / year",

      // Sustainability
      "sustain-title":     "Sustainability",
      "sustain-lead":      "Embedded in technology, not added as a final layer",
      "sustain-body":      "Our approach focuses on reducing chemicals, water use and waste at the source, prioritising physical and mechanical solutions over chemical finishes. From IndiDye<sup>\u00AE</sup> plant-based dyeing to SoftSpin<sup>\u2122</sup> chemical-free softening and Resilkose<sup>\u2122</sup> circular silk \u2014 sustainability is built into the material itself.",
      "sustain-materials-title": "Responsible Materials",
      "mat-organic-cotton":  "Organic Cotton",
      "mat-recycled-silk":   "Recycled &amp; Organic Silk \u2197",
      "mat-rws":             "RWS Responsible Wool",
      "mat-cmia":            "CMIA Cotton Made in Africa",
      "mat-recycled-cotton": "Recycled Cotton",
      "mat-recycled-nylon":  "Recycled Nylon",
      "mat-recycled-poly":   "Recycled Polyester",
      "mat-recycled-acrylic":"Recycled Acrylic",
      "mat-eco-viscose":     "Eco Viscose",
      "mat-veglon":          "Veglon<sup>\u00AE</sup> Bio Based",
      "mat-polylana":        "Polylana<sup>\u00AE</sup>",
      "mat-indidye":         "Plant Dye IndiDye<sup>\u00AE</sup> \u2197",
      "certs-label":         "Certifications",
      "cert-gots":           "Global Organic Textile Standard",
      "cert-rws":            "Responsible Wool Standard",
      "cert-grs":            "Global Recycled Standard",
      "cert-oeko":           "Oeko-Tex Eco Passport",
      "cert-roadmap":        "Roadmap to Zero",
      "cert-bsci":           "Business Social Compliance",

      // Clients & Markets
      "clients-title":       "Clients & Markets",
      "clients-body-1":      "We partner with fashion brands and international retailers across global markets, supporting both structured production programs and ongoing product development.",
      "clients-body-2":      "Our clients operate across Europe, North America, South America and Australia, reflecting our ability to work across different market requirements, price levels and product strategies.",
      "clients-body-3":      "The brands shown here represent a selection of ongoing collaborations.",

      // Lowpact section
      "lowpact-title":       "Lowpact Textile Technology, Ltd.",
      "lowpact-visit":       "Visit Lowpact Textile Technology \u2192",
      "lowpact-intro":       "The innovation engine of Saco Group. Lowpact Textile Technology develops low-impact yarn, dyeing and material technologies that underpin our sustainable credentials \u2014 and those of the premium brands we supply.",
      "tech-indidye-name":   "IndiDye<sup>\u00AE</sup>",
      "tech-indidye-desc":   "High-performance natural plant dyes with low environmental impact. A closed-loop dyeing process that eliminates synthetic colorants without compromising colour fastness or vibrancy.",
      "tech-softspin-name":  "SoftSpin<sup>\u2122</sup>",
      "tech-softspin-desc":  "Patented spinning technology delivering premium softness without chemical softeners. Produces yarns with exceptional hand-feel that maintain their properties through repeated washing.",
      "tech-resilkose-name": "Resilkose<sup>\u2122</sup>",
      "tech-resilkose-desc": "GRS-certified recycled and organic silk for circular premium textiles. Maintains the luxurious qualities of silk while significantly reducing the environmental footprint of silk production.",
      "lowpact-certs-label": "Certifications & Standards",

      // Contact
      "contact-title":       "Get In Touch",
      "contact-mfg-platform":"Manufacturing Platform",
      "contact-mfg-name":    "Shanghai Saco Textile Co. Ltd.",
      "contact-mfg-address": "Room 501-2 &amp; 3, Building 8<br>No.1509 Xinzhen Road, Minhang District<br>201101, Shanghai, China",
      "contact-inn-platform":"Innovation Platform",
      "contact-inn-name":    "Lowpact Textile Technology Co. Ltd.",
      "contact-inn-address": "Shanghai, China",
      "contact-label-tel":   "Tel",
      "contact-label-email": "Email",
      "contact-label-web":   "Web",
      "form-label-name":     "Name",
      "form-placeholder-name":"Your name",
      "form-label-email":    "Email",
      "form-placeholder-email":"your@email.com",
      "form-label-company":  "Company (optional)",
      "form-placeholder-company":"Your company",
      "form-label-message":  "Message",
      "form-placeholder-message":"Your message...",
      "form-submit":         "Send Message",
      "form-sending":        "Sending...",
      "form-sent":           "Message sent",
      "form-thankyou":       "Thank you, {name}. We will get back to you shortly.",
      "form-error":          "Error. Try again.",

      /* ────── PRODUCTS PAGE ────── */
      "products-title":      "Products",
      "products-intro":      "Shanghai Saco Textile develops and manufactures finished garments across five core categories \u2014 from sampling and development to full industrial-scale production.",
      "tab-socks":           "Socks & Hosiery",
      "tab-seamless":        "Seamless",
      "tab-underwear":       "Underwear",
      "tab-swimwear":        "Swimwear",
      "tab-baby":            "Babywear & Kids",
      "tab-silk":            "Silk Garments",

      "prod-socks-title":    "Socks & Hosiery",
      "prod-socks-desc":     "Industrial socks and hosiery programs with controlled fit and stable production standards. From everyday fashion to trekking and high-performance sports.",
      "prod-socks-mat-title":"Materials & Compositions",
      "prod-socks-mat-1":    "Organic cotton",
      "prod-socks-mat-2":    "SoftSpin<sup>\u2122</sup> cotton",
      "prod-socks-mat-3":    "Recycled nylon",
      "prod-socks-mat-4":    "Merino wool",
      "prod-socks-mat-5":    "Recycled acrylic",
      "prod-socks-mat-6":    "Plant-dyed with IndiDye<sup>\u00AE</sup>",
      "prod-socks-mat-7":    "Polylana<sup>\u00AE</sup>",
      "prod-socks-mat-8":    "Eco viscose",
      "prod-socks-cap-fig":  "40M",
      "prod-socks-cap-unit": "pairs / year",

      "prod-seamless-title":    "Seamless",
      "prod-seamless-desc":     "Seamless garments engineered for scalable production, comfort and technical precision. Innerwear and outerwear applications across activewear, base layers and underwear.",
      "prod-seamless-mat-title":"Materials & Compositions",
      "prod-seamless-mat-1":   "Recycled polyamide",
      "prod-seamless-mat-2":   "Organic cotton",
      "prod-seamless-mat-3":   "Recycled polyester",
      "prod-seamless-mat-4":   "Silk",
      "prod-seamless-mat-5":   "Wool",
      "prod-seamless-mat-6":   "SoftSpin<sup>\u2122</sup> cotton",
      "prod-seamless-cap-fig": "Men & Women",
      "prod-seamless-cap-unit":"programs available",

      "prod-underwear-title":    "Underwear",
      "prod-underwear-desc":     "Next-to-skin programs developed for brands seeking reliable production and controlled performance. From sampling to industrial scale.",
      "prod-underwear-mat-title":"Materials & Compositions",
      "prod-underwear-mat-1":   "Organic cotton",
      "prod-underwear-mat-2":   "Recycled nylon",
      "prod-underwear-mat-3":   "Eco viscose",
      "prod-underwear-mat-4":   "Veglon<sup>\u00AE</sup> bio based",
      "prod-underwear-mat-5":   "RWS Responsible Wool",
      "prod-underwear-cap-fig": "10M",
      "prod-underwear-cap-unit":"pieces / year",

      "prod-swimwear-title":    "Swimwear",
      "prod-swimwear-desc":     "Swimwear programs combining trend-driven design with scalable production. Bikinis, one-pieces and beachwear developed from our Barcelona design studio.",
      "prod-swimwear-mat-title":"Materials & Compositions",
      "prod-swimwear-mat-1":   "Recycled polyamide",
      "prod-swimwear-mat-2":   "Recycled polyester",
      "prod-swimwear-mat-3":   "Econyl<sup>\u00AE</sup> regenerated nylon",
      "prod-swimwear-mat-4":   "Lycra<sup>\u00AE</sup> elastane",
      "prod-swimwear-cap-fig": "Bikinis",
      "prod-swimwear-cap-unit":"one-pieces & beachwear",

      "prod-baby-title":    "Babywear & Kids",
      "prod-baby-desc":     "Babywear combining sewn garments and fully fashioned knitwear. Soft, safe materials for infant and kids programs in organic and sustainable fibres.",
      "prod-baby-mat-title":"Materials & Compositions",
      "prod-baby-mat-1":   "Organic cotton",
      "prod-baby-mat-2":   "CMIA Cotton Made in Africa",
      "prod-baby-mat-3":   "Recycled cotton",
      "prod-baby-mat-4":   "SoftSpin<sup>\u2122</sup> cotton",
      "prod-baby-mat-5":   "RWS wool",
      "prod-baby-cap-fig": "3M",
      "prod-baby-cap-unit":"pieces / year",

      "prod-silk-title":    "Silk Garments",
      "prod-silk-desc":     "Silk garment developments focused on material performance, durability and production consistency. Conventional, recycled and organic silk options for garments and home textiles.",
      "prod-silk-mat-title":"Materials & Compositions",
      "prod-silk-mat-1":   "Conventional silk",
      "prod-silk-mat-2":   "Resilkose<sup>\u2122</sup> recycled silk",
      "prod-silk-mat-3":   "Organic silk (GRS certified)",
      "prod-silk-cap-fig": "Garments",
      "prod-silk-cap-unit":"& home textiles",

      "products-disclaimer": "All images shown correspond to products developed and manufactured by Saco.",

      /* ────── STUDIO PAGE ────── */
      "studio-title":        "Saco Design Studio",
      "studio-sub":          "Bridging European Design with Asian Manufacturing",
      "studio-body-1":       "From our Barcelona studio, we offer full design support to brands at every stage of the creative process. Whether you work with your own design team or need end-to-end creative direction, we adapt to your workflow.",
      "studio-body-2":       "We actively track material innovation, yarn development and product evolution, translating these into actionable proposals aligned with each client\u2019s market and positioning.",
      "studio-trend-name":   "Trend Reports",
      "studio-trend-desc":   "Seasonal trend analysis and material forecasts delivered periodically to our clients",
      "studio-garment-name": "Garment Design",
      "studio-garment-desc": "Technical design support from concept to final specification, adapted to your brief",
      "studio-creative-name":"Creative Direction",
      "studio-creative-desc":"Mood boards, material selection and collection direction aligned with your brand identity",
      "studio-oem-title":    "OEM \u2014 Production based on your design",
      "studio-oem-desc":     "You lead the creative direction, we ensure accurate execution, consistent quality and reliable production at scale.",
      "studio-odm-title":    "ODM \u2014 Design and development by SACO",
      "studio-odm-desc":     "We develop products from concept to final specification, combining design, materials and technical expertise with full production support.",
      "studio-proj-swim":    "Swimwear SS26 \u2014 Trend & Design Direction",
      "studio-proj-rose":    "Micro Rose Romance \u2014 Underwear Trend",
      "studio-proj-grid":    "AW26 On The Grid \u2014 Underwear Trend",
      "studio-proj-socks":   "Gift Socks Box \u2014 Packaging Proposal",

      /* ────── MANUFACTURING PAGE ────── */
      "mfg-hero-title":      "Saco Anhui Factory",
      "mfg-hero-sub":        "Our Anhui production facility sits at the core of our operations, supporting multiple product categories \u2014 from development to large-scale manufacturing.",
      "mfg-hero-badge":      "Partnership",
      "mfg-hero-card-title": "Saco Esa Silk \u2014 Suzhou",
      "mfg-stat-total-n":    "26K",
      "mfg-stat-total-label":"m\u00B2 total",
      "mfg-stat-mfg-n":     "18K",
      "mfg-stat-mfg-label":  "m\u00B2 manufacturing",
      "mfg-intro-text":      "Spanning 26,000 square meters, with 18,000 m\u00B2 dedicated to manufacturing, our Anhui facility is structured across specialized production units. We support brands across socks, seamless, underwear, swimwear and baby knitwear, combining industrial capacity with controlled quality standards.",

      "mfg-socks-title":     "Socks & Hosiery",
      "mfg-socks-badge":     "400",
      "mfg-socks-badge-text":"Knitting Machines",
      "mfg-socks-badge-cap": "40M pairs / year",
      "mfg-socks-desc-1":    "Our sock manufacturing division is equipped with single-cylinder, double-cylinder and integrated knitting machines.",
      "mfg-socks-desc-2":    "This setup allows us to cover a wide range of constructions \u2014 from basic everyday products to more technical and performance-driven designs \u2014 with stable quality and high-volume capacity.",

      "mfg-seamless-title":     "Seamless",
      "mfg-seamless-badge":     "80",
      "mfg-seamless-badge-text":"Seamless Machines",
      "mfg-seamless-badge-cap": "8M garments / year",
      "mfg-seamless-desc-1":    "Our seamless production is based on advanced circular knitting machines, enabling body-adaptive garments with optimized comfort and fit.",
      "mfg-seamless-desc-2":    "We focus on technical constructions and performance-driven products, ensuring consistency across large production volumes.",

      "mfg-flatknit-title":     "Flat Knit",
      "mfg-flatknit-badge":     "50",
      "mfg-flatknit-badge-text":"Flat Knit Machines",
      "mfg-flatknit-badge-cap": "3M pieces / year",
      "mfg-flatknit-desc-1":    "Our flat knitting capacity is primarily focused on babywear and kids garments, where softness, comfort and precise construction are essential.",
      "mfg-flatknit-desc-2":    "The setup is optimized for smaller-size garments and delicate knit structures.",

      "mfg-underwear-title":     "Underwear & Swimwear",
      "mfg-underwear-badge":     "12",
      "mfg-underwear-badge-text":"Production Lines",
      "mfg-underwear-badge-cap": "10M pieces / year",
      "mfg-underwear-desc-1":    "We operate dedicated production lines combining lamination and sewing processes, supporting both underwear and swimwear programs.",
      "mfg-underwear-desc-2":    "This structure allows us to deliver stable, scalable production while maintaining control over fit, finishing and quality.",

      /* ────── SILK PAGE ────── */
      "silk-hero-badge":     "Strategic Partnership",
      "silk-hero-title":     "Saco Esa Silk",
      "silk-hero-sub":       "Suzhou \u2014 Silk Production & Strategic Partnership",
      "silk-hero-back":      "\u2190 Back to Anhui Factory",
      "silk-intro":          "Through a strategic partnership with a specialized silk manufacturer in Suzhou, SACO extends its capabilities into premium silk products and materials. This collaboration allows us to support brands with high-quality silk developments, combining traditional silk expertise with modern production standards.",
      "silk-stat-exp-n":     "20+",
      "silk-stat-exp-label": "Years Experience",
      "silk-stat-exp-sub":   "Specialized in silk production",
      "silk-stat-area-n":    "5K",
      "silk-stat-area-label":"m\u00B2 Production Area",
      "silk-stat-area-sub":  "Dedicated silk manufacturing",
      "silk-stat-workers-n": "100+",
      "silk-stat-workers-label":"Workers",
      "silk-stat-workers-sub":"Skilled in silk processing",
      "silk-stat-countries-n":"60+",
      "silk-stat-countries-label":"Countries",
      "silk-stat-countries-sub":"Global export experience",
      "silk-production-heading":"Production",
      "silk-production-text-1": "The facility integrates design, manufacturing and export of silk products, covering a wide range of categories including garments, accessories and home textiles.",
      "silk-production-text-2": "Production includes silk garments such as dresses, shirts and robes, as well as accessories like scarves, eye masks and hair accessories, alongside silk bedding and fabrics.",
      "silk-quality-heading":   "Quality",
      "silk-quality-text":      "We work with high-grade mulberry silk, including 6A quality standards, ensuring premium performance, softness and durability across all developments.",
      "silk-caps-heading":      "Silk Capabilities",
      "silk-cap-1":             "Silk garments (dresses, shirts, robes)",
      "silk-cap-2":             "Silk accessories (scarves, eye masks, hair accessories)",
      "silk-cap-3":             "Silk bedding and home textiles",
      "silk-cap-4":             "Silk fabrics for development and sourcing",
      "silk-cap-5":             "Customization in size, color and finishes",
      "silk-position":          "This partnership enables SACO to integrate silk into its broader product development platform, supporting brands looking for premium materials and refined product categories."
    },

    /* ===================================================================
       SPANISH
       =================================================================== */
    es: {
      "nav-who":           "Qui\u00E9nes Somos",
      "nav-manufacturing": "Fabricaci\u00F3n",
      "nav-products":      "Productos",
      "nav-sustainability":"Sostenibilidad",
      "nav-studio":        "Estudio de Dise\u00F1o",
      "nav-contact":       "Contacto",
      "overlay-clients":   "Clientes y Mercados",
      "overlay-lowpact":   "Lowpact Textile Technology \u2197",
      "footer-clients":    "Clientes",
      "footer-contact":    "Contacto",
      "footer-lowpact":    "Lowpact \u2197",
      "footer-copy":       "\u00A9 2025 Saco Group. Todos los derechos reservados. \u2014 sacochina.com",

      "hero-title":        "Tecnolog\u00EDas Textiles de Bajo Impacto<br>y Productos Terminados",
      "hero-sub":          "Saco Group es una plataforma textil verticalmente integrada que combina innovaci\u00F3n en materiales, fabricaci\u00F3n avanzada y desarrollo de producto terminado para marcas premium a nivel global.",
      "hero-card-saco-name":   "Shanghai Saco Textile",
      "hero-card-saco-desc":   "Fabricaci\u00F3n y desarrollo de producto terminado<br>calceter\u00EDa, seamless, ropa interior, beb\u00E9 y seda",
      "hero-card-lowpact-name":"Lowpact Textile Technology",
      "hero-card-lowpact-desc":"Tecnolog\u00EDas de hilado, tinte y materiales de bajo impacto<br>IndiDye<sup>\u00AE</sup>, SoftSpin<sup>\u2122</sup>, Resilkose<sup>\u2122</sup>",
      "hero-scroll":       "Desplazar",

      "about-title":       "Qui\u00E9nes Somos",
      "about-body-1":      "SACO Group conecta tecnolog\u00EDa de materiales de bajo impacto con plataformas de fabricaci\u00F3n escalables en China. Con d\u00E9cadas de experiencia en calceter\u00EDa, seamless y categor\u00EDas de contacto con la piel, apoyamos a marcas premium desde el desarrollo de hilados hasta la producci\u00F3n industrial.",
      "about-body-2":      "Nuestra estructura se articula en torno a dos plataformas especializadas \u2014 Shanghai Saco Textile para fabricaci\u00F3n y desarrollo de producto, y Lowpact Textile Technology para innovaci\u00F3n en materiales y credenciales de sostenibilidad.",

      "saco-title":        "Shanghai Saco Textile Co. Ltd.",
      "saco-subtitle":     "Plataforma de Productos Terminados",
      "saco-body-1":       "SACO es la plataforma de fabricaci\u00F3n y desarrollo de producto del Grupo SACO, transformando materiales avanzados y tecnolog\u00EDas de bajo impacto en prendas premium terminadas.",
      "saco-body-2":       "Con d\u00E9cadas de experiencia en calceter\u00EDa, seamless y ropa interior de contacto con la piel, SACO combina experiencia industrial, conocimiento de materiales y producci\u00F3n responsable para ofrecer calidad consistente a escala.",
      "saco-body-3":       "Nuestro rol es conectar la innovaci\u00F3n con la aplicaci\u00F3n real, apoyando a las marcas desde el desarrollo de producto y muestrario hasta la producci\u00F3n industrial, con un fuerte enfoque en ajuste, confort y rendimiento a largo plazo.",
      "why-saco":          "Por qu\u00E9 Saco",
      "why-item-1":        "Desarrollo centrado en el producto",
      "why-item-2":        "S\u00F3lida base industrial en Asia",
      "why-item-3":        "Flexibilidad en categor\u00EDas y vol\u00FAmenes",
      "why-item-4":        "Experiencia con marcas internacionales exigentes",
      "core-capabilities": "Capacidades Principales",
      "explore-products":  "Explorar Productos \u2192",

      "stat-knitting-n":   "400",
      "stat-knitting-label":"M\u00E1quinas de Tejer",
      "stat-knitting-sub": "\u2192 40M pares de calcetines / a\u00F1o",
      "stat-seamless-n":   "80",
      "stat-seamless-label":"M\u00E1quinas Seamless",
      "stat-seamless-sub": "\u2192 8M prendas seamless / a\u00F1o",
      "stat-lines-n":      "12",
      "stat-lines-label":  "L\u00EDneas de Producci\u00F3n",
      "stat-lines-sub":    "\u2192 10M piezas ropa interior y ba\u00F1o / a\u00F1o",
      "stat-flatknit-n":   "50",
      "stat-flatknit-label":"M\u00E1quinas de Punto Plano",
      "stat-flatknit-sub": "\u2192 3M piezas punto beb\u00E9 / a\u00F1o",

      "sustain-title":     "Sostenibilidad",
      "sustain-lead":      "Integrada en la tecnolog\u00EDa, no a\u00F1adida como capa final",
      "sustain-body":      "Nuestro enfoque se centra en reducir qu\u00EDmicos, consumo de agua y residuos en el origen, priorizando soluciones f\u00EDsicas y mec\u00E1nicas sobre acabados qu\u00EDmicos. Desde el tinte vegetal IndiDye<sup>\u00AE</sup> hasta el suavizado sin qu\u00EDmicos SoftSpin<sup>\u2122</sup> y la seda circular Resilkose<sup>\u2122</sup> \u2014 la sostenibilidad est\u00E1 incorporada en el propio material.",
      "sustain-materials-title": "Materiales Responsables",
      "mat-organic-cotton":  "Algod\u00F3n Org\u00E1nico",
      "mat-recycled-silk":   "Seda Reciclada y Org\u00E1nica \u2197",
      "mat-rws":             "Lana Responsable RWS",
      "mat-cmia":            "CMIA Algod\u00F3n Made in Africa",
      "mat-recycled-cotton": "Algod\u00F3n Reciclado",
      "mat-recycled-nylon":  "Nailon Reciclado",
      "mat-recycled-poly":   "Poli\u00E9ster Reciclado",
      "mat-recycled-acrylic":"Acr\u00EDlico Reciclado",
      "mat-eco-viscose":     "Viscosa Ecol\u00F3gica",
      "mat-veglon":          "Veglon<sup>\u00AE</sup> Base Biol\u00F3gica",
      "mat-polylana":        "Polylana<sup>\u00AE</sup>",
      "mat-indidye":         "Tinte Vegetal IndiDye<sup>\u00AE</sup> \u2197",
      "certs-label":         "Certificaciones",
      "cert-gots":           "Est\u00E1ndar Textil Org\u00E1nico Global",
      "cert-rws":            "Est\u00E1ndar de Lana Responsable",
      "cert-grs":            "Est\u00E1ndar Global de Reciclaje",
      "cert-oeko":           "Oeko-Tex Eco Passport",
      "cert-roadmap":        "Roadmap to Zero",
      "cert-bsci":           "Cumplimiento Social Empresarial",

      "clients-title":       "Clientes y Mercados",
      "clients-body-1":      "Colaboramos con marcas de moda y distribuidores internacionales en mercados globales, apoyando tanto programas de producci\u00F3n estructurados como el desarrollo continuo de producto.",
      "clients-body-2":      "Nuestros clientes operan en Europa, Am\u00E9rica del Norte, Am\u00E9rica del Sur y Australia, reflejando nuestra capacidad para trabajar con diferentes requisitos de mercado, niveles de precio y estrategias de producto.",
      "clients-body-3":      "Las marcas aqu\u00ED mostradas representan una selecci\u00F3n de colaboraciones activas.",

      "lowpact-title":       "Lowpact Textile Technology, Ltd.",
      "lowpact-visit":       "Visitar Lowpact Textile Technology \u2192",
      "lowpact-intro":       "El motor de innovaci\u00F3n de Saco Group. Lowpact Textile Technology desarrolla tecnolog\u00EDas de hilado, tinte y materiales de bajo impacto que sustentan nuestras credenciales sostenibles \u2014 y las de las marcas premium a las que servimos.",
      "tech-indidye-name":   "IndiDye<sup>\u00AE</sup>",
      "tech-indidye-desc":   "Tintes naturales vegetales de alto rendimiento con bajo impacto ambiental. Un proceso de te\u00F1ido en circuito cerrado que elimina colorantes sint\u00E9ticos sin comprometer la solidez ni la intensidad del color.",
      "tech-softspin-name":  "SoftSpin<sup>\u2122</sup>",
      "tech-softspin-desc":  "Tecnolog\u00EDa de hilado patentada que ofrece suavidad premium sin suavizantes qu\u00EDmicos. Produce hilados con un tacto excepcional que mantienen sus propiedades tras lavados repetidos.",
      "tech-resilkose-name": "Resilkose<sup>\u2122</sup>",
      "tech-resilkose-desc": "Seda reciclada y org\u00E1nica certificada GRS para textiles premium circulares. Mantiene las cualidades lujosas de la seda reduciendo significativamente la huella ambiental de su producci\u00F3n.",
      "lowpact-certs-label": "Certificaciones y Est\u00E1ndares",

      "contact-title":       "Cont\u00E1ctenos",
      "contact-mfg-platform":"Plataforma de Fabricaci\u00F3n",
      "contact-mfg-name":    "Shanghai Saco Textile Co. Ltd.",
      "contact-mfg-address": "Room 501-2 &amp; 3, Edificio 8<br>No.1509 Xinzhen Road, Distrito Minhang<br>201101, Shangh\u00E1i, China",
      "contact-inn-platform":"Plataforma de Innovaci\u00F3n",
      "contact-inn-name":    "Lowpact Textile Technology Co. Ltd.",
      "contact-inn-address": "Shangh\u00E1i, China",
      "contact-label-tel":   "Tel",
      "contact-label-email": "Email",
      "contact-label-web":   "Web",
      "form-label-name":     "Nombre",
      "form-placeholder-name":"Su nombre",
      "form-label-email":    "Correo electr\u00F3nico",
      "form-placeholder-email":"su@email.com",
      "form-label-company":  "Empresa (opcional)",
      "form-placeholder-company":"Su empresa",
      "form-label-message":  "Mensaje",
      "form-placeholder-message":"Su mensaje...",
      "form-submit":         "Enviar Mensaje",
      "form-sending":        "Enviando...",
      "form-sent":           "Mensaje enviado",
      "form-thankyou":       "Gracias, {name}. Nos pondremos en contacto con usted en breve.",
      "form-error":          "Error. Int\u00E9ntelo de nuevo.",

      "products-title":      "Productos",
      "products-intro":      "Shanghai Saco Textile desarrolla y fabrica prendas terminadas en cinco categor\u00EDas principales \u2014 desde muestrario y desarrollo hasta producci\u00F3n a escala industrial completa.",
      "tab-socks":           "Calcetines y Calceter\u00EDa",
      "tab-seamless":        "Seamless",
      "tab-underwear":       "Ropa Interior",
      "tab-swimwear":        "Ba\u00F1o",
      "tab-baby":            "Beb\u00E9 y Ni\u00F1os",
      "tab-silk":            "Prendas de Seda",

      "prod-socks-title":    "Calcetines y Calceter\u00EDa",
      "prod-socks-desc":     "Programas industriales de calcetines y calceter\u00EDa con ajuste controlado y est\u00E1ndares de producci\u00F3n estables. Desde moda diaria hasta trekking y deporte de alto rendimiento.",
      "prod-socks-mat-title":"Materiales y Composiciones",
      "prod-socks-mat-1":    "Algod\u00F3n org\u00E1nico",
      "prod-socks-mat-2":    "Algod\u00F3n SoftSpin<sup>\u2122</sup>",
      "prod-socks-mat-3":    "Nailon reciclado",
      "prod-socks-mat-4":    "Lana merino",
      "prod-socks-mat-5":    "Acr\u00EDlico reciclado",
      "prod-socks-mat-6":    "Te\u00F1ido vegetal con IndiDye<sup>\u00AE</sup>",
      "prod-socks-mat-7":    "Polylana<sup>\u00AE</sup>",
      "prod-socks-mat-8":    "Viscosa ecol\u00F3gica",
      "prod-socks-cap-fig":  "40M",
      "prod-socks-cap-unit": "pares / a\u00F1o",

      "prod-seamless-title":    "Seamless",
      "prod-seamless-desc":     "Prendas seamless dise\u00F1adas para producci\u00F3n escalable, confort y precisi\u00F3n t\u00E9cnica. Aplicaciones en ropa interior y exterior para activewear, capas base y ropa interior.",
      "prod-seamless-mat-title":"Materiales y Composiciones",
      "prod-seamless-mat-1":   "Poliamida reciclada",
      "prod-seamless-mat-2":   "Algod\u00F3n org\u00E1nico",
      "prod-seamless-mat-3":   "Poli\u00E9ster reciclado",
      "prod-seamless-mat-4":   "Seda",
      "prod-seamless-mat-5":   "Lana",
      "prod-seamless-mat-6":   "Algod\u00F3n SoftSpin<sup>\u2122</sup>",
      "prod-seamless-cap-fig": "Hombre y Mujer",
      "prod-seamless-cap-unit":"programas disponibles",

      "prod-underwear-title":    "Ropa Interior",
      "prod-underwear-desc":     "Programas de ropa de contacto con la piel desarrollados para marcas que buscan producci\u00F3n fiable y rendimiento controlado. Desde muestrario hasta escala industrial.",
      "prod-underwear-mat-title":"Materiales y Composiciones",
      "prod-underwear-mat-1":   "Algod\u00F3n org\u00E1nico",
      "prod-underwear-mat-2":   "Nailon reciclado",
      "prod-underwear-mat-3":   "Viscosa ecol\u00F3gica",
      "prod-underwear-mat-4":   "Veglon<sup>\u00AE</sup> base biol\u00F3gica",
      "prod-underwear-mat-5":   "Lana Responsable RWS",
      "prod-underwear-cap-fig": "10M",
      "prod-underwear-cap-unit":"piezas / a\u00F1o",

      "prod-swimwear-title":    "Ba\u00F1o",
      "prod-swimwear-desc":     "Programas de ba\u00F1o que combinan dise\u00F1o de tendencia con producci\u00F3n escalable. Bikinis, ba\u00F1adores y ropa de playa desarrollados desde nuestro estudio de dise\u00F1o en Barcelona.",
      "prod-swimwear-mat-title":"Materiales y Composiciones",
      "prod-swimwear-mat-1":   "Poliamida reciclada",
      "prod-swimwear-mat-2":   "Poli\u00E9ster reciclado",
      "prod-swimwear-mat-3":   "Econyl<sup>\u00AE</sup> nailon regenerado",
      "prod-swimwear-mat-4":   "Lycra<sup>\u00AE</sup> elastano",
      "prod-swimwear-cap-fig": "Bikinis",
      "prod-swimwear-cap-unit":"ba\u00F1adores y ropa de playa",

      "prod-baby-title":    "Beb\u00E9 y Ni\u00F1os",
      "prod-baby-desc":     "Ropa de beb\u00E9 que combina prendas confeccionadas y punto fully fashioned. Materiales suaves y seguros para programas infantiles en fibras org\u00E1nicas y sostenibles.",
      "prod-baby-mat-title":"Materiales y Composiciones",
      "prod-baby-mat-1":   "Algod\u00F3n org\u00E1nico",
      "prod-baby-mat-2":   "CMIA Algod\u00F3n Made in Africa",
      "prod-baby-mat-3":   "Algod\u00F3n reciclado",
      "prod-baby-mat-4":   "Algod\u00F3n SoftSpin<sup>\u2122</sup>",
      "prod-baby-mat-5":   "Lana RWS",
      "prod-baby-cap-fig": "3M",
      "prod-baby-cap-unit":"piezas / a\u00F1o",

      "prod-silk-title":    "Prendas de Seda",
      "prod-silk-desc":     "Desarrollos de prendas de seda centrados en rendimiento del material, durabilidad y consistencia de producci\u00F3n. Opciones de seda convencional, reciclada y org\u00E1nica para prendas y textiles del hogar.",
      "prod-silk-mat-title":"Materiales y Composiciones",
      "prod-silk-mat-1":   "Seda convencional",
      "prod-silk-mat-2":   "Seda reciclada Resilkose<sup>\u2122</sup>",
      "prod-silk-mat-3":   "Seda org\u00E1nica (certificaci\u00F3n GRS)",
      "prod-silk-cap-fig": "Prendas",
      "prod-silk-cap-unit":"y textiles del hogar",

      "products-disclaimer": "Todas las im\u00E1genes corresponden a productos desarrollados y fabricados por Saco.",

      "studio-title":        "Saco Design Studio",
      "studio-sub":          "Conectando Dise\u00F1o Europeo con Fabricaci\u00F3n Asi\u00E1tica",
      "studio-body-1":       "Desde nuestro estudio en Barcelona, ofrecemos soporte de dise\u00F1o integral a marcas en cada etapa del proceso creativo. Ya sea que trabaje con su propio equipo de dise\u00F1o o necesite direcci\u00F3n creativa completa, nos adaptamos a su flujo de trabajo.",
      "studio-body-2":       "Seguimos activamente la innovaci\u00F3n en materiales, desarrollo de hilados y evoluci\u00F3n de producto, traduci\u00E9ndolos en propuestas accionables alineadas con el mercado y posicionamiento de cada cliente.",
      "studio-trend-name":   "Informes de Tendencias",
      "studio-trend-desc":   "An\u00E1lisis de tendencias estacionales y previsiones de materiales entregados peri\u00F3dicamente a nuestros clientes",
      "studio-garment-name": "Dise\u00F1o de Prendas",
      "studio-garment-desc": "Soporte de dise\u00F1o t\u00E9cnico desde el concepto hasta la especificaci\u00F3n final, adaptado a su brief",
      "studio-creative-name":"Direcci\u00F3n Creativa",
      "studio-creative-desc":"Mood boards, selecci\u00F3n de materiales y direcci\u00F3n de colecci\u00F3n alineados con la identidad de su marca",
      "studio-oem-title":    "OEM \u2014 Producci\u00F3n basada en su dise\u00F1o",
      "studio-oem-desc":     "Usted lidera la direcci\u00F3n creativa, nosotros garantizamos una ejecuci\u00F3n precisa, calidad consistente y producci\u00F3n fiable a escala.",
      "studio-odm-title":    "ODM \u2014 Dise\u00F1o y desarrollo por SACO",
      "studio-odm-desc":     "Desarrollamos productos desde el concepto hasta la especificaci\u00F3n final, combinando dise\u00F1o, materiales y experiencia t\u00E9cnica con soporte de producci\u00F3n integral.",
      "studio-proj-swim":    "Swimwear SS26 \u2014 Tendencia y Direcci\u00F3n de Dise\u00F1o",
      "studio-proj-rose":    "Micro Rose Romance \u2014 Tendencia Ropa Interior",
      "studio-proj-grid":    "AW26 On The Grid \u2014 Tendencia Ropa Interior",
      "studio-proj-socks":   "Gift Socks Box \u2014 Propuesta de Packaging",

      "mfg-hero-title":      "F\u00E1brica Saco Anhui",
      "mfg-hero-sub":        "Nuestra instalaci\u00F3n productiva en Anhui es el n\u00FAcleo de nuestras operaciones, dando soporte a m\u00FAltiples categor\u00EDas de producto \u2014 desde desarrollo hasta fabricaci\u00F3n a gran escala.",
      "mfg-hero-badge":      "Asociaci\u00F3n",
      "mfg-hero-card-title": "Saco Esa Silk \u2014 Suzhou",
      "mfg-stat-total-n":    "26K",
      "mfg-stat-total-label":"m\u00B2 totales",
      "mfg-stat-mfg-n":     "18K",
      "mfg-stat-mfg-label":  "m\u00B2 fabricaci\u00F3n",
      "mfg-intro-text":      "Con 26.000 metros cuadrados, de los cuales 18.000 m\u00B2 est\u00E1n dedicados a fabricaci\u00F3n, nuestra instalaci\u00F3n en Anhui se estructura en unidades de producci\u00F3n especializadas. Apoyamos a marcas en calcetines, seamless, ropa interior, ba\u00F1o y punto beb\u00E9, combinando capacidad industrial con est\u00E1ndares de calidad controlados.",

      "mfg-socks-title":     "Calcetines y Calceter\u00EDa",
      "mfg-socks-badge":     "400",
      "mfg-socks-badge-text":"M\u00E1quinas de Tejer",
      "mfg-socks-badge-cap": "40M pares / a\u00F1o",
      "mfg-socks-desc-1":    "Nuestra divisi\u00F3n de fabricaci\u00F3n de calcetines est\u00E1 equipada con m\u00E1quinas de tejer de cilindro simple, doble cilindro e integradas.",
      "mfg-socks-desc-2":    "Esta configuraci\u00F3n nos permite cubrir una amplia gama de construcciones \u2014 desde productos b\u00E1sicos de uso diario hasta dise\u00F1os m\u00E1s t\u00E9cnicos y orientados al rendimiento \u2014 con calidad estable y alta capacidad de volumen.",

      "mfg-seamless-title":     "Seamless",
      "mfg-seamless-badge":     "80",
      "mfg-seamless-badge-text":"M\u00E1quinas Seamless",
      "mfg-seamless-badge-cap": "8M prendas / a\u00F1o",
      "mfg-seamless-desc-1":    "Nuestra producci\u00F3n seamless se basa en m\u00E1quinas de punto circular avanzadas, que permiten prendas adaptables al cuerpo con confort y ajuste optimizados.",
      "mfg-seamless-desc-2":    "Nos centramos en construcciones t\u00E9cnicas y productos orientados al rendimiento, garantizando consistencia en grandes vol\u00FAmenes de producci\u00F3n.",

      "mfg-flatknit-title":     "Punto Plano",
      "mfg-flatknit-badge":     "50",
      "mfg-flatknit-badge-text":"M\u00E1quinas de Punto Plano",
      "mfg-flatknit-badge-cap": "3M piezas / a\u00F1o",
      "mfg-flatknit-desc-1":    "Nuestra capacidad de punto plano se centra principalmente en ropa de beb\u00E9 y ni\u00F1os, donde la suavidad, el confort y la construcci\u00F3n precisa son esenciales.",
      "mfg-flatknit-desc-2":    "La configuraci\u00F3n est\u00E1 optimizada para prendas de talla peque\u00F1a y estructuras de punto delicadas.",

      "mfg-underwear-title":     "Ropa Interior y Ba\u00F1o",
      "mfg-underwear-badge":     "12",
      "mfg-underwear-badge-text":"L\u00EDneas de Producci\u00F3n",
      "mfg-underwear-badge-cap": "10M piezas / a\u00F1o",
      "mfg-underwear-desc-1":    "Operamos l\u00EDneas de producci\u00F3n dedicadas que combinan procesos de laminado y costura, dando soporte tanto a programas de ropa interior como de ba\u00F1o.",
      "mfg-underwear-desc-2":    "Esta estructura nos permite ofrecer producci\u00F3n estable y escalable manteniendo el control sobre ajuste, acabado y calidad.",

      "silk-hero-badge":     "Asociaci\u00F3n Estrat\u00E9gica",
      "silk-hero-title":     "Saco Esa Silk",
      "silk-hero-sub":       "Suzhou \u2014 Producci\u00F3n de Seda y Asociaci\u00F3n Estrat\u00E9gica",
      "silk-hero-back":      "\u2190 Volver a F\u00E1brica Anhui",
      "silk-intro":          "A trav\u00E9s de una asociaci\u00F3n estrat\u00E9gica con un fabricante especializado en seda en Suzhou, SACO ampl\u00EDa sus capacidades hacia productos y materiales premium de seda. Esta colaboraci\u00F3n nos permite apoyar a marcas con desarrollos de seda de alta calidad, combinando experiencia tradicional en seda con est\u00E1ndares de producci\u00F3n modernos.",
      "silk-stat-exp-n":     "20+",
      "silk-stat-exp-label": "A\u00F1os de Experiencia",
      "silk-stat-exp-sub":   "Especializados en producci\u00F3n de seda",
      "silk-stat-area-n":    "5K",
      "silk-stat-area-label":"\u00C1rea de Producci\u00F3n m\u00B2",
      "silk-stat-area-sub":  "Fabricaci\u00F3n de seda dedicada",
      "silk-stat-workers-n": "100+",
      "silk-stat-workers-label":"Trabajadores",
      "silk-stat-workers-sub":"Cualificados en procesamiento de seda",
      "silk-stat-countries-n":"60+",
      "silk-stat-countries-label":"Pa\u00EDses",
      "silk-stat-countries-sub":"Experiencia de exportaci\u00F3n global",
      "silk-production-heading":"Producci\u00F3n",
      "silk-production-text-1": "La instalaci\u00F3n integra dise\u00F1o, fabricaci\u00F3n y exportaci\u00F3n de productos de seda, cubriendo una amplia gama de categor\u00EDas incluyendo prendas, accesorios y textiles del hogar.",
      "silk-production-text-2": "La producci\u00F3n incluye prendas de seda como vestidos, camisas y batas, as\u00ED como accesorios como pa\u00F1uelos, antifaces y accesorios para el cabello, adem\u00E1s de ropa de cama y telas de seda.",
      "silk-quality-heading":   "Calidad",
      "silk-quality-text":      "Trabajamos con seda de morera de alta calidad, incluyendo est\u00E1ndares de calidad 6A, garantizando rendimiento premium, suavidad y durabilidad en todos los desarrollos.",
      "silk-caps-heading":      "Capacidades en Seda",
      "silk-cap-1":             "Prendas de seda (vestidos, camisas, batas)",
      "silk-cap-2":             "Accesorios de seda (pa\u00F1uelos, antifaces, accesorios para el cabello)",
      "silk-cap-3":             "Ropa de cama y textiles del hogar en seda",
      "silk-cap-4":             "Telas de seda para desarrollo y aprovisionamiento",
      "silk-cap-5":             "Personalizaci\u00F3n en talla, color y acabados",
      "silk-position":          "Esta asociaci\u00F3n permite a SACO integrar la seda en su plataforma m\u00E1s amplia de desarrollo de producto, apoyando a marcas que buscan materiales premium y categor\u00EDas de producto refinadas."
    },

    /* ===================================================================
       JAPANESE
       =================================================================== */
    ja: {
      "nav-who":           "\u4F1A\u793E\u6982\u8981",
      "nav-manufacturing": "\u88FD\u9020",
      "nav-products":      "\u88FD\u54C1",
      "nav-sustainability":"\u30B5\u30B9\u30C6\u30CA\u30D3\u30EA\u30C6\u30A3",
      "nav-studio":        "\u30C7\u30B6\u30A4\u30F3\u30B9\u30BF\u30B8\u30AA",
      "nav-contact":       "\u304A\u554F\u3044\u5408\u308F\u305B",
      "overlay-clients":   "\u53D6\u5F15\u5148\u30FB\u5E02\u5834",
      "overlay-lowpact":   "Lowpact Textile Technology \u2197",
      "footer-clients":    "\u53D6\u5F15\u5148",
      "footer-contact":    "\u304A\u554F\u3044\u5408\u308F\u305B",
      "footer-lowpact":    "Lowpact \u2197",
      "footer-copy":       "\u00A9 2025 Saco Group. All rights reserved. \u2014 sacochina.com",

      "hero-title":        "\u4F4E\u74B0\u5883\u8CA0\u8377\u30C6\u30AD\u30B9\u30BF\u30A4\u30EB\u6280\u8853<br>\u304A\u3088\u3073\u5B8C\u6210\u54C1",
      "hero-sub":          "Saco Group\u306F\u3001\u7D20\u6750\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3\u3001\u5148\u9032\u88FD\u9020\u3001\u5B8C\u6210\u54C1\u958B\u767A\u3092\u7D71\u5408\u3057\u305F\u5782\u76F4\u7D71\u5408\u578B\u30C6\u30AD\u30B9\u30BF\u30A4\u30EB\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067\u3059\u3002\u4E16\u754C\u306E\u30D7\u30EC\u30DF\u30A2\u30E0\u30D6\u30E9\u30F3\u30C9\u3092\u652F\u63F4\u3057\u3066\u304A\u308A\u307E\u3059\u3002",
      "hero-card-saco-name":   "Shanghai Saco Textile",
      "hero-card-saco-desc":   "\u88FD\u9020\u304A\u3088\u3073\u5B8C\u6210\u54C1\u958B\u767A<br>\u30DB\u30FC\u30B8\u30A7\u30EA\u30FC\u3001\u30B7\u30FC\u30E0\u30EC\u30B9\u3001\u4E0B\u7740\u3001\u30D9\u30D3\u30FC\u30A6\u30A7\u30A2\u3001\u30B7\u30EB\u30AF",
      "hero-card-lowpact-name":"Lowpact Textile Technology",
      "hero-card-lowpact-desc":"\u4F4E\u74B0\u5883\u8CA0\u8377\u306E\u7CF8\u30FB\u67D3\u8272\u30FB\u7D20\u6750\u6280\u8853<br>IndiDye<sup>\u00AE</sup>\u3001SoftSpin<sup>\u2122</sup>\u3001Resilkose<sup>\u2122</sup>",
      "hero-scroll":       "\u30B9\u30AF\u30ED\u30FC\u30EB",

      "about-title":       "\u4F1A\u793E\u6982\u8981",
      "about-body-1":      "SACO Group\u306F\u3001\u4F4E\u74B0\u5883\u8CA0\u8377\u7D20\u6750\u6280\u8853\u3068\u4E2D\u56FD\u306B\u304A\u3051\u308B\u30B9\u30B1\u30FC\u30E9\u30D6\u30EB\u306A\u88FD\u9020\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3092\u7D50\u3073\u3064\u3051\u307E\u3059\u3002\u30DB\u30FC\u30B8\u30A7\u30EA\u30FC\u3001\u30B7\u30FC\u30E0\u30EC\u30B9\u3001\u808C\u7740\u30AB\u30C6\u30B4\u30EA\u30FC\u306B\u304A\u3051\u308B\u6570\u5341\u5E74\u306E\u7D4C\u9A13\u3092\u6D3B\u304B\u3057\u3001\u7CF8\u958B\u767A\u304B\u3089\u5DE5\u696D\u751F\u7523\u307E\u3067\u30D7\u30EC\u30DF\u30A2\u30E0\u30D6\u30E9\u30F3\u30C9\u3092\u652F\u63F4\u3057\u3066\u304A\u308A\u307E\u3059\u3002",
      "about-body-2":      "\u5F53\u793E\u306E\u7D44\u7E54\u306F\u30012\u3064\u306E\u5C02\u9580\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3092\u4E2D\u5FC3\u306B\u69CB\u7BC9\u3055\u308C\u3066\u3044\u307E\u3059 \u2014 \u88FD\u9020\u30FB\u88FD\u54C1\u958B\u767A\u62C5\u5F53\u306EShanghai Saco Textile\u3068\u3001\u7D20\u6750\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3\u30FB\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB\u8A8D\u8A3C\u62C5\u5F53\u306ELowpact Textile Technology\u3067\u3059\u3002",

      "saco-title":        "Shanghai Saco Textile Co. Ltd.",
      "saco-subtitle":     "\u5B8C\u6210\u54C1\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0",
      "saco-body-1":       "SACO\u306F\u3001SACO Group\u306E\u88FD\u9020\u30FB\u88FD\u54C1\u958B\u767A\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067\u3042\u308A\u3001\u5148\u9032\u7D20\u6750\u3068\u4F4E\u74B0\u5883\u8CA0\u8377\u6280\u8853\u3092\u30D7\u30EC\u30DF\u30A2\u30E0\u5B8C\u6210\u54C1\u3078\u3068\u5909\u63DB\u3057\u307E\u3059\u3002",
      "saco-body-2":       "\u30DB\u30FC\u30B8\u30A7\u30EA\u30FC\u3001\u30B7\u30FC\u30E0\u30EC\u30B9\u3001\u808C\u7740\u306B\u304A\u3051\u308B\u6570\u5341\u5E74\u306E\u7D4C\u9A13\u3092\u57FA\u76E4\u306B\u3001SACO\u306F\u7523\u696D\u5C02\u9580\u77E5\u8B58\u3001\u7D20\u6750\u30CE\u30A6\u30CF\u30A6\u3001\u8CAC\u4EFB\u3042\u308B\u751F\u7523\u3092\u7D44\u307F\u5408\u308F\u305B\u3001\u4E00\u8CAB\u3057\u305F\u54C1\u8CEA\u3092\u5927\u898F\u6A21\u306B\u63D0\u4F9B\u3057\u307E\u3059\u3002",
      "saco-body-3":       "\u5F53\u793E\u306E\u5F79\u5272\u306F\u3001\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3\u3068\u5B9F\u7528\u5316\u3092\u3064\u306A\u3050\u3053\u3068\u3067\u3042\u308A\u3001\u88FD\u54C1\u958B\u767A\u30FB\u30B5\u30F3\u30D7\u30EB\u4F5C\u6210\u304B\u3089\u5DE5\u696D\u751F\u7523\u307E\u3067\u3001\u30D5\u30A3\u30C3\u30C8\u611F\u3001\u5FEB\u9069\u6027\u3001\u9577\u671F\u7684\u306A\u6027\u80FD\u306B\u91CD\u70B9\u3092\u7F6E\u3044\u3066\u30D6\u30E9\u30F3\u30C9\u3092\u652F\u63F4\u3057\u3066\u304A\u308A\u307E\u3059\u3002",
      "why-saco":          "Saco\u304C\u9078\u3070\u308C\u308B\u7406\u7531",
      "why-item-1":        "\u88FD\u54C1\u4E2D\u5FC3\u306E\u958B\u767A\u4F53\u5236",
      "why-item-2":        "\u30A2\u30B8\u30A2\u306B\u304A\u3051\u308B\u5F37\u56FA\u306A\u7523\u696D\u57FA\u76E4",
      "why-item-3":        "\u30AB\u30C6\u30B4\u30EA\u30FC\u3068\u30DC\u30EA\u30E5\u30FC\u30E0\u306E\u67D4\u8EDF\u6027",
      "why-item-4":        "\u8981\u6C42\u306E\u9AD8\u3044\u6D77\u5916\u30D6\u30E9\u30F3\u30C9\u3068\u306E\u5B9F\u7E3E",
      "core-capabilities": "\u4E3B\u8981\u80FD\u529B",
      "explore-products":  "\u88FD\u54C1\u3092\u898B\u308B \u2192",

      "stat-knitting-n":   "400",
      "stat-knitting-label":"\u7DE8\u307F\u6A5F",
      "stat-knitting-sub": "\u2192 \u5E74\u9593\u9774\u4E0B4,000\u4E07\u8DB3",
      "stat-seamless-n":   "80",
      "stat-seamless-label":"\u30B7\u30FC\u30E0\u30EC\u30B9\u6A5F",
      "stat-seamless-sub": "\u2192 \u5E74\u9593\u30B7\u30FC\u30E0\u30EC\u30B9\u88FD\u54C1800\u4E07\u679A",
      "stat-lines-n":      "12",
      "stat-lines-label":  "\u751F\u7523\u30E9\u30A4\u30F3",
      "stat-lines-sub":    "\u2192 \u5E74\u9593\u4E0B\u7740\u30FB\u6C34\u77401,000\u4E07\u679A",
      "stat-flatknit-n":   "50",
      "stat-flatknit-label":"\u6A2A\u7DE8\u6A5F",
      "stat-flatknit-sub": "\u2192 \u5E74\u9593\u30D9\u30D3\u30FC\u30CB\u30C3\u30C8300\u4E07\u679A",

      "sustain-title":     "\u30B5\u30B9\u30C6\u30CA\u30D3\u30EA\u30C6\u30A3",
      "sustain-lead":      "\u6700\u7D42\u5DE5\u7A0B\u306E\u4ED8\u52A0\u3067\u306F\u306A\u304F\u3001\u6280\u8853\u306B\u7D44\u307F\u8FBC\u307E\u308C\u3066\u3044\u307E\u3059",
      "sustain-body":      "\u5F53\u793E\u306E\u30A2\u30D7\u30ED\u30FC\u30C1\u306F\u3001\u5316\u5B66\u7269\u8CEA\u3001\u6C34\u4F7F\u7528\u91CF\u3001\u5EC3\u68C4\u7269\u3092\u6E90\u6D41\u3067\u524A\u6E1B\u3059\u308B\u3053\u3068\u306B\u91CD\u70B9\u3092\u7F6E\u304D\u3001\u5316\u5B66\u4ED5\u4E0A\u3052\u3088\u308A\u3082\u7269\u7406\u7684\u30FB\u6A5F\u68B0\u7684\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3092\u512A\u5148\u3057\u3066\u3044\u307E\u3059\u3002IndiDye<sup>\u00AE</sup>\u690D\u7269\u67D3\u6599\u304B\u3089SoftSpin<sup>\u2122</sup>\u7121\u5316\u5B66\u67D4\u8EDF\u5316\u3001Resilkose<sup>\u2122</sup>\u5FAA\u74B0\u578B\u30B7\u30EB\u30AF\u307E\u3067 \u2014 \u30B5\u30B9\u30C6\u30CA\u30D3\u30EA\u30C6\u30A3\u306F\u7D20\u6750\u305D\u306E\u3082\u306E\u306B\u7D44\u307F\u8FBC\u307E\u308C\u3066\u3044\u307E\u3059\u3002",
      "sustain-materials-title": "\u8CAC\u4EFB\u3042\u308B\u7D20\u6750",
      "mat-organic-cotton":  "\u30AA\u30FC\u30AC\u30CB\u30C3\u30AF\u30B3\u30C3\u30C8\u30F3",
      "mat-recycled-silk":   "\u30EA\u30B5\u30A4\u30AF\u30EB\u30FB\u30AA\u30FC\u30AC\u30CB\u30C3\u30AF\u30B7\u30EB\u30AF \u2197",
      "mat-rws":             "RWS\u8CAC\u4EFB\u3042\u308B\u30A6\u30FC\u30EB",
      "mat-cmia":            "CMIA Cotton Made in Africa",
      "mat-recycled-cotton": "\u30EA\u30B5\u30A4\u30AF\u30EB\u30B3\u30C3\u30C8\u30F3",
      "mat-recycled-nylon":  "\u30EA\u30B5\u30A4\u30AF\u30EB\u30CA\u30A4\u30ED\u30F3",
      "mat-recycled-poly":   "\u30EA\u30B5\u30A4\u30AF\u30EB\u30DD\u30EA\u30A8\u30B9\u30C6\u30EB",
      "mat-recycled-acrylic":"\u30EA\u30B5\u30A4\u30AF\u30EB\u30A2\u30AF\u30EA\u30EB",
      "mat-eco-viscose":     "\u30A8\u30B3\u30D3\u30B9\u30B3\u30FC\u30B9",
      "mat-veglon":          "Veglon<sup>\u00AE</sup> \u30D0\u30A4\u30AA\u30D9\u30FC\u30B9",
      "mat-polylana":        "Polylana<sup>\u00AE</sup>",
      "mat-indidye":         "\u690D\u7269\u67D3\u6599 IndiDye<sup>\u00AE</sup> \u2197",
      "certs-label":         "\u8A8D\u8A3C",
      "cert-gots":           "\u30B0\u30ED\u30FC\u30D0\u30EB\u30AA\u30FC\u30AC\u30CB\u30C3\u30AF\u30C6\u30AD\u30B9\u30BF\u30A4\u30EB\u57FA\u6E96",
      "cert-rws":            "\u8CAC\u4EFB\u3042\u308B\u30A6\u30FC\u30EB\u57FA\u6E96",
      "cert-grs":            "\u30B0\u30ED\u30FC\u30D0\u30EB\u30EA\u30B5\u30A4\u30AF\u30EB\u57FA\u6E96",
      "cert-oeko":           "Oeko-Tex \u30A8\u30B3\u30D1\u30B9\u30DD\u30FC\u30C8",
      "cert-roadmap":        "Roadmap to Zero",
      "cert-bsci":           "\u4F01\u696D\u793E\u4F1A\u7684\u8CAC\u4EFB",

      "clients-title":       "\u53D6\u5F15\u5148\u30FB\u5E02\u5834",
      "clients-body-1":      "\u5F53\u793E\u306F\u3001\u30B0\u30ED\u30FC\u30D0\u30EB\u5E02\u5834\u3067\u30D5\u30A1\u30C3\u30B7\u30E7\u30F3\u30D6\u30E9\u30F3\u30C9\u3084\u56FD\u969B\u7684\u306A\u5C0F\u58F2\u696D\u8005\u3068\u30D1\u30FC\u30C8\u30CA\u30FC\u30B7\u30C3\u30D7\u3092\u7D50\u3073\u3001\u69CB\u9020\u5316\u3055\u308C\u305F\u751F\u7523\u30D7\u30ED\u30B0\u30E9\u30E0\u3068\u7D99\u7D9A\u7684\u306A\u88FD\u54C1\u958B\u767A\u306E\u4E21\u65B9\u3092\u652F\u63F4\u3057\u3066\u304A\u308A\u307E\u3059\u3002",
      "clients-body-2":      "\u5F53\u793E\u306E\u53D6\u5F15\u5148\u306F\u30E8\u30FC\u30ED\u30C3\u30D1\u3001\u5317\u7C73\u3001\u5357\u7C73\u3001\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306B\u307E\u305F\u304C\u308A\u3001\u7570\u306A\u308B\u5E02\u5834\u8981\u4EF6\u3001\u4FA1\u683C\u5E2F\u3001\u88FD\u54C1\u6226\u7565\u306B\u5BFE\u5FDC\u3059\u308B\u5F53\u793E\u306E\u80FD\u529B\u3092\u53CD\u6620\u3057\u3066\u3044\u307E\u3059\u3002",
      "clients-body-3":      "\u3053\u3053\u306B\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u30D6\u30E9\u30F3\u30C9\u306F\u3001\u73FE\u5728\u9032\u884C\u4E2D\u306E\u5354\u696D\u306E\u4E00\u90E8\u3067\u3059\u3002",

      "lowpact-title":       "Lowpact Textile Technology, Ltd.",
      "lowpact-visit":       "Lowpact Textile Technology\u3092\u8A2A\u554F \u2192",
      "lowpact-intro":       "Saco Group\u306E\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3\u30A8\u30F3\u30B8\u30F3\u3002Lowpact Textile Technology\u306F\u3001\u5F53\u793E\u306E\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB\u8A8D\u8A3C\u3092\u652F\u3048\u308B\u4F4E\u74B0\u5883\u8CA0\u8377\u306E\u7CF8\u30FB\u67D3\u8272\u30FB\u7D20\u6750\u6280\u8853\u3092\u958B\u767A\u3057\u3066\u3044\u307E\u3059 \u2014 \u5F53\u793E\u304C\u4F9B\u7D66\u3059\u308B\u30D7\u30EC\u30DF\u30A2\u30E0\u30D6\u30E9\u30F3\u30C9\u306E\u8A8D\u8A3C\u3082\u540C\u69D8\u3067\u3059\u3002",
      "tech-indidye-name":   "IndiDye<sup>\u00AE</sup>",
      "tech-indidye-desc":   "\u4F4E\u74B0\u5883\u8CA0\u8377\u306E\u9AD8\u6027\u80FD\u5929\u7136\u690D\u7269\u67D3\u6599\u3002\u5408\u6210\u7740\u8272\u5264\u3092\u6392\u9664\u3057\u3064\u3064\u3001\u8272\u306E\u5805\u7262\u5EA6\u3084\u9BAE\u3084\u304B\u3055\u3092\u640D\u306A\u308F\u306A\u3044\u30AF\u30ED\u30FC\u30BA\u30C9\u30EB\u30FC\u30D7\u67D3\u8272\u30D7\u30ED\u30BB\u30B9\u3067\u3059\u3002",
      "tech-softspin-name":  "SoftSpin<sup>\u2122</sup>",
      "tech-softspin-desc":  "\u5316\u5B66\u67D4\u8EDF\u5264\u3092\u4F7F\u7528\u305B\u305A\u306B\u30D7\u30EC\u30DF\u30A2\u30E0\u306A\u67D4\u3089\u304B\u3055\u3092\u5B9F\u73FE\u3059\u308B\u7279\u8A31\u7D21\u7E3E\u6280\u8853\u3002\u7E70\u308A\u8FD4\u3057\u306E\u6D17\u6FEF\u3067\u3082\u7279\u6027\u3092\u7DAD\u6301\u3059\u308B\u512A\u308C\u305F\u98A8\u5408\u3044\u306E\u7CF8\u3092\u751F\u7523\u3057\u307E\u3059\u3002",
      "tech-resilkose-name": "Resilkose<sup>\u2122</sup>",
      "tech-resilkose-desc": "\u30B5\u30FC\u30AD\u30E5\u30E9\u30FC\u30D7\u30EC\u30DF\u30A2\u30E0\u30C6\u30AD\u30B9\u30BF\u30A4\u30EB\u5411\u3051GRS\u8A8D\u8A3C\u30EA\u30B5\u30A4\u30AF\u30EB\u30FB\u30AA\u30FC\u30AC\u30CB\u30C3\u30AF\u30B7\u30EB\u30AF\u3002\u30B7\u30EB\u30AF\u751F\u7523\u306E\u74B0\u5883\u8CA0\u8377\u3092\u5927\u5E45\u306B\u524A\u6E1B\u3057\u3064\u3064\u3001\u30B7\u30EB\u30AF\u306E\u8C6A\u83EF\u306A\u54C1\u8CEA\u3092\u7DAD\u6301\u3057\u307E\u3059\u3002",
      "lowpact-certs-label": "\u8A8D\u8A3C\u30FB\u57FA\u6E96",

      "contact-title":       "\u304A\u554F\u3044\u5408\u308F\u305B",
      "contact-mfg-platform":"\u88FD\u9020\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0",
      "contact-mfg-name":    "Shanghai Saco Textile Co. Ltd.",
      "contact-mfg-address": "Room 501-2 &amp; 3, Building 8<br>No.1509 Xinzhen Road, Minhang District<br>201101, \u4E0A\u6D77, \u4E2D\u56FD",
      "contact-inn-platform":"\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0",
      "contact-inn-name":    "Lowpact Textile Technology Co. Ltd.",
      "contact-inn-address": "\u4E0A\u6D77\u3001\u4E2D\u56FD",
      "contact-label-tel":   "\u96FB\u8A71",
      "contact-label-email": "\u30E1\u30FC\u30EB",
      "contact-label-web":   "\u30A6\u30A7\u30D6",
      "form-label-name":     "\u304A\u540D\u524D",
      "form-placeholder-name":"\u304A\u540D\u524D",
      "form-label-email":    "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
      "form-placeholder-email":"your@email.com",
      "form-label-company":  "\u4F1A\u793E\u540D\uFF08\u4EFB\u610F\uFF09",
      "form-placeholder-company":"\u4F1A\u793E\u540D",
      "form-label-message":  "\u30E1\u30C3\u30BB\u30FC\u30B8",
      "form-placeholder-message":"\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u3054\u5165\u529B\u304F\u3060\u3055\u3044...",
      "form-submit":         "\u9001\u4FE1\u3059\u308B",
      "form-sending":        "\u9001\u4FE1\u4E2D...",
      "form-sent":           "\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u9001\u4FE1\u3055\u308C\u307E\u3057\u305F",
      "form-thankyou":       "{name}\u69D8\u3001\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002\u8FD1\u65E5\u4E2D\u306B\u3054\u9023\u7D61\u3044\u305F\u3057\u307E\u3059\u3002",
      "form-error":          "\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",

      "products-title":      "\u88FD\u54C1",
      "products-intro":      "Shanghai Saco Textile\u306F\u30015\u3064\u306E\u4E3B\u8981\u30AB\u30C6\u30B4\u30EA\u30FC\u306B\u308F\u305F\u308A\u5B8C\u6210\u54C1\u306E\u958B\u767A\u30FB\u88FD\u9020\u3092\u884C\u3063\u3066\u304A\u308A\u307E\u3059 \u2014 \u30B5\u30F3\u30D7\u30EB\u958B\u767A\u304B\u3089\u672C\u683C\u7684\u306A\u5DE5\u696D\u898F\u6A21\u306E\u751F\u7523\u307E\u3067\u5BFE\u5FDC\u3057\u307E\u3059\u3002",
      "tab-socks":           "\u9774\u4E0B\u30FB\u30DB\u30FC\u30B8\u30A7\u30EA\u30FC",
      "tab-seamless":        "\u30B7\u30FC\u30E0\u30EC\u30B9",
      "tab-underwear":       "\u4E0B\u7740",
      "tab-swimwear":        "\u6C34\u7740",
      "tab-baby":            "\u30D9\u30D3\u30FC\u30FB\u30AD\u30C3\u30BA",
      "tab-silk":            "\u30B7\u30EB\u30AF\u88FD\u54C1",

      "prod-socks-title":    "\u9774\u4E0B\u30FB\u30DB\u30FC\u30B8\u30A7\u30EA\u30FC",
      "prod-socks-desc":     "\u7CBE\u5BC6\u306A\u30D5\u30A3\u30C3\u30C8\u3068\u5B89\u5B9A\u3057\u305F\u751F\u7523\u57FA\u6E96\u3092\u5099\u3048\u305F\u5DE5\u696D\u7528\u9774\u4E0B\u30FB\u30DB\u30FC\u30B8\u30A7\u30EA\u30FC\u30D7\u30ED\u30B0\u30E9\u30E0\u3002\u65E5\u5E38\u306E\u30D5\u30A1\u30C3\u30B7\u30E7\u30F3\u304B\u3089\u30C8\u30EC\u30C3\u30AD\u30F3\u30B0\u3084\u9AD8\u6027\u80FD\u30B9\u30DD\u30FC\u30C4\u307E\u3067\u5BFE\u5FDC\u3057\u307E\u3059\u3002",
      "prod-socks-mat-title":"\u7D20\u6750\u30FB\u7D44\u6210",
      "prod-socks-mat-1":    "\u30AA\u30FC\u30AC\u30CB\u30C3\u30AF\u30B3\u30C3\u30C8\u30F3",
      "prod-socks-mat-2":    "SoftSpin<sup>\u2122</sup>\u30B3\u30C3\u30C8\u30F3",
      "prod-socks-mat-3":    "\u30EA\u30B5\u30A4\u30AF\u30EB\u30CA\u30A4\u30ED\u30F3",
      "prod-socks-mat-4":    "\u30E1\u30EA\u30CE\u30A6\u30FC\u30EB",
      "prod-socks-mat-5":    "\u30EA\u30B5\u30A4\u30AF\u30EB\u30A2\u30AF\u30EA\u30EB",
      "prod-socks-mat-6":    "IndiDye<sup>\u00AE</sup>\u690D\u7269\u67D3\u3081",
      "prod-socks-mat-7":    "Polylana<sup>\u00AE</sup>",
      "prod-socks-mat-8":    "\u30A8\u30B3\u30D3\u30B9\u30B3\u30FC\u30B9",
      "prod-socks-cap-fig":  "4,000\u4E07",
      "prod-socks-cap-unit": "\u8DB3 / \u5E74",

      "prod-seamless-title":    "\u30B7\u30FC\u30E0\u30EC\u30B9",
      "prod-seamless-desc":     "\u30B9\u30B1\u30FC\u30E9\u30D6\u30EB\u306A\u751F\u7523\u3001\u5FEB\u9069\u6027\u3001\u6280\u8853\u7684\u7CBE\u5EA6\u3092\u8FFD\u6C42\u3057\u305F\u30B7\u30FC\u30E0\u30EC\u30B9\u88FD\u54C1\u3002\u30A2\u30AF\u30C6\u30A3\u30D6\u30A6\u30A7\u30A2\u3001\u30D9\u30FC\u30B9\u30EC\u30A4\u30E4\u30FC\u3001\u4E0B\u7740\u5411\u3051\u306E\u30A4\u30F3\u30CA\u30FC\u30A6\u30A7\u30A2\u30FB\u30A2\u30A6\u30BF\u30FC\u30A6\u30A7\u30A2\u3002",
      "prod-seamless-mat-title":"\u7D20\u6750\u30FB\u7D44\u6210",
      "prod-seamless-mat-1":   "\u30EA\u30B5\u30A4\u30AF\u30EB\u30DD\u30EA\u30A2\u30DF\u30C9",
      "prod-seamless-mat-2":   "\u30AA\u30FC\u30AC\u30CB\u30C3\u30AF\u30B3\u30C3\u30C8\u30F3",
      "prod-seamless-mat-3":   "\u30EA\u30B5\u30A4\u30AF\u30EB\u30DD\u30EA\u30A8\u30B9\u30C6\u30EB",
      "prod-seamless-mat-4":   "\u30B7\u30EB\u30AF",
      "prod-seamless-mat-5":   "\u30A6\u30FC\u30EB",
      "prod-seamless-mat-6":   "SoftSpin<sup>\u2122</sup>\u30B3\u30C3\u30C8\u30F3",
      "prod-seamless-cap-fig": "\u7537\u6027\u30FB\u5973\u6027",
      "prod-seamless-cap-unit":"\u30D7\u30ED\u30B0\u30E9\u30E0\u5BFE\u5FDC",

      "prod-underwear-title":    "\u4E0B\u7740",
      "prod-underwear-desc":     "\u4FE1\u983C\u6027\u306E\u9AD8\u3044\u751F\u7523\u3068\u7BA1\u7406\u3055\u308C\u305F\u6027\u80FD\u3092\u6C42\u3081\u308B\u30D6\u30E9\u30F3\u30C9\u5411\u3051\u306E\u808C\u7740\u30D7\u30ED\u30B0\u30E9\u30E0\u3002\u30B5\u30F3\u30D7\u30EB\u304B\u3089\u5DE5\u696D\u898F\u6A21\u307E\u3067\u5BFE\u5FDC\u3057\u307E\u3059\u3002",
      "prod-underwear-mat-title":"\u7D20\u6750\u30FB\u7D44\u6210",
      "prod-underwear-mat-1":   "\u30AA\u30FC\u30AC\u30CB\u30C3\u30AF\u30B3\u30C3\u30C8\u30F3",
      "prod-underwear-mat-2":   "\u30EA\u30B5\u30A4\u30AF\u30EB\u30CA\u30A4\u30ED\u30F3",
      "prod-underwear-mat-3":   "\u30A8\u30B3\u30D3\u30B9\u30B3\u30FC\u30B9",
      "prod-underwear-mat-4":   "Veglon<sup>\u00AE</sup> \u30D0\u30A4\u30AA\u30D9\u30FC\u30B9",
      "prod-underwear-mat-5":   "RWS\u8CAC\u4EFB\u3042\u308B\u30A6\u30FC\u30EB",
      "prod-underwear-cap-fig": "1,000\u4E07",
      "prod-underwear-cap-unit":"\u679A / \u5E74",

      "prod-swimwear-title":    "\u6C34\u7740",
      "prod-swimwear-desc":     "\u30C8\u30EC\u30F3\u30C9\u4E3B\u5C0E\u306E\u30C7\u30B6\u30A4\u30F3\u3068\u30B9\u30B1\u30FC\u30E9\u30D6\u30EB\u306A\u751F\u7523\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u6C34\u7740\u30D7\u30ED\u30B0\u30E9\u30E0\u3002\u30D3\u30AD\u30CB\u3001\u30EF\u30F3\u30D4\u30FC\u30B9\u3001\u30D3\u30FC\u30C1\u30A6\u30A7\u30A2\u3092\u30D0\u30EB\u30BB\u30ED\u30CA\u30C7\u30B6\u30A4\u30F3\u30B9\u30BF\u30B8\u30AA\u304B\u3089\u958B\u767A\u3057\u3066\u3044\u307E\u3059\u3002",
      "prod-swimwear-mat-title":"\u7D20\u6750\u30FB\u7D44\u6210",
      "prod-swimwear-mat-1":   "\u30EA\u30B5\u30A4\u30AF\u30EB\u30DD\u30EA\u30A2\u30DF\u30C9",
      "prod-swimwear-mat-2":   "\u30EA\u30B5\u30A4\u30AF\u30EB\u30DD\u30EA\u30A8\u30B9\u30C6\u30EB",
      "prod-swimwear-mat-3":   "Econyl<sup>\u00AE</sup> \u518D\u751F\u30CA\u30A4\u30ED\u30F3",
      "prod-swimwear-mat-4":   "Lycra<sup>\u00AE</sup> \u30A8\u30E9\u30B9\u30BF\u30F3",
      "prod-swimwear-cap-fig": "\u30D3\u30AD\u30CB",
      "prod-swimwear-cap-unit":"\u30EF\u30F3\u30D4\u30FC\u30B9\u30FB\u30D3\u30FC\u30C1\u30A6\u30A7\u30A2",

      "prod-baby-title":    "\u30D9\u30D3\u30FC\u30FB\u30AD\u30C3\u30BA",
      "prod-baby-desc":     "\u7E2B\u88FD\u88FD\u54C1\u3068\u30D5\u30EB\u30D5\u30A1\u30C3\u30B7\u30E7\u30F3\u30CB\u30C3\u30C8\u30A6\u30A7\u30A2\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u30D9\u30D3\u30FC\u30A6\u30A7\u30A2\u3002\u30AA\u30FC\u30AC\u30CB\u30C3\u30AF\u304A\u3088\u3073\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB\u7E4A\u7DAD\u3092\u4F7F\u7528\u3057\u305F\u4E73\u5E7C\u5150\u30FB\u5B50\u4F9B\u5411\u3051\u30D7\u30ED\u30B0\u30E9\u30E0\u306E\u305F\u3081\u306E\u67D4\u3089\u304B\u304F\u5B89\u5168\u306A\u7D20\u6750\u3067\u3059\u3002",
      "prod-baby-mat-title":"\u7D20\u6750\u30FB\u7D44\u6210",
      "prod-baby-mat-1":   "\u30AA\u30FC\u30AC\u30CB\u30C3\u30AF\u30B3\u30C3\u30C8\u30F3",
      "prod-baby-mat-2":   "CMIA Cotton Made in Africa",
      "prod-baby-mat-3":   "\u30EA\u30B5\u30A4\u30AF\u30EB\u30B3\u30C3\u30C8\u30F3",
      "prod-baby-mat-4":   "SoftSpin<sup>\u2122</sup>\u30B3\u30C3\u30C8\u30F3",
      "prod-baby-mat-5":   "RWS\u30A6\u30FC\u30EB",
      "prod-baby-cap-fig": "300\u4E07",
      "prod-baby-cap-unit":"\u679A / \u5E74",

      "prod-silk-title":    "\u30B7\u30EB\u30AF\u88FD\u54C1",
      "prod-silk-desc":     "\u7D20\u6750\u6027\u80FD\u3001\u8010\u4E45\u6027\u3001\u751F\u7523\u306E\u4E00\u8CAB\u6027\u306B\u91CD\u70B9\u3092\u7F6E\u3044\u305F\u30B7\u30EB\u30AF\u88FD\u54C1\u958B\u767A\u3002\u88FD\u54C1\u304A\u3088\u3073\u30DB\u30FC\u30E0\u30C6\u30AD\u30B9\u30BF\u30A4\u30EB\u5411\u3051\u306E\u5F93\u6765\u578B\u3001\u30EA\u30B5\u30A4\u30AF\u30EB\u3001\u30AA\u30FC\u30AC\u30CB\u30C3\u30AF\u30B7\u30EB\u30AF\u30AA\u30D7\u30B7\u30E7\u30F3\u3002",
      "prod-silk-mat-title":"\u7D20\u6750\u30FB\u7D44\u6210",
      "prod-silk-mat-1":   "\u5F93\u6765\u578B\u30B7\u30EB\u30AF",
      "prod-silk-mat-2":   "Resilkose<sup>\u2122</sup>\u30EA\u30B5\u30A4\u30AF\u30EB\u30B7\u30EB\u30AF",
      "prod-silk-mat-3":   "\u30AA\u30FC\u30AC\u30CB\u30C3\u30AF\u30B7\u30EB\u30AF\uFF08GRS\u8A8D\u8A3C\uFF09",
      "prod-silk-cap-fig": "\u88FD\u54C1",
      "prod-silk-cap-unit":"\u30FB\u30DB\u30FC\u30E0\u30C6\u30AD\u30B9\u30BF\u30A4\u30EB",

      "products-disclaimer": "\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u3059\u3079\u3066\u306E\u753B\u50CF\u306F\u3001Saco\u304C\u958B\u767A\u30FB\u88FD\u9020\u3057\u305F\u88FD\u54C1\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059\u3002",

      "studio-title":        "Saco\u30C7\u30B6\u30A4\u30F3\u30B9\u30BF\u30B8\u30AA",
      "studio-sub":          "\u30E8\u30FC\u30ED\u30C3\u30D1\u306E\u30C7\u30B6\u30A4\u30F3\u3068\u30A2\u30B8\u30A2\u306E\u88FD\u9020\u3092\u3064\u306A\u3050",
      "studio-body-1":       "\u30D0\u30EB\u30BB\u30ED\u30CA\u306E\u30B9\u30BF\u30B8\u30AA\u304B\u3089\u3001\u30AF\u30EA\u30A8\u30A4\u30C6\u30A3\u30D6\u30D7\u30ED\u30BB\u30B9\u306E\u3042\u3089\u3086\u308B\u6BB5\u968E\u3067\u30D6\u30E9\u30F3\u30C9\u3078\u306E\u5305\u62EC\u7684\u306A\u30C7\u30B6\u30A4\u30F3\u30B5\u30DD\u30FC\u30C8\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002\u81EA\u793E\u306E\u30C7\u30B6\u30A4\u30F3\u30C1\u30FC\u30E0\u3068\u306E\u5354\u696D\u3067\u3082\u3001\u30A8\u30F3\u30C9\u30C4\u30FC\u30A8\u30F3\u30C9\u306E\u30AF\u30EA\u30A8\u30A4\u30C6\u30A3\u30D6\u30C7\u30A3\u30EC\u30AF\u30B7\u30E7\u30F3\u3067\u3082\u3001\u304A\u5BA2\u69D8\u306E\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u306B\u5408\u308F\u305B\u3066\u5BFE\u5FDC\u3044\u305F\u3057\u307E\u3059\u3002",
      "studio-body-2":       "\u7D20\u6750\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3\u3001\u7CF8\u958B\u767A\u3001\u88FD\u54C1\u306E\u9032\u5316\u3092\u7A4D\u6975\u7684\u306B\u8FFD\u8DE1\u3057\u3001\u5404\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u5E02\u5834\u3068\u30DD\u30B8\u30B7\u30E7\u30CB\u30F3\u30B0\u306B\u5408\u308F\u305B\u305F\u5B9F\u884C\u53EF\u80FD\u306A\u63D0\u6848\u306B\u5909\u63DB\u3057\u3066\u3044\u307E\u3059\u3002",
      "studio-trend-name":   "\u30C8\u30EC\u30F3\u30C9\u30EC\u30DD\u30FC\u30C8",
      "studio-trend-desc":   "\u5B63\u7BC0\u3054\u3068\u306E\u30C8\u30EC\u30F3\u30C9\u5206\u6790\u3068\u7D20\u6750\u4E88\u6E2C\u3092\u5B9A\u671F\u7684\u306B\u304A\u5BA2\u69D8\u306B\u304A\u5C4A\u3051\u3057\u307E\u3059",
      "studio-garment-name": "\u88FD\u54C1\u30C7\u30B6\u30A4\u30F3",
      "studio-garment-desc": "\u30B3\u30F3\u30BB\u30D7\u30C8\u304B\u3089\u6700\u7D42\u4ED5\u69D8\u66F8\u307E\u3067\u306E\u6280\u8853\u30C7\u30B6\u30A4\u30F3\u30B5\u30DD\u30FC\u30C8\u3001\u304A\u5BA2\u69D8\u306E\u30D6\u30EA\u30FC\u30D5\u306B\u5408\u308F\u305B\u3066\u5BFE\u5FDC",
      "studio-creative-name":"\u30AF\u30EA\u30A8\u30A4\u30C6\u30A3\u30D6\u30C7\u30A3\u30EC\u30AF\u30B7\u30E7\u30F3",
      "studio-creative-desc":"\u30E0\u30FC\u30C9\u30DC\u30FC\u30C9\u3001\u7D20\u6750\u9078\u5B9A\u3001\u30D6\u30E9\u30F3\u30C9\u30A2\u30A4\u30C7\u30F3\u30C6\u30A3\u30C6\u30A3\u306B\u6CBF\u3063\u305F\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u30C7\u30A3\u30EC\u30AF\u30B7\u30E7\u30F3",
      "studio-oem-title":    "OEM \u2014 \u304A\u5BA2\u69D8\u306E\u30C7\u30B6\u30A4\u30F3\u306B\u57FA\u3065\u304F\u751F\u7523",
      "studio-oem-desc":     "\u304A\u5BA2\u69D8\u304C\u30AF\u30EA\u30A8\u30A4\u30C6\u30A3\u30D6\u30C7\u30A3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u30EA\u30FC\u30C9\u3057\u3001\u5F53\u793E\u304C\u6B63\u78BA\u306A\u5B9F\u884C\u3001\u4E00\u8CAB\u3057\u305F\u54C1\u8CEA\u3001\u4FE1\u983C\u6027\u306E\u9AD8\u3044\u5927\u898F\u6A21\u751F\u7523\u3092\u4FDD\u8A3C\u3057\u307E\u3059\u3002",
      "studio-odm-title":    "ODM \u2014 SACO\u306B\u3088\u308B\u30C7\u30B6\u30A4\u30F3\u30FB\u958B\u767A",
      "studio-odm-desc":     "\u30B3\u30F3\u30BB\u30D7\u30C8\u304B\u3089\u6700\u7D42\u4ED5\u69D8\u307E\u3067\u3001\u30C7\u30B6\u30A4\u30F3\u3001\u7D20\u6750\u3001\u6280\u8853\u5C02\u9580\u77E5\u8B58\u3092\u7D44\u307F\u5408\u308F\u305B\u3001\u5305\u62EC\u7684\u306A\u751F\u7523\u30B5\u30DD\u30FC\u30C8\u3068\u3068\u3082\u306B\u88FD\u54C1\u3092\u958B\u767A\u3057\u307E\u3059\u3002",
      "studio-proj-swim":    "Swimwear SS26 \u2014 \u30C8\u30EC\u30F3\u30C9\u30FB\u30C7\u30B6\u30A4\u30F3\u30C7\u30A3\u30EC\u30AF\u30B7\u30E7\u30F3",
      "studio-proj-rose":    "Micro Rose Romance \u2014 \u30A2\u30F3\u30C0\u30FC\u30A6\u30A7\u30A2\u30C8\u30EC\u30F3\u30C9",
      "studio-proj-grid":    "AW26 On The Grid \u2014 \u30A2\u30F3\u30C0\u30FC\u30A6\u30A7\u30A2\u30C8\u30EC\u30F3\u30C9",
      "studio-proj-socks":   "Gift Socks Box \u2014 \u30D1\u30C3\u30B1\u30FC\u30B8\u63D0\u6848",

      "mfg-hero-title":      "Saco\u5B89\u5FBD\u5DE5\u5834",
      "mfg-hero-sub":        "\u5B89\u5FBD\u306E\u751F\u7523\u65BD\u8A2D\u306F\u5F53\u793E\u4E8B\u696D\u306E\u4E2D\u6838\u3067\u3042\u308A\u3001\u958B\u767A\u304B\u3089\u5927\u898F\u6A21\u88FD\u9020\u307E\u3067\u3001\u8907\u6570\u306E\u88FD\u54C1\u30AB\u30C6\u30B4\u30EA\u30FC\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059\u3002",
      "mfg-hero-badge":      "\u30D1\u30FC\u30C8\u30CA\u30FC\u30B7\u30C3\u30D7",
      "mfg-hero-card-title": "Saco Esa Silk \u2014 \u8607\u5DDE",
      "mfg-stat-total-n":    "26K",
      "mfg-stat-total-label":"m\u00B2 \u7DCF\u9762\u7A4D",
      "mfg-stat-mfg-n":     "18K",
      "mfg-stat-mfg-label":  "m\u00B2 \u88FD\u9020\u30A8\u30EA\u30A2",
      "mfg-intro-text":      "\u7DCF\u9762\u7A4D26,000\u5E73\u65B9\u30E1\u30FC\u30C8\u30EB\u3001\u3046\u308718,000m\u00B2\u3092\u88FD\u9020\u306B\u5145\u3066\u305F\u5B89\u5FBD\u5DE5\u5834\u306F\u3001\u5C02\u9580\u7684\u306A\u751F\u7523\u30E6\u30CB\u30C3\u30C8\u3067\u69CB\u6210\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u9774\u4E0B\u3001\u30B7\u30FC\u30E0\u30EC\u30B9\u3001\u4E0B\u7740\u3001\u6C34\u7740\u3001\u30D9\u30D3\u30FC\u30CB\u30C3\u30C8\u306B\u308F\u305F\u308A\u3001\u5DE5\u696D\u751F\u7523\u80FD\u529B\u3068\u7BA1\u7406\u3055\u308C\u305F\u54C1\u8CEA\u57FA\u6E96\u3092\u4E21\u7ACB\u3057\u3066\u30D6\u30E9\u30F3\u30C9\u3092\u652F\u63F4\u3057\u3066\u3044\u307E\u3059\u3002",

      "mfg-socks-title":     "\u9774\u4E0B\u30FB\u30DB\u30FC\u30B8\u30A7\u30EA\u30FC",
      "mfg-socks-badge":     "400",
      "mfg-socks-badge-text":"\u7DE8\u307F\u6A5F",
      "mfg-socks-badge-cap": "\u5E74\u95934,000\u4E07\u8DB3",
      "mfg-socks-desc-1":    "\u5F53\u793E\u306E\u9774\u4E0B\u88FD\u9020\u90E8\u9580\u306F\u3001\u30B7\u30F3\u30B0\u30EB\u30B7\u30EA\u30F3\u30C0\u30FC\u3001\u30C0\u30D6\u30EB\u30B7\u30EA\u30F3\u30C0\u30FC\u3001\u7D71\u5408\u578B\u7DE8\u307F\u6A5F\u3092\u5099\u3048\u3066\u3044\u307E\u3059\u3002",
      "mfg-socks-desc-2":    "\u3053\u306E\u69CB\u6210\u306B\u3088\u308A\u3001\u65E5\u5E38\u4F7F\u7528\u306E\u57FA\u672C\u88FD\u54C1\u304B\u3089\u3088\u308A\u6280\u8853\u7684\u3067\u6027\u80FD\u91CD\u8996\u306E\u30C7\u30B6\u30A4\u30F3\u307E\u3067 \u2014 \u5B89\u5B9A\u3057\u305F\u54C1\u8CEA\u3068\u5927\u91CF\u751F\u7523\u80FD\u529B\u3067\u5E45\u5E83\u3044\u69CB\u9020\u306B\u5BFE\u5FDC\u3057\u307E\u3059\u3002",

      "mfg-seamless-title":     "\u30B7\u30FC\u30E0\u30EC\u30B9",
      "mfg-seamless-badge":     "80",
      "mfg-seamless-badge-text":"\u30B7\u30FC\u30E0\u30EC\u30B9\u6A5F",
      "mfg-seamless-badge-cap": "\u5E74\u9593800\u4E07\u679A",
      "mfg-seamless-desc-1":    "\u5F53\u793E\u306E\u30B7\u30FC\u30E0\u30EC\u30B9\u751F\u7523\u306F\u5148\u9032\u7684\u306A\u4E38\u7DE8\u6A5F\u3092\u57FA\u76E4\u3068\u3057\u3001\u5FEB\u9069\u6027\u3068\u30D5\u30A3\u30C3\u30C8\u611F\u3092\u6700\u9069\u5316\u3057\u305F\u4F53\u306B\u9069\u5FDC\u3059\u308B\u88FD\u54C1\u3092\u53EF\u80FD\u306B\u3057\u307E\u3059\u3002",
      "mfg-seamless-desc-2":    "\u6280\u8853\u7684\u306A\u69CB\u9020\u3068\u6027\u80FD\u91CD\u8996\u306E\u88FD\u54C1\u306B\u91CD\u70B9\u3092\u7F6E\u304D\u3001\u5927\u91CF\u751F\u7523\u306B\u304A\u3051\u308B\u4E00\u8CAB\u6027\u3092\u78BA\u4FDD\u3057\u3066\u3044\u307E\u3059\u3002",

      "mfg-flatknit-title":     "\u6A2A\u7DE8\u307F",
      "mfg-flatknit-badge":     "50",
      "mfg-flatknit-badge-text":"\u6A2A\u7DE8\u6A5F",
      "mfg-flatknit-badge-cap": "\u5E74\u9593300\u4E07\u679A",
      "mfg-flatknit-desc-1":    "\u5F53\u793E\u306E\u6A2A\u7DE8\u307F\u80FD\u529B\u306F\u4E3B\u306B\u30D9\u30D3\u30FC\u30A6\u30A7\u30A2\u3068\u30AD\u30C3\u30BA\u88FD\u54C1\u306B\u7279\u5316\u3057\u3066\u304A\u308A\u3001\u67D4\u3089\u304B\u3055\u3001\u5FEB\u9069\u6027\u3001\u7CBE\u5BC6\u306A\u69CB\u9020\u304C\u4E0D\u53EF\u6B20\u3067\u3059\u3002",
      "mfg-flatknit-desc-2":    "\u5C0F\u3055\u3044\u30B5\u30A4\u30BA\u306E\u88FD\u54C1\u3084\u7E4A\u7D30\u306A\u30CB\u30C3\u30C8\u69CB\u9020\u306B\u6700\u9069\u5316\u3055\u308C\u305F\u8A2D\u5099\u3067\u3059\u3002",

      "mfg-underwear-title":     "\u4E0B\u7740\u30FB\u6C34\u7740",
      "mfg-underwear-badge":     "12",
      "mfg-underwear-badge-text":"\u751F\u7523\u30E9\u30A4\u30F3",
      "mfg-underwear-badge-cap": "\u5E74\u95931,000\u4E07\u679A",
      "mfg-underwear-desc-1":    "\u30E9\u30DF\u30CD\u30FC\u30C8\u3068\u7E2B\u88FD\u5DE5\u7A0B\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u5C02\u7528\u751F\u7523\u30E9\u30A4\u30F3\u3092\u904B\u55B6\u3057\u3001\u4E0B\u7740\u3068\u6C34\u7740\u306E\u4E21\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059\u3002",
      "mfg-underwear-desc-2":    "\u3053\u306E\u4F53\u5236\u306B\u3088\u308A\u3001\u30D5\u30A3\u30C3\u30C8\u3001\u4ED5\u4E0A\u3052\u3001\u54C1\u8CEA\u306E\u7BA1\u7406\u3092\u7DAD\u6301\u3057\u306A\u304C\u3089\u3001\u5B89\u5B9A\u7684\u3067\u30B9\u30B1\u30FC\u30E9\u30D6\u30EB\u306A\u751F\u7523\u3092\u5B9F\u73FE\u3057\u307E\u3059\u3002",

      "silk-hero-badge":     "\u6226\u7565\u7684\u30D1\u30FC\u30C8\u30CA\u30FC\u30B7\u30C3\u30D7",
      "silk-hero-title":     "Saco Esa Silk",
      "silk-hero-sub":       "\u8607\u5DDE \u2014 \u30B7\u30EB\u30AF\u751F\u7523\u30FB\u6226\u7565\u7684\u30D1\u30FC\u30C8\u30CA\u30FC\u30B7\u30C3\u30D7",
      "silk-hero-back":      "\u2190 \u5B89\u5FBD\u5DE5\u5834\u306B\u623B\u308B",
      "silk-intro":          "\u8607\u5DDE\u306E\u5C02\u9580\u30B7\u30EB\u30AF\u30E1\u30FC\u30AB\u30FC\u3068\u306E\u6226\u7565\u7684\u30D1\u30FC\u30C8\u30CA\u30FC\u30B7\u30C3\u30D7\u3092\u901A\u3058\u3066\u3001SACO\u306F\u30D7\u30EC\u30DF\u30A2\u30E0\u30B7\u30EB\u30AF\u88FD\u54C1\u30FB\u7D20\u6750\u3078\u306E\u80FD\u529B\u3092\u62E1\u5F35\u3057\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u5354\u696D\u306B\u3088\u308A\u3001\u4F1D\u7D71\u7684\u306A\u30B7\u30EB\u30AF\u306E\u5C02\u9580\u77E5\u8B58\u3068\u73FE\u4EE3\u306E\u751F\u7523\u57FA\u6E96\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u9AD8\u54C1\u8CEA\u306A\u30B7\u30EB\u30AF\u958B\u767A\u3067\u30D6\u30E9\u30F3\u30C9\u3092\u652F\u63F4\u3057\u307E\u3059\u3002",
      "silk-stat-exp-n":     "20+",
      "silk-stat-exp-label": "\u5E74\u306E\u7D4C\u9A13",
      "silk-stat-exp-sub":   "\u30B7\u30EB\u30AF\u751F\u7523\u306B\u7279\u5316",
      "silk-stat-area-n":    "5K",
      "silk-stat-area-label":"m\u00B2 \u751F\u7523\u30A8\u30EA\u30A2",
      "silk-stat-area-sub":  "\u30B7\u30EB\u30AF\u5C02\u7528\u88FD\u9020\u65BD\u8A2D",
      "silk-stat-workers-n": "100+",
      "silk-stat-workers-label":"\u5F93\u696D\u54E1",
      "silk-stat-workers-sub":"\u30B7\u30EB\u30AF\u52A0\u5DE5\u306E\u719F\u7DF4\u5DE5",
      "silk-stat-countries-n":"60+",
      "silk-stat-countries-label":"\u30F6\u56FD",
      "silk-stat-countries-sub":"\u30B0\u30ED\u30FC\u30D0\u30EB\u8F38\u51FA\u5B9F\u7E3E",
      "silk-production-heading":"\u751F\u7523",
      "silk-production-text-1": "\u672C\u65BD\u8A2D\u306F\u3001\u88FD\u54C1\u3001\u30A2\u30AF\u30BB\u30B5\u30EA\u30FC\u3001\u30DB\u30FC\u30E0\u30C6\u30AD\u30B9\u30BF\u30A4\u30EB\u3092\u542B\u3080\u5E45\u5E83\u3044\u30AB\u30C6\u30B4\u30EA\u30FC\u306B\u308F\u305F\u308A\u3001\u30B7\u30EB\u30AF\u88FD\u54C1\u306E\u30C7\u30B6\u30A4\u30F3\u3001\u88FD\u9020\u3001\u8F38\u51FA\u3092\u7D71\u5408\u3057\u3066\u3044\u307E\u3059\u3002",
      "silk-production-text-2": "\u751F\u7523\u306B\u306F\u3001\u30C9\u30EC\u30B9\u3001\u30B7\u30E3\u30C4\u3001\u30ED\u30FC\u30D6\u306A\u3069\u306E\u30B7\u30EB\u30AF\u88FD\u54C1\u3001\u30B9\u30AB\u30FC\u30D5\u3001\u30A2\u30A4\u30DE\u30B9\u30AF\u3001\u30D8\u30A2\u30A2\u30AF\u30BB\u30B5\u30EA\u30FC\u306A\u3069\u306E\u30A2\u30AF\u30BB\u30B5\u30EA\u30FC\u3001\u30B7\u30EB\u30AF\u5BDD\u5177\u3084\u751F\u5730\u304C\u542B\u307E\u308C\u307E\u3059\u3002",
      "silk-quality-heading":   "\u54C1\u8CEA",
      "silk-quality-text":      "6A\u54C1\u8CEA\u57FA\u6E96\u3092\u542B\u3080\u9AD8\u54C1\u8CEA\u306A\u6851\u7D79\u3092\u4F7F\u7528\u3057\u3001\u3059\u3079\u3066\u306E\u958B\u767A\u306B\u304A\u3044\u3066\u30D7\u30EC\u30DF\u30A2\u30E0\u306A\u6027\u80FD\u3001\u67D4\u3089\u304B\u3055\u3001\u8010\u4E45\u6027\u3092\u4FDD\u8A3C\u3057\u307E\u3059\u3002",
      "silk-caps-heading":      "\u30B7\u30EB\u30AF\u306E\u80FD\u529B",
      "silk-cap-1":             "\u30B7\u30EB\u30AF\u88FD\u54C1\uFF08\u30C9\u30EC\u30B9\u3001\u30B7\u30E3\u30C4\u3001\u30ED\u30FC\u30D6\uFF09",
      "silk-cap-2":             "\u30B7\u30EB\u30AF\u30A2\u30AF\u30BB\u30B5\u30EA\u30FC\uFF08\u30B9\u30AB\u30FC\u30D5\u3001\u30A2\u30A4\u30DE\u30B9\u30AF\u3001\u30D8\u30A2\u30A2\u30AF\u30BB\u30B5\u30EA\u30FC\uFF09",
      "silk-cap-3":             "\u30B7\u30EB\u30AF\u5BDD\u5177\u30FB\u30DB\u30FC\u30E0\u30C6\u30AD\u30B9\u30BF\u30A4\u30EB",
      "silk-cap-4":             "\u958B\u767A\u30FB\u8ABFR\u7528\u30B7\u30EB\u30AF\u751F\u5730",
      "silk-cap-5":             "\u30B5\u30A4\u30BA\u3001\u8272\u3001\u4ED5\u4E0A\u3052\u306E\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA",
      "silk-position":          "\u3053\u306E\u30D1\u30FC\u30C8\u30CA\u30FC\u30B7\u30C3\u30D7\u306B\u3088\u308A\u3001SACO\u306F\u30B7\u30EB\u30AF\u3092\u3088\u308A\u5E45\u5E83\u3044\u88FD\u54C1\u958B\u767A\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306B\u7D71\u5408\u3057\u3001\u30D7\u30EC\u30DF\u30A2\u30E0\u7D20\u6750\u3068\u6D17\u7DF4\u3055\u308C\u305F\u88FD\u54C1\u30AB\u30C6\u30B4\u30EA\u30FC\u3092\u6C42\u3081\u308B\u30D6\u30E9\u30F3\u30C9\u3092\u652F\u63F4\u3057\u307E\u3059\u3002"
    }
  };

  /* ────────────────────────────────────────────
     ENGINE
     ──────────────────────────────────────────── */

  var STORAGE_KEY = 'saco-lang';
  var currentLang = localStorage.getItem(STORAGE_KEY) || 'en';

  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    // Text nodes
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });

    // HTML nodes (for elements containing sup, br, etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (translations[lang][key] !== undefined) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key] !== undefined) {
        el.placeholder = translations[lang][key];
      }
    });

    // Update active language button styles
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.style.fontWeight = btn.getAttribute('data-lang') === lang ? '700' : '400';
      btn.style.opacity = btn.getAttribute('data-lang') === lang ? '1' : '0.6';
    });

    // Update html lang attribute
    document.documentElement.lang = lang === 'ja' ? 'ja' : lang === 'es' ? 'es' : 'en';
  }

  function initLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        applyLanguage(btn.getAttribute('data-lang'));
      });
    });
  }

  // Expose for contact form usage
  window.sacoI18n = {
    t: function (key, replacements) {
      var str = (translations[currentLang] && translations[currentLang][key]) || (translations.en && translations.en[key]) || key;
      if (replacements) {
        Object.keys(replacements).forEach(function (k) {
          str = str.replace('{' + k + '}', replacements[k]);
        });
      }
      return str;
    },
    currentLang: function () { return currentLang; }
  };

  // Init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initLangButtons();
      applyLanguage(currentLang);
    });
  } else {
    initLangButtons();
    applyLanguage(currentLang);
  }

})();
