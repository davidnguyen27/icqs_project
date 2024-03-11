import * as ContractApi from "../../api/contractRequest";

export const createContract = (formData) => async (dispatch) => {
  dispatch({ type: "CONTRACT_START" });
  try {
    const data = await ContractApi.createContract(formData);
    dispatch({ type: "CREATE_CONTRACT_SUCCESS", payload: { data } });
  } catch (error) {
    dispatch({ type: "CONTRACT_FAIL" });
  }
};

export const getContractByUser = () => async (dispatch) => {
  dispatch({ type: "CONTRACT_START" });
  try {
    const data = await ContractApi.getContractByUser();
    dispatch({ type: "CONTRACT_SUCCESS", payload: { data } });
  } catch (error) {
    dispatch({ type: "CONTRACT_FAIL" });
  }
};

export const getContractByStaff = (limit, page) => async (dispatch) => {
  dispatch({ type: "CONTRACT_START" });
  try {
    const data = await ContractApi.getContractByStaff(limit, page);
    dispatch({ type: "CONTRACT_SUCCESS", payload: { data } });
  } catch (error) {
    dispatch({ type: "CONTRACT_FAIL" });
  }
};

export const editContract = (formEdit, id) => async (dispatch) => {
  dispatch({ type: "CONTRACT_START" });
  try {
    const data = await ContractApi.editContract(formEdit, id);
    dispatch({ type: "EDIT_CONTRACT_SUCCESS", payload: { data, id } });
  } catch (error) {
    dispatch({ type: "CONTRACT_FAIL" });
  }
};
