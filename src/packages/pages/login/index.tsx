import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthenticate } from '../../login/application/authenticate';

function Login() {
  const navigate = useNavigate();
  const { user, authenticate } = useAuthenticate();

  useEffect(() => {
    if (user) {
      navigate('/workspace');
    }
  }, [user]);

  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    await authenticate(userInput.name, userInput.password);
    setLoading(false);
  };

  return (
    <>
      <h1>Demo</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={userInput.name}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={userInput.password}
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'loading...' : 'login'}
        </button>
      </form>
    </>
  );
}

export default Login;
