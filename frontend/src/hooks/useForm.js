import { useState } from 'react';

/**
 * Custom Hook for handling form state and changes cleanly
 * @param {Object} initialValues - Initial state values for the form
 * @returns {Object} { values, setValues, handleChange, resetForm }
 */
export const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const resetForm = () => setValues(initialValues);

  return {
    values,
    setValues,
    handleChange,
    resetForm,
  };
};

export default useForm;
