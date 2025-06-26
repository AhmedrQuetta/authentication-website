import { SignedIn, SignedOut } from '@clerk/clerk-react';
import Hero from './Components/Hero';
import Company from './components/Company';
import Footer from './components/Footer';
import Blog from './components/Blog';

export default function App() {
  return (
    <header>
      {/* Show main content only when signed in */}
      <SignedIn>
        <Hero />
        <Company />
        <Blog />
        <Footer />
      </SignedIn>

      {/* Show Sign In button when signed out */}
      <SignedOut>
        <Hero />
      </SignedOut>
    </header>
  );
}