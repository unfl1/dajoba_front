import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Adduserdata from '../components/Adduserdata';
import SelfIntroList from '../components/SelfIntroList';

function Coverletterlist() {
  return (
    <div>
      <Nav />
      <Adduserdata />
      <div className="mt-24">
        <SelfIntroList />
      </div>
      <Footer />
    </div>
  );
}

export default Coverletterlist;