import { GET_EMPLOYEES, GET_EMPLOYEE_DETAILS, GET_EMPLOYEE_ORG, EMPLOYEE_LOADING} from './types';

// Get Employees
export const getEmployees= ( id ) => dispatch => {
  dispatch(setLoading());
  return {
    type: GET_EMPLOYEES,
    payload: id 
  };
};

// Get Employee Details 
export const getEmployeeDetails = ( employee ) => {
  return {
    type: GET_EMPLOYEE_DETAILS,
    payload: employee
  };
};

// Get Employee Organization
export const getEmployeeOrg = ( employee ) => {
  return {
    type: GET_EMPLOYEE_ORG,
    payload: employee
  };
};

export const setLoading = () => {
  return {
    type: EMPLOYEE_LOADING
  };
};
