import { add, multi } from '../../Utils/Calculator';
import Watch from '../Watch/Watch';
import './Sunglass.css';


const Sunglass = () => {
    const first=55;
    const second=5;
    const sum= add(first,second);
    const multiply= multi(first,second);
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;