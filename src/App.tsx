import { Header } from './components/Header';
import { CardGrid } from './components/CardGrid';
import { DetailSection } from './components/DetailSection';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <section className="py-6">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Conceptos básicos de GitHub</h2>
            <p className="text-gray-300 mb-8 max-w-3xl">
              Explora estos conceptos esenciales para comenzar a utilizar GitHub de manera efectiva. 
              Cada tarjeta te llevará a información detallada, comandos útiles y recursos adicionales.
            </p>
            <CardGrid />
          </div>
        </section>
        
        <section className="py-6 bg-gray-900">
          <div className="container mx-auto px-4">
            <DetailSection />
          </div>
        </section>
        
        <section className="py-12 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar con GitHub?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              GitHub es una plataforma esencial para desarrolladores modernos. 
              Comienza hoy mismo y lleva tus proyectos al siguiente nivel.
            </p>
            <a 
              href="https://github.com/signup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-900 px-6 py-3 rounded-md font-bold hover:bg-gray-200 transition-colors"
            >
              Crear una cuenta en GitHub
            </a>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2025 GitHub Basics | Creado con fines educativos
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Términos</a>
              <a href="#" className="text-gray-400 hover:text-white">Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-white">Contacto</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
