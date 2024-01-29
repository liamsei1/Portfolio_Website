import { useActiveSectionContext } from "@/context/active-section-context";
import React from "react";
import { useInView } from "react-intersection-observer";
import type { SectionType } from "@/lib/type";

export function useSectionInView(sectionName : SectionType, threshold = 0.75){
    const [ref, inView] = useInView({ threshold: threshold });
    const {setActiveSection, timeOfLastClick} = useActiveSectionContext();
    
    React.useEffect(() => {
      if(inView && Date.now() - timeOfLastClick > 1000){
        setActiveSection(sectionName);
      }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);
    
    return ref;
}

export function useSectionInView2(sectionName : SectionType, threshold = 0.75){
  const [ref, inView] = useInView({ threshold: threshold });
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext();
  
  React.useEffect(() => {
    if(inView && Date.now() - timeOfLastClick > 1000){
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);
  
  return {ref,inView};
}