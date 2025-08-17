"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  Code,
  Target,
  Eye,
  Info,
} from "lucide-react";

import Link from "next/link";

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const events = [
    {
      title: "GENESIS 25'",
      description: "Official Department Event • July 2025",
      img: "/genesis-event.jpg?height=400&width=600",
      alt: "VR Innovation Workshop",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    },
    {
      title: "BYTE 2.0 Class",
      description: "Official Department Event • June 2025",
      img: "/byte-class.jpg?height=400&width=600",
      alt: "VR Innovation Workshop",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    },
    // {
    //   title: "Workshop Name",
    //   description: "Official Department Event • June 2025",
    //   img: "/placeholder.svg?height=400&width=600",
    //   alt: "VR Innovation Workshop",
    //   content:
    //     "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi."
    // }
  ];

  const projects = [
    {
      title: "FHC Student Portal",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
      badges: [
        { label: "AI/ML", className: "bg-purple-100 text-purple-800" },
        { label: "Proposed", className: "bg-green-100 text-green-800" },
      ],
    },
    {
      title: "GENESIS Event Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
      badges: [
        { label: "Web Dev", className: "bg-purple-100 text-purple-800" },
        { label: "College Funded", className: "bg-blue-100 text-blue-800" },
      ],
    },
  ];
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
      image: "/Execom25/Ex/jude.jpg?height=400&width=300",
    },
  ];
  const membersByCategory = committeeMembers.reduce((acc, member) => {
    if (!acc[member.category]) {
      acc[member.category] = [];
    }
    acc[member.category].push(member);
    return acc;
  }, {} as Record<string, CommitteeMember[]>);
  // const committee = [
  //   {
  //     initials: "P",
  //     role: "President",
  //     subtitle: "Leadership & Strategy",
  //     description: "Leading the club's vision and strategic initiatives",
  //     bg: "from-purple-600 to-purple-800",
  //   },
  //   {
  //     initials: "VP",
  //     role: "Vice President",
  //     subtitle: "Operations & Coordination",
  //     description: "Managing day-to-day operations and member coordination",
  //     bg: "from-purple-600 to-purple-800",
  //   },
  //   {
  //     initials: "S",
  //     role: "Secretary",
  //     subtitle: "Documentation & Communication",
  //     description: "Maintaining records and facilitating communication",
  //     bg: "from-purple-600 to-purple-800",
  //   },
  //   {
  //     initials: "FA",
  //     role: "Faculty Advisor",
  //     subtitle: "Academic Guidance & Oversight",
  //     description: "Department of Computer Science, FISAT",
  //     bg: "from-purple-700 to-purple-900",
  //     border: "border-2 border-purple-200", // optional extra border
  //   },
  // ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-purple-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FHC</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                FISAT HORIZON
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                About
              </a>
              <a
                href="#events"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Events
              </a>
              <a
                href="#projects"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Projects
              </a>
              <a
                href="#team"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Team
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Contact
              </a>
            </div>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-menu"
                  >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 pb-6 px-4 md:hidden">
          <div className="flex flex-col space-y-4">
            <a
              href="#about"
              className="text-gray-800 hover:text-purple-600 transition-colors py-3 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#events"
              className="text-gray-800 hover:text-purple-600 transition-colors py-3 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </a>
            <a
              href="#projects"
              className="text-gray-800 hover:text-purple-600 transition-colors py-3 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#team"
              className="text-gray-800 hover:text-purple-600 transition-colors py-3 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-purple-600 transition-colors py-3 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        className="h-[70vh] min-h-[600px] relative bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage:
            // "linear-gradient(rgba(76, 29, 149, 0.75), rgba(76, 29, 149, 0.75)), url('/placeholder.svg?height=800&width=1600')",
            "linear-gradient(rgba(76, 29, 149, 0.75), rgba(76, 29, 149, 0.75)), url('/Execom.jpg?height=800&width=1600')",
        }}
      >
        <div className="container mx-auto px-6 md:px-4 text-center">
          <div className="max-w-4xl mx-auto relative z-10 ">
            <Badge className="mb-4 md:mb-6 bg-white/90 text-purple-800 hover:bg-white border border-purple-200 text-xs sm:text-sm">
              Official College Club • Computer Science Department
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
              FISAT <span className="text-purple-200">HORIZON</span> CLUB
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed drop-shadow-md px-4 md:px-0">
              The official technology and innovation club of FISAT, 
              pioneering the future through student-driven innovation, 
              project-based learning, and collaborative mentorship.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-purple-50 font-semibold px-6 sm:px-8 py-2 sm:py-3 shadow-lg text-sm sm:text-base"
              >
                <a href="#about">Discover More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Official Club Status */}
      <section className="py-8 bg-purple-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-white">
            <div className="flex items-center space-x-2">
              <Badge className="bg-white/20 text-white border-white/30">
                OFFICIAL
              </Badge>
              <span className="font-medium">Recognized College Club</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <span className="font-medium">Established 2024</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <span className="font-medium">FISAT Engineering College</span>
            </div>
          </div>
        </div>
      </section>

      {/* Club Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  50+
                </div>
                <p className="text-gray-600">Active Members</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  12
                </div>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">8</div>
                <p className="text-gray-600">Events Organized</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">3</div>
                <p className="text-gray-600">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Info className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
            </div>
            <Card className="border-purple-100">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  FISAT HORIZON CLUB is the official technology and innovation club of FISAT Engineering College, 
                  initiated by IEDC FISAT in collaboration with the Department of Computer Science. 
                  As a recognized student-driven organization, we are dedicated to fostering creativity and technical 
                  excellence through project-based learning, mentorship, and collaboration. With access to academic guidance
                   and industry-relevant resources, our members are empowered to explore emerging technologies and transform 
                   ideas into impactful innovations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <div id="mission">
              <Card className="h-full border-purple-100">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    To foster a dynamic learning environment where students can
                    explore and master the latest advancements in technology.
                    Through hands-on projects, workshops, and collaborative
                    challenges, we empower our members to create meaningful
                    impact in the field.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Vision */}
            <div id="vision">
              <Card className="h-full border-purple-100">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Eye className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    To be a leading technology development club recognized for
                    advancing knowledge and skills in computer science, creating
                    a community of tech enthusiasts who drive technological
                    progress and make a positive impact on the industry.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Major Events Section */}
      <section id="events" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Calendar className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Major Events</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <Card
                  key={index}
                  className="border-purple-100 hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={event.img}
                      alt={event.alt}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-purple-600">
                      {event.title}
                    </CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{event.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Code className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Our Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="border-purple-100 hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="text-purple-600">
                      {project.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.badges.map((badge, i) => (
                        <Badge key={i} className={`w-fit ${badge.className}`}>
                          {badge.label}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Executive Committee Section */}
      <section id="team" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Users className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">
                Execom
              </h2>
              <Badge className="ml-4 bg-purple-100 text-purple-800">
                2025-26 Academic Year
              </Badge>
            </div>
            {Object.entries(membersByCategory).map(([category, members]) => (
              <div key={category} className="mb-8 md:mb-12">
                {/* <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6 text-center">
                          {category}
                        </h2> */}

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
                <div className="mb-8 mt-8 flex justify-center items-center">
                      <Link href="/execom25">
                        <Button className="hover:bg-purple-50 text-purple-900 border-s-purple-500 bg-purple-300/30 ">
                          View Full Execom →
                        </Button>
                      </Link>
                    </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-br from-purple-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Mail className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-purple-100">
                <CardHeader>
                  <CardTitle className="text-purple-600">
                    Get in Touch
                  </CardTitle>
                  <CardDescription>
                    Official contact information for inquiries
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">
                      fisathorizon@fisat.ac.in
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">+91 XXX XXX XXXX</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">
                      FISAT, Angamaly, Kerala
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-100">
                <CardHeader>
                  <CardTitle className="text-purple-600">
                    Join Our Community
                  </CardTitle>
                  <CardDescription>
                    Be part of the innovation journey
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6">
                    Whether you're interested in VR development, innovative
                    design, or just passionate about technology, FISAT HORIZON
                    welcomes you to join our growing community of tech
                    enthusiasts.
                  </p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Apply for Membership
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FHC</span>
              </div>
              <span className="text-xl font-bold">FISAT HORIZON</span>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} FISAT HORIZON CLUB. All rights
                reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                An official student organization of Federal Institute of Science
                And Technology
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
