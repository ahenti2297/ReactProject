import './Prices.css';
import LockIcon from '@mui/icons-material/Lock';
export default function Prices(){
    return(
            <div className="PriceShow">
                <div className="classic1"> 
                        <h1>Price:₹5,899.91* 1-month free trial</h1>
                </div>
                <div className="classic2">
                    <p>After your free month, pay as little as ₹5,899.91* / month when billed annually. Cancel anytime. We'll remind you 7 days before your trial ends.</p>
                </div>
                <div className="classic3"> 
                    <button>Try now for $0</button>
                </div>
                <div className="classic4">
                    <LockIcon sx={{width: 18}}/>
                    <p>Secure checkout</p>
                </div>
            </div>
      
    )
}