import React from 'react';
import EventHero from './EventHero';
import EventSchedule from './EventSchedule';
import RegistrationForm from './RegistrationForm';
import Footer from './Footer';
import Header from './Header';

const EventDetail = ({ event, onBack }) => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-24">
        <EventHero 
          title={event.title}
          subtitle={event.category}
          description={event.description}
          date={event.date}
          time={event.time}
          location={event.location}
          imageUrl={event.imageUrl}
        />
        
        <EventSchedule 
          title="Event Schedule" 
          subtitle="Program Timeline"
          scheduleItems={event.schedule}
        />
        
        <RegistrationForm 
          title="Register for this Event" 
          subtitle="Join Us Today"
        />
        
        <div className="container mx-auto px-6 py-10">
          <button 
            onClick={onBack}
            className="flex items-center text-red-600 hover:text-red-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Events
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EventDetail; 