export const calculateTotalCost = (destinations: Destination[]) => {
    return destinations.reduce((total, d) => total + d.cost, 0);
  };
  
  export const calculateTotalTime = (destinations: Destination[]) => {
    return destinations.reduce((total, d) => total + d.duration, 0);
  };