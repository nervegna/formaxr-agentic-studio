import { IndustryKey } from "./industryContent";

export interface AssistantPrompt {
  promptIt: string;
  promptEn: string;
  responseIt: string;
  responseEn: string;
  delegateToIt: string;
  delegateToEn: string;
}

export const assistantPrompts: Record<IndustryKey, AssistantPrompt[]> = {
  "real-estate": [
    {
      promptIt: "Ottimizza il modello 3D della Residenza Milano per Vision Pro.",
      promptEn: "Optimize the Residenza Milano 3D model for Vision Pro.",
      responseIt: "Ottimizzazione avviata. L\u2019Agente Ottimizzazione 3D sta riducendo i poligoni da 2.4M a 180K mantenendo la qualità visiva.",
      responseEn: "Optimization started. 3D Optimization Agent is reducing polygons from 2.4M to 180K while maintaining visual quality.",
      delegateToIt: "Agente Ottimizzazione 3D",
      delegateToEn: "3D Optimization Agent",
    },
    {
      promptIt: "Converti il walkthrough dell\u2019attico in formato USDZ.",
      promptEn: "Convert the penthouse walkthrough to USDZ format.",
      responseIt: "Conversione in coda. L\u2019Agente USDZ sta validando le specifiche Apple e generando l\u2019anteprima Quick Look.",
      responseEn: "Conversion queued. USDZ Agent is validating Apple specs and generating Quick Look preview.",
      delegateToIt: "Agente Conversione USDZ",
      delegateToEn: "USDZ Conversion Agent",
    },
    {
      promptIt: "Prepara lo staging virtuale per il soggiorno del lotto 12.",
      promptEn: "Set up virtual staging for the living room of unit 12.",
      responseIt: "Staging avviato. L\u2019Agente Staging Virtuale sta posizionando arredi premium dal catalogo Poltrona Frau.",
      responseEn: "Staging initiated. Virtual Staging Agent is placing premium furniture from the Poltrona Frau catalog.",
      delegateToIt: "Agente Staging Virtuale",
      delegateToEn: "Virtual Staging Agent",
    },
    {
      promptIt: "Report prestazioni del modello su tutti i dispositivi target.",
      promptEn: "Performance report for the model across all target devices.",
      responseIt: "Test in corso. L\u2019Agente Performance sta eseguendo benchmark su Vision Pro, iPhone 15 Pro e iPad Pro. FPS attuale: 72.",
      responseEn: "Testing in progress. Performance Agent is running benchmarks on Vision Pro, iPhone 15 Pro, and iPad Pro. Current FPS: 72.",
      delegateToIt: "Agente Performance",
      delegateToEn: "Performance Agent",
    },
  ],
  "interior-design": [
    {
      promptIt: "Applica i materiali PBR del catalogo Minotti al progetto Villa Brera.",
      promptEn: "Apply PBR materials from the Minotti catalog to the Villa Brera project.",
      responseIt: "Applicazione materiali avviata. L\u2019Agente Texture e Materiali sta mappando tessuti, pelli e metalli su 34 elementi d\u2019arredo.",
      responseEn: "Material application started. Texture & Materials Agent is mapping fabrics, leathers, and metals across 34 furnishing elements.",
      delegateToIt: "Agente Texture e Materiali",
      delegateToEn: "Texture & Materials Agent",
    },
    {
      promptIt: "Simula la luce naturale del soggiorno alle 17:00 in estate.",
      promptEn: "Simulate natural light in the living room at 5 PM in summer.",
      responseIt: "Simulazione avviata. L\u2019Agente Illuminazione sta calcolando golden hour, riflessi sulle superfici e ombre proiettate.",
      responseEn: "Simulation started. Lighting Agent is calculating golden hour, surface reflections, and projected shadows.",
      delegateToIt: "Agente Illuminazione",
      delegateToEn: "Lighting Agent",
    },
    {
      promptIt: "Genera tre varianti cromatiche per la camera da letto padronale.",
      promptEn: "Generate three color variants for the master bedroom.",
      responseIt: "Varianti in generazione. L\u2019Agente Configurazione sta creando le palette: Warm Neutral, Cool Grey e Terracotta.",
      responseEn: "Variants generating. Configuration Agent is creating palettes: Warm Neutral, Cool Grey, and Terracotta.",
      delegateToIt: "Agente Configurazione",
      delegateToEn: "Configuration Agent",
    },
    {
      promptIt: "Prepara il walkthrough cinematografico per la presentazione al cliente.",
      promptEn: "Prepare the cinematic walkthrough for the client presentation.",
      responseIt: "Walkthrough in rendering. L\u2019Agente Presentazione sta impostando 8 punti di vista cinematografici con transizioni fluide.",
      responseEn: "Walkthrough rendering. Presentation Agent is setting up 8 cinematic viewpoints with smooth transitions.",
      delegateToIt: "Agente Presentazione",
      delegateToEn: "Presentation Agent",
    },
  ],
  architecture: [
    {
      promptIt: "Esporta il modello Revit del Complesso Porta Nuova in USDZ a scala 1:1.",
      promptEn: "Export the Porta Nuova Complex Revit model to USDZ at 1:1 scale.",
      responseIt: "Esportazione avviata. L\u2019Agente USDZ sta convertendo 12 livelli da Revit con filtro per disciplina strutturale e architettonica.",
      responseEn: "Export started. USDZ Agent is converting 12 levels from Revit with structural and architectural discipline filtering.",
      delegateToIt: "Agente Conversione USDZ",
      delegateToEn: "USDZ Conversion Agent",
    },
    {
      promptIt: "Esegui lo studio solare sulla facciata sud per tutte le stagioni.",
      promptEn: "Run the solar study on the south facade across all seasons.",
      responseIt: "Studio solare avviato. L\u2019Agente Illuminazione sta simulando 4 stagioni con analisi ombre su edifici adiacenti.",
      responseEn: "Solar study started. Lighting Agent is simulating 4 seasons with shadow analysis on adjacent buildings.",
      delegateToIt: "Agente Illuminazione",
      delegateToEn: "Lighting Agent",
    },
    {
      promptIt: "Avvia la revisione spaziale con annotazioni per il team strutturale.",
      promptEn: "Start the spatial review with annotations for the structural team.",
      responseIt: "Revisione spaziale attivata. L\u2019Agente Revisione Spaziale sta creando 6 markup di clash detection tra strutture e impianti MEP.",
      responseEn: "Spatial review activated. Spatial Review Agent is creating 6 clash detection markups between structures and MEP systems.",
      delegateToIt: "Agente Revisione Spaziale",
      delegateToEn: "Spatial Review Agent",
    },
    {
      promptIt: "Ottimizza il masterplan urbano per la visualizzazione su Vision Pro.",
      promptEn: "Optimize the urban masterplan for Vision Pro visualization.",
      responseIt: "Ottimizzazione in corso. L\u2019Agente Ottimizzazione 3D sta semplificando 47 edifici con LOD progressivi. Target: 90 FPS su visionOS.",
      responseEn: "Optimization in progress. 3D Optimization Agent is simplifying 47 buildings with progressive LODs. Target: 90 FPS on visionOS.",
      delegateToIt: "Agente Ottimizzazione 3D",
      delegateToEn: "3D Optimization Agent",
    },
  ],
  construction: [
    {
      promptIt: "Esegui la clash detection 3D tra impianti meccanici e strutture del piano 3.",
      promptEn: "Run 3D clash detection between mechanical systems and structures on floor 3.",
      responseIt: "Clash detection avviata. L\u2019Agente Coordinamento Cantiere ha identificato 14 interferenze tra condotti HVAC e travi portanti.",
      responseEn: "Clash detection started. Site Coordination Agent identified 14 clashes between HVAC ducts and load-bearing beams.",
      delegateToIt: "Agente Coordinamento Cantiere",
      delegateToEn: "Site Coordination Agent",
    },
    {
      promptIt: "Converti il modello MEP del blocco B per la visualizzazione AR in cantiere.",
      promptEn: "Convert the MEP model of block B for on-site AR visualization.",
      responseIt: "Conversione avviata. L\u2019Agente USDZ sta georeferenziando il modello e generando i QR code per l\u2019allineamento in cantiere.",
      responseEn: "Conversion started. USDZ Agent is georeferencing the model and generating QR codes for on-site alignment.",
      delegateToIt: "Agente Conversione USDZ",
      delegateToEn: "USDZ Conversion Agent",
    },
    {
      promptIt: "Ottimizza il modello strutturale per funzionare su iPad Pro in esterno.",
      promptEn: "Optimize the structural model to run on iPad Pro outdoors.",
      responseIt: "Ottimizzazione avviata. L\u2019Agente Performance sta comprimendo il modello da 890 MB a 120 MB con test di visibilità outdoor.",
      responseEn: "Optimization started. Performance Agent is compressing the model from 890 MB to 120 MB with outdoor visibility testing.",
      delegateToIt: "Agente Performance",
      delegateToEn: "Performance Agent",
    },
    {
      promptIt: "Genera la punch list spaziale per il piano terra del cantiere Navigli.",
      promptEn: "Generate the spatial punch list for the ground floor of the Navigli site.",
      responseIt: "Punch list in generazione. L\u2019Agente Coordinamento sta posizionando 23 segnalazioni con foto e assegnatari nel modello 3D.",
      responseEn: "Punch list generating. Coordination Agent is positioning 23 issues with photos and assignees in the 3D model.",
      delegateToIt: "Agente Coordinamento Cantiere",
      delegateToEn: "Site Coordination Agent",
    },
  ],
  "luxury-hospitality": [
    {
      promptIt: "Converti la Presidential Suite in esperienza AR per il sito di booking.",
      promptEn: "Convert the Presidential Suite to an AR experience for the booking site.",
      responseIt: "Conversione avviata. L\u2019Agente USDZ sta generando l\u2019anteprima Quick Look con materiali luxury e illuminazione d\u2019atmosfera.",
      responseEn: "Conversion started. USDZ Agent is generating Quick Look preview with luxury materials and atmosphere lighting.",
      delegateToIt: "Agente Conversione USDZ",
      delegateToEn: "USDZ Conversion Agent",
    },
    {
      promptIt: "Crea il percorso narrativo immersivo per la spa e l\u2019area wellness.",
      promptEn: "Create the immersive narrative path for the spa and wellness area.",
      responseIt: "Percorso in creazione. L\u2019Agente Storytelling Spaziale sta posizionando 12 hotspot interattivi con transizioni cinematografiche e ambient sound.",
      responseEn: "Path creating. Spatial Storytelling Agent is positioning 12 interactive hotspots with cinematic transitions and ambient sound.",
      delegateToIt: "Agente Storytelling Spaziale",
      delegateToEn: "Spatial Storytelling Agent",
    },
    {
      promptIt: "Applica le texture luxury alla suite: seta, onice, ottone spazzolato.",
      promptEn: "Apply luxury textures to the suite: silk, onyx, brushed brass.",
      responseIt: "Applicazione in corso. L\u2019Agente Texture e Materiali sta mappando 18 superfici PBR con riflessi e trasparenze fotorealistiche.",
      responseEn: "Application in progress. Texture & Materials Agent is mapping 18 PBR surfaces with photorealistic reflections and transparencies.",
      delegateToIt: "Agente Texture e Materiali",
      delegateToEn: "Texture & Materials Agent",
    },
    {
      promptIt: "Genera i contenuti XR per Booking.com e il press kit immersivo.",
      promptEn: "Generate XR content for Booking.com and the immersive press kit.",
      responseIt: "Generazione avviata. L\u2019Agente Presentazione sta esportando video 360 per OTA, asset AR per il sito e materiali immersivi per la stampa.",
      responseEn: "Generation started. Presentation Agent is exporting 360 video for OTAs, AR assets for the website, and immersive materials for press.",
      delegateToIt: "Agente Presentazione",
      delegateToEn: "Presentation Agent",
    },
  ],
};
