import '../../styles/BlogPost.css';
import '../../styles/Development.css';

const Development = () => {
    return (
        <div className="blog-layout">
            <header>
            <nav>
                    <div className="nav-brand">
                        <img src="/Flow-Logo.png" alt="Sanda Logo" />
                        <h1 className="nav-title">Sanda Blog</h1>
                    </div>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/docs">Docs</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/">Partners</a></li>
                    </ul>
                </nav>
            </header>

            <article className="blog-post2">
                

                <div className="post-content2">
                    <div className="content-wrapper2">
                        <img 
                            src="/Flow-Security-Post1.png" 
                            alt="Sanda Security Overview" 
                            className="post-hero-image2"
                        />

                        <section className="content-section">
                            <h2>La Revolución de la Seguridad Digital</h2>
                            <p>
                                En un panorama digital en constante evolución, la seguridad 
                                se ha convertido en la piedra angular de cualquier operación online. 
                                Sanda Security emerge como una solución integral que redefine 
                                los estándares de protección digital.
                            </p>
                        </section>

                        <section className="content-section">
                            <h2>Características Innovadoras</h2>
                            <div className="feature-grid">
                                <div className="feature-card">
                                    <h3>Protección Avanzada</h3>
                                    <p>
                                        Sistema de última generación para la detección y 
                                        prevención de amenazas en tiempo real.
                                    </p>
                                </div>
                                <div className="feature-card">
                                    <h3>Monitoreo 24/7</h3>
                                    <p>
                                        Vigilancia continua de actividades sospechosas y 
                                        respuesta inmediata ante incidentes.
                                    </p>
                                </div>
                                <div className="feature-card">
                                    <h3>Cifrado End-to-End</h3>
                                    <p>
                                        Protección completa de datos sensibles durante 
                                        su transmisión y almacenamiento.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="content-section">
                            <div className="info-box">
                                <h3>¿Por qué elegir Sanda Security?</h3>
                                <ul>
                                    <li>Implementación rápida y sin interrupciones</li>
                                    <li>Soporte técnico especializado 24/7</li>
                                    <li>Actualizaciones automáticas de seguridad</li>
                                    <li>Interfaz intuitiva y fácil de usar</li>
                                </ul>
                            </div>
                        </section>

                        <section className="content-section">
                            <h2>Conclusión</h2>
                            <p>
                                Sanda Security representa el futuro de la seguridad digital, 
                                ofreciendo una solución robusta y escalable para los desafíos 
                                de seguridad modernos.
                            </p>
                        </section>
                    </div>

                    <aside className="post-sidebar2">
                        <div className="sidebar-content">
                            <div className="table-of-contents">
                                <h4>Contenido</h4>
                                <ul>
                                    <li><a href="#revolucion">La Revolución Digital</a></li>
                                    <li><a href="#caracteristicas">Características</a></li>
                                    <li><a href="#porque">¿Por qué Sanda?</a></li>
                                    <li><a href="#conclusion">Conclusión</a></li>
                                </ul>
                            </div>
                            
                            <div className="share-section">
                                <h4>Compartir</h4>
                                <div className="share-buttons">
                                    <a className="share-btn twitter" href="https://x.com/SandaSecurity"><i className="fab fa-twitter"></i> Twitter</a>
                                    <a className="share-btn linkedin" href="https://github.com/Deff-Studio"><i className="fab fa-linkedin"></i> GitHub</a>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </article>

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
        </div>
        
    );
};

export default Development;