import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-text-primary)',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '3rem', margin: '0 0 1rem 0' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Page Not Found</h2>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
        The page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate(ROUTES.LOGIN)}
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-background)',
          border: 'none',
          borderRadius: '6px',
          fontSize: '1rem',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Go to Login
      </button>
    </main>
  );
}