import Users from "../models/Users";
import Pools from "../models/Pools";
import jwt from "jsonwebtoken";
import Cuadros from "../models/Cuadros";
require("dotenv").config();


export const userData = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(
      token.split(" ")[1],
      process.env.PASS_TOKEN,
      {
        algorithm: "HS256",
      }
    );
    const email = decodedToken.email;

    const user = await Users.findOne({ email: email });
   
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    res.json(user);
  } catch (error) {
    console.log(error);
  }
};


export const cambiarEstado = async (req,res) => {

    try {
      const { user } = req.body;
      const usuario = await Users.findOne({username:user});
      usuario.complete = false;
      usuario.save();
      res.status(200).json({msg:user})
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }; 



 export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();
    //console.log(users)
    res.json(users);
  } catch (error) {
    console.error("Error al obtener todos los usuarios:", error.message);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};


export const deleteUser = async (req, res) => {
  try {
    const {dataUser} = req.body
   
    if (!dataUser) {
      // Si el usuario no se encuentra, responde con un mensaje de error
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const user = await Users.findByIdAndDelete(dataUser._id);

    res.status(200).json("borrado satisfactoriamente");
  } catch (error) {
    console.log(error);
  }
};



export const activarUsuario = async (req, res) => {
  try {
    const username = req.body.username
    console.log(username);

    const user = await Users.findOne({ username:username });
   
    if (!user) {
      return res.status(400).json({ message: `User ${username} does not exist` });
    }
  // Activar al usuario actual
    user.active = true;
    
    await user.save();
    return res.status(200).json({ message: "User activated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error"});
  }
};



export const subirNivel = async (req, res) => {
  const { username } = req.body;

  try {
    const usuario = await Users.findOne({ username: username });

    usuario.nivel = usuario.nivel - 1;

    await usuario.save();

    const poolCorrespondiente = await Pools.findOne({ nivel: usuario.nivel });

    if (!poolCorrespondiente) {
      return res.status(408).json({ error: 'Pool correspondiente no encontrado' });
    }
    if (!poolCorrespondiente.cuadros) {
      return res.status(407).json({ error: 'La propiedad cuadros es nula o indefinida en el pool correspondiente' });
    }

  
///////////////////////////////////////////

    // Buscar el cuadro con legend igual a referral_father, lo encuentro
    const cuadroEncontrado = poolCorrespondiente.cuadros.find(cuadro => cuadro.legend === usuario.referral_father)
    
    if (cuadroEncontrado) {
      const cuadroId = cuadroEncontrado._id;
      const cuadroSiguiente = await Cuadros.findOne({_id:cuadroId})
      if (usuario.direction === "derecha") {
        if (!cuadroSiguiente.lado_derecho.guide) {
          cuadroSiguiente.lado_derecho.guide = usuario.username;
          usuario.cuadro_id = cuadroSiguiente._id
          usuario.save();
          return cuadroSiguiente.save();
        }
      }
      
      if (usuario.direction === "izquierda") {
        if (!cuadroSiguiente.lado_izquierdo.guide) {
          cuadroSiguiente.lado_izquierdo.guide = usuario.username;
          usuario.cuadro_id = cuadroSiguiente._id;
          usuario.save();
          return cuadroSiguiente.save();
        }
      }
    }

   else if (!cuadroEncontrado) {
      const cuadroEncontrado2 = poolCorrespondiente.cuadros.find(cuadro => cuadro.lado_derecho.guide === usuario.referral_father)

      if (cuadroEncontrado2) {
       // console.log("soy guia der")
        const cuadroId = cuadroEncontrado2._id;
        const cuadroSiguiente = await Cuadros.findOne({_id:cuadroId})

        if (usuario.direction === "derecha") {
          if (!cuadroSiguiente.lado_derecho.builders1.username) {
            cuadroSiguiente.lado_derecho.builders1.username = usuario.username;
            usuario.cuadro_id = cuadroSiguiente._id
            usuario.save();
            return cuadroSiguiente.save();
          }
        }
      
        if (usuario.direction === "izquierda") {
         // console.log("guia dere- soy lado izq")
          if (!cuadroSiguiente.lado_derecho.builders2.username) {
            console.log("builder2 no existe en la derecha")
            cuadroSiguiente.lado_derecho.builders2.username = usuario.username;
            usuario.cuadro_id = cuadroSiguiente._id;
            usuario.save();
            return cuadroSiguiente.save();
          }
          else {console.log("ya hay recluiter 2 en el cuadro:", cuadroSiguiente.lado_derecho.builders2.username )}
        }
      }
      else if (!cuadroEncontrado2) {
        console.log("soy guia izq")
        const cuadroEncontrado3 = poolCorrespondiente.cuadros.find(cuadro => cuadro.lado_izquierdo.guide === usuario.referral_father) 
        const cuadroId = cuadroEncontrado3;
        const cuadroSiguiente = await Cuadros.findOne({_id:cuadroId})

        if (cuadroSiguiente) {
          if (usuario.direction === "derecha") {
            if (!cuadroSiguiente.lado_izquierdo.builders1.username) {
              cuadroSiguiente.lado_izquierdo.builders1.username = usuario.username;
              usuario.cuadro_id = cuadroSiguiente._id
              usuario.save();
              return cuadroSiguiente.save();
            }
          }
      
          if (usuario.direction === "izquierda") {
            if (!cuadroSiguiente.lado_izquierdo.builders2.username) {
              cuadroSiguiente.lado_izquierdo.builders2.username = usuario.username;
              usuario.cuadro_id = cuadroSiguiente._id;
              usuario.save();
              return cuadroSiguiente.save();
            }
          } 
    
        }
        else { 
          const abueloEncontrado = await buscarAbueloRecursivo(poolCorrespondiente, usuario.referral_father);
      
          if (abueloEncontrado) {
            console.log("abuelo encontrado", abueloEncontrado)
          } else {
              // Si no se encuentra el cuadro ni el "abuelo", devolver un error
              return res.status(410).json({ error: 'No se encontró el cuadro ni el abuelo en el linaje.' });
          }
         }
      }
   }
  
   

    // buscar el cuadro donde aparezca el referal, si es el guia derecho
    
   
    return res.status(205).json({ msg: 'todo ok' });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Hubo un error en el servidor' });
  }
};




const buscarAbueloRecursivo = async (pool, referralFather) => {
  const usuario = await Users.findOne({ username: referralFather }).select('referral_father').lean();

  if (!usuario || !usuario.referral_father) {
      return null; // Llegaste al primer usuario sin referral_father
  }

  const cuadroEncontrado = pool.cuadros.find(cuadro => {
      const referalFatherCuadro = cuadro.lado_derecho?.guide || cuadro.lado_izquierdo?.guide;
      return referalFatherCuadro === usuario.referral_father;
  });

  if (cuadroEncontrado) {
      return cuadroEncontrado;
  } else {
      // Llamada recursiva para buscar en el siguiente nivel de la cadena
      return buscarAbueloRecursivo(pool, usuario.referral_father);
  }
};
