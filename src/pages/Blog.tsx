import { Link } from 'react-router-dom';
import '../styles/Blog.css';
import '../styles/Footer.css';

function Blog() {
    return (
        <>
            <header>
                <nav>
                    <div className="nav-brand">
                        <img src="/Flow-Logo.png" alt="Sanda Logo" />
                        <h1 className="nav-title">Sanda Blog</h1>
                    </div>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/docs">Docs</a></li>
                        <li><a href="/">Partners</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className="fade-in">
                    <h1></h1>
                    <div className="posts-grid">
                        {/* Ejemplo de una tarjeta de blog */}
                        <article className="post-card">
                            <img 
                                src="/Flow-Security-Post1.png" 
                                alt="Post thumbnail" 
                                className="post-image"
                            />
                            <div className="post-content">
                                <h2 className="post-title">Sanda Security</h2>
                                <p className="post-excerpt">
                                    Sanda Security es un proyecto de seguridad informática que ofrece soluciones de seguridad para proteger tus datos y tu privacidad, y sistemas de seguridad para portejerte de las personas maliciosas de internet.
                                </p>
                                <div className="post-meta">
                                    <span>12 Diciembre, 2024</span>
                                    <Link to="/development" className="btn">Leer más</Link>
                                </div>
                            </div>
                        </article>
                        {/* Puedes duplicar el article para más posts */}
                    </div>
                </section>
            </main>
            <footer className="footer">
    <div className="footer-container">
        <div className="footer-section brand-section">
            <h3>Sanda Security</h3>
            <p>Protegiendo tu información digital con soluciones avanzadas de ciberseguridad</p>
            
        </div>
        
        <div className="footer-section links-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/docs">Documentación</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/partners">Partners</a></li>
            </ul>
        </div>

        <div className="footer-section resources-section">
            <h4>Recursos</h4>
            <ul>
                <li><a href="/privacy">Política de Privacidad</a></li>
                <li><a href="/terms">Términos de Uso</a></li>
                <li><a href="/contact">Contacto</a></li>
                <li><a href="/support">Soporte</a></li>
            </ul>
        </div>
    </div>
    <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sanda Security. Todos los derechos reservados.</p>
    </div>
</footer>
        </>
    );
}

export default Blog;
