"use client";

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
interface CommitteeMember {
  id: string;
  name: string;
  title: string;
  category: string;
  image: string;
}

const committeeMembers: CommitteeMember[] = [
  // CORE TEAM
  {
    id: "1",
    name: "Abhijay Prakash",
    title: "Chair",
    category: "Core Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "2",
    name: "Devananda Devakumar",
    title: "Vice Chair",
    category: "Core Team",
    image: "/Execom25/Ex/devananda.jpg?height=400&width=300",
  },
  {
    id: "3",
    name: "Jude Abi",
    title: "Executive Lead",
    category: "Core Team",
    image: "/Execom25/Ex/devananda.jpg?height=400&width=300",
  },
  {
    id: "4",
    name: "Ann Maria Tomichan",
    title: "Operations Lead",
    category: "Core Team",
    image: "/Execom25/Ex/thomi.jpg?height=400&width=300",
  },

  {
    id: "5",
    name: "Daniel Geo",
    title: "Treasurer",
    category: "Core Team",
    image: "/Execom25/Ex/daniel.jpg?height=400&width=300",
  },
  {
    id: "6",
    name: "Jeevan Biju Korah",
    title: "Development Lead",
    category: "Core Team",
    image: "/Execom25/Ex/jeevan.png?height=400&width=300",
  },
  {
    id: "7",
    name: "Rachel Elsa",
    title: "Secretary",
    category: "Core Team",
    image: "/Execom25/Ex/rachel.jpg?height=400&width=300",
  },
  {
    id: "8",
    name: "Anusha",
    title: "Executive Coordinator",
    category: "Core Team",
    image: "/Execom25/Ex/anusha.jpg?height=400&width=300",
  },

  // EVENT TEAM
  {
    id: "9",
    name: "Ann Maria Shine",
    title: "Lead",
    category: "Event Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "10",
    name: "Maria Ann",
    title: "Co-Lead",
    category: "Event Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "11",
    name: "Pooja M V",
    title: "",
    category: "Event Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "12",
    name: "Unnimaya M",
    title: "",
    category: "Event Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "13",
    name: "Nithin V Devan",
    title: "",
    category: "Event Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "14",
    name: "Angeleena Ann",
    title: "",
    category: "Event Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },

  // PROJECT TEAM
  {
    id: "15",
    name: "Jeevan Biju Korah",
    title: "Lead",
    category: "Project Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "16",
    name: "Abhishek Murali",
    title: "Co-Lead",
    category: "Project Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "17",
    name: "Krishna S",
    title: "",
    category: "Project Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "18",
    name: "Joyal Jinny",
    title: "",
    category: "Project Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "19",
    name: "Joyal Johnson",
    title: "",
    category: "Project Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "20",
    name: "Ananya",
    title: "",
    category: "Project Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },

  // WOMEN IN FHC
  {
    id: "21",
    name: "Sanjana",
    title: "Lead",
    category: "Women In FHC",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "22",
    name: "Thejasree",
    title: "Co-Lead",
    category: "Women In FHC",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "23",
    name: "Nathania",
    title: "Coordinator",
    category: "Women In FHC",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "24",
    name: "Neha Nishad",
    title: "",
    category: "Women In FHC",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },

  // DOC AND CONTENT
  {
    id: "25",
    name: "Devananda S",
    title: "Lead",
    category: "Doc And Content",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "26",
    name: "Annlia Lixon",
    title: "Co-Lead",
    category: "Doc And Content",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "27",
    name: "Gauri M",
    title: "",
    category: "Doc And Content",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "28",
    name: "Aiswarya",
    title: "",
    category: "Doc And Content",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },

  // DESIGN TEAM
  {
    id: "29",
    name: "Nandana Nair",
    title: "Lead",
    category: "Design Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "30",
    name: "Devananda C U",
    title: "Lead",
    category: "Design Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "31",
    name: "Abishek G",
    title: "Co-Lead",
    category: "Design Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "32",
    name: "Adithya Krishna",
    title: "Associate Designer",
    category: "Design Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "33",
    name: "Vinny Vs",
    title: "",
    category: "Design Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "34",
    name: "Devasoorya Rajesh",
    title: "",
    category: "Design Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "35",
    name: "Mursila",
    title: "",
    category: "Design Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "36",
    name: "Aleena",
    title: "",
    category: "Design Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "37",
    name: "Angelina Johnson",
    title: "",
    category: "Design Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },

  // EC FORUM
  {
    id: "38",
    name: "Meenakshi",
    title: "",
    category: "EC Forum",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "39",
    name: "Jiya",
    title: "",
    category: "EC Forum",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "40",
    name: "K Disalfin",
    title: "",
    category: "EC Forum",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },

  // TECH TEAM
  {
    id: "41",
    name: "Benson Eldho",
    title: "Lead",
    category: "Tech Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "42",
    name: "Arts M J",
    title: "Co-Lead",
    category: "Tech Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "43",
    name: "Ashlin",
    title: "",
    category: "Tech Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "44",
    name: "Keerthana S",
    title: "",
    category: "Tech Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },

  // CREATIVE TEAM
  {
    id: "45",
    name: "Titus",
    title: "",
    category: "Creative Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "46",
    name: "Sanjay",
    title: "",
    category: "Creative Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "47",
    name: "Gokul Sunil",
    title: "",
    category: "Creative Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },

  // MEDIA TEAM
  {
    id: "48",
    name: "Samiksha Sreekumar",
    title: "Lead",
    category: "Media Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "49",
    name: "Krishnadev L",
    title: "Co-Lead",
    category: "Media Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "50",
    name: "Aman",
    title: "Co-Lead",
    category: "Media Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
  {
    id: "51",
    name: "Vishaal Aj",
    title: "",
    category: "Media Team",
    image: "/Execom25/Ex/abhijay.jpg?height=400&width=300",
  },
];

const membersByCategory = committeeMembers.reduce((acc, member) => {
  if (!acc[member.category]) {
    acc[member.category] = [];
  }
  acc[member.category].push(member);
  return acc;
}, {} as Record<string, CommitteeMember[]>);

export default function CommitteeShowcase() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-50 to-gray-100">
        
      {/* Tech Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Code-like floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        

        {/* Geometric shapes */}
        <div className="absolute top-32 right-1/4 w-16 h-16 border border-slate-300/10 transform rotate-45" />
        <div className="absolute bottom-32 left-1/4 w-12 h-12 border border-slate-300/10 rounded-full" />
        <div className="absolute top-1/2 left-10 w-8 h-8 bg-slate-300/5 transform rotate-45" />
        <div className="absolute top-1/3 right-16 w-6 h-6 bg-slate-300/5 rounded-full" />
      </div>

      <div className="container mx-auto px-4 py-6 md:py-8 relative z-10">
        {/* Header Section - Made more compact on mobile */}
        <div className="text-center mb-6 md:mb-8">
           
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            ExeCom 2025-26
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Meet our experienced leadership team dedicated to driving innovation and excellence in everything we do.
          </p>
          
        </div>
         <div className="mb-8">
            <Link href="/#team">
              <Button className="hover:bg-purple-50 text-purple-900 border-s-purple-500 bg-purple-300/30 ">
                ← Back to Home
              </Button>
            </Link>
          </div>
        

        {Object.entries(membersByCategory).map(([category, members]) => (
          <div key={category} className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6 text-center">
              {category}
            </h2>

            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4">
              {/* Mobile: Horizontal scroll container */}
              <div className="flex gap-3 overflow-x-auto pb-4 md:hidden scrollbar-hide">
                {members.map((member) => (
                  <Card
                    key={member.id}
                    className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-0 flex-shrink-0 w-48 h-64"
                  >
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/90 via-purple-500/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.15%22/%3E%3C/svg%3E')] opacity-30 mix-blend-overlay" />
                    <div className="absolute inset-0 p-3 flex flex-col justify-end text-white">
                      <div className="transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-lg font-bold mb-1 text-white">
                          {member.name}
                        </h3>
                        <p className="text-xs font-medium text-white/90">
                          {member.title}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Desktop: Grid layout */}
              <div className="hidden md:contents">
                {members.map((member) => (
                  <Card
                    key={member.id}
                    className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-0  h-80"
                  >
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/90 via-purple-500/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.15%22/%3E%3C/svg%3E')] opacity-30 mix-blend-overlay" />
                    <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                      <div className="transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold mb-1 text-white">
                          {member.name}
                        </h3>
                        <p className="text-sm font-medium text-white/90">
                          {member.title}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
