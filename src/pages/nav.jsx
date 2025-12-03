import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Nav() {
    const navigate = useNavigate();

    useEffect(() => {
        if (window.componentHandler) {
            window.componentHandler.upgradeDom();
        }
    });

    return (
        <>
            <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <header class="mdl-layout__header">
                    <div class="mdl-layout__header-row">
             
                        <span class="mdl-layout-title">MENU</span>
                      
                        <div class="mdl-layout-spacer"></div>
                
                        <nav class="mdl-navigation mdl-layout--large-screen-only">
                            <a class="mdl-navigation__link" href="">Link</a>
                            <a class="mdl-navigation__link" href="">Link</a>
                            <a class="mdl-navigation__link" href="">Link</a>
                            <a class="mdl-navigation__link" href="">Link</a>
                        </nav>
                    </div>
                </header>
                <div class="mdl-layout__drawer">
                    <span class="mdl-layout-title">Title</span>
                    <nav class="mdl-navigation">
                        <Link to="/persona" class="mdl-navigation__link">Persona</Link>
                        <Link to="/product" class="mdl-navigation__link">Product</Link>
                        <Link to="/contactos" class="mdl-navigation__link">Contactos</Link>
                        <Link to="/compras" class="mdl-navigation__link">Compras</Link>
                    </nav>
                </div>
                <main class="mdl-layout__content">
                    <div class="page-content">
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    );
}