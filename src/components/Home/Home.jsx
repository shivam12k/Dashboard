import Footer from '../Footer';
import HomeHeader from './HomeHeader';
import MainTable from './Table/MainTable';

import './home.css';
const Home = () => {
  return (
    <main className='main-container '>
      <HomeHeader/>
      <div className='main-title flex flex-col justify-center items-center'>
  <MainTable/>
  <Footer/>
</div>

     
    
    
    </main>
  )
}

export default Home
