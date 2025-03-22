import React from 'react';

const EventCard = ({ event, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img 
          src={event.imageUrl} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <span className="inline-block px-2 py-1 bg-red-600 text-white text-xs rounded-full mb-2">
            {event.category}
          </span>
          <h3 className="text-white text-xl font-bold">{event.title}</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{event.location}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{event.shortDescription}</p>
        <button className="text-red-600 text-sm font-medium hover:text-red-800 transition-colors">
          View Event Details →
        </button>
      </div>
    </div>
  );
};

const EventList = ({ events, onEventSelect }) => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-red-600/10 text-red-600 text-sm font-medium mb-4">
            Upcoming Events
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Join Our Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our upcoming events and initiatives that make a difference in the community. 
            Register today to participate and contribute to a meaningful cause.
          </p>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard 
              key={event.id} 
              event={event} 
              onClick={() => onEventSelect(event)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventList; 