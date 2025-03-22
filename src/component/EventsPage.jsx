import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import EventDetail from './EventDetail';

// Sample event data
const sampleEvents = [
  {
    id: 1,
    title: "Annual Charity Walkathon 2023",
    category: "Featured",
    description: "Join us for our annual walkathon to raise funds for education programs. This family-friendly event welcomes participants of all ages and abilities.",
    shortDescription: "Join us for our annual walkathon to raise funds for education programs.",
    date: "October 15, 2023",
    time: "8:00 AM - 12:00 PM",
    location: "Bengaluru, Karnataka",
    imageUrl: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    participantsRequired: "20",
    registrationDeadline: "October 8, 2023",
    schedule: [
      {
        time: "8:00 AM",
        title: "Check-in & Registration",
        description: "Arrive at the meeting point for registration and to receive your participant kit."
      },
      {
        time: "8:30 AM",
        title: "Opening Ceremony",
        description: "Welcome speech and event instructions."
      },
      {
        time: "9:00 AM",
        title: "Walkathon Begins",
        description: "Start of the walkathon route through scenic paths."
      },
      {
        time: "11:00 AM",
        title: "Refreshments",
        description: "Water and snacks provided at the finish line."
      },
      {
        time: "11:30 AM",
        title: "Closing Ceremony",
        description: "Thank you speeches and acknowledgments."
      }
    ]
  },
  {
    id: 2,
    title: "Tech for All Hackathon",
    category: "Featured",
    description: "A 48-hour hackathon focused on developing innovative solutions for people with disabilities. Join us to code for a cause!",
    shortDescription: "A 48-hour hackathon focused on developing innovative solutions for people with disabilities.",
    date: "November 5-7, 2023",
    time: "Starts at 6:00 PM",
    location: "Bengaluru, Karnataka",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    participantsRequired: "28",
    registrationDeadline: "October 29, 2007",
    schedule: [
      {
        time: "6:00 PM",
        title: "Registration & Team Formation",
        description: "Check-in and meet potential teammates."
      },
      {
        time: "7:00 PM",
        title: "Opening Ceremony & Problem Statement",
        description: "Introduction to the hackathon challenges and rules."
      },
      {
        time: "8:00 PM",
        title: "Hacking Begins",
        description: "Start coding and developing solutions."
      },
      {
        time: "Next Day",
        title: "Mentorship Sessions",
        description: "Get guidance from industry experts."
      },
      {
        time: "Final Day",
        title: "Presentations & Judging",
        description: "Present your solutions to the judges."
      }
    ]
  },
  {
    id: 3,
    title: "Inclusive Arts Festival",
    category: "Arts & Culture",
    description: "A celebration of inclusive arts featuring performances and exhibitions by artists with and without disabilities.",
    shortDescription: "A celebration of inclusive arts featuring performances and exhibitions.",
    date: "December 10, 2023",
    time: "10:00 AM - 8:00 PM",
    location: "City Cultural Center",
    imageUrl: "https://images.unsplash.com/photo-1533557188897-ef2bc7257ba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    schedule: [
      {
        time: "10:00 AM",
        title: "Art Exhibition Opening",
        description: "View artworks from diverse artists."
      },
      {
        time: "12:00 PM",
        title: "Inclusive Dance Performance",
        description: "Watch dancers of all abilities perform together."
      },
      {
        time: "2:00 PM",
        title: "Panel Discussion",
        description: "Discussion on inclusivity in the arts."
      },
      {
        time: "4:00 PM",
        title: "Interactive Workshops",
        description: "Participate in accessible art workshops."
      },
      {
        time: "6:00 PM",
        title: "Evening Concert",
        description: "Musical performances to close the festival."
      }
    ]
  }
];

const EventCard = ({ event, onClick }) => {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <img 
          src={event.imageUrl} 
          alt={event.title}
          className="w-full h-64 object-cover transform transition-transform group-hover:scale-105 duration-300"
        />
        {event.category === "Featured" && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-xs text-yellow-900 px-2 py-1 rounded-md font-medium">
            Featured
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70"></div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
        <div className="mt-2 space-y-2">
          <div className="flex items-center text-gray-600 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{event.location}</span>
          </div>
          {event.participantsRequired && (
            <div className="flex items-center text-gray-600 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Participants required: {event.participantsRequired}</span>
            </div>
          )}
          {event.registrationDeadline && (
            <div className="flex items-center text-gray-600 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Registration deadline: {event.registrationDeadline}</span>
            </div>
          )}
        </div>
        <p className="mt-3 text-gray-600 text-sm">{event.shortDescription}</p>
      </div>
    </div>
  );
};

const EventsPage = ({ onBack }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const featuredEvents = sampleEvents.filter(event => event.category === "Featured");
  
  const filteredEvents = sampleEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || event.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setSelectedEvent(null);
    window.scrollTo(0, 0);
  };

  if (selectedEvent) {
    return <EventDetail event={selectedEvent} onBack={handleBackToList} />;
  }

  return (
    <div className="min-h-screen bg-rose-50">
      <div className="bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-center items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://samarthanamusa.org/wp-content/uploads/2023/07/samarthanam-trust-for-the-disabled-logo.jpg" 
              alt="Samarthanam Trust for the Disabled" 
              className="h-16 w-auto"
            />
          </Link>
        </div>
        <div className="container mx-auto px-4 flex justify-center items-center space-x-8 py-4">
          <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors">Home</Link>
          <Link to="/events" className="text-red-600 font-medium">Events</Link>
          <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors">About</Link>
          <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors">Contact</Link>
          <Link to="/" className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors">Donate</Link>
        </div>
      </div>
      
      <div className="pt-12 pb-24">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="py-2 px-4 bg-red-600 text-white inline-block rounded-full text-sm font-medium mb-4">
              Find Your Next Event
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Discover Amazing Events
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us at one of our upcoming events and help make a difference in the lives of those in need.
            </p>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-8"></div>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-16 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input 
                type="text" 
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600" 
                placeholder="Search events..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select 
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 bg-white"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Featured">Featured</option>
              <option value="Arts & Culture">Arts & Culture</option>
              <option value="Education">Education</option>
              <option value="Sports">Sports</option>
            </select>
          </div>

          {/* Featured Events Section */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <svg className="h-6 w-6 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 15.585l-7.07 3.715 1.35-7.865L.73 7.15l7.895-1.145L10 0l1.375 6.005 7.896 1.145-5.55 5.285 1.35 7.865L10 15.585z" clipRule="evenodd" />
                </svg>
                <h2 className="text-3xl font-serif font-bold text-gray-900">Featured Events</h2>
              </div>
              <Link to="/events" className="text-red-600 hover:text-red-800 flex items-center">
                View all 
                <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <p className="text-gray-600 mb-8">Don't miss these highly anticipated events</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredEvents.map(event => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  onClick={() => handleEventSelect(event)}
                />
              ))}
            </div>
          </div>

          {/* All Events Section */}
          {searchTerm || categoryFilter !== 'All' ? (
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Search Results</h2>
              {filteredEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredEvents.map(event => (
                    <EventCard 
                      key={event.id} 
                      event={event} 
                      onClick={() => handleEventSelect(event)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-gray-600">No events found matching your search criteria.</p>
                  <button 
                    className="mt-4 text-red-600 underline"
                    onClick={() => {
                      setSearchTerm('');
                      setCategoryFilter('All');
                    }}
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EventsPage; 