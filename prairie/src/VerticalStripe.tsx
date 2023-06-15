
import './App.css'; // Import the CSS file for styling

interface VerticalStripeProps {
    imageUrl: string;
  }
  
  const VerticalStripe: React.FC<VerticalStripeProps> = ({ imageUrl }) => {
    return (
      <div className="vertical-stripe">
        <img src={imageUrl} alt="Vertical Stripe Image" />
      </div>
    );
  };
  
  export default VerticalStripe;
