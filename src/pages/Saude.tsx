import React from "react";
import beneficios from "./assets/beneficios.webp";
import Nutrientes from "./assets/nutrientes.webp";
import CafeSaude from "./assets/CafeSaude.webp";
import Luta from "./assets/luta.webp"
import Duvida from "./assets/Duvida.webp"

const Saude: React.FC = () => {
    return (
        <section className="my-4">
            {/* Primeira seção */}
            <div className="bg-transparent p-4 shadow-md rounded-lg flex flex-col md:flex-col items-center text-center md:text-left mb-8">
                <h2 className="text-4xl text-white font-bold mb-2">
                    Conheça os nutrientes do café e saiba quais benefícios a bebida traz à saúde
                </h2>
                <img
                    src={beneficios}
                    alt="Benefícios do Café"
                    className="w-full md:w-[25%] h-auto rounded-lg mb-4 mx-auto"
                />
                <div className="w-full md:w-[65%]">
                    <p className="text-white mb-4 text-sm font-serif">
                        Quem não adora sentir a chacoalhada revigorante de uma xícara de
                        café especial? Sabia que o café é muito mais do que um simples
                        estimulante? Os <strong>nutrientes</strong> do café formam uma verdadeira mina
                        de ouro e causam um bem danado à saúde!
                    </p>
                    <a
                        href="https://uniquecafes.com.br/"
                        target="_blank"
                        className="text-blue-500 hover:underline"
                        rel="noopener noreferrer"
                    >
                        Saiba Mais
                    </a>
                </div>
            </div>

            {/* Segunda seção */}
            <div className="bg-transparent p-4 shadow-md rounded-lg flex flex-col md:flex-col items-center text-center md:text-left">
                <h2 className="text-4xl text-white font-bold mb-2">
                    Conheça os nutrientes do café e saiba quais benefícios a bebida traz à saúde
                </h2>
                <img
                    src={Nutrientes}
                    alt="Nutrientes do Café"
                    className="w-full md:w-[25%] h-auto rounded-lg mb-4 mx-auto"
                />
                <div className="w-full md:w-[65%]">
                    <p className="text-white mb-4 text-sm font-serif">
                        A <strong>cafeína</strong> é um dos principais componentes do café. Ela estimula
                        o sistema nervoso central, aumentando o estado de alerta e a
                        concentração. Além disso, quando dizemos que o café nos dá forças
                        para encarar a semana, não é brincadeira, não! A substância
                        também aumenta resistência ao esforço físico.
                    </p>
                    <h2 className="text-2xl text-white font-bold mb-2">
                        Antioxidantes
                    </h2>
                    <p className="text-white mb-4 text-sm font-serif">
                        Muita gente não sabe, mas o café é antioxidante. O grão é composto por
                        substâncias, como os ácidos clorogênicos, que podem neutralizar os
                        radicais livres. Se você ainda não está familiarizado com esse termo,
                        vamos lá: basicamente, eles são os vilões que danificam as células e o
                        DNA do corpo. Estragam, mesmo. Por isso que é tão importante dar um
                        chega pra lá nesses daí!
                    </p>
                    <h2 className="text-2xl text-white font-bold mb-2">
                        Minerais
                    </h2>
                    <p className="text-white mb-4 text-sm font-serif">
                        Os <strong>benefícios do café</strong> não param por aí! Os grãos são ricos
                        em minerais, como o magnésio, o potássio e o fósforo. Esses
                        malandros regulam diversas funções fisiológicas,
                        atuam no sistema nervoso e fortalecem os ossos.
                    </p>
                    <a
                        href="https://uniquecafes.com.br/"
                        target="_blank"
                        className="text-blue-500 hover:underline"
                        rel="noopener noreferrer"
                    >
                        Saiba Mais
                    </a>
                </div>
            </div>
            {/* Terceira seção */}
            <div className="bg-transparent p-4 shadow-md rounded-lg flex flex-col md:flex-col items-center text-center md:text-left">
                <h2 className="text-4xl text-white font-bold mb-2">
                    Café é bom para a saúde?
                </h2>
                <img
                    src={CafeSaude}
                    alt="Nutrientes do Café"
                    className="w-full md:w-[25%] h-auto rounded-lg mb-4 mx-auto"
                />
                <div className="w-full md:w-[65%]">
                    <p className="text-white mb-4 text-sm font-serif">
                        Já deu para <strong>perceber que o café faz bem para saúde</strong>,
                        certo? O danado é bom mesmo, e não só de gosto! Quando
                        você degusta um produto de qualidade, cuidadosamente
                        selecionado, com torra controlada e embalado da maneira
                        ideal, o seu organismo comemora.
                    </p>
                    <p className="text-white mb-4 text-sm font-serif">
                        Como especialistas em cafés especiais, nós já sacamos
                        muitas das vantagens trazidas pelo consumo regular.
                        Por isso, trouxemos algumas delas aqui para apresentar
                        aos nossos compadres, que também não vivem sem a bebida.
                        Olha só o que ela pode fazer pelo nosso corpo
                    </p>
                    <h2 className="text-2xl text-white font-bold mb-2">
                        Evita doenças cardiovasculares
                    </h2>
                    <p className="text-white mb-4 text-sm font-serif">
                        Entre os benefícios que os nutrientes do café oferecem ao corpo,
                        podemos destacar a melhora no funcionamento do sistema
                        cardiovascular. Por ser rico em substâncias antioxidantes
                        e anti-inflamatórias, ele deixa as artérias firmes e fortes,
                        ajudando a evitar o infarto e o derrame. aí!
                    </p>
                    <h2 className="text-2xl text-white font-bold mb-2">
                        Acelera o metabolismo
                    </h2>
                    <p className="text-white mb-4 text-sm font-serif">
                        Outra <strong>propriedade do café é a ação termogênica</strong>. Isso significa
                        que ele acelera o metabolismo, aumentando o gasto calórico.
                        É ótimo para regular o organismo, deixando-o já pronto para a próxima xícara.
                    </p>
                    <h2 className="text-2xl text-white font-bold mb-2">
                        Previne o câncer
                    </h2>
                    <p className="text-white mb-4 text-sm font-serif">
                        Lembra dos radicais livres, aqueles vilões que destroem
                        as células? Bom, eles são ruins pra burro, mesmo. Sabia
                        que também podem causar câncer? Portanto, os antioxidantes
                        presentes no café ajudam a prevenir o desenvolvimento de alguns
                        tipos de tumores.
                    </p>
                    <a
                        href="https://uniquecafes.com.br/"
                        target="_blank"
                        className="text-blue-500 hover:underline"
                        rel="noopener noreferrer"
                    >
                        Saiba Mais
                    </a>
                    <img
                        src={Luta}
                        alt="Nutrientes do Café"
                        className="w-full md:w-[35%] h-auto rounded-lg mb-4 mx-auto"
                    />
                    <h2 className="text-2xl text-white font-bold mb-2">
                        Evita a depressão
                    </h2>
                    <p className="text-white mb-4 text-sm font-serif">
                        Compadre, o grão nosso de cada dia ajuda até no combate
                        à depressão! Por influenciar o sistema nervoso central,
                        ele aumenta a disposição, reduz a ansiedade e melhora o
                        humor. Além disso, aquele cheirinho delicioso da bebida
                        atrai mais gente para apreciar, não é? Sempre dá para ter
                        uma prosa das boas durante a interação social regada a café.
                    </p>
                </div>
            </div>

            {/* Quarta seção */}
            <div className="bg-transparent p-4 shadow-md rounded-lg flex flex-col md:flex-col items-center text-center md:text-left mb-8">
                <h2 className="text-4xl text-white font-bold mb-2">
                    Dúvidas comuns sobre os efeitos do café no organismo
                </h2>
                <img
                    src={Duvida}
                    alt="Benefícios do Café"
                    className="w-full md:w-[25%] h-auto rounded-lg mb-4 mx-auto"
                />
                <div className="w-full md:w-[65%]">
                    <p className="text-white mb-4 text-sm font-serif">
                        Mesmo que café seja tudo de bom, algumas pessoas
                        ficam em dúvida quanto aos efeitos dele ao organismo.
                        Há quem diga que ele pode fazer mal para o estômago,
                        elevar a pressão arterial e trazer outros danos à saúde.
                    </p>
                    <p className="text-white mb-4 text-sm font-serif">
                        No entanto, nós chegamos até aqui listando vários benefícios
                        do café. Afinal, qual é a verdade? O danado faz bem ou mal?
                        A resposta a essa pergunta é: depende! Assim como acontece
                        com outras bebidas e quitutes que amamos, "enfiar o pé na
                        jaca" não faz bem.
                    </p>´
                    <p className="text-white mb-4 text-sm font-serif">
                        Por mais que dê vontade de tomar de balde aquele cafezão,
                        na hora de apreciar o nosso elixir feito de grãos especiais,
                        o equilíbrio é fundamental. Dessa forma, lembre-se do exemplo
                        deixado pelo álcool: aprecie a bebida com moderação. Na dúvida,
                        consulte um profissional de saúde, que poderá recomendar a
                        quantidade ideal de café para você.
                    </p>
                    <a
                        href="https://uniquecafes.com.br/"
                        target="_blank"
                        className="text-blue-500 hover:underline"
                        rel="noopener noreferrer"
                    >
                        Saiba Mais
                    </a>
                </div>
            </div>
            <div className="bg-transparent p-4 shadow-md rounded-lg flex flex-col md:flex-col items-center text-center md:text-left mb-8">
                <h2 className="text-4xl text-white font-bold mb-2">
                    Dicas para se beneficiar com os nutrientes do café
                </h2>
                <div className="w-full md:w-[65%]">
                    <p className="text-white mb-4 text-sm font-serif">
                        Sabemos que o café traz vantagens para a saúde. Agora,
                        como podemos aproveitar ao máximo as propriedades dele?
                        Nossa dica de ouro é utilizar apenas grãos de qualidade,
                        que conservam as características  naturais do fruto,
                        como sabor, aroma e nutrientes.
                    </p>
                    <p className="text-white mb-4 text-sm font-serif">
                        Certo, mas quais são esses grãos? Aqueles que não têm
                        defeitos ou impurezas, nem passam por torras extrafortes
                        Você pode identificar um café de baixa qualidade pelo
                        sabor amargo que chega a dar nó na língua, ou mesmo pelo
                        cheiro de queimado. Nesses, você não encontra nutriente algum.
                    </p>
                    <p className="text-white mb-4 text-sm font-serif">
                        Por fim, vale incrementar seu ritual cafeeiro com alimentos
                        nutritivos que realçam o sabor da bebida. Sabe a tal da
                        harmonização? Então, que tal complementar o cantinho do
                        café com chocolate 70% cacau, cookies integrais, amêndoas
                        e castanhas? Assim, você potencializa os efeitos benéficos
                        enquanto aprecia outras delícias saudáveis.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Saude;
