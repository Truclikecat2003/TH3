export const FETCH_CONTACTS_LOADING = 'FETCH_CONTACTS_LOADING';
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR';

export const fetchContactsLoading = () => ({
  type: FETCH_CONTACTS_LOADING,
});

export const fetchContactsSuccess = (contacts) => ({
  type: FETCH_CONTACTS_SUCCESS,
  payload: contacts,
});

export const fetchContactsError = () => ({
  type: FETCH_CONTACTS_ERROR,
});
