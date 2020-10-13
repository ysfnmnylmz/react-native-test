export const getDataRequest = (type) => ({type});

export const getDataFail = (type, error) => ({type, payload: error});

export const getDataSuccess = (type, data) => ({type, payload: data});
