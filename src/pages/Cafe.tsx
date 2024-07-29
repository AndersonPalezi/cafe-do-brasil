import React from 'react';
import Academia from "./assets/Academia.png"
import Cofice from "./assets/Cofice .jpg"
import Copo from "./assets/Copo.jpg"
import Letras from "./assets/Letras.png"
import Magri from "./assets/Magrí.jpg"
import Mocca from "./assets/Mocca.png"
import Noete from "./assets/Noete.jpg"
import Oop from "./assets/Oop.png"
import Pao from "./assets/Pao.jpg"
import Yes from "./assets/Yes.jpg"

const Cafes: React.FC = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-8xl px-3 mb-18 '>

            <div className="bg-transparent p-4 shadow-md rounded-lg flex flex-col md:flex-row">
                <img
                    src={Cofice}
                    alt="Origem do Café"
                    className="w-38 h-auto md:w-1/5 md:h-auto rounded-lg mb-4 md:mb-0 md:mr-4"
                />
                <div className="w-full md:w-4/5">
                    <h2 className="text-lg text-white font-bold mb-2"> Cofice Cafeteria Coworking</h2>
                    <p className="text-white font-medium mb-4 text-sm">
                        Autodenominado como uma “cafeteria business”, a Cofice Cafeteria Coworking é o local perfeito para quem quer trabalhar em um ambiente agradável e tomar um excelente café especial. O espaço tem dois andares e conta com uma estrutura bacana para reuniões e encontros de negócios, inclusive com salas reservadas.
                    </p>
                    <a href="https://tudosobrecafe.com/melhores-cafeterias-de-belo-horizonte" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Saiba Mais</a>
                </div>
            </div>

            <div className="bg-transparent p-4 shadow-md rounded-lg flex flex-col md:flex-row">
                <img
                    src={Academia}
                    alt="Origem do Café"
                    className="w-38 h-auto md:w-1/5 md:h-auto rounded-lg mb-4 md:mb-0 md:mr-4"
                />
                <div className="w-full md:w-4/5">
                    <h2 className="text-lg text-white font-bold mb-2"> Academia do Café</h2>
                    <p className="text-white font-medium mb-4 text-sm">
                        Se você está em busca de um local completo e que proporcione experiências positivas, a Academia do Café pode ser a melhor opção. Lá, é possível apreciar um delicioso café especial exclusivo e, se quiser, fazer um dos cursos ministrados na própria cafeteria (mas não esqueça de fazer a inscrição prévia no site deles, tá?
                    </p>
                    <a href="https://tudosobrecafe.com/melhores-cafeterias-de-belo-horizonte" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Saiba Mais</a>
                </div>
            </div>

            <div className="bg-transparent p-4 shadow-md rounded-lg flex flex-col md:flex-row">
                <img
                    src={Copo}
                    alt="Origem do Café"
                    className="w-38 h-auto md:w-1/5 md:h-auto rounded-lg mb-4 md:mb-0 md:mr-4"
                />
                <div className="w-full md:w-4/5">
                    <h2 className="text-lg text-white font-bold mb-2"> Copo Café</h2>
                    <p className="text-white font-medium mb-4 text-sm">
                        O Copo Café é uma pequena cafeteria com o estilo “to go”, ou seja, ideal para quem não faz questão de ficar sentado apreciando o café. Na frente do local até tem uma mesinha com duas cadeiras, mas – como são poucas – pode ser que você não consiga lugar para sentar enquanto aprecia a bebida.
                    </p>
                    <a href="https://tudosobrecafe.com/melhores-cafeterias-de-belo-horizonte" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Saiba Mais</a>
                </div>
            </div>

            <div className="bg-transparent p-4 shadow-md rounded-lg flex flex-col md:flex-row">
                    <img
                        src={Letras}
                        alt="Origem do Café"
                        className="w-38 h-auto md:w-1/5 md:h-auto rounded-lg mb-4 md:mb-0 md:mr-4" />
                        <div className="w-full md:w-4/5">
                        <h2 className="text-lg text-white font-bold mb-2"> Café com Letras</h2>
                        <p className="text-white font-medium mb-4 text-sm">
                            Muito mais do que uma cafeteria, o Café com Letras reúne várias paixões em um único lugar: livraria, lançamentos, restaurante, ponto de encontro e clube de jazz. No site, eles disponibilizam a programação do mês inteiro e você pode escolher o melhor dia para visitar, com base na atração e no cardápio.
                        </p>
                        <a href="https://tudosobrecafe.com/melhores-cafeterias-de-belo-horizonte" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Saiba Mais</a>
                    </div>
                </div>

                <div className="bg-transparent p-4 shadow-md rounded-lg flex flex-col md:flex-row">
                    <img
                        src={Magri}
                        alt="Origem do Café"
                        className="w-38 h-auto md:w-1/5 md:h-auto rounded-lg mb-4 md:mb-0 md:mr-4" />
                        <div className="w-full md:w-4/5">
                        <h2 className="text-lg text-white font-bold mb-2"> Café Magrí</h2>
                        <p className="text-white font-medium mb-4 text-sm">
                        O Café Magrí é perfeito para quem quer visitar um ambiente legal, aconchegante e com um cardápio recheado de coisas boas. Além do café e derivados, há também sobremesas, comidinhas artesanais, chocolates quente e vegano e uma série de lanches doces e salgados para acompanhar as bebidas.
                        </p>
                        <a href="https://tudosobrecafe.com/melhores-cafeterias-de-belo-horizonte" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Saiba Mais</a>
                    </div>
                </div>

                <div className="bg-transparent p-4 shadow-md rounded-lg flex flex-col md:flex-row">
                    <img
                        src={Mocca}
                        alt="Origem do Café"
                        className="w-38 h-auto md:w-1/5 md:h-auto rounded-lg mb-4 md:mb-0 md:mr-4" />
                        <div className="w-full md:w-4/5">
                        <h2 className="text-lg text-white font-bold mb-2"> Mocca Coffee and Meals</h2>
                        <p className="text-white font-medium mb-4 text-sm">
                        Quem está em busca de um local para trabalhar, estudar ou ler um bom livro enquanto toma um cafezinho, pode visitar o Mocca Coffee and Meals e aproveitar tudo de bom que o local oferece.
                        </p>
                        <a href="https://tudosobrecafe.com/melhores-cafeterias-de-belo-horizonte" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Saiba Mais</a>
                    </div>
                </div>

                <div className="bg-transparent p-4 shadow-md rounded-lg flex flex-col md:flex-row">
                    <img
                        src={Noete}
                        alt="Origem do Café"
                        className="w-38 h-auto md:w-1/5 md:h-auto rounded-lg mb-4 md:mb-0 md:mr-4" />
                        <div className="w-full md:w-4/5">
                        <h2 className="text-lg text-white font-bold mb-2"> Noete Café Clube</h2>
                        <p className="text-white font-medium mb-4 text-sm">
                        Cafeteria, torrefação e clube de assinatura, tudo no mesmo lugar! A Noete Café Clube surgiu em 2015 e, desde então, vem utilizando grãos de alta qualidade produzidos em diversas regiões do país.Como dissemos, a torra é feita de forma artesanal no local para garantir que o aroma e o sabor originais sejam mantidos.
                        </p>
                        <a href="https://tudosobrecafe.com/melhores-cafeterias-de-belo-horizonte" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Saiba Mais</a>
                    </div>
                </div>

                <div className="bg-transparent p-4 shadow-md rounded-lg flex flex-col md:flex-row">
                    <img
                        src={Oop}
                        alt="Origem do Café"
                        className="w-38 h-auto md:w-1/5 md:h-auto rounded-lg mb-4 md:mb-0 md:mr-4" />
                        <div className="w-full md:w-4/5">
                        <h2 className="text-lg text-white font-bold mb-2">  Oop Café</h2>
                        <p className="text-white font-medium mb-4 text-sm">
                        A Oop Café fica em um espaço moderno e aconchegante e, além de cafeteria, é uma torrefação que cuida artesanalmente das torras. O local conta com grãos cultivados por pequenos produtores e que são cuidadosamente selecionados antes de chegar até as xícaras.
                        </p>
                        <a href="https://tudosobrecafe.com/melhores-cafeterias-de-belo-horizonte" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Saiba Mais</a>
                    </div>
                </div>
            
                <div className="bg-transparent p-4 shadow-md rounded-lg flex flex-col md:flex-row">
                    <img
                        src={Pao}
                        alt="Origem do Café"
                        className="w-38 h-auto md:w-1/5 md:h-auto rounded-lg mb-4 md:mb-0 md:mr-4" />
                        <div className="w-full md:w-4/5">
                        <h2 className="text-lg text-white font-bold mb-2">  A Pão de Queijaria</h2>
                        <p className="text-white font-medium mb-4 text-sm">
                        Com um nome desse, não poderia ser diferente! Além do café, na Pão de Queijaria há outro protagonista: o pão de queijo.
                        </p>
                        <a href="https://tudosobrecafe.com/melhores-cafeterias-de-belo-horizonte" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Saiba Mais</a>
                    </div>
                </div>

                <div className="bg-transparent p-4 shadow-md rounded-lg flex flex-col md:flex-row">
                    <img
                        src={Yes}
                        alt="Origem do Café"
                        className="w-38 h-auto md:w-1/5 md:h-auto rounded-lg mb-4 md:mb-0 md:mr-4" />
                        <div className="w-full md:w-4/5">
                        <h2 className="text-lg text-white font-bold mb-2"> Yes, Nós Temos Café</h2>
                        <p className="text-white font-medium mb-4 text-sm">
                        Quem não abre mão da qualidade pode escolher a Yes, Nós Temos Café. Ela é uma cafeteria e torrefação que utiliza grãos de produtores premiados que atuam em várias regiões do país, incluindo o Espírito Santo e o Cerrado de Minas Gerais.
                        </p>
                        <a href="https://tudosobrecafe.com/melhores-cafeterias-de-belo-horizonte" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Saiba Mais</a>
                    </div>
                </div>

        </section>
    );
};

export default Cafes;
