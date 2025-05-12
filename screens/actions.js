// Action type
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

// Action creator
 
 
export const toggleFavorite = (phone) => {
  return {
    type: 'TOGGLE_FAVORITE',
    payload: phone,
  };
};
