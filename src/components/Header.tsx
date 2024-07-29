import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Header: React.FC = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    return (
        <header className="bg-coffee-gradient text-white p-4 flex items-center justify-between relative">
            {/* Imagem do logo */}
            <img
                src={logo}
                alt="Logo Cafe do Brasil"
                className="w-16 h-16 rounded-full animate-pulse mr-4"
            />

            {/* Título centralizado */}
            <h1 className="text-3xl font-bold  flex items-center justify-center w-full h-full text-yellow-400">
                Café do Brasil
            </h1>

            {/* Ícones Sociais e Botão de Retorno ao Início */}
            <div className="flex space-x-4 ml-auto items-center">
                <a href="https://github.com/AndersonPalezi" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                    <i className="fab fa-github fa-lg"></i>
                </a>
                <a href="https://www.instagram.com/anderson_palezi/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                    <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a href="https://www.linkedin.com/in/anderson-palezi-968611239/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                    <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <button
                    onClick={goToHome}
                    className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Início
                </button>
            </div>
        </header>
    );
};

export default Header;
