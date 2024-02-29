import Navbar from '../components/Navbar';
import Artists from '../components/Artists';

const Home = () => {

  return (
    <>
      <div>
        <Navbar isLoginPage={false}/>
        <Artists />
      </div>
    </>
  );
}

export default Home;
