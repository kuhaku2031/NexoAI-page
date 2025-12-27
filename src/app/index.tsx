import { createFileRoute } from '@tanstack/react-router';
import Hero from '../features/landing/components/Hero';
import { FeaturesMain } from '../features/landing/components/FeaturesMain';


export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesMain />
    </>
  );
}