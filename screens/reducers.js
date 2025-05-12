import { TOGGLE_FAVORITE } from './actions';

const initialState = {
  contacts: [], // mỗi contact có thể có { ..., favorite: true/false }
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case TOGGLE_FAVORITE:
    return {
        ...state,
        contacts: state.contacts.map((contact) => {
        if (contact.phone === action.payload) {
            const isNowFavorite = !contact.favorite;
            return {
            ...contact,
            favorite: isNowFavorite,
            favoritedAt: isNowFavorite ? Date.now() : null,
            };
        }
        return contact;
        }),
    };

    default:
      return state;
  }
};
// reducer.js
const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.phone === action.payload
            ? {
                ...contact,
                favorite: !contact.favorite,
                favoritedAt: !contact.favorite ? Date.now() : null, // Đặt thời điểm yêu thích
              }
            : contact
        ),
      };
    default:
      return state;
  }
};

export default reducer;
