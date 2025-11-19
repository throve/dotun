// Project data structure
// You can add a showOnHome: false property to hide projects from home page

export const projects = [
  {
    id: 1,
    title: 'Byte - Peer to Peer Payment',
    category: 'fintech',
    description: 'Connecting everyone through payment Byte allow users to pay and receive money with phone number and tag.',
    showOnHome: true,
    link: '/',
    image: '/X-35.webp',
    status: 'Live. 2021',
  },
  {
    id: 2,
    title: 'Byte (Rebranded) - Split payment',
    category: 'fintech',
    description: 'Connecting everyone through payment Byte allow users to pay and receive money with phone number and tag.',
    showOnHome: true,
    link: '/',
    image: '/byte-2-homepage.webp',
    status: 'Live. 2022',
  },
  {
    id: 3,
    title: 'Littleseconds - AI Appointment Agent',
    category: 'ai',
    description: 'Connecting everyone through payment Byte allow users to pay and receive money with phone number and tag.',
    showOnHome: true,
    link: '/',
    image: '/littleseconds-showcase.webp',
    status: 'Live. 2025',
  },
  {
    id: 4,
    title: 'Caree - Adult care',
    category: 'health',
    description: 'Connecting everyone through payment Byte allow users to pay and receive money with phone number and tag.',
    showOnHome: true,
    link: '/',
    image: '/homepage-ite-2-3.webp',
    status: 'University project. 2022',
  },
  {
    id: 5,
    title: 'Littleseconds IOS app',
    category: 'prototypes',
    description: 'Connecting everyone through payment Byte allow users to pay and receive money with phone number and tag.',
    showOnHome: true,
    link: '/',
    image: '/image-34.webp',
    status: 'Prototype',
  },
  {
    id: 6,
    title: 'ZapmedX - Online pharmacy',
    category: 'health',
    description: 'Connecting everyone through payment Byte allow users to pay and receive money with phone number and tag.',
    showOnHome: true,
    link: '/',
    image: '/image-35.webp',
    status: 'Live. 2021',
  },
  {
    id: 7,
    title: 'PallyPay',
    category: 'prototypes',
    description: 'Connecting everyone through payment Byte allow users to pay and receive money with phone number and tag.',
    showOnHome: true,
    link: '/',
    image: '/image-36.webp',
    status: 'Prototype',
  },
  {
    id: 8,
    title: 'Byte - Add money',
    category: 'prototypes',
    description: 'Connecting everyone through payment Byte allow users to pay and receive money with phone number and tag.',
    showOnHome: true,
    link: '/',
    image: '/byte-3-wallet.webp',
    status: 'Prototype',
  },
]

// Helper function to get projects by category
export function getProjectsByCategory(category) {
  return projects.filter(project => project.category === category)
}

// Helper function to get projects for home page
export function getHomeProjects() {
  return projects.filter(project => project.showOnHome !== false)
}

