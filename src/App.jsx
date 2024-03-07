import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header titulo="ADOPTA UN PERRITO" />
      <div className="d-flex flex-row">
        <MyCard
          image="https://images.pexels.com/photos/3726315/pexels-photo-3726315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Bartolo"
          description="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
          color="success"
          tag="Husky"
        />
        <MyCard
          image="https://images.pexels.com/photos/11140668/pexels-photo-11140668.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Messi"
          description="Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"
          color="primary"
          tag="Bobtail"
        />
        <MyCard
          image="https://images.pexels.com/photos/12287391/pexels-photo-12287391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Gohan"
          description="Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional!"
          color="danger"
          tag="Shar Pei"
        />
        <MyCard
          image="https://images.pexels.com/photos/14962140/pexels-photo-14962140/free-photo-of-perro-mascota-mono-pelo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Princesa"
          description="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!"
          color="warning"
          tag="Beagle"
        />
      </div>
      <Footer />
    </>
  );
};

export default App;