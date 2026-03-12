export type IndustryKey = "real-estate" | "interior-design" | "architecture" | "construction" | "luxury-hospitality";

export interface IndustryLabel {
  id: IndustryKey;
  labelIt: string;
  labelEn: string;
  iconEmoji: string;
}

export const industries: IndustryLabel[] = [
  { id: "real-estate", labelIt: "Real Estate", labelEn: "Real Estate", iconEmoji: "🏙️" },
  { id: "interior-design", labelIt: "Interior Design", labelEn: "Interior Design", iconEmoji: "🎨" },
  { id: "architecture", labelIt: "Architettura", labelEn: "Architecture", iconEmoji: "📐" },
  { id: "construction", labelIt: "Costruzioni", labelEn: "Construction", iconEmoji: "🏗️" },
  { id: "luxury-hospitality", labelIt: "Luxury & Hospitality", labelEn: "Luxury & Hospitality", iconEmoji: "✦" },
];

export interface IndustryHero {
  headlineIt: string;
  headlineEn: string;
  taglineIt: string;
  taglineEn: string;
}

export interface IndustryProblem {
  problemIt: string;
  problemEn: string;
  solutionIt: string;
  solutionEn: string;
}

export interface IndustryRole {
  number: string;
  titleIt: string;
  titleEn: string;
  capsIt: string;
  capsEn: string;
}

export interface IndustryCompliance {
  code: string;
  labelIt: string;
  labelEn: string;
}

export interface IndustryClosing {
  line1It: string;
  line1En: string;
  line2It: string;
  line2En: string;
}

export interface IndustryFeatureCard {
  titleIt: string;
  titleEn: string;
  descIt: string;
  descEn: string;
  image: string;
}

export interface IndustryContent {
  hero: IndustryHero;
  problem: IndustryProblem;
  roles: IndustryRole[];
  rolesHeadlineIt: string;
  rolesHeadlineEn: string;
  rolesSubIt: string;
  rolesSubEn: string;
  compliance: IndustryCompliance[];
  closing: IndustryClosing;
  features: IndustryFeatureCard[];
}

export const industryContent: Record<IndustryKey, IndustryContent> = {
  "real-estate": {
    hero: {
      headlineIt: "AI Agentic Studio per XR.\nPer il tuo Real Estate.",
      headlineEn: "Agentic AI Studio for XR.\nFor your Real Estate.",
      taglineIt: "Ottimizzazione 3D · Vision Pro Ready · Vendite +35%",
      taglineEn: "3D Optimization · Vision Pro Ready · Sales +35%",
    },
    problem: {
      problemIt: "I vostri render statici e i virtual tour tradizionali non vendono più. I clienti vogliono toccare gli spazi, viverli, configurarli. Ma i file 3D sono troppo pesanti, i formati incompatibili e la produzione lenta.",
      problemEn: "Your static renders and traditional virtual tours no longer sell. Clients want to touch spaces, experience them, configure them. But 3D files are too heavy, formats are incompatible, and production is slow.",
      solutionIt: "trasforma i vostri file 3D in esperienze XR pronte per Apple Vision Pro, Quick Look e web. Ottimizzazione automatica, conversione USDZ, staging virtuale. Il 35% di vendite in più inizia qui.",
      solutionEn: "transforms your 3D files into XR experiences ready for Apple Vision Pro, Quick Look, and web. Automatic optimization, USDZ conversion, virtual staging. The 35% faster sales start here.",
    },
    roles: [
      { number: "01", titleIt: "Agente Ottimizzazione 3D", titleEn: "3D Optimization Agent", capsIt: "Riduzione poligoni, decimazione intelligente, LOD automatici, retopologia, ottimizzazione mesh per real-time", capsEn: "Polygon reduction, intelligent decimation, automatic LOD, retopology, real-time mesh optimization" },
      { number: "02", titleIt: "Agente Texture e Materiali", titleEn: "Texture & Materials Agent", capsIt: "Compressione texture, atlas UV, materiali PBR, baking lightmap, ottimizzazione VRAM", capsEn: "Texture compression, UV atlas, PBR materials, lightmap baking, VRAM optimization" },
      { number: "03", titleIt: "Agente Illuminazione", titleEn: "Lighting Agent", capsIt: "IBL setup, environment mapping, illuminazione naturale simulata, golden hour, ambientazione notturna", capsEn: "IBL setup, environment mapping, simulated natural lighting, golden hour, night ambiance" },
      { number: "04", titleIt: "Agente Conversione USDZ", titleEn: "USDZ Conversion Agent", capsIt: "Conversione FBX/OBJ/glTF a USDZ, validazione Apple, Quick Look preview, AR placement", capsEn: "FBX/OBJ/glTF to USDZ conversion, Apple validation, Quick Look preview, AR placement" },
      { number: "05", titleIt: "Agente Staging Virtuale", titleEn: "Virtual Staging Agent", capsIt: "Arredo automatico, cataloghi premium, configurazione ambienti, varianti cromatiche, lifestyle staging", capsEn: "Automatic furnishing, premium catalogs, environment configuration, color variants, lifestyle staging" },
      { number: "06", titleIt: "Agente Performance", titleEn: "Performance Agent", capsIt: "Benchmark FPS, test multi-device, report prestazioni, ottimizzazione draw call, analisi bottleneck", capsEn: "FPS benchmarking, multi-device testing, performance reports, draw call optimization, bottleneck analysis" },
    ],
    rolesHeadlineIt: "Agenti AI per ogni fase\ndel vostro workflow 3D.",
    rolesHeadlineEn: "AI agents for every stage\nof your 3D workflow.",
    rolesSubIt: "Specializzati. Automatizzati. Vision Pro Ready.",
    rolesSubEn: "Specialized. Automated. Vision Pro Ready.",
    compliance: [
      { code: "USDZ / USD", labelIt: "Standard Apple XR", labelEn: "Apple XR Standard" },
      { code: "glTF 2.0", labelIt: "Standard Web 3D", labelEn: "Web 3D Standard" },
      { code: "Apple Vision Pro", labelIt: "Compatibilità visionOS", labelEn: "visionOS Compatibility" },
      { code: "PBR Materials", labelIt: "Materiali Fisicamente Accurati", labelEn: "Physically Based Materials" },
      { code: "ISO 19650 / BIM", labelIt: "Gestione Informazioni Edilizia", labelEn: "Building Information Management" },
      { code: "IFC", labelIt: "Interoperabilità BIM", labelEn: "BIM Interoperability" },
    ],
    closing: {
      line1It: "I vostri immobili non devono restare intrappolati in render statici.",
      line1En: "Your properties don\u2019t have to stay trapped in static renders.",
      line2It: "Possono prendere vita in realtà aumentata.",
      line2En: "They can come alive in augmented reality.",
    },
    features: [
      { titleIt: "Da 2.4M poligoni a 180K. In automatico.", titleEn: "From 2.4M polygons to 180K. Automatically.", descIt: "L\u2019Agente Ottimizzazione 3D riduce la complessità dei vostri modelli senza perdere qualità visiva. Decimazione intelligente, LOD progressivi e retopologia automatica per esperienze fluide su ogni dispositivo.", descEn: "The 3D Optimization Agent reduces your models\u2019 complexity without losing visual quality. Intelligent decimation, progressive LODs, and automatic retopology for fluid experiences on every device.", image: "/images/formaxr-hero.jpg" },
      { titleIt: "Vision Pro Ready. Un click.", titleEn: "Vision Pro Ready. One click.", descIt: "L\u2019Agente USDZ converte i vostri file 3D in formato Apple con validazione automatica. Quick Look preview, AR placement e compatibilità visionOS garantita. L\u201987% di visite in più inizia con l\u2019immersione.", descEn: "The USDZ Agent converts your 3D files to Apple format with automatic validation. Quick Look preview, AR placement, and guaranteed visionOS compatibility. The 87% increase in viewings starts with immersion.", image: "/images/formaxr-promo-2.jpg" },
      { titleIt: "Staging virtuale con cataloghi premium.", titleEn: "Virtual staging with premium catalogs.", descIt: "L\u2019Agente Staging arreda i vostri spazi con mobili di brand come Poltrona Frau, B&B Italia e Minotti. Varianti cromatiche, configurazioni multiple e lifestyle staging che fa vendere.", descEn: "The Staging Agent furnishes your spaces with furniture from brands like Poltrona Frau, B&B Italia, and Minotti. Color variants, multiple configurations, and lifestyle staging that sells.", image: "/images/formaxr-promo-6.jpg" },
      { titleIt: "Performance garantite. Su ogni device.", titleEn: "Guaranteed performance. On every device.", descIt: "L\u2019Agente Performance testa i vostri modelli su Vision Pro, iPhone, iPad e web. Report dettagliati su FPS, draw call e VRAM. Nessuna sorpresa in fase di presentazione al cliente.", descEn: "The Performance Agent tests your models on Vision Pro, iPhone, iPad, and web. Detailed reports on FPS, draw calls, and VRAM. No surprises during client presentations.", image: "/images/formaxr-promo-7.jpg" },
    ],
  },

  "interior-design": {
    hero: {
      headlineIt: "AI Agentic Studio per XR.\nPer il tuo Studio di Design.",
      headlineEn: "Agentic AI Studio for XR.\nFor your Design Studio.",
      taglineIt: "Materiali PBR · Staging Immersivo · Presentazioni XR",
      taglineEn: "PBR Materials · Immersive Staging · XR Presentations",
    },
    problem: {
      problemIt: "I vostri clienti faticano a visualizzare il progetto finito. I moodboard e i render 2D non trasmettono la matericità, la luce, le proporzioni reali. Il gap tra aspettativa e risultato genera revisioni infinite.",
      problemEn: "Your clients struggle to visualize the finished project. Moodboards and 2D renders don\u2019t convey materiality, light, or real proportions. The gap between expectation and result generates endless revisions.",
      solutionIt: "trasforma i vostri progetti in esperienze spaziali navigabili. I clienti camminano nel progetto, toccano i materiali, cambiano le finiture. Le revisioni calano. Le approvazioni accelerano.",
      solutionEn: "transforms your projects into navigable spatial experiences. Clients walk through the project, touch materials, change finishes. Revisions drop. Approvals accelerate.",
    },
    roles: [
      { number: "01", titleIt: "Agente Ottimizzazione 3D", titleEn: "3D Optimization Agent", capsIt: "Riduzione poligoni arredi, ottimizzazione scene complesse, merge geometrie, instancing automatico", capsEn: "Furniture polygon reduction, complex scene optimization, geometry merging, automatic instancing" },
      { number: "02", titleIt: "Agente Texture e Materiali", titleEn: "Texture & Materials Agent", capsIt: "Materiali PBR da catalogo, tessuti, legni, marmi, metalli, texture seamless ad alta risoluzione", capsEn: "Catalog PBR materials, fabrics, woods, marbles, metals, high-resolution seamless textures" },
      { number: "03", titleIt: "Agente Illuminazione", titleEn: "Lighting Agent", capsIt: "Simulazione luce naturale, illuminotecnica d\u2019interni, scenari giorno/notte, accent lighting", capsEn: "Natural light simulation, interior lighting design, day/night scenarios, accent lighting" },
      { number: "04", titleIt: "Agente Conversione USDZ", titleEn: "USDZ Conversion Agent", capsIt: "Export da SketchUp/3ds Max/Rhino a USDZ, fidelità materiali garantita, anteprima AR", capsEn: "Export from SketchUp/3ds Max/Rhino to USDZ, guaranteed material fidelity, AR preview" },
      { number: "05", titleIt: "Agente Configurazione", titleEn: "Configuration Agent", capsIt: "Varianti materiali in tempo reale, palette cromatiche, A/B di arredo, mood switching", capsEn: "Real-time material variants, color palettes, furnishing A/B testing, mood switching" },
      { number: "06", titleIt: "Agente Presentazione", titleEn: "Presentation Agent", capsIt: "Walkthrough guidati, punti di vista cinematografici, esportazione video 360, client sharing", capsEn: "Guided walkthroughs, cinematic viewpoints, 360 video export, client sharing" },
    ],
    rolesHeadlineIt: "Agenti AI per ogni fase\ndel vostro progetto d\u2019interni.",
    rolesHeadlineEn: "AI agents for every stage\nof your interior project.",
    rolesSubIt: "Creativi. Precisi. Immersivi.",
    rolesSubEn: "Creative. Precise. Immersive.",
    compliance: [
      { code: "USDZ / USD", labelIt: "Standard Apple XR", labelEn: "Apple XR Standard" },
      { code: "glTF 2.0", labelIt: "Standard Web 3D", labelEn: "Web 3D Standard" },
      { code: "Apple Vision Pro", labelIt: "Compatibilità visionOS", labelEn: "visionOS Compatibility" },
      { code: "PBR Materials", labelIt: "Materiali Fisicamente Accurati", labelEn: "Physically Based Materials" },
      { code: "ISO 19650 / BIM", labelIt: "Gestione Informazioni Edilizia", labelEn: "Building Information Management" },
      { code: "IFC", labelIt: "Interoperabilità BIM", labelEn: "BIM Interoperability" },
    ],
    closing: {
      line1It: "I vostri progetti non devono restare piatti su uno schermo.",
      line1En: "Your projects don\u2019t have to stay flat on a screen.",
      line2It: "Possono diventare spazi da vivere.",
      line2En: "They can become spaces to live in.",
    },
    features: [
      { titleIt: "Materiali che si toccano.", titleEn: "Materials you can touch.", descIt: "L\u2019Agente Texture e Materiali applica superfici PBR fotorealistiche ai vostri arredi. Marmi venati, tessuti con trama visibile, legni con grana naturale. I clienti percepiscono la qualità prima ancora che il progetto esista.", descEn: "The Texture & Materials Agent applies photorealistic PBR surfaces to your furnishings. Veined marbles, fabrics with visible weave, woods with natural grain. Clients perceive quality before the project even exists.", image: "/images/formaxr-hero.jpg" },
      { titleIt: "Presentazioni che convincono al primo incontro.", titleEn: "Presentations that convince at first meeting.", descIt: "L\u2019Agente Presentazione genera walkthrough cinematografici e anteprime AR che il cliente può esplorare dal proprio iPhone. Il 35% di vendite in più parte dalla prima impressione immersiva.", descEn: "The Presentation Agent generates cinematic walkthroughs and AR previews that clients can explore from their iPhone. The 35% faster sales start with the first immersive impression.", image: "/images/formaxr-promo-2.jpg" },
      { titleIt: "Configurazioni infinite. Zero render aggiuntivi.", titleEn: "Infinite configurations. Zero additional renders.", descIt: "L\u2019Agente Configurazione permette di cambiare finiture, colori e arredi in tempo reale durante la presentazione. Nessuna attesa, nessun costo extra. Il cliente sceglie e approva in diretta.", descEn: "The Configuration Agent lets you change finishes, colors, and furnishings in real time during the presentation. No waiting, no extra cost. The client chooses and approves live.", image: "/images/formaxr-promo-6.jpg" },
      { titleIt: "Dal 3D al Vision Pro senza passaggi manuali.", titleEn: "From 3D to Vision Pro with no manual steps.", descIt: "L\u2019Agente USDZ converte automaticamente i vostri file SketchUp, 3ds Max o Rhino in formato Apple. Validazione automatica, anteprima Quick Look e condivisione immediata con il cliente.", descEn: "The USDZ Agent automatically converts your SketchUp, 3ds Max, or Rhino files to Apple format. Automatic validation, Quick Look preview, and immediate sharing with the client.", image: "/images/formaxr-promo-7.jpg" },
    ],
  },

  architecture: {
    hero: {
      headlineIt: "AI Agentic Studio per XR.\nPer il tuo Studio di Architettura.",
      headlineEn: "Agentic AI Studio for XR.\nFor your Architecture Firm.",
      taglineIt: "BIM to XR · Revisioni Spaziali · Collaborazione Immersiva",
      taglineEn: "BIM to XR · Spatial Reviews · Immersive Collaboration",
    },
    problem: {
      problemIt: "I vostri modelli BIM sono potenti ma inaccessibili. Committenti e stakeholder non leggono i file IFC. Le revisioni progettuali avvengono su schermi piatti, perdendo la percezione di scala e proporzione.",
      problemEn: "Your BIM models are powerful but inaccessible. Clients and stakeholders can\u2019t read IFC files. Design reviews happen on flat screens, losing the perception of scale and proportion.",
      solutionIt: "trasforma i vostri modelli BIM in esperienze XR navigabili a scala reale. Committenti, ingegneri e costruttori entrano nel progetto. Le decisioni si prendono nello spazio, non su carta.",
      solutionEn: "transforms your BIM models into navigable XR experiences at real scale. Clients, engineers, and builders step into the project. Decisions are made in space, not on paper.",
    },
    roles: [
      { number: "01", titleIt: "Agente Ottimizzazione 3D", titleEn: "3D Optimization Agent", capsIt: "Semplificazione modelli BIM, riduzione complessità strutturale, LOD architettonici, ottimizzazione facciate", capsEn: "BIM model simplification, structural complexity reduction, architectural LODs, facade optimization" },
      { number: "02", titleIt: "Agente Texture e Materiali", titleEn: "Texture & Materials Agent", capsIt: "Materiali PBR architettonici, calcestruzzo, acciaio corten, vetro, pietra naturale, facciate ventilate", capsEn: "Architectural PBR materials, concrete, corten steel, glass, natural stone, ventilated facades" },
      { number: "03", titleIt: "Agente Illuminazione", titleEn: "Lighting Agent", capsIt: "Studio solare, analisi ombre, simulazione stagionale, illuminazione urbana, analisi daylighting", capsEn: "Solar study, shadow analysis, seasonal simulation, urban lighting, daylighting analysis" },
      { number: "04", titleIt: "Agente Conversione USDZ", titleEn: "USDZ Conversion Agent", capsIt: "Export IFC/Revit/ArchiCAD a USDZ, gestione livelli, filtro per disciplina, scala 1:1 AR", capsEn: "IFC/Revit/ArchiCAD to USDZ export, layer management, discipline filtering, 1:1 AR scale" },
      { number: "05", titleIt: "Agente Revisione Spaziale", titleEn: "Spatial Review Agent", capsIt: "Annotazioni 3D, clash detection visiva, markup collaborativo, versioning spaziale, confronto varianti", capsEn: "3D annotations, visual clash detection, collaborative markup, spatial versioning, variant comparison" },
      { number: "06", titleIt: "Agente Performance", titleEn: "Performance Agent", capsIt: "Benchmark modelli urbani, test Vision Pro, ottimizzazione scene outdoor, analisi frame budget", capsEn: "Urban model benchmarking, Vision Pro testing, outdoor scene optimization, frame budget analysis" },
    ],
    rolesHeadlineIt: "Agenti AI per ogni fase\ndel vostro progetto architettonico.",
    rolesHeadlineEn: "AI agents for every stage\nof your architectural project.",
    rolesSubIt: "Tecnici. Collaborativi. A scala reale.",
    rolesSubEn: "Technical. Collaborative. At real scale.",
    compliance: [
      { code: "USDZ / USD", labelIt: "Standard Apple XR", labelEn: "Apple XR Standard" },
      { code: "glTF 2.0", labelIt: "Standard Web 3D", labelEn: "Web 3D Standard" },
      { code: "Apple Vision Pro", labelIt: "Compatibilità visionOS", labelEn: "visionOS Compatibility" },
      { code: "PBR Materials", labelIt: "Materiali Fisicamente Accurati", labelEn: "Physically Based Materials" },
      { code: "ISO 19650 / BIM", labelIt: "Gestione Informazioni Edilizia", labelEn: "Building Information Management" },
      { code: "IFC", labelIt: "Interoperabilità BIM", labelEn: "BIM Interoperability" },
    ],
    closing: {
      line1It: "L\u2019architettura non deve restare chiusa in un file BIM.",
      line1En: "Architecture doesn\u2019t have to stay locked in a BIM file.",
      line2It: "Può diventare uno spazio da attraversare.",
      line2En: "It can become a space to walk through.",
    },
    features: [
      { titleIt: "Dal BIM alla realtà aumentata. Direttamente.", titleEn: "From BIM to augmented reality. Directly.", descIt: "L\u2019Agente USDZ esporta i vostri modelli Revit, ArchiCAD o IFC in formato Apple a scala 1:1. Il committente cammina nel progetto dal cantiere, confrontando il costruito con il progettato.", descEn: "The USDZ Agent exports your Revit, ArchiCAD, or IFC models to Apple format at 1:1 scale. The client walks through the project on-site, comparing the built with the designed.", image: "/images/formaxr-hero.jpg" },
      { titleIt: "Revisioni nello spazio, non su carta.", titleEn: "Reviews in space, not on paper.", descIt: "L\u2019Agente Revisione Spaziale permette annotazioni 3D, clash detection visiva e confronto varianti direttamente nel modello immersivo. Le decisioni progettuali diventano immediate e condivise.", descEn: "The Spatial Review Agent enables 3D annotations, visual clash detection, and variant comparison directly in the immersive model. Design decisions become immediate and shared.", image: "/images/formaxr-promo-2.jpg" },
      { titleIt: "Studio solare e analisi ombre in tempo reale.", titleEn: "Solar study and shadow analysis in real time.", descIt: "L\u2019Agente Illuminazione simula la luce naturale in ogni stagione e ora del giorno. Analisi daylighting, impatto ombre su edifici adiacenti e ottimizzazione dell\u2019orientamento. Dati, non intuizioni.", descEn: "The Lighting Agent simulates natural light across every season and time of day. Daylighting analysis, shadow impact on adjacent buildings, and orientation optimization. Data, not guesswork.", image: "/images/formaxr-promo-6.jpg" },
      { titleIt: "Modelli urbani fluidi su Vision Pro.", titleEn: "Fluid urban models on Vision Pro.", descIt: "L\u2019Agente Performance ottimizza modelli architettonici complessi per esperienze immersive a 90 FPS. Test automatici su Vision Pro, iPhone e web. L\u201987% di visite in più parte dall\u2019esperienza.", descEn: "The Performance Agent optimizes complex architectural models for immersive experiences at 90 FPS. Automatic testing on Vision Pro, iPhone, and web. The 87% increase in viewings starts with the experience.", image: "/images/formaxr-promo-7.jpg" },
    ],
  },

  construction: {
    hero: {
      headlineIt: "AI Agentic Studio per XR.\nPer la tua Impresa di Costruzioni.",
      headlineEn: "Agentic AI Studio for XR.\nFor your Construction Company.",
      taglineIt: "Cantiere Digitale · Clash Detection XR · Coordinamento 3D",
      taglineEn: "Digital Jobsite · XR Clash Detection · 3D Coordination",
    },
    problem: {
      problemIt: "I disegni 2D generano errori in cantiere. Le interferenze si scoprono durante la posa, i subappaltatori interpretano i dettagli in modo diverso e le varianti in corso d\u2019opera fanno esplodere i costi.",
      problemEn: "2D drawings generate on-site errors. Clashes are discovered during installation, subcontractors interpret details differently, and change orders explode costs.",
      solutionIt: "porta il modello 3D in cantiere. Operai e capicantiere visualizzano il progetto in scala reale tramite AR, identificano interferenze prima della posa e coordinano i lavori con precisione millimetrica.",
      solutionEn: "brings the 3D model to the jobsite. Workers and site managers visualize the project at real scale via AR, identify clashes before installation, and coordinate work with millimeter precision.",
    },
    roles: [
      { number: "01", titleIt: "Agente Ottimizzazione 3D", titleEn: "3D Optimization Agent", capsIt: "Semplificazione modelli MEP, riduzione impianti complessi, LOD per cantiere, segmentazione per lotto", capsEn: "MEP model simplification, complex systems reduction, construction LODs, lot segmentation" },
      { number: "02", titleIt: "Agente Texture e Materiali", titleEn: "Texture & Materials Agent", capsIt: "Materiali costruttivi PBR, laterizio, acciaio strutturale, isolanti, impermeabilizzazioni, finiture grezze", capsEn: "Construction PBR materials, brick, structural steel, insulation, waterproofing, raw finishes" },
      { number: "03", titleIt: "Agente Illuminazione", titleEn: "Lighting Agent", capsIt: "Simulazione condizioni cantiere, visibilità AR outdoor, calibrazione luce ambientale, overlay diurno", capsEn: "Jobsite condition simulation, outdoor AR visibility, ambient light calibration, daytime overlay" },
      { number: "04", titleIt: "Agente Conversione USDZ", titleEn: "USDZ Conversion Agent", capsIt: "Export modelli strutturali/MEP a USDZ, georeferenziazione AR, allineamento cantiere, QR code placement", capsEn: "Structural/MEP model to USDZ export, AR georeferencing, site alignment, QR code placement" },
      { number: "05", titleIt: "Agente Coordinamento Cantiere", titleEn: "Site Coordination Agent", capsIt: "Clash detection 3D, sequencing fasi costruttive, overlay progetto/costruito, punch list spaziale", capsEn: "3D clash detection, construction phase sequencing, design/built overlay, spatial punch list" },
      { number: "06", titleIt: "Agente Performance", titleEn: "Performance Agent", capsIt: "Test AR su tablet da cantiere, ottimizzazione per iPad Pro, performance outdoor, compressione modelli pesanti", capsEn: "AR testing on site tablets, iPad Pro optimization, outdoor performance, heavy model compression" },
    ],
    rolesHeadlineIt: "Agenti AI per ogni fase\ndel vostro cantiere digitale.",
    rolesHeadlineEn: "AI agents for every stage\nof your digital jobsite.",
    rolesSubIt: "Precisi. Affidabili. Da cantiere.",
    rolesSubEn: "Precise. Reliable. Built for the site.",
    compliance: [
      { code: "USDZ / USD", labelIt: "Standard Apple XR", labelEn: "Apple XR Standard" },
      { code: "glTF 2.0", labelIt: "Standard Web 3D", labelEn: "Web 3D Standard" },
      { code: "Apple Vision Pro", labelIt: "Compatibilità visionOS", labelEn: "visionOS Compatibility" },
      { code: "PBR Materials", labelIt: "Materiali Fisicamente Accurati", labelEn: "Physically Based Materials" },
      { code: "ISO 19650 / BIM", labelIt: "Gestione Informazioni Edilizia", labelEn: "Building Information Management" },
      { code: "IFC", labelIt: "Interoperabilità BIM", labelEn: "BIM Interoperability" },
    ],
    closing: {
      line1It: "Il cantiere non deve lavorare alla cieca su disegni 2D.",
      line1En: "The jobsite doesn\u2019t have to work blind from 2D drawings.",
      line2It: "Può vedere il progetto a scala reale, prima di costruirlo.",
      line2En: "It can see the project at real scale, before building it.",
    },
    features: [
      { titleIt: "Zero interferenze scoperte in cantiere.", titleEn: "Zero clashes discovered on-site.", descIt: "L\u2019Agente Coordinamento Cantiere esegue clash detection 3D tra strutture, impianti e finiture prima della posa. Le interferenze si risolvono nel modello, non nel muro. Costi di variante ridotti drasticamente.", descEn: "The Site Coordination Agent runs 3D clash detection between structures, systems, and finishes before installation. Clashes are resolved in the model, not in the wall. Change order costs drastically reduced.", image: "/images/formaxr-hero.jpg" },
      { titleIt: "Il progetto in cantiere. A scala reale.", titleEn: "The project on-site. At real scale.", descIt: "L\u2019Agente USDZ georeferenzia il modello 3D e lo sovrappone al cantiere reale tramite AR. Operai e capicantiere vedono esattamente dove passano gli impianti, dove arrivano le quote, dove si posano i materiali.", descEn: "The USDZ Agent georeferences the 3D model and overlays it on the real jobsite via AR. Workers and site managers see exactly where systems run, where levels land, where materials are laid.", image: "/images/formaxr-promo-2.jpg" },
      { titleIt: "Modelli MEP ottimizzati per tablet da cantiere.", titleEn: "MEP models optimized for site tablets.", descIt: "L\u2019Agente Performance comprime modelli strutturali e impiantistici complessi per funzionare fluidamente su iPad Pro in condizioni outdoor. Test automatici di visibilità, luminosità e frame rate.", descEn: "The Performance Agent compresses complex structural and MEP models to run smoothly on iPad Pro in outdoor conditions. Automatic visibility, brightness, and frame rate testing.", image: "/images/formaxr-promo-6.jpg" },
      { titleIt: "Punch list spaziale. Niente sfugge.", titleEn: "Spatial punch list. Nothing escapes.", descIt: "L\u2019Agente Coordinamento genera punch list ancorate al modello 3D. Ogni difetto viene posizionato nello spazio con foto, nota e assegnatario. Il follow-up diventa tracciabile e misurabile.", descEn: "The Coordination Agent generates punch lists anchored to the 3D model. Every defect is positioned in space with photo, note, and assignee. Follow-up becomes trackable and measurable.", image: "/images/formaxr-promo-7.jpg" },
    ],
  },

  "luxury-hospitality": {
    hero: {
      headlineIt: "AI Agentic Studio per XR.\nPer il tuo Brand di Lusso.",
      headlineEn: "Agentic AI Studio for XR.\nFor your Luxury Brand.",
      taglineIt: "Esperienze Immersive · Storytelling Spaziale · +87% Engagement",
      taglineEn: "Immersive Experiences · Spatial Storytelling · +87% Engagement",
    },
    problem: {
      problemIt: "Le foto e i video non trasmettono l\u2019esperienza di una suite, di una spa, di uno spazio esclusivo. I vostri ospiti prenotano basandosi su immagini piatte che non catturano l\u2019atmosfera, la luce, il respiro degli ambienti.",
      problemEn: "Photos and videos don\u2019t convey the experience of a suite, a spa, an exclusive space. Your guests book based on flat images that don\u2019t capture the atmosphere, the light, the feel of the spaces.",
      solutionIt: "trasforma i vostri spazi in esperienze immersive che il cliente vive prima di arrivare. Suite navigabili in AR, configurazioni personalizzate, storytelling spaziale che converte. L\u201987% di visite in più parte da qui.",
      solutionEn: "transforms your spaces into immersive experiences that guests live before arriving. Suites navigable in AR, personalized configurations, spatial storytelling that converts. The 87% increase in viewings starts here.",
    },
    roles: [
      { number: "01", titleIt: "Agente Ottimizzazione 3D", titleEn: "3D Optimization Agent", capsIt: "Ottimizzazione modelli hospitality, dettagli d\u2019arredo di lusso, LOD progressivi, bilanciamento qualità/peso", capsEn: "Hospitality model optimization, luxury furnishing details, progressive LODs, quality/weight balancing" },
      { number: "02", titleIt: "Agente Texture e Materiali", titleEn: "Texture & Materials Agent", capsIt: "Materiali luxury PBR, seta, velluto, onice, ottone spazzolato, pelle, superfici high-end", capsEn: "Luxury PBR materials, silk, velvet, onyx, brushed brass, leather, high-end surfaces" },
      { number: "03", titleIt: "Agente Illuminazione", titleEn: "Lighting Agent", capsIt: "Lighting d\u2019atmosfera, candlelight, golden hour, spa ambiance, illuminazione scenografica, mood design", capsEn: "Atmosphere lighting, candlelight, golden hour, spa ambiance, theatrical lighting, mood design" },
      { number: "04", titleIt: "Agente Conversione USDZ", titleEn: "USDZ Conversion Agent", capsIt: "Conversione suite/spazi comuni a USDZ, anteprima AR per concierge, Quick Look per booking online", capsEn: "Suite/common area USDZ conversion, AR preview for concierge, Quick Look for online booking" },
      { number: "05", titleIt: "Agente Storytelling Spaziale", titleEn: "Spatial Storytelling Agent", capsIt: "Narrativa immersiva, percorsi guidati, hotspot interattivi, brand experience 3D, emotional journey", capsEn: "Immersive narrative, guided paths, interactive hotspots, 3D brand experience, emotional journey" },
      { number: "06", titleIt: "Agente Presentazione", titleEn: "Presentation Agent", capsIt: "Video 360 per OTA, contenuti AR per sito web, social media XR, materiali per press kit immersivi", capsEn: "360 video for OTAs, AR content for website, XR social media, immersive press kit materials" },
    ],
    rolesHeadlineIt: "Agenti AI per ogni touchpoint\ndella vostra esperienza di lusso.",
    rolesHeadlineEn: "AI agents for every touchpoint\nof your luxury experience.",
    rolesSubIt: "Raffinati. Emozionali. Memorabili.",
    rolesSubEn: "Refined. Emotional. Memorable.",
    compliance: [
      { code: "USDZ / USD", labelIt: "Standard Apple XR", labelEn: "Apple XR Standard" },
      { code: "glTF 2.0", labelIt: "Standard Web 3D", labelEn: "Web 3D Standard" },
      { code: "Apple Vision Pro", labelIt: "Compatibilità visionOS", labelEn: "visionOS Compatibility" },
      { code: "PBR Materials", labelIt: "Materiali Fisicamente Accurati", labelEn: "Physically Based Materials" },
      { code: "ISO 19650 / BIM", labelIt: "Gestione Informazioni Edilizia", labelEn: "Building Information Management" },
      { code: "IFC", labelIt: "Interoperabilità BIM", labelEn: "BIM Interoperability" },
    ],
    closing: {
      line1It: "Il lusso non si racconta con le foto.",
      line1En: "Luxury can\u2019t be told through photos.",
      line2It: "Si vive. Anche prima di arrivare.",
      line2En: "It\u2019s lived. Even before arriving.",
    },
    features: [
      { titleIt: "L\u2019ospite vive la suite prima di prenotare.", titleEn: "The guest experiences the suite before booking.", descIt: "L\u2019Agente USDZ converte le vostre suite in esperienze AR navigabili da iPhone. Il cliente esplora lo spazio, sente le proporzioni, percepisce la luce. L\u201987% di visite in più e il 35% di conversioni in più partono da qui.", descEn: "The USDZ Agent converts your suites into AR experiences navigable from iPhone. The guest explores the space, senses proportions, perceives the light. The 87% more viewings and 35% faster sales start here.", image: "/images/formaxr-hero.jpg" },
      { titleIt: "Materiali che trasmettono lusso.", titleEn: "Materials that convey luxury.", descIt: "L\u2019Agente Texture e Materiali riproduce seta, velluto, onice e ottone spazzolato con fedeltà fotorealistica. Ogni superficie comunica la qualità del vostro brand prima che l\u2019ospite metta piede nella struttura.", descEn: "The Texture & Materials Agent reproduces silk, velvet, onyx, and brushed brass with photorealistic fidelity. Every surface communicates your brand\u2019s quality before the guest sets foot in the property.", image: "/images/formaxr-promo-2.jpg" },
      { titleIt: "Storytelling che emoziona e converte.", titleEn: "Storytelling that moves and converts.", descIt: "L\u2019Agente Storytelling Spaziale crea percorsi narrativi immersivi con hotspot interattivi, transizioni cinematografiche e ambient sound. Il vostro brand diventa un\u2019esperienza, non una brochure.", descEn: "The Spatial Storytelling Agent creates immersive narrative paths with interactive hotspots, cinematic transitions, and ambient sound. Your brand becomes an experience, not a brochure.", image: "/images/formaxr-promo-6.jpg" },
      { titleIt: "Contenuti XR per ogni canale.", titleEn: "XR content for every channel.", descIt: "L\u2019Agente Presentazione genera video 360 per Booking e Expedia, contenuti AR per il vostro sito, asset XR per social media e press kit immersivi. Un unico modello 3D, infiniti touchpoint.", descEn: "The Presentation Agent generates 360 videos for Booking and Expedia, AR content for your website, XR assets for social media, and immersive press kits. One 3D model, infinite touchpoints.", image: "/images/formaxr-promo-7.jpg" },
    ],
  },
};
