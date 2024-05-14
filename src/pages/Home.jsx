import React from "react";
import Landing from '../components/Landing'
import Marquepage from './Marquepage'
import Classes from "../components/Classes"
import FAQ from "../components/FAQ"

const Home = ({ isLoggedIn }) => {
  return (
    <div className=' mt-24'>
      {/* <div className='h-screen width-full bg-slate-500'>We can add some other thing</div> */}
      <Landing />
      {/* <div className='h-screen width-full bg-slate-500'>We can add some other thing</div> */}
      <div className='!overflow-hidden'>
        <Classes />
      </div>
      <Marquepage />
      <FAQ />
    </div>
  );
};

export default Home;
