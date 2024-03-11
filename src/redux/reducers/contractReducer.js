const contractReducer = (
  state = { contractData: [], loading: false, error: false },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case "CONTRACT_START":
      return { ...state, loading: true, error: false };
    case "CREATE_CONTRACT_SUCCESS":
      const newContract = [...state.contractData, payload.data];
      return {
        ...state,
        contractData: newContract,
        loading: false,
      };
    case "CONTRACT_SUCCESS":
      localStorage.setItem("contract", JSON.stringify({ ...payload?.data }));
      return { ...state, contractData: payload.data, loading: false };
    case "EDIT_CONTRACT_SUCCESS":
      const { formEdit, id } = payload;
      const updateContract = state.userData.map((contract) => {
        if (contract.id === id) {
          return { ...contract, ...formEdit };
        }
        return contract;
      });
      return { ...state, contractData: updateContract, loading: false };
    case "CONTRACT_FAIL":
      return { ...state, loading: false, error: true };

    default:
      return { ...state };
  }
};

export default contractReducer;
