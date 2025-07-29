import { useEffect, useMemo, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../../assets/css/WhatsAppButton.css'; // Ensure you have the appropriate CSS for styling

const WhatsAppButton = () => {
    const [isMobile, setIsMobile] = useState(false);

    const phoneNumber = '+919998134094';
    const message = 'Hello, I want to inquire about your services.';

    useEffect(() => {
        // Only run this client-side
        if (typeof navigator !== 'undefined') {
            setIsMobile(/iPhone|Android|iPad/i.test(navigator.userAgent));
        }
    }, []);

    const baseURL = useMemo(() => {
        const encodedMsg = encodeURIComponent(message);
        return isMobile
            ? `https://wa.me/${phoneNumber}?text=${encodedMsg}`
            : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMsg}`;
    }, [isMobile, phoneNumber, message]);

    return (
        <a
            href={baseURL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="whatsapp-floating-btn"
        >
            <FaWhatsapp />
        </a>
    );
};

export default WhatsAppButton;
