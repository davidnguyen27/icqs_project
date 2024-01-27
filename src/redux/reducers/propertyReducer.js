const propertyReducer = (state = { propertyData: null, loading: false, error: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'PROPERTY_START':
      return { ...state, loading: true, error: false };
    case 'PROPERTY_SUCCESS':
      localStorage.setItem('property', JSON.stringify({ ...payload?.data }));
      return { ...state, propertyData: payload.data, loading: false };
    case 'PROPERTY_FAIL':
      return { ...state, loading: false, error: true };
    default:
      return { ...state };
  }
};

export default propertyReducer;
