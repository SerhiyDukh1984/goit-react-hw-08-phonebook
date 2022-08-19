import { useState } from 'react';

export const useForm = ({ initialsValues, onSubmit }) => {
  const [form, setForm] = useState(initialsValues);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
  };

  const reset = () => setForm(initialsValues);

  return { form, handleChange, handleSubmit, reset };
};
