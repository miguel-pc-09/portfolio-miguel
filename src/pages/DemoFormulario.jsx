import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/demo-formulario.css";

function DemoFormulario() {
  // Estado con todos los datos del formulario
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
    telefono: "",
    contrasena: "",
    tipoCuenta: "",
    aceptaCondiciones: false,
  });

  // Estado para guardar errores concretos
  const [errores, setErrores] = useState({});

  // Estado para mostrar u ocultar la contraseña
  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  // Estado para mostrar mensaje correcto al enviar
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  // Función para recoger cambios de inputs y checkbox
  function manejarCambio(evento) {
    const { name, value, type, checked } = evento.target;

    setDatosFormulario({
      ...datosFormulario,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  // Validación sencilla del correo
  function correoValido(correo) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
  }

  // Función que revisa los campos antes de enviar
  function validarFormulario() {
    const nuevosErrores = {};

    if (datosFormulario.nombre.trim() === "") {
      nuevosErrores.nombre = "Introduce tu nombre.";
    }

    if (datosFormulario.apellidos.trim() === "") {
      nuevosErrores.apellidos = "Introduce tus apellidos.";
    }

    if (datosFormulario.correo.trim() === "") {
      nuevosErrores.correo = "Introduce tu correo electrónico.";
    } else if (!correoValido(datosFormulario.correo)) {
      nuevosErrores.correo = "Introduce un correo válido.";
    }

    if (datosFormulario.telefono.trim() === "") {
      nuevosErrores.telefono = "Introduce tu teléfono.";
    } else if (!/^\d{9,}$/.test(datosFormulario.telefono.trim())) {
      nuevosErrores.telefono =
        "Introduce un teléfono válido de al menos 9 cifras.";
    }

    if (datosFormulario.contrasena.trim() === "") {
      nuevosErrores.contrasena = "Introduce una contraseña.";
    } else if (datosFormulario.contrasena.length < 8) {
      nuevosErrores.contrasena =
        "La contraseña debe tener al menos 8 caracteres.";
    }

    if (datosFormulario.tipoCuenta === "") {
      nuevosErrores.tipoCuenta = "Selecciona un tipo de cuenta.";
    }

    if (!datosFormulario.aceptaCondiciones) {
      nuevosErrores.aceptaCondiciones = "Debes aceptar las condiciones.";
    }

    return nuevosErrores;
  }

  // Envío del formulario
  function manejarEnvio(evento) {
    evento.preventDefault();

    const erroresDetectados = validarFormulario();
    setErrores(erroresDetectados);

    if (Object.keys(erroresDetectados).length === 0) {
      setFormularioEnviado(true);

      setDatosFormulario({
        nombre: "",
        apellidos: "",
        correo: "",
        telefono: "",
        contrasena: "",
        tipoCuenta: "",
        aceptaCondiciones: false,
      });
    } else {
      setFormularioEnviado(false);
    }
  }

  return (
    <main className="demo-formulario">
      <div className="demo-formulario__volver">
        <Link
          to="/proyectos/formulario-web-interactivo"
          className="demo-formulario__link-volver"
        >
          ← Volver al proyecto
        </Link>
      </div>
      <section className="demo-formulario__contenedor">
        <div className="demo-formulario__info">
          <p className="demo-formulario__mini">Proyecto destacado</p>

          <h1>Formulario Web Interactivo</h1>

          <p className="demo-formulario__texto">
            Proyecto centrado en el diseño de una interfaz de registro moderna,
            con atención al detalle visual, la usabilidad y una experiencia de
            formulario clara tanto en escritorio como en móvil.
          </p>

          <p className="demo-formulario__texto-secundario">
            Su diseño está planteado siguiendo referencias habituales de buenas
            prácticas en formularios, como etiquetas visibles sobre los campos,
            errores cercanos al input y una estructura pensada para reducir
            fricción y mejorar la claridad del recorrido del usuario.
          </p>

          <div className="demo-formulario__puntos">
            <article className="demo-formulario__tarjeta-info">
              <span className="demo-formulario__icono">01</span>
              <div>
                <h3>Jerarquía visual clara</h3>
                <p>
                  Título fuerte, campos bien separados y lectura fácil desde el
                  primer vistazo.
                </p>
              </div>
            </article>

            <article className="demo-formulario__tarjeta-info">
              <span className="demo-formulario__icono">02</span>
              <div>
                <h3>Validación comprensible</h3>
                <p>
                  Mensajes directos y colocados junto a cada campo para evitar
                  dudas.
                </p>
              </div>
            </article>

            <article className="demo-formulario__tarjeta-info">
              <span className="demo-formulario__icono">03</span>
              <div>
                <h3>Diseño adaptable</h3>
                <p>
                  Estructura preparada para funcionar bien tanto en escritorio
                  como en móvil.
                </p>
              </div>
            </article>
          </div>
        </div>

        <div className="demo-formulario__panel">
          <div className="demo-formulario__marca">
            <span className="demo-formulario__marca-logo">M</span>
            <div>
              <p>Crear cuenta</p>
              <span>Interfaz de registro</span>
            </div>
          </div>

          <form
            className="formulario-registro"
            onSubmit={manejarEnvio}
            noValidate
          >
            <div className="formulario-registro__cabecera">
              <h2>Crea tu cuenta</h2>
              <p className="formulario-registro__subtexto">
                Completa tus datos para acceder a una experiencia más personal,
                clara y organizada.
              </p>
            </div>

            <div className="formulario-registro__fila">
              <div className="campo-formulario">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={datosFormulario.nombre}
                  onChange={manejarCambio}
                  aria-invalid={errores.nombre ? "true" : "false"}
                />
                {errores.nombre && (
                  <p className="error-campo">{errores.nombre}</p>
                )}
              </div>

              <div className="campo-formulario">
                <label htmlFor="apellidos">Apellidos</label>
                <input
                  type="text"
                  id="apellidos"
                  name="apellidos"
                  value={datosFormulario.apellidos}
                  onChange={manejarCambio}
                  aria-invalid={errores.apellidos ? "true" : "false"}
                />
                {errores.apellidos && (
                  <p className="error-campo">{errores.apellidos}</p>
                )}
              </div>
            </div>

            <div className="campo-formulario">
              <label htmlFor="correo">Correo electrónico</label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={datosFormulario.correo}
                onChange={manejarCambio}
                aria-invalid={errores.correo ? "true" : "false"}
              />
              {errores.correo && (
                <p className="error-campo">{errores.correo}</p>
              )}
            </div>

            <div className="campo-formulario">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={datosFormulario.telefono}
                onChange={manejarCambio}
                aria-invalid={errores.telefono ? "true" : "false"}
              />
              {errores.telefono && (
                <p className="error-campo">{errores.telefono}</p>
              )}
            </div>

            <div className="campo-formulario">
              <label htmlFor="contrasena">Contraseña</label>

              <div className="campo-formulario__contenedor-password">
                <input
                  type={mostrarContrasena ? "text" : "password"}
                  id="contrasena"
                  name="contrasena"
                  value={datosFormulario.contrasena}
                  onChange={manejarCambio}
                  aria-invalid={errores.contrasena ? "true" : "false"}
                />

                <button
                  type="button"
                  className="campo-formulario__boton-password"
                  onClick={() => setMostrarContrasena(!mostrarContrasena)}
                  aria-label={
                    mostrarContrasena
                      ? "Ocultar contraseña"
                      : "Mostrar contraseña"
                  }
                >
                  {mostrarContrasena ? "Ocultar" : "Ver"}
                </button>
              </div>

              <p className="campo-formulario__ayuda">
                Usa al menos 8 caracteres.
              </p>

              {errores.contrasena && (
                <p className="error-campo">{errores.contrasena}</p>
              )}
            </div>

            <div className="campo-formulario">
              <label htmlFor="tipoCuenta">Tipo de cuenta</label>
              <select
                id="tipoCuenta"
                name="tipoCuenta"
                value={datosFormulario.tipoCuenta}
                onChange={manejarCambio}
                aria-invalid={errores.tipoCuenta ? "true" : "false"}
              >
                <option value="">Selecciona una opción</option>
                <option value="personal">Cuenta personal</option>
                <option value="profesional">Cuenta profesional</option>
                <option value="empresa">Cuenta de empresa</option>
              </select>
              {errores.tipoCuenta && (
                <p className="error-campo">{errores.tipoCuenta}</p>
              )}
            </div>

            <div className="campo-checkbox">
              <label htmlFor="aceptaCondiciones">
                <input
                  type="checkbox"
                  id="aceptaCondiciones"
                  name="aceptaCondiciones"
                  checked={datosFormulario.aceptaCondiciones}
                  onChange={manejarCambio}
                />
                <span>Acepto las condiciones y la política de privacidad.</span>
              </label>

              {errores.aceptaCondiciones && (
                <p className="error-campo">{errores.aceptaCondiciones}</p>
              )}
            </div>

            <button type="submit" className="boton-enviar-formulario">
              Crear cuenta
            </button>

            <p className="formulario-registro__mensaje-final">
              Diseño orientado a mejorar la claridad, la confianza y la
              experiencia de registro.
            </p>

            {formularioEnviado && (
              <p className="mensaje-correcto">
                Formulario enviado correctamente.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

export default DemoFormulario;
