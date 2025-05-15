import { useEffect, useState, useRef } from 'react';

const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Ensure we only run this on the client side where the DOM exists
    if (typeof window === 'undefined') return;

    const sections = sectionIds.map(id => document.getElementById(`${id}-section`)).filter(Boolean) as HTMLElement[];

    if (sections.length === 0) {
      console.warn("useActiveSection: No sections found with provided IDs.");
      return;
    }

    // Options for the Intersection Observer
    // rootMargin: '0px 0px -50% 0px' means the intersection is calculated
    // relative to the middle of the viewport.
    // threshold: 0.3 means the callback will fire when 30% of the target is visible.
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px 0px -50% 0px', // Trigger when section crosses the vertical center
      threshold: 0.3, // Percentage of target visibility needed to trigger
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id.replace('-section', '');
          console.log(`[useActiveSection] Section intersecting: ${sectionId}`); // Log intersecting section
          setActiveSection(sectionId);
        }
      });
    }, options);

    // Start observing each section
    sections.forEach(section => {
      if (section) {
        observer.current?.observe(section);
      }
    });

    // Clean up the observer when the component unmounts
    return () => {
      observer.current?.disconnect();
    };
  }, [sectionIds]); // Re-run if section IDs change

  console.log(`[useActiveSection] Current active section state: ${activeSection}`); // Log state changes
  return activeSection;
};

export default useActiveSection;