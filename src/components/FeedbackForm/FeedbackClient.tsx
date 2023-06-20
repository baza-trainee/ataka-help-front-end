import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DynamicSafariContent = dynamic(() => import("./FeedbackForm"), {
  ssr: false, // Disable server-side rendering
});

const FeedbackClient = () => {
  // const [isSafari, setIsSafari] = useState(false);

  // useEffect(() => {
  //   if (typeof window !== 'undefined' && typeof (window as any).safari !== 'undefined') {
  //     setIsSafari(true);
  //     console.log('Apple Safari');
  //   }
  // }, []);

  return (
    <div>
      <DynamicSafariContent />
    </div>
  );
};

export default FeedbackClient;
