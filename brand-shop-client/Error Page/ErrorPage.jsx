
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
<div className=' flex flex-col lg:flex-row items-center justify-center'>
    <img className='w-2/3' src="https://i.ibb.co/Lg2SdRC/Capture-fotor-bg-remover-20231019113839.png" alt="" />
    <div className='text-center mt-16'>
        <img src="https://i.ibb.co/k82KXfS/png-transparent-sad-face-emoji-symbol-computer-icons-arrow-sad-emoji-miscellaneous-face-logo-fotor-b.png" alt="" />
        <h1 className='text-3xl text-red-700 font-bold'>You hit the wrong Target</h1>
        <Link to='/'><button className='btn btn-accent mt-4'>Go Back</button></Link>
    </div>
</div>
    );
};

export default ErrorPage;