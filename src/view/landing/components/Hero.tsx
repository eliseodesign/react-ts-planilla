import EmployeeSVG from "./EmployeeSVG"
const Hero = () => {
  return ( 
    <main className="HeroMain">

      <section className="HeroInfo">
        <h1>Gestor <br />
          Employee</h1>
        <h2>Control y Gestion de Empleados </h2>
        <p>Automatización de procesos de creación de empleado y descuentos, creación de planillas y deducciónes de ISSS y AFP, e impuesto sobre la renta</p>

        <EmployeeSVG />
      </section>

      <section className="HeroOptions">
        <a href="github.com/eliseodesign">create by @eliseodesign</a>
        <button className="button-layer">Iniciar</button>
       
      </section>

    </main>
   );
}
 
export default Hero;