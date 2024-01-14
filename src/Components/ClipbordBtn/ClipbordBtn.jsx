import copy from 'clipboard-copy';
import toast from 'react-hot-toast';
import { FaClipboardList } from "react-icons/fa";

const ClipbordBtn = ({ textToCopy }) => {
    const handleCopyClick = async () => {
        try {
            await copy(textToCopy);
            toast.success('Copied to clipboard!');
        } catch (err) {
            toast.error('Failed to copy to clipboard', err);
        }
    };

    return (
        <button onClick={handleCopyClick} className='p-2 bg-black rounded-lg'>
            <FaClipboardList className='text-xl' />
        </button>
    );
};

export default ClipbordBtn;