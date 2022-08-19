import { useForm } from 'hooks/useForm';

export const RegisterForm = () => {
  const { form, handleChange, handleSubmit } = useForm({
    initialsValues: { name: '', email: '', password: '' },
    onSubmit: values => console.log(values),
  });

  const { name, email, password } = form;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={name}
            onChange={handleChange}
          />
        </label>

        <label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          <input
            type="text"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">OK</button>
      </form>
    </>
  );
};
