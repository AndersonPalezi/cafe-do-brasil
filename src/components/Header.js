import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';
const Header = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    };
    return (_jsxs("header", { className: "bg-coffee-gradient text-white p-4 flex items-center justify-between relative", children: [_jsx("img", { src: logo, alt: "Logo Cafe do Brasil", className: "w-16 h-16 rounded-full animate-pulse mr-4" }), _jsx("h1", { className: "text-3xl font-bold  flex items-center justify-center w-full h-full text-green-800", children: "Caf\u00E9 do Brasil" }), _jsxs("div", { className: "flex space-x-4 ml-auto items-center", children: [_jsx("a", { href: "https://github.com/AndersonPalezi", target: "_blank", rel: "noopener noreferrer", className: "text-white hover:text-gray-300", children: _jsx("i", { className: "fab fa-github fa-lg" }) }), _jsx("a", { href: "https://www.instagram.com/anderson_palezi/", target: "_blank", rel: "noopener noreferrer", className: "text-white hover:text-gray-300", children: _jsx("i", { className: "fab fa-instagram fa-lg" }) }), _jsx("a", { href: "https://www.linkedin.com/in/anderson-palezi-968611239/", target: "_blank", rel: "noopener noreferrer", className: "text-white hover:text-gray-300", children: _jsx("i", { className: "fab fa-linkedin fa-lg" }) }), _jsx("button", { onClick: goToHome, className: "ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", children: "In\u00EDcio" })] })] }));
};
export default Header;
