"use client"
import React, { useState, useEffect } from 'react';
import { useApiContext } from "../../../context/apiContext";
import "../sideBar/sidebar.css";
import Swal from "sweetalert2";


const InactiveUsers = () => {

  
    const {
      inactiveUsers,
      activarUsuario,
      desactivarUsuario,
      dataCuadro,
      dataUser,
      cuadroIdHijo,
      traerCuadroPadre,
      hijoIzq,
      cambiarEstadoComplete,
      hijoDer,
      createCuadros,
      deleteUser,
      deleteCuadro,
      fatherComplete,
      remindFatherFn,
      legend
    } = useApiContext();
    
  
  
    const [ascender, setAscender] = useState(false);
    const [showList, setShowList] = useState(true);
    const [showButton, setShowButton] = useState(true);
    const [usuariosInactivos, setUsuariosInactivos] = useState(
      inactiveUsers.filter((user) => {
        const username = user.username;
    
        // Verifica si alguna de las propiedades existe antes de comparar
        return (
          username &&
          (
            username === dataCuadro.lado_derecho.builders1?.username ||
            username === dataCuadro.lado_derecho.builders2?.username ||
            username === dataCuadro.lado_izquierdo.builders1?.username ||
            username === dataCuadro.lado_izquierdo.builders2?.username
          )
        );
      })
    );
    const [usuarioActivado, setUsuarioActivado] = useState(null);
  
    const completar_cuadro_refer = () => {
      traerCuadroPadre();
      cambiarEstadoComplete();
      setShowButton(false);
    }


    useEffect(() => {

      cuadroIdHijo();
      // Verificar si se activó un usuario recientemente
      if (usuarioActivado) {
        // Actualizar la lista de usuarios inactivos eliminando el usuario activado
        setUsuariosInactivos((prevUsuarios) =>
          prevUsuarios.filter((user) => user._id !== usuarioActivado._id)
        );
  
        // Manejar la lógica después de activar al usuario
        handlePostActivarUsuario(usuarioActivado);
  
        // Reiniciar el estado de usuario activado
        setUsuarioActivado(null);
      }
      remindFatherFn();
    }, [usuarioActivado]);
  
    const handlePostActivarUsuario = (usuario) => {
      console.log("usuario activado", usuario);
      activarUsuario(usuario.username);
  
    };
  
    const handleActivarUsuario = (usuario) => {
      // Actualizar el estado de usuario activado
      setUsuarioActivado(usuario);
      setShowList(false);

      if (usuario.level === 10) {
        console.log("soy nivel 10")
        createNewCuadro();
      }

      if (usuario.level !== 10) {
        console.log("soy otro nivel");
        createNewCuadro2()
      }
      
      
      // Verificar si alguna propiedad en dataCuadro está vacía
      const propiedades = Object.keys(dataCuadro);
      for (const propiedad of propiedades) {
        if (dataCuadro[propiedad] === null || dataCuadro[propiedad] === "") {
          console.log("esta vacia");
          return;
        }
      }
  
      if (
        !dataCuadro.lado_derecho.builders1 ||
        !dataCuadro.lado_derecho.builders2 ||
        !dataCuadro.lado_izquierdo.builders1 ||
        !dataCuadro.lado_izquierdo.builders2
      ) {
       // console.log("No se encuentran las propiedades builder", dataCuadro);
        return;
      }
      // Si todas las propiedades tienen valores, dispara la función
    setAscender(true);

    };


    const createNewCuadro2 = async () => {

      let lado;
      let builder;
      let userHijo;

      if (dataCuadro.lado_derecho.builders1 && !dataCuadro.lado_derecho.builders2) {
        lado = 'derecho';
        builder = 'builders1';
        userHijo = dataCuadro.lado_derecho.guide;
        console.log("creado cuadro para lado derecho");
      } else if (dataCuadro.lado_izquierdo.builders1 && !dataCuadro.lado_izquierdo.builders2) {
        lado = 'izquierdo';
        builder = 'builders1';
        userHijo = dataCuadro.lado_izquierdo.guide;
        console.log("creado cuadro para lado izquierdo");
      } 
    
      // Supongamos que createCuadros también devuelve información
      createCuadros(lado, builder, userHijo);
    };


    const createNewCuadro = () => {
      let lado;
      let builder;
      let userHijo;
    
      console.log (dataCuadro) 
      console.log(hijoDer)
      console.log(hijoIzq)

      if (dataCuadro.lado_derecho.builders1 && !hijoDer) {
        lado = 'derecho';
        builder = 'builders1';
        userHijo = dataCuadro.lado_derecho.guide;
        console.log("La propiedad pertenece al lado derecho, builder1");
      } else if (dataCuadro.lado_derecho.builders2 && !hijoDer) {
        lado = 'derecho';
        builder = 'builders2';
        userHijo = dataCuadro.lado_derecho.guide;
        console.log("La propiedad pertenece al lado derecho, builder2");
      } else if (dataCuadro.lado_izquierdo.builders1 && !hijoIzq) {
        lado = 'izquierdo';
        builder = 'builders1';
        userHijo = dataCuadro.lado_izquierdo.guide;
        console.log("La propiedad pertenece al lado izquierdo, builder1");
      } else if (dataCuadro.lado_izquierdo.builders2 && !hijoIzq) {
        lado = 'izquierdo';
        builder = 'builders2';
        userHijo = dataCuadro.lado_izquierdo.guide;
        console.log("La propiedad pertenece al lado izquierdo, builder2");
      } 
      
      else {
        return console.log("Todas las propiedades están vacías");
      } 

    
      // Supongamos que createCuadros también devuelve información
      createCuadros(lado, builder, userHijo);
    };
    

    const ascenderNivel = async () => {
      if (dataUser.username !== "Pablo" && dataUser.username !== "Nelson" && dataUser.username !== "Escro" ) {
        console.log("desactivar usuario")
        desactivarUsuario(dataUser.username);
      }
      
      succesLevel();
    
    
      const username = dataUser.username;
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BACKEND}user/subirNivel`,  // Ajusta la ruta según tu configuración
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username }),
        }
      ); 
      
    }



    const succesLevel = () => {
      Swal.fire({
        icon: "success",
        title: "Subiste de nivel",
        html: `
        Porfavor actualiza la pagina para ver tus cambios
      `,
        showConfirmButton: true,
      });
    }
    


    return (
      <div className="dashboard__top">
      {legend && usuariosInactivos && usuariosInactivos.length > 0 ? (
        showList && (
         <ul>
            {usuariosInactivos.map((usuario) => (
              <li key={usuario._id} className='acceptPay'>
              <p>Recibir regalo de:</p>
              <span>{usuario.email}</span> 
              <div className='buttons'>
                <button className="btnPay" onClick={() => handleActivarUsuario(usuario)} style={{backgroundColor:"rgb(8 143 8)", borderColor:"rgb(8 143 8)"}}>
                  Aceptar
                </button>
                <button className="btnPay" onClick={() => {deleteUser(usuario);setShowList(false);}} style={{backgroundColor:"red", borderColor:"red"}}>
                  Borrar
                </button>
              </div>
                
              </li>
            ))}
          </ul> )) :  <p className='noPays'>No se encuentran solicitudes</p> }
         
        
        {showButton && dataUser.complete === true ? 
        <button className="addToRefer" onClick={completar_cuadro_refer}>
        {`Agregar a ${dataUser.referidos[1]} a tu cuadro padre`}
        </button>
      
        : <p style={{display:"none"}}></p> }

        { ascender ? 
        <button className="addToRefer" onClick={ascenderNivel}>Ascender de nivel</button>
      
        : <p style={{display:"none"}}></p> }
        
        { fatherComplete ? 
          <p style={{color:"Red", fontWeight:"300", fontSize:"15px"}}>Tu padre tiene que aceptarte en su cuadro.</p>
        : <p style={{display:"none"}}></p> }
      </div>
    );
  };
  
  export default InactiveUsers;

  /* git: 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 */



 /*
      */