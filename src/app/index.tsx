import { createFileRoute } from '@tanstack/react-router';
import Hero from '../features/landing/components/Hero';
import { FeaturesMain } from '../features/landing/components/FeaturesMain';
import { HowItWorks } from '../features/landing/components/HowItWorks';
import { DemoShowcase } from '../features/landing/components/DemoShowCase';


export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <DemoShowcase />
      <FeaturesMain />
    </>
  );
}