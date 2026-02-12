export const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Projetos", href: "/projetos" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contato", href: "/contato" },
] as const;

export const PROJECTS = [
  {
    id: 1,
    slug: "residencia-vila-nova",
    title: "Residência Vila Nova",
    category: "Residencial",
    area: "280m²",
    location: "Condomínio Vila Nova — Sorocaba/SP",
    lot: "360m²",
    builtArea: "280m²",
    architect: "Arq. Stephanie Macêdo",
    description:
      "Projeto residencial contemporâneo com integração total entre os ambientes sociais e a área de lazer, priorizando iluminação natural e ventilação cruzada.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    gallery: [
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80", label: "Fachada Principal" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", label: "Sala de Estar" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80", label: "Cozinha Integrada" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80", label: "Suíte Master" },
      { src: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80", label: "Área Gourmet" },
      { src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80", label: "Fachada Lateral" },
    ],
  },
  {
    id: 2,
    slug: "apartamento-jardins",
    title: "Apartamento Jardins",
    category: "Interiores",
    area: "120m²",
    location: "Edifício Jardins — Sorocaba/SP",
    lot: "—",
    builtArea: "120m²",
    architect: "Arq. Stephanie Macêdo",
    description:
      "Design de interiores sofisticado para apartamento alto padrão, com paleta neutra e toques de madeira natural que trazem aconchego aos ambientes.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    gallery: [
      { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80", label: "Living" },
      { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80", label: "Sala de Jantar" },
      { src: "https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=1200&q=80", label: "Cozinha" },
      { src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80", label: "Dormitório" },
      { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80", label: "Banheiro" },
    ],
  },
  {
    id: 3,
    slug: "escritorio-nexus",
    title: "Escritório Nexus",
    category: "Corporativo",
    area: "450m²",
    location: "Business Center — Sorocaba/SP",
    lot: "—",
    builtArea: "450m²",
    architect: "Arq. Stephanie Macêdo",
    description:
      "Espaço corporativo moderno projetado para estimular a criatividade e produtividade, com áreas colaborativas e salas de reunião acusticamente isoladas.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    gallery: [
      { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80", label: "Open Space" },
      { src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80", label: "Sala de Reunião" },
      { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80", label: "Recepção" },
      { src: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&q=80", label: "Área de Descanso" },
    ],
  },
  {
    id: 4,
    slug: "casa-serena",
    title: "Casa Serena",
    category: "Residencial",
    area: "350m²",
    location: "Condomínio Reserva — Votorantim/SP",
    lot: "500m²",
    builtArea: "350m²",
    architect: "Arq. Stephanie Macêdo",
    description:
      "Residência de linhas retas e volumes puros, com amplos panos de vidro que emolduram a paisagem natural do entorno, criando uma conexão única entre interior e exterior.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    gallery: [
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", label: "Fachada" },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80", label: "Sala de Estar" },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80", label: "Cozinha" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80", label: "Suíte" },
      { src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80", label: "Área de Lazer" },
      { src: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=1200&q=80", label: "Jardim" },
    ],
  },
  {
    id: 5,
    slug: "loft-industrial",
    title: "Loft Industrial",
    category: "Interiores",
    area: "90m²",
    location: "Centro Histórico — Sorocaba/SP",
    lot: "—",
    builtArea: "90m²",
    architect: "Arq. Stephanie Macêdo",
    description:
      "Reforma de galpão industrial transformado em loft contemporâneo, preservando elementos originais como vigas de concreto e tijolos aparentes.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
    gallery: [
      { src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80", label: "Visão Geral" },
      { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80", label: "Quarto" },
      { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80", label: "Cozinha" },
      { src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&q=80", label: "Banheiro" },
    ],
  },
  {
    id: 6,
    slug: "clinica-essence",
    title: "Clínica Essence",
    category: "Comercial",
    area: "200m²",
    location: "Campolim — Sorocaba/SP",
    lot: "—",
    builtArea: "200m²",
    architect: "Arq. Stephanie Macêdo",
    description:
      "Projeto comercial para clínica de estética com ambientes que transmitem bem-estar e sofisticação, utilizando iluminação indireta e materiais naturais.",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&q=80",
    gallery: [
      { src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&q=80", label: "Recepção" },
      { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80", label: "Sala de Atendimento" },
      { src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&q=80", label: "Corredor" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", label: "Fachada" },
    ],
  },
  {
    id: 7,
    slug: "residencia-do-lago",
    title: "Residência do Lago",
    category: "Residencial",
    area: "400m²",
    location: "Condomínio do Lago — Sorocaba/SP",
    lot: "600m²",
    builtArea: "400m²",
    architect: "Arq. Stephanie Macêdo",
    description:
      "Casa de alto padrão às margens do lago, com arquitetura que privilegia a vista através de grandes aberturas e varandas generosas em todos os pavimentos.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    gallery: [
      { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80", label: "Vista Frontal" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", label: "Sala de Estar" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80", label: "Cozinha Gourmet" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80", label: "Suíte Master" },
      { src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80", label: "Área Externa" },
    ],
  },
  {
    id: 8,
    slug: "cafe-minimalista",
    title: "Café Minimalista",
    category: "Comercial",
    area: "85m²",
    location: "Vila Hortência — Sorocaba/SP",
    lot: "—",
    builtArea: "85m²",
    architect: "Arq. Stephanie Macêdo",
    description:
      "Cafeteria de estilo minimalista com design autoral, onde cada elemento foi pensado para criar uma experiência sensorial completa ao cliente.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80",
    gallery: [
      { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80", label: "Salão Principal" },
      { src: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=1200&q=80", label: "Balcão" },
      { src: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=1200&q=80", label: "Área Externa" },
      { src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1200&q=80", label: "Detalhe Interior" },
    ],
  },
];

export const PROJECT_CATEGORIES = [
  "Todos",
  "Residencial",
  "Comercial",
  "Interiores",
  "Corporativo",
] as const;

export const SERVICES = [
  {
    number: "01",
    title: "Projeto Arquitetônico",
    description:
      "Desenvolvimento completo de projetos residenciais e comerciais, do estudo preliminar ao executivo.",
  },
  {
    number: "02",
    title: "Design de Interiores",
    description:
      "Criação de ambientes que unem estética e funcionalidade, com seleção de materiais, mobiliário e iluminação.",
  },
  {
    number: "03",
    title: "Acompanhamento de Obra",
    description:
      "Supervisão técnica em todas as etapas da construção, garantindo fidelidade ao projeto e qualidade na execução.",
  },
  {
    number: "04",
    title: "Consultoria e Reforma",
    description:
      "Orientação especializada para reformas e adequações, otimizando espaços e valorizando o imóvel.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: 1,
    title: "Briefing",
    description: "Entendemos suas necessidades, desejos e estilo de vida",
    icon: "MessageSquare" as const,
  },
  {
    number: 2,
    title: "Conceito",
    description: "Desenvolvemos o conceito criativo e a identidade do projeto",
    icon: "Lightbulb" as const,
  },
  {
    number: 3,
    title: "Projeto",
    description: "Elaboramos plantas, 3D e detalhamentos técnicos",
    icon: "PenTool" as const,
  },
  {
    number: 4,
    title: "Execução",
    description: "Acompanhamos cada etapa com rigor técnico",
    icon: "Hammer" as const,
  },
  {
    number: 5,
    title: "Entrega",
    description: "Finalizamos cada detalhe para entregar o espaço dos seus sonhos",
    icon: "Home" as const,
  },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    text: "A Stephanie entendeu perfeitamente o que queríamos. Nossa casa ficou além do que imaginávamos.",
    author: "Maria C.",
    project: "Projeto Residencial",
  },
  {
    id: 2,
    text: "Profissionalismo e sensibilidade em cada detalhe. O resultado superou todas as expectativas.",
    author: "Ricardo M.",
    project: "Reforma Comercial",
  },
  {
    id: 3,
    text: "Do primeiro encontro à entrega, uma experiência impecável. Recomendo de olhos fechados.",
    author: "Ana L.",
    project: "Design de Interiores",
  },
] as const;

export const STATS = [
  { value: 50, suffix: "+", label: "Projetos Entregues" },
  { value: 8, suffix: "+", label: "Anos de Experiência" },
  { value: 100, suffix: "%", label: "Dedicação ao Cliente" },
] as const;

export const CONTACT_INFO = {
  location: "Edifício Santa Maria Offices — Rua Newton Prado, 449 - sala 801",
  email: "projetos@stephanie.arq.br",
  whatsapp: "+55 15 99718-8656",
  whatsappLink: "https://wa.me/5515997188656",
  instagram: {
    handle: "@stemacedoarquitetura",
    url: "https://www.instagram.com/stemacedoarquitetura",
  },
  facebook: {
    handle: "/arq.stemacedo",
    url: "https://www.facebook.com/arq.stemacedo/",
  },
  hours: "Segunda a Sexta, 9h às 18h",
  cnpj: "49.956.284/0001-83",
} as const;
