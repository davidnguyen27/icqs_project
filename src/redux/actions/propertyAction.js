import * as PropertyApi from '../../api/propertyRequest';

export const getSearchProperties = (search) => async (dispatch) => {
  dispatch({ type: 'PROPERTY_START' });
  try {
    const data = await PropertyApi.getSearchProperties(search);
    dispatch({ type: 'PROPERTY_SUCCESS', payload: { data } });
  } catch (error) {
    dispatch({ type: 'PROPERTY_FAIL' });
  }
};

// export const getPropertyById = (id) => async (dispatch) => {
//   dispatch({ type: 'PROPERTY_START' });
//   try {
//     const data = await PropertyApi.getPropertyById(id);
//     dispatch({ type: 'PROPERTY_SUCCESS_ID', payload: { data } });
//   } catch (error) {
//     dispatch({ type: 'PROPERTY_FAIL' });
//   }
// };
