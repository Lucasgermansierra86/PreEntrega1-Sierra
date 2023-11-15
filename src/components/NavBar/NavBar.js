import CardWidget from "./CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <p class="fs-2">FUSION 3D</p>
            <div>
                <button type="button" class="btn btn-outline-primary">Inicio</button>
                <button type="button" class="btn btn-outline-primary">Productos</button>
                <button type="button" class="btn btn-outline-primary">Novedades</button>
                <button type="button" class="btn btn-outline-primary">Ofertas</button>
                <button type="button" class="btn btn-outline-primary">Contacto</button>
            </div>
            <CardWidget />
        </nav>
    )
}

export default NavBar;