 import { FaSteam } from "react-icons/fa";
 import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";
 export const profile = {
    name: "Arni Jamaliyah",         // Changed from 'nama' to 'name'
    initials: "NI",
    role: "Teacher",
    tagline: "Lorem ipsum dolor sit amet",
    cvUrl: "https://drive.google.com/file/d/12WmrhK8BQBPsjvMqMMMqQyLIwULFiYva/view?usp=drive_link",                   // Changed from 'cvurl' to 'cvUrl'
    photo: "/Eraser_cat.webp",        
    stats: [
      {
        value: "3+", label: "Years of experience"
      },
      {
        value: "5+", label: "Mastered Programming languages"
      }
    ],
 focusArea: [
    {
      title: "Backend Architecture",
      description: "Designing RESTful APIs and decoupled systems."
    },
    {
      title: "IoT & Embedded Systems",
      description: "Circuit prototyping with microcontrollers like ESP32 and Arduino."
    }
  ],
    about: [
      "I am a curious enthusiast who is always eager to understand how things work",
      "Technology and linguistics are my main areas of interest. I enjoy experimenting with new ideas, exploring unconventional solutions, and learning through hands-on experience."
      
    ],  

  domains: [
    "Web Development",
    "Software Engineering",
    "Database Management",
    "RESTful API"
  ],

  
    
  };

  export const skills = [
    {
      title: "Education",
      description: "Designing and delivering both problem and project-based learning",
      items:[
        "Curriculum Design",
        "Classroom Management",
        "Facilitation"
      ]
    },
    {
      title: "Technology",
      description: "Deeply learning programming languages and tools",
      items:[
        "Database architecture",
        "PHP",
        "Laravel",
        "Vue",
        "React",
        "IoT"
      ]
    },
    {
      title: "Linguistic",
      description: "Actively learning and using several languages",
      items:[
        "Indonesian",
        "English",
        "Japanese",
        "Spanish",
      ]
    }

  ];

  export const projects = [
     {
    id: 1,
    title: "Detective SQL Game",
    description:
      "A simple interactive game where you play as a detective who tries to solve a mystery",
    category: "Miscellaneous",
    tags: ["SQL", "Game", "Education"],
    link: "https://github.com/Ram2thedani/quiz_detektif",
    image: "/public/detective.jpeg",
    color: "from-blue-500 to-cyan-400",
  },
  ];

export const socials = [
    {
    label: "Instagram",
    handle: "@arnij02",
    // URL Instagram ditulis TANPA tanda @
    url: "https://instagram.com/arnij02",
    icon: FaInstagram,
    color: "group-hover:bg-pink-600",
  },
  {
    label: "WhatsApp",
    handle: "0895364488863",
    // Format wa.me: kode negara 62 + nomor TANPA angka 0 di depan, TANPA tanda hubung
    // 081323664628 → 6281323664628
    url: "https://wa.me/62895364488863",
    icon: FaWhatsapp,
    color: "group-hover:bg-green-600",
  },
  {
    label: "GitHub",
    handle: "arnimarhas",
    url: "https://github.com/arnimarhas",
    icon: FaGithub,
    color: "group-hover:bg-slate-900",
  },
  {
    label: "Email",
    handle: "arnimarhas@gmail.com",
    // mailto: → membuka aplikasi email pengunjung dengan alamat tujuan terisi otomatis
    url: "mailto:arnimarhas@gmail.com",
    icon: FaEnvelope,
    color: "group-hover:bg-brand",
  },
  { 
  label: "Steam", 
  handle: "arnimarhas", 
  url: "https://steamcommunity.com/id/arnimarhas/", 
  icon: FaSteam, 
  color: "group-hover:bg-[#1b2838]" // Steam dark blue brand color
}
];