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
    title: "Residência Vila Nova",
    category: "Residencial",
    area: "280m²",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
  },
  {
    id: 2,
    title: "Apartamento Jardins",
    category: "Interiores",
    area: "120m²",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
  },
  {
    id: 3,
    title: "Escritório Nexus",
    category: "Corporativo",
    area: "450m²",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  },
  {
    id: 4,
    title: "Casa Serena",
    category: "Residencial",
    area: "350m²",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  },
  {
    id: 5,
    title: "Loft Industrial",
    category: "Interiores",
    area: "90m²",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
  },
  {
    id: 6,
    title: "Clínica Essence",
    category: "Comercial",
    area: "200m²",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&q=80",
  },
  {
    id: 7,
    title: "Residência do Lago",
    category: "Residencial",
    area: "400m²",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
  },
  {
    id: 8,
    title: "Café Minimalista",
    category: "Comercial",
    area: "85m²",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80",
  },
] as const;

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
  location: "Sorocaba, SP — Brasil",
  email: "contato@stemacedoarquitetura.com",
  whatsapp: "+55 15 99999-9999",
  whatsappLink: "https://wa.me/5515999999999",
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
