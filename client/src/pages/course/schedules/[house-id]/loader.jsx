// loader.jsx
export async function houseScheduleLoader({ params }) {
  const { houseId } = params;
  
  // Valid house IDs
  const validHouses = ['romance', 'action', 'science-fiction', 'horror', 'fantasy'];
  
  // Check if the house ID is valid
  if (!validHouses.includes(houseId)) {
    throw new Response('House not found', { status: 404 });
  }

  // In a real app, you might fetch data from an API here
  // For now, we'll just return some basic validation
  return {
    houseId,
    timestamp: new Date().toISOString()
  };
}