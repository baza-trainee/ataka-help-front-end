import dynamic from 'next/dynamic';

const DynamicSafariContent = dynamic(() => import('./FeedbackForm'), {
  ssr: false,
});

const FeedbackClientForm = () => { 
    return (<DynamicSafariContent />);
  };
  
  export default FeedbackClientForm;