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
    // rootMargin: '-80px 0px 0px 0px' means the intersection is calculated
    // relative to a box that starts 80px down from the viewport's top edge.
    // This accounts for a potential fixed header/menu.
    // threshold: 0 means the callback fires as soon as the first pixel of the target enters the root.
    // We combine this with the rootMargin to detect when the top of the section
    // crosses the line defined by the rootMargin.
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '-80px 0px 0px 0px', // Adjust based on your fixed header height
      threshold: 0, // Trigger when the top of the section hits the rootMargin line
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // If a section is intersecting (its top is above the bottom of the rootMargin)
        // and it's not the last section (to avoid issues at the very bottom of the page)
        // or if it *is* the last section and it's fully visible, set it as active.
        // A simpler approach: just set the active section to the one whose top
        // crosses the rootMargin line first.
        if (entry.isIntersecting) {
           const sectionId = entry.target.id.replace('-section', '');
           // Set the active section to the one whose top is currently visible within the rootMargin
           // This simple check works well for sequential sections
           setActiveSection(sectionId);
           console.log(`[useActiveSection] Section intersecting: ${sectionId}`);
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

  return activeSection;
};

export default useActiveSection;