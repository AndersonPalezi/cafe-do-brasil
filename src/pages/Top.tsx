import React from "react";
import Piramide from "./assets/piramide.jpg";
import Especial from "./assets/compraçao.jpg"; 
import Tradicional from "./assets/tradicional.jpeg"
import Gourmet from "./assets/Gourmet.jpeg"
import CafeSS from "./assets/cafeSS.jpg"


const Top: React.FC = () => {
    return (
        <section className="p-4 flex justify-center items-center min-h-screen">
            <main className="w-full max-w-5xl">
                <div className="bg-transparent p-4 shadow-md rounded-lg flex flex-col md:flex-row items-center md:items-start">
                    <img
                        src={Piramide}
                        alt="História do Café"
                        className="w-full md:w-[35%] h-auto rounded-lg mb-4 md:mb-0 md:mr-4"
                    />
                    <div className="w-full md:w-[65%] text-center md:text-left">
                        <h2 className="text-4xl text-white font-bold mb-2">
                            Entenda a diferença entre os cafés
                        </h2>
                        <p className="text-white mb-4 text-sm font-serif">
                            Acredite, apesar das palavras gourmet e extraforte serem bem
                            atrativas para alguns consumidores de cafés, não são sinônimos de
                            qualidade e nós vamos te explicar o por quê. Assim, quando você
                            ler esses nomes na embalagem de um pacote de café no mercado,
                            saberá o que significam de verdade.
                        </p>
                        <a
                            href="https://uniquecafes.com.br/"
                            target="_blank"
                            className="text-blue-500 hover:underline"
                        >
                            Saiba Mais
                        </a>
                    </div>
                </div>
                <section>
                    <h1 className="text-4xl text-white font-bold mb-2 md:flex items-center justify-center">
                        Quem classifica os tipos de cafés?
                    </h1>
                    <div>
                        <p className="text-white font-serif">
                            Do extraforte ao café gourmet, quem faz a classificação dos cafés
                            é a <strong>ABIC – Associação Brasileira da Indústria de Café</strong>. Em
                            contrapartida, os cafés especiais e extraordinários são
                            classificados pela <strong>BSCA – Brazil Specialty Coffee Association</strong>.
                            Enquanto a<strong> BSCA</strong> avalia cafés acima de 80 pontos no padrão SCA
                            <strong>(Specialty Coffee Association), a ABIC</strong> avalia cafés com nota de 0
                            a 10.
                        </p>
                        <div className="bg-transparent text-white p-6 rounded-lg shadow-lg">
                            <p className="mb-4 font-serif">
                                Em termos de pontuação dos cafés, poderíamos identificar os
                                tipos de café da seguinte forma:
                            </p>
                            <strong>
                            <ol className="list-decimal list-inside space-y-2 font-bold">
                                <li>Café Extraordinário: acima de 90 pontos;</li>
                                <li>Café Especial: acima de 80 pontos;</li>
                                <li>Café Gourmet: entre 75 a 80 pontos;</li>
                                <li>Café Superior/Premium: entre 70 a 75 pontos;</li>
                                <li>Café Tradicional: entre 65 a 70 pontos;</li>
                                <li>Café Extraforte: abaixo de 65 pontos.</li>
                            </ol>
                            </strong>
                        </div>
                    </div>
                </section>
                <section>
                    <h1 className="text-white font-bold text-4xl md:flex items-center justify-center">
                        O que é café extraforte?
                    </h1>
                    <div className="bg-transparent text-white p-6 rounded-lg shadow-lg">
                        <img
                            src={Especial}
                            alt="Imagem ilustrativa de café"
                            className="w-full md:w-[50%] h-auto mb-4 rounded-lg mx-auto"
                        />
                        <p className="mb-4">
                            O café é uma bebida apreciada em todo o mundo, conhecida por seu
                            sabor rico e capacidade de fornecer energia. Diferentes regiões
                            produzem grãos com características únicas, resultando em uma vasta
                            gama de sabores e aromas.
                        </p>
                        <p className="mb-4">
                            A classificação dos cafés é uma prática importante para garantir a
                            qualidade e a consistência. Através de testes sensoriais, os cafés
                            são pontuados em critérios como aroma, sabor, acidez e corpo.
                        </p>
                        <p className="mb-4">
                            Degustadores especializados avaliam cada xícara com cuidado, e os
                            melhores cafés recebem classificações como <strong>"Especial"</strong> ou
                            <strong>"Gourmet"</strong>. Essa avaliação ajuda consumidores a escolherem produtos
                            que atendam às suas preferências pessoais.
                        </p>
                    </div>
                </section>
                <section>
                    <h1 className="text-white font-bold text-4xl md:flex items-center justify-center">
                    O que é café tradicional?
                    </h1>
                    <div>
                        <p className=" text-white font-serif my-4">
                            O café <strong>tradicional</strong> é aquele que, na colheita, os grãos são colhidos todos juntos (verdes, maduros ou passados). Não existe uma seleção de qualidade entre eles e também são processados dessa forma.
                            Além disso, a torra do café não é tão carbonizada como o extraforte, nem a moagem é tão fina, porém existe o mesmo problema das impurezas resultantes no amargor da bebida. Por tanta impureza, a torra é muito escura e a moagem excessivamente fina. É por isso que a maioria das pessoas não gosta de tomar café sem açúcar.
                        </p>
                        <img
                            src={Tradicional}
                            alt="Imagem ilustrativa de café"
                            className="w-full md:w-[35%] h-auto mb-4 rounded-lg mx-auto"
                        />
                    </div>
                    <div>
                        <h1 className="text-white font-bold text-4xl md:flex items-center justify-center my-4">
                            O que é café superior ou premium?
                        </h1>
                        <p className="text-white font-serif my-4" >
                        O café <strong>superior ou premium</strong> são grãos um pouco mais refinados, pois são cafés verdes ou que se quebraram no caminho. É o menos pior dos dois tipos de cafés que já citamos acima. Porém, assim como o extraforte e o tradicional, encontraremos impurezas. Em outras palavras, aceita 10% de defeitos, torra bem escura e possui sabor amargo.
                        </p>
                        <p className="text-white font-serif my-4">
                            Além disso, os grãos do fruto do café existentes nessa categoria estão verdes ou podres. Você gosta de laranja podre? Gosta de laranja verde? Bom, não é preciso falar muito sobre os sabores que esse tipo de fruto de café traz para a bebida, certo?
                        </p>
                    </div>
                </section>
                    <div>
                        <h1 className="text-white font-bold text-4xl md:flex items-center justify-center my-4">
                        O que é café gourmet?
                        </h1>
                        <p className="text-white font-serif my-4">
                            Já estamos subindo o nível dessa pirâmide, graças ao pé de café! <strong>Cafés Gourmet</strong> são considerados uma mistura pura, pois não apresentam defeitos. Em outras palavras, são melhores que os cafés tradicionais, extrafortes e superiores
                        </p>
                        <p className="text-white font-serif my-4">
                        Nesse sentido, apesar do sabor ser um pouco melhor que os outros, ainda assim, os cafés gourmet não passam por processos de classificação rigorosos como o café especial e não recebem pontuação da SCA. Então, não se surpreenda tanto só porque na embalagem está escrito “café gourmet”, você merece mais que isso!
                        </p>
                    </div>
                    <div>
                    <img
                            src={Gourmet}
                            alt="Imagem ilustrativa de café"
                            className="w-full md:w-[30%] h-auto mb-4 rounded-lg mx-auto"
                        />
                    </div>
                    <section>
                        <div>
                            <h1 className="text-white font-bold text-4xl md:flex items-center justify-center my-4">
                            O que é café especial?
                            </h1>
                        </div>
                        <p className="text-white font-serif my-4">
                        Ufa! Agora sim! Cafés especiais são frutos maduros e selecionados, livres de impurezas, que passam por um rigoroso processo e que atingem notas sensoriais diferenciadas. São cafés excelentes, podendo ser considerados melhores do mundo e, além de tudo, contribuem para sua saúde.
                        </p>
                        <div className="bg-transparent text-white p-6 rounded-lg shadow-lg">
                            <p className="mb-4 font-serif">
                            Em outras palavras, os cafés especiais são avaliados com notas acima de 80 pontos pela SCA. Veja os atributos considerados:
                            </p>
                            <strong>
                            <ol className="list-decimal list-inside space-y-2 font-bold">
                                <li>Fragrância/aroma;</li>
                                <li>Uniformidade;</li>
                                <li>Ausência de defeitos;</li>
                                <li>Doçura, amargor, acidez, corpo e sabor residual
                                (retrogosto);;</li>
                                <li>Harmonia.</li>
                            </ol>
                            </strong>
                            <img
                            src={CafeSS}
                            alt="Imagem ilustrativa de café"
                            className="w-full md:w-[40%] h-auto mb-4 rounded-lg mx-auto"
                        />
                        </div>
                    </section>
                    <section>
                        <div>
                            <h1 className="text-white font-bold text-4xl md:flex items-center justify-center my-4">
                            O que é café extraordinário?
                            </h1>
                        </div>
                        <p className="text-white font-serif my-4">
                        Da série: o que é bom pode melhorar, sim! Além dos cafés especiais, cafés extraordinários são bebidas avaliadas em notas <strong>acima de 90 pontos</strong>, descobertos no concurso Cup of Excellence e considerados raridades para o mercado.
                        </p>
                        <p className=" text-white font-serif my-4">
                        Ele passou por todo processo de qualidade e conseguiu se diferenciar dentro os melhores, valorizando o preço da saca e trazendo reconhecimento para a fazenda em que foi cultivado.
                        </p>
                    </section>
                    <section>
                        <h1 className=" text-white font-bold text-4xl md:flex items-center justify-center my-4">
                        Você sabe qual é o café mais bem pontuado do mundo?
                        </h1>
                        <p className="text-white font-serif my-4">
                        Dentro deste mesmo concurso que citamos acima, temos o orgulho de carregar um recorde histórico. O café mais bem pontuado do mundo é o da <strong>Fazenda Santa Inês, em Carmo de Minas, que obteve 95.85pts em 2005</strong>. Até hoje nenhum café do planeta atingiu tamanha complexidade, nem o famoso café colombiano que muitos dizem por aí.
                        </p>
                    </section>
                    <section>
                        <h1 className=" text-white font-bold text-4xl md:flex items-center justify-center my-4">
                        Curiosidade: o que significa a expressão “bebida dura”?
                        </h1>
                        <p className="text-white font-serif my-4">
                        Agora, para enriquecer seus conhecimentos sobre de cafés especiais e não ficar moscando quando você ouvir no jornal sobre os valores da saca de café arábica tipo 6 bebida dura, te ensinaremos o que isso significa.
                        </p>
                        <p className="text-white font-serif my-4">
                        <strong>“Bebida dura”</strong> é a expressão usada na cotação de commoditie, classificada como aquilo que não se agrada, ou seja, são cafés de 70 a 80 pontos. Geralmente, é o café que não é exportado, fica para consumo aqui no Brasil. Em contrapartida, <strong>“bebida mole”</strong> ou <strong>“estritamente mole”</strong> são cafés de melhor qualidade.
                        </p>
                        <p className="text-white font-serif my-4">
                        Concluindo, esperamos que este conteúdo tenha esclarecido suas dúvidas. Agora, compartilhe este conteúdo com os cafezeiros apaixonados por café como você!
                        </p>
                    </section>
            </main>
        </section>
    );
};

export default Top;
