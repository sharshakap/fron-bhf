import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  const rol = "funcionario";
  return (
    <>
      <div className="p-5 text-center bg-light">
        <h1 className="mb-3">Sistema de gestión de noticias y eventos UCN</h1>
        <h4 className="mb-3">Bienvenido USUARIO</h4>
      </div>
      <>
        <h2>FUNCIONARIO</h2>
        <div className="cards">
          <div className="card">
            <h5>Crear Solicitud de Beca</h5>
            <p className="card__text">Permite ingresar una nueva solicitud  si es que es posible y no hay una en curso para la misma persona.</p>
            <Link href="/crear-solicitud"><a className="button__funcionalidades">IR</a></Link>
          </div>
          <div className="card">
            <h5>Revisar Solicitud de Beca</h5>
            <p className="card__text">Permite revisar el estado de solicitud de beca, si es que hay una en curso.</p>
            <Link href="/mis-solicitudes"><a className="button__funcionalidades">IR</a></Link>
          </div>
          <div className="card">
            <h5>Mis Datos</h5>
            <p className="card__text">Permite ver o editar mis datos de contacto.</p>
            <Link href="/mis-datos"><a className="button__funcionalidades">IR</a></Link>
          </div>
        </div>


        <hr />
        <h2>DIRECCION DE PERSONAS</h2>
        <div className="cards">
          <div className="card">
            <h5>Crear solicitud por un tercero</h5>
            <p>Permite ingresar una nueva solicitud  si es que es posible y no hay una en curso para la misma persona.</p>
            <Link href="/crear-solicitud-dpe"><a className="button__funcionalidades">IR</a></Link>
          </div>
          <div className="card">
            <h5>Revisar nuevas solicitudes</h5>
            <p>Despliega todas las solicitud pendientes.</p>
            <Link href="/nuevas-solicitudes"><a className="button__funcionalidades">IR</a></Link>
          </div>
          <div className="card">
            <h5>Historial de solicitudes</h5>
            <p>Se muestra el historial de todas las solicitudes hechas.</p>
            <Link href="/historial-solicitudes"><a className="button__funcionalidades">IR</a></Link>
          </div>
          <div className="card">
            <h5>Solicitudes estado Pendiente</h5>
            <p>Se muestra el historial de todas las solicitudes con estados pendientes</p>
            <Link href="/solicitudes-pendientes"><a className="button__funcionalidades">IR</a></Link>
          </div>
        </div>

        <hr />
        <h2>Test</h2>
        <div className="cards__test">
          <div className="card">
            <h5>Test</h5>
            <Link href="/test"><a className="button__funcionalidades">IR</a></Link>
          </div>
        </div>

      </>
    </>
  );
};

export default Home;