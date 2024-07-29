// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importando react-router-dom
import Home from './pages/Home'; // Importando o componente Home
import Cafes from './pages/Cafe'; // Importando o componente Cafes
import Header from './components/Header'; // Importando o componente Header
import { ThemeProvider } from '@mui/material/styles'; // Importando o ThemeProvider do Material-UI
import theme from './Theme/theme'; // Importando o tema customizado
import Tops from './pages/Top'; // Importando o componente Tops
import Saude from './pages/Saude'; // Importando o componente Saude

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Rota para a página Home */}
                    <Route path="/cafe" element={<Cafes />} /> {/* Rota para a página Cafes */}
                    <Route path="/top" element={<Tops />} /> {/* Rota para a página Tops */}
                    <Route path="/Saude" element={<Saude />} /> {/* Rota para a página Saude */}
                    {/* Outras rotas, se houver */}
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;