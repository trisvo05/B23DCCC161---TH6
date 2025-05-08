export const getDestinations = () => {
    const data = localStorage.getItem('itinerary');
    return data ? JSON.parse(data) : [];
  };