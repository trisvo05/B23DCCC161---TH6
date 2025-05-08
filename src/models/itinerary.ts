export interface Destination {
    id: string;
    name: string;
    date: string;
    cost: number;
    duration: number;
  }
  
  export interface ItineraryState {
    destinations: Destination[];
  }
  
  const ItineraryModel = {
    namespace: 'itinerary',
    state: {
      destinations: [],
    },
    reducers: {
      setDestinations(state: ItineraryState, { payload }: any) {
        localStorage.setItem('itinerary', JSON.stringify(payload));
        return { ...state, destinations: payload };
      },
      addDestination(state: ItineraryState, { payload }: any) {
        const updated = [...state.destinations, payload];
        localStorage.setItem('itinerary', JSON.stringify(updated));
        return { ...state, destinations: updated };
      },
      removeDestination(state: ItineraryState, { payload }: any) {
        const updated = state.destinations.filter(d => d.id !== payload);
        localStorage.setItem('itinerary', JSON.stringify(updated));
        return { ...state, destinations: updated };
      },
    },
  };
  
  export default ItineraryModel;