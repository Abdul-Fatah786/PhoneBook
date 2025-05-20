import { useState } from 'react'

const useDisclose = () => {
    const [isOpen, setIsOpen] = useState(false);

    const hanldeisOpen = () => {
        setIsOpen(true);
        console.log("hello");
    };
    const onClose = () => {
        setIsOpen(false);
    };
    return { hanldeisOpen, onClose, isOpen }
}

export default useDisclose