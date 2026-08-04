import type {
  CareerStat,
  ContactDetails,
  Education,
  Experience,
  LocalizedText,
  NavigationItem,
  Profile,
  Project,
  Service,
  SkillGroup,
} from "../types/portfolio";

const localized = (en: string, id: string): LocalizedText => ({ en, id });

export const NAVIGATION: readonly NavigationItem[] = [
  {
    number: "01",
    label: localized("About", "Tentang"),
    href: "#about",
    icon: "about",
  },
  {
    number: "02",
    label: localized("Resume", "Karier"),
    href: "#resume",
    icon: "resume",
  },
  {
    number: "03",
    label: localized("Skills", "Keahlian"),
    href: "#skills",
    icon: "skills",
  },
  {
    number: "04",
    label: localized("Projects", "Proyek"),
    href: "#projects",
    icon: "work",
  },
  {
    number: "05",
    label: localized("Contact", "Kontak"),
    href: "#contact",
    icon: "contact",
  },
];

export const PROFILE: Profile = {
  name: "Mochamad Riza Syarif",
  nameLines: ["Mochamad Riza", "Syarif"],
  role: localized("Frontend Engineer", "Frontend Engineer"),
  availability: localized(
    "Available for opportunities",
    "Terbuka untuk peluang baru",
  ),
  location: localized("South Tangerang", "Tangerang Selatan"),
  timezone: "UTC+7",
  photo: "/profile-photo.jpeg",
  photoWebpSrcSet:
    "/profile-photo-480.webp 480w, /profile-photo-800.webp 800w, /profile-photo-1066.webp 1066w",
  photoSizes:
    "(max-width: 620px) calc(100vw - 16px), (max-width: 900px) 42vw, 360px",
  cv: "/Mochamad-Riza-Syarif-CV.pdf",
  atsCv: "/Mochamad-Riza-Syarif-CV-ATS.pdf",
  linkedIn: "https://www.linkedin.com/in/mochamad-riza-syarif/",
  github: "https://github.com/rizasyarif10",
};

export const CONTACT: ContactDetails = {
  email: "rizasyarif20@gmail.com",
  phoneDisplay: "+62 896-0440-6612",
  whatsappHref: "https://wa.me/6289604406612",
};

export const CAREER_STATS: readonly CareerStat[] = [
  {
    value: "7+",
    lines: [
      localized("Years of", "Tahun"),
      localized("experience", "pengalaman"),
    ],
  },
  {
    value: "10+",
    lines: [
      localized("Products &", "Produk &"),
      localized("client projects", "proyek klien"),
    ],
  },
  {
    value: "01",
    lines: [
      localized("Goal: make it", "Tujuan: dibuat"),
      localized("useful & clear", "berguna & jelas"),
    ],
  },
];

export const SERVICES: readonly Service[] = [
  {
    icon: "code",
    title: localized("Frontend Engineering", "Rekayasa Frontend"),
    description: localized(
      "Responsive React applications with maintainable architecture and clear interactions.",
      "Aplikasi React responsif dengan arsitektur yang mudah dirawat dan interaksi yang jelas.",
    ),
  },
  {
    icon: "layers",
    title: localized("Maps & Data Interfaces", "Antarmuka Peta & Data"),
    description: localized(
      "Dashboards, MapLibre experiences, and visual tools for complex geospatial data.",
      "Dashboard, pengalaman MapLibre, dan perangkat visual untuk data geospasial yang kompleks.",
    ),
  },
  {
    icon: "quality",
    title: localized("Quality & Integration", "Kualitas & Integrasi"),
    description: localized(
      "REST API integration, predictable data states, unit testing, and pragmatic refactoring.",
      "Integrasi REST API, state data yang terprediksi, unit testing, dan refactoring yang pragmatis.",
    ),
  },
];

export const PROFESSIONAL_PROJECTS: readonly Project[] = [
  {
    title: "LOKASI Intelligence",
    type: localized("Core Product", "Produk Utama"),
    role: localized("Frontend Engineering", "Frontend Engineering"),
    description: localized(
      "A location intelligence product for running spatial analyses, combining multiple datasets, and reviewing map-based insights and reports.",
      "Produk location intelligence untuk menjalankan analisis spasial, menggabungkan berbagai dataset, serta meninjau insight dan laporan berbasis peta.",
    ),
    stack: [
      "React",
      "Vitest",
      "Redux Persist",
      "LocalForage",
      "Vite",
      "TanStack Query",
      "MSW",
      "MapLibre GL",
    ],
    previews: [
      {
        kind: "image",
        label: localized("Login", "Login"),
        image: "/projects/lokasi-intelligence/login.webp",
      },
      {
        kind: "image",
        label: localized("Analysis setup", "Pengaturan analisis"),
        image: "/projects/lokasi-intelligence/analysis-setup-sanitized.webp",
      },
      {
        kind: "image",
        label: localized("Analysis summary", "Ringkasan analisis"),
        image: "/projects/lokasi-intelligence/analysis-summary-sanitized.webp",
      },
      {
        kind: "image",
        label: localized("Analysis result", "Hasil analisis"),
        image: "/projects/lokasi-intelligence/analysis-result-sanitized.webp",
      },
    ],
  },
  {
    title: "LOKASI Targetin",
    type: localized("Product", "Produk"),
    role: localized("Frontend Engineering", "Frontend Engineering"),
    description: localized(
      "A configurable web application for managing sites, forms, master data, users, and operational dashboards.",
      "Aplikasi web yang dapat dikonfigurasi untuk mengelola site, form, master data, pengguna, dan dashboard operasional.",
    ),
    stack: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Vite",
      "Vitest",
      "MSW",
      "MapLibre GL",
    ],
    previews: [
      {
        kind: "image",
        label: localized("Login", "Login"),
        image: "/projects/lokasi-targetin/login.webp",
      },
      {
        kind: "image",
        label: localized("Dashboard", "Dashboard"),
        image: "/projects/lokasi-targetin/dashboard-sanitized.webp",
      },
      {
        kind: "image",
        label: localized("Master data", "Master data"),
        image: "/projects/lokasi-targetin/master-data-sanitized.webp",
      },
      {
        kind: "image",
        label: localized("Data detail", "Detail data"),
        image: "/projects/lokasi-targetin/data-detail-sanitized.webp",
      },
    ],
  },
  {
    title: "LOKASI Datamark",
    type: localized("Internal Project", "Proyek Internal"),
    role: localized("Frontend Engineering", "Frontend Engineering"),
    description: localized(
      "An internal initiative at Bhumi Varta Technology that leverages computer vision to automate data collection and labeling, helping reduce data maintenance costs while enabling faster, more frequent, and scalable data updates.",
      "Inisiatif internal Bhumi Varta Technology yang memanfaatkan computer vision untuk mengotomatiskan pengumpulan dan pelabelan data, membantu mengurangi biaya pemeliharaan sekaligus memungkinkan pembaruan data yang lebih cepat, lebih sering, dan scalable.",
    ),
    stack: [
      "Next.js",
      "Jest",
      "TypeScript",
      "Drizzle ORM",
      "PostgreSQL",
      "Tailwind CSS",
      "Zustand",
    ],
    previews: [
      {
        kind: "image",
        label: localized("Login", "Login"),
        image: "/projects/lokasi-datamark/login-sanitized.webp",
      },
      {
        kind: "image",
        label: localized("Data collection", "Pengumpulan data"),
        image: "/projects/lokasi-datamark/data-collection.webp",
      },
      {
        kind: "image",
        label: localized("POI labeling", "Pelabelan POI"),
        image: "/projects/lokasi-datamark/poi-labeling-sanitized.webp",
      },
      {
        kind: "image",
        label: localized("Object labeling", "Pelabelan objek"),
        image: "/projects/lokasi-datamark/object-labeling-sanitized.webp",
      },
    ],
  },
  {
    title: "CELIA",
    type: localized(
      "Client Application · Telkomsel",
      "Aplikasi Klien · Telkomsel",
    ),
    role: localized("Frontend Engineering", "Frontend Engineering"),
    description: localized(
      "A location intelligence assistant for Telkomsel that enables users to create analyses, explore demographic and location datasets, and review map-based results.",
      "Aplikasi location intelligence untuk Telkomsel yang memungkinkan pengguna membuat analisis, mengeksplorasi dataset demografi dan lokasi, serta meninjau hasil berbasis peta.",
    ),
    stack: [
      "Next.js",
      "TypeScript",
      "MapLibre GL",
      "H3",
      "Jest",
      "Tailwind CSS",
    ],
    previews: [
      {
        kind: "image",
        label: localized("Login", "Login"),
        image: "/projects/celia/login-sanitized.webp",
      },
      {
        kind: "image",
        label: localized("Dashboard", "Dashboard"),
        image: "/projects/celia/dashboard-sanitized.webp",
      },
      {
        kind: "image",
        label: localized("Data explorer", "Data explorer"),
        image: "/projects/celia/data-explorer-sanitized.webp",
      },
      {
        kind: "image",
        label: localized("Analysis results", "Hasil analisis"),
        image: "/projects/celia/analysis-results-sanitized.webp",
      },
    ],
  },
  {
    title: "LOKASI Intelligence — FIF Group",
    type: localized("Client Customization", "Kustomisasi Klien"),
    role: localized("Frontend Engineering", "Frontend Engineering"),
    description: localized(
      "A customized LOKASI Intelligence implementation for FIF Group supporting business profiling workflows, configurable analysis parameters, spatial results, and reporting dashboards.",
      "Implementasi khusus LOKASI Intelligence untuk FIF Group yang mendukung workflow business profiling, konfigurasi parameter analisis, hasil spasial, dan dashboard pelaporan.",
    ),
    stack: [
      "jQuery",
      "EJS",
      "HTML5",
      "CSS3",
      "Node.js",
      "Express.js",
      "JavaScript",
      "Leaflet",
      "Chart.js",
    ],
    previews: [
      {
        kind: "image",
        label: localized("Login", "Login"),
        image: "/projects/lokasi-fif/login.webp",
      },
      {
        kind: "image",
        label: localized("Home", "Beranda"),
        image: "/projects/lokasi-fif/home-sanitized.webp",
      },
      {
        kind: "image",
        label: localized("Select business area", "Pilih area bisnis"),
        image: "/projects/lokasi-fif/select-business-area-sanitized.webp",
      },
      {
        kind: "image",
        label: localized("Load business area", "Muat area bisnis"),
        image: "/projects/lokasi-fif/load-business-area-sanitized.webp",
      },
      {
        kind: "image",
        label: localized("POI parameters", "Parameter POI"),
        image: "/projects/lokasi-fif/poi-parameters-sanitized.webp",
      },
      {
        kind: "image",
        label: localized("Parameter setup", "Pengaturan parameter"),
        image: "/projects/lokasi-fif/parameter-setup-sanitized.webp",
      },
      {
        kind: "image",
        label: localized("Additional parameters", "Parameter tambahan"),
        image: "/projects/lokasi-fif/additional-parameters-sanitized.webp",
      },
      {
        kind: "image",
        label: localized("Results map", "Peta hasil"),
        image: "/projects/lokasi-fif/results-map-sanitized.webp",
      },
      {
        kind: "image",
        label: localized("Dashboard report", "Laporan dashboard"),
        image: "/projects/lokasi-fif/dashboard-report-sanitized.webp",
      },
    ],
  },
  {
    title: "LOKASI Intelligence — HSO",
    type: localized(
      "White-label Client Application",
      "Aplikasi White-label Klien",
    ),
    role: localized("Frontend Engineering", "Frontend Engineering"),
    description: localized(
      "A white-label LOKASI Intelligence implementation for Honda Sales Operation (Astra Motor), adapting the platform to the client's brand identity and supporting grid, site, and marketing profiling workflows with map-based analysis results.",
      "Implementasi white-label LOKASI Intelligence untuk Honda Sales Operation (Astra Motor), menyesuaikan identitas platform dengan brand klien serta mendukung workflow grid, site, dan marketing profiling dengan hasil analisis berbasis peta.",
    ),
    stack: [
      "jQuery",
      "EJS",
      "HTML5",
      "CSS3",
      "Node.js",
      "Express.js",
      "JavaScript",
      "Leaflet",
      "Chart.js",
    ],
    previews: [
      {
        kind: "image",
        label: localized("Login", "Login"),
        image: "/projects/lokasi-hso/login.webp",
      },
      {
        kind: "image",
        label: localized("Home", "Beranda"),
        image: "/projects/lokasi-hso/home-sanitized.webp",
      },
      {
        kind: "image",
        label: localized("Analysis result", "Hasil analisis"),
        image: "/projects/lokasi-hso/analysis-result-sanitized.webp",
      },
    ],
  },
];

export const INDEPENDENT_PROJECTS: readonly Project[] = [
  {
    title: "Pinternakan",
    type: localized("Web Application", "Aplikasi Web"),
    role: localized("Frontend Development", "Pengembangan Frontend"),
    description: localized(
      "Livestock monitoring and operational data management in one web application.",
      "Pemantauan ternak dan pengelolaan data operasional dalam satu aplikasi web.",
    ),
    stack: ["Next.js", "Tailwind", "Redux Toolkit"],
    previews: [
      {
        kind: "image",
        label: localized("Login", "Login"),
        image: "/projects/pinternakan/login.webp",
      },
    ],
  },
  {
    title: "Integra Design Consultant",
    type: localized("Company Profile", "Profil Perusahaan"),
    role: localized("Frontend Development", "Pengembangan Frontend"),
    description: localized(
      "A responsive company profile that presents consultancy work with a clean visual rhythm.",
      "Profil perusahaan responsif yang menampilkan karya konsultansi dengan susunan visual yang bersih.",
    ),
    stack: ["React", "Vite", "TypeScript"],
    previews: [
      {
        kind: "image",
        label: localized("Home", "Beranda"),
        image: "/projects/integra/home.webp",
      },
      {
        kind: "image",
        label: localized("Projects", "Proyek"),
        image: "/projects/integra/projects.webp",
      },
      {
        kind: "image",
        label: localized("News", "Berita"),
        image: "/projects/integra/news.webp",
      },
    ],
  },
];

export const EXPERIENCES: readonly Experience[] = [
  {
    period: localized("2018 — Present", "2018 — Sekarang"),
    company: "PT Bhumi Varta Technology",
    role: localized("Frontend Engineer", "Frontend Engineer"),
    description: localized(
      "Developing responsive products, dashboards, visualizations, and interactive maps for internal and client applications.",
      "Mengembangkan produk responsif, dashboard, visualisasi, dan peta interaktif untuk aplikasi internal maupun klien.",
    ),
    responsibilities: [
      localized(
        "Develop and maintain responsive web applications using React, Next.js, TypeScript, and JavaScript.",
        "Mengembangkan dan merawat aplikasi web responsif menggunakan React, Next.js, TypeScript, dan JavaScript.",
      ),
      localized(
        "Contribute to frontend architecture with Redux Toolkit, Zustand, and TanStack Query.",
        "Berkontribusi pada arsitektur frontend dengan Redux Toolkit, Zustand, dan TanStack Query.",
      ),
      localized(
        "Build dashboards, data visualizations, and interactive mapping features with MapLibre GL and Leaflet.",
        "Membangun dashboard, visualisasi data, dan fitur peta interaktif dengan MapLibre GL dan Leaflet.",
      ),
      localized(
        "Integrate REST APIs, create unit tests, debug and refactor code, and collaborate with cross-functional Agile teams.",
        "Mengintegrasikan REST API, membuat unit test, melakukan debugging dan refactoring, serta berkolaborasi dengan tim lintas fungsi dalam Agile.",
      ),
    ],
    projectGroups: [
      {
        label: localized("Products", "Produk"),
        items: [{ name: "LOKASI Intelligence" }, { name: "LOKASI Targetin" }],
      },
      {
        label: localized("LOKASI Customizations", "Kustomisasi LOKASI"),
        items: [
          { name: "Esteh Indonesia" },
          { name: "FIF Group" },
          { name: "Honda Sales Operation" },
        ],
      },
      {
        label: localized("Other Applications", "Aplikasi Lainnya"),
        items: [
          {
            name: "LOKASI Datamark",
            detail: localized("Internal Project", "Proyek Internal"),
          },
          {
            name: "CELIA Location Intelligence",
            detail: localized("Telkomsel", "Telkomsel"),
          },
          {
            name: "Indonesia Bertutur",
            detail: localized(
              "Ministry of Education and Culture",
              "Kementerian Pendidikan dan Kebudayaan",
            ),
          },
        ],
      },
    ],
  },
  {
    period: localized("Jan — Oct 2018", "Jan — Okt 2018"),
    company: "PT Infomedia Solusi Humanika",
    role: localized("IT Support · NCC 119", "IT Support · NCC 119"),
    description: localized(
      "Built an emergency contact directory and supported reporting and infrastructure for the national 119 service.",
      "Membangun direktori kontak darurat serta mendukung pelaporan dan infrastruktur layanan nasional 119.",
    ),
    responsibilities: [
      localized(
        "Developed the SPGDT 119 emergency directory application for service agents.",
        "Mengembangkan aplikasi direktori darurat SPGDT 119 untuk agen layanan.",
      ),
      localized(
        "Prepared operational reports and monitored supporting systems for the national service.",
        "Menyiapkan laporan operasional dan memantau sistem pendukung layanan nasional.",
      ),
      localized(
        "Handled troubleshooting and server maintenance to support daily operations.",
        "Menangani troubleshooting dan pemeliharaan server untuk mendukung operasional harian.",
      ),
    ],
  },
  {
    period: localized("Feb — Apr 2017", "Feb — Apr 2017"),
    company: "PT Mardani Technology",
    role: localized("Frontend Developer", "Frontend Developer"),
    description: localized(
      "Developed interface components for a Java-based desktop application from implementation through delivery.",
      "Mengembangkan komponen antarmuka aplikasi desktop berbasis Java dari implementasi hingga delivery.",
    ),
    responsibilities: [
      localized(
        "Developed and integrated interface components for a Java-based desktop application.",
        "Mengembangkan dan mengintegrasikan komponen antarmuka untuk aplikasi desktop berbasis Java.",
      ),
      localized(
        "Collaborated through implementation, testing, and delivery.",
        "Berkolaborasi selama proses implementasi, pengujian, dan delivery.",
      ),
    ],
  },
];

export const EDUCATION: Education = {
  period: "2012 — 2017",
  institution: "UPN “Veteran” Jakarta",
  degree: localized(
    "Bachelor of Informatics Engineering · GPA 3.04 / 4.00",
    "Sarjana Teknik Informatika · IPK 3.04 / 4.00",
  ),
};

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    label: localized("Frontend Development", "Pengembangan Frontend"),
    items: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Vite",
      "jQuery",
      "EJS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    label: localized("State Management & UI", "Manajemen State & UI"),
    items: [
      "Redux Toolkit",
      "Redux Persist",
      "Zustand",
      "TanStack Query",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Ant Design",
      "Radix UI",
    ],
  },
  {
    label: localized("Maps & Geospatial", "Peta & Geospasial"),
    items: [
      "MapLibre GL",
      "Leaflet.js",
      "GeoJSON",
      "H3.js",
    ],
  },
  {
    label: localized("Backend & Database", "Backend & Database"),
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "PostgreSQL",
      "MySQL/MariaDB",
      "Drizzle ORM",
    ],
  },
  {
    label: localized("Testing & Code Quality", "Testing & Kualitas Kode"),
    items: [
      "Jest",
      "Vitest",
      "MSW",
      "ESLint",
      "SonarQube",
    ],
  },
  {
    label: localized(
      "Development & Monitoring Tools",
      "Tools Pengembangan & Monitoring",
    ),
    items: [
      "Git",
      "npm",
      "New Relic",
      "Datadog",
    ],
  },
];

export const TEXT = {
  about: {
    greeting: localized("Hello, I’m", "Halo, saya"),
    process: localized(
      "Design · Build · Improve",
      "Rancang · Bangun · Tingkatkan",
    ),
    headlineStart: localized(
      "I build responsive web applications",
      "Saya membangun aplikasi web responsif",
    ),
    headlineEmphasis: localized(
      "that simplify complex workflows and data.",
      "yang menyederhanakan alur kerja dan data kompleks.",
    ),
    headlineEnd: localized("", ""),
    summary: localized(
      "Frontend Engineer with 7+ years of experience building maintainable web applications, dashboards, data visualizations, and interactive interfaces for real operational needs.",
      "Frontend Engineer dengan pengalaman 7+ tahun membangun aplikasi web yang mudah dirawat, dashboard, visualisasi data, dan antarmuka interaktif untuk kebutuhan operasional nyata.",
    ),
    scroll: localized("Scroll to explore", "Scroll untuk menjelajah"),
    exploreWork: localized(
      "Explore independent projects",
      "Jelajahi proyek independen",
    ),
    profileIndex: localized("Professional Overview", "Ringkasan Profesional"),
    experienceLabel: localized("Experience", "Pengalaman"),
    yearsLabel: localized("years", "tahun"),
    focusLabel: localized("Current focus", "Fokus saat ini"),
    focusValue: localized(
      "Web Applications · Frontend Systems · Interactive Interfaces",
      "Aplikasi Web · Sistem Frontend · Antarmuka Interaktif",
    ),
    stackLabel: localized("Core stack", "Stack utama"),
    specialtyLabel: localized("Specialty", "Spesialisasi"),
    specialtyValue: localized(
      "Maps · Data Visualization",
      "Peta · Visualisasi Data",
    ),
  },
  services: {
    title: localized("How I Contribute", "Cara Saya Berkontribusi"),
    note: localized(
      "A focused mix of product thinking and frontend craft.",
      "Perpaduan fokus produk dan keahlian frontend.",
    ),
  },
  work: {
    title: localized("Project Showcase", "Sorotan Proyek"),
    note: localized(
      "A visual look at selected professional and independent projects.",
      "Tampilan visual proyek profesional dan independen pilihan.",
    ),
    professional: localized("Professional Projects", "Proyek Profesional"),
    independent: localized("Independent Projects", "Proyek Independen"),
    open: localized("Open", "Buka"),
    contribution: localized("Contribution", "Kontribusi"),
    preview: localized("Project preview", "Preview proyek"),
    placeholder: localized("Preview placeholder", "Placeholder preview"),
    previousProject: localized("Previous project", "Proyek sebelumnya"),
    nextProject: localized("Next project", "Proyek berikutnya"),
  },
  resume: {
    title: localized("Resume", "Perjalanan karier"),
    note: localized(
      "A career built by shipping, maintaining, and improving real products.",
      "Karier yang dibangun dengan merilis, merawat, dan meningkatkan produk nyata.",
    ),
    experience: localized("Experience", "Pengalaman"),
    selectedProjects: localized(
      "Products & Client Applications",
      "Produk & Aplikasi Klien",
    ),
    education: localized("Education", "Pendidikan"),
  },
  skills: {
    title: localized("Skills", "Keahlian"),
    note: localized(
      "The tools I use to turn requirements into reliable interfaces.",
      "Tools yang saya gunakan untuk mengubah kebutuhan menjadi antarmuka yang andal.",
    ),
    aiTitle: localized("AI-Assisted Workflow", "Alur Kerja Berbantuan AI"),
    aiDescription: localized(
      "Using AI to accelerate planning, implementation, debugging, and code review while keeping technical decisions and final validation engineer-led.",
      "Memanfaatkan AI untuk mempercepat perencanaan, implementasi, debugging, dan code review, dengan keputusan teknis serta validasi akhir tetap dikendalikan oleh engineer.",
    ),
    aiTools: localized("Tools", "Tools"),
    aiStages: [
      localized("Planning", "Perencanaan"),
      localized("Implementation", "Implementasi"),
      localized("Debugging", "Debugging"),
      localized("Code Review", "Code Review"),
    ],
  },
  contact: {
    title: localized("Get in Touch", "Hubungi Saya"),
    note: localized(
      "Open to frontend, product, and mapping collaborations.",
      "Terbuka untuk kolaborasi frontend, produk, dan pemetaan.",
    ),
    based: localized("Based in", "Berdomisili di"),
    remote: localized(
      "Available for remote collaboration across Indonesia and beyond.",
      "Tersedia untuk kolaborasi remote di seluruh Indonesia dan mancanegara.",
    ),
    email: localized("Email", "Email"),
    phone: localized("WhatsApp", "WhatsApp"),
    mapLoading: localized("Loading map…", "Memuat peta…"),
    mapPopup: localized(
      "Available for remote & hybrid work",
      "Tersedia untuk kerja remote & hybrid",
    ),
    layerSelector: localized("Map style", "Gaya peta"),
    resetMap: localized("Reset to marker", "Kembali ke marker"),
    streetLayer: localized("Street", "Jalan"),
    lightLayer: localized("Light Gray", "Abu Terang"),
    satelliteLayer: localized("Satellite", "Satelit"),
  },
  profile: {
    previewCv: localized("Preview CV", "Lihat CV"),
  },
  pdf: {
    preview: localized("Document preview", "Pratinjau dokumen"),
    close: localized("Close", "Tutup"),
    closePreview: localized("Close PDF preview", "Tutup pratinjau PDF"),
    downloadAts: localized("ATS CV", "CV ATS"),
    download: localized("Download PDF", "Unduh PDF"),
  },
  theme: {
    light: localized("Switch to light mode", "Gunakan mode terang"),
    dark: localized("Switch to dark mode", "Gunakan mode gelap"),
  },
} as const;
