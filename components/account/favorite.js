import userContext from "context/user/userContext";
import Image from "next/image";
import { useContext } from "react"

export default function Favorite({favorite}) {
    const UserContext = useContext(userContext)
    const { deleteFavorite } = UserContext

    const onDelete = () => {
        deleteFavorite(favorite.id)
    }


    return (
        <>
       <div class="bg-white rounded-lg shadow-md flex p-4">
        <Image
                src={favorite.Product?.urlImage}
                alt={favorite.Product?.name}
                width={150}
                height={250}
            />
        <div class="flex-grow mx-10">
          <h2 class="text-xl font-semibold text-gray-900 mb-2">{favorite.Product?.name}</h2>
          <p class="text-gray-700 mb-4">Precio: ${favorite.Product?.price - favorite.Product.descuento}</p>
            <p class="text-gray-500 mb-4 line-through">Precio Original: {favorite.Product?.price}</p>
       
          <button 
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            onClick={()=>addToCart(favorite.Product)}
          >Añadir al carrito</button>
          <button 
            class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 mt-5"
            onClick={onDelete}
          >Eliminar de favorito</button>
        </div>
      </div>
        </>
    )
  }
