// src/app/index.tsx
import { createFileRoute } from '@tanstack/react-router';
import Hero from '../features/landing/components/Hero';


export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
    </>
  );
}