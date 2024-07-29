import React, { useState } from 'react';
import coffeeImage from '../assets/coffee-image.jpg'; // Substitua com o caminho da sua imagem
import secondImage from '../assets/second-coffee-image.jpg';
import thirdImage from '../assets/third-coffee-image.jpg';
import fourthImage from '../assets/fourth-coffee-image.jpg';
import fifthImage from '../assets/fifth-coffee-image.jpg';
import sixthImage from '../assets/sixth-coffee-image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Home: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="p-4 min-h-screen flex flex-col">
            {/* Menu */}
            <nav className="bg-coffee-gradient text-yellow-400 p-4 mb-6 font-semibold">
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-serif ">Que tal um cafézinho...</h1>
                    <button
                        onClick={toggleMenu}
                        className="text-white md:hidden"
                    >
                        {menuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
                    </button>
                </div>
                <ul className={`mt-4 my-1  md:flex items-center justify-between md:space-x-4 md:mt-0 ${menuOpen ? 'block' : 'hidden'} md:block`}>
                    <li><a href="/cafe" className="hover:underline">Top 10 cafeterias BH</a></li>
                    <li><a href="/Top" className="hover:underline">Tipos de Cafés</a></li>
                    <li><a href="/Saude" className="hover:underline">Café & Saúde</a></li>
                    <li><a href="#contato" className="hover:underline">Contato</a></li>
                    <li><a href="https://www.graogourmet.com/blog/historia-do-cafe/" target='_blank' className="hover:underline">Saiba Mais</a></li>
                </ul>
            </nav>

            {/* Cards Section */}
            <section className="flex flex-col space-y-4">
                {/* Card 1 */}
                <div className="bg-transparent p-4 shadow-md rounded-lg flex flex-col md:flex-row">
                    <img
                        src={coffeeImage}
                        alt="Origem do Café"
                        className="w-3/5 md:w-1/5 h-auto rounded-lg mb-4 md:mb-0 md:mr-4"
                    />

                    <div className="w-full md:w-4/5">
                        <h2 className="text-lg text-white font-bold mb-2">A Origem do Café</h2>
                        <p className="text-white mb-4 text-sm">
                            O café tem uma longa e rica história que começa na Etiópia, onde foi descoberto por pastores de cabras no século IX. Desde então, o café se espalhou pelo mundo, tornando-se uma das bebidas mais populares e amadas globalmente.
                        </p>
                        <a href="https://www.graogourmet.com/blog/historia-do-cafe/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Saiba Mais</a>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-transparent p-4 shadow-md rounded-lg flex flex-col md:flex-row">
                    <img
                        src={secondImage}
                        alt="História do Café"
                        className="w-3/5 md:w-1/5 h-auto rounded-lg mb-4 md:mb-0 md:mr-4"
                    />
                    <div className="w-full md:w-4/5">
                        <h2 className="text-lg text-white font-bold mb-2">Café primeira cafeteria</h2>
                        <p className="text-white mb-4 text-sm">
                            Não existiria tanta história do café, se não existissem as cafeterias. Assim, a Turquia marca grande importância nessa trajetória. Pode-se dizer que o país foi responsável pela difusão da bebida no mundo, uma vez que criou em 1475 a primeira cafeteria: o Kiva Han.
                        </p>
                        <a href="https://www.graogourmet.com/blog/historia-do-cafe/" target="_blank" className="text-blue-500 hover:underline">Saiba Mais</a>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-transparent p-4 shadow-md rounded-lg flex flex-col md:flex-row">
                    <img
                        src={thirdImage}
                        alt="Invenção do Café Moderno"
                        className="w-3/5 md:w-1/5 h-auto rounded-lg mb-4 md:mb-0 md:mr-4"
                    />
                    <div className="w-full md:w-4/5">
                        <h2 className="text-lg text-white font-bold mb-2">Mas quem inventou o café moderno?</h2>
                        <p className="text-white mb-4 text-sm">
                            Felizmente, os esforços que se opunham à popularização da bebida foram em vão. Por volta do séc. XVII, conforme florescia o Iluminismo e se planejava a Revolução Francesa, as cafeterias começaram a se desenvolver, juntamente com os ideais que transformariam o período. Assim, a história do café começava a ganhar forma.
                        </p>
                        <a href="https://www.graogourmet.com/blog/historia-do-cafe/" target="_blank" className="text-blue-500 hover:underline">Saiba Mais</a>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-transparent p-4 shadow-md rounded-lg flex flex-col md:flex-row">
                    <img
                        src={fourthImage}
                        alt="História do Café Global"
                        className="w-3/5 md:w-1/5 h-auto rounded-lg mb-4 md:mb-0 md:mr-4"
                    />
                    <div className="w-full md:w-4/5">
                        <h2 className="text-lg text-white font-bold mb-2">Quem popularizou o café no mundo?</h2>
                        <p className="text-white mb-4 text-sm">
                            Foram os holandeses, os responsáveis por criar a história do café no mundo. Ao que parece, foram eles os responsáveis por transportar as amostras da planta pelo mundo, já que no séc. XVI, eles tinham o controle do comércio europeu e os melhores navios.
                        </p>
                        <a href="https://www.graogourmet.com/blog/historia-do-cafe/" target="_blank" className="text-blue-500 hover:underline">Saiba Mais</a>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="bg-transparent p-4 shadow-md rounded-lg flex flex-col md:flex-row">
                    <img
                        src={fifthImage}
                        alt="O Café na Revolução Industrial"
                        className="w-3/5 md:w-1/5 h-auto rounded-lg mb-4 md:mb-0 md:mr-4"
                    />
                    <div className="w-full md:w-4/5">
                        <h2 className="text-lg text-white font-bold mb-2">O Café e a Revolução Industrial</h2>
                        <p className="text-white mb-4 text-sm">
                            Com a Revolução Industrial, o café se tornou uma bebida ainda mais popular. A produção em massa e a industrialização permitiram que o café chegasse a um público maior e se tornasse uma parte fundamental da vida cotidiana.
                        </p>
                        <a href="https://www.graogourmet.com/blog/historia-do-cafe/" target="_blank" className="text-blue-500 hover:underline">Saiba Mais</a>
                    </div>
                </div>

                {/* Card 6 */}
                <div className="bg-transparent p-4 shadow-md rounded-lg flex flex-col md:flex-row">
                    <img
                        src={sixthImage}
                        alt="O Café na Atualidade"
                        className="w-3/5 md:w-1/5 h-auto rounded-lg mb-4 md:mb-0 md:mr-4"
                    />
                    <div className="w-full md:w-4/5">
                        <h2 className="text-lg text-white font-bold mb-2">O Café na Atualidade</h2>
                        <p className="text-white mb-4 text-sm">
                            Hoje, o café é uma das bebidas mais consumidas no mundo. Com uma variedade de métodos de preparo e uma cultura global vibrante, o café continua a evoluir e influenciar a sociedade de várias maneiras.
                        </p>
                        <a href="https://www.graogourmet.com/blog/historia-do-cafe/" target="_blank" className="text-blue-500 hover:underline">Saiba Mais</a>
                    </div>
                </div>
            </section>
            <footer className="bg-coffee-gradient text-white text-center p-4 mt-auto">
                <p>&copy; 2024 Anderson Palezi. Todos os direitos reservados.</p>
                <p>Contato: <a href="mailto:andersonpalezidev@gmail.com" className="text-blue-400 hover:underline">andersonpalezidev@gmail.com</a></p>
            </footer>
        </div>
    );
};

export default Home;
