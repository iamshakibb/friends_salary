import React from "react";
import "./App.css";
import NavBar from "./Componant/NavBar/NavBar";
import FakeData from "./Fake data";
import { useState } from "react";
import Friendsdetail from "./Componant/FriendsDetail/Friendsdetail";
import FriendsCart from "./Componant/FriendsCart/FriendsCart";
function App() {
  const FakeDataFirst10 = FakeData.slice(0, 10);
  const [friends, setfriends] = useState(FakeDataFirst10);
  const [cart, setCart] = useState([]);
  function addBtnHandler(friend) {
    const newCart = [...cart, friend];
    setCart(newCart);
  }
  return (
    <div>
      <header className="nav-section">
        <NavBar></NavBar>
      </header>
      <main className="container friens-content">
        <div className="row">
          <section className="col-sm-12 mobile">
            <FriendsCart cart={cart}></FriendsCart>
          </section>
          <section className="col-md-9 col-sm-12 friend">
            <div className="row d-flex justify-content-center align-items-center">
              {friends.map((friend) => (
                <Friendsdetail friendinfo={friend} button={addBtnHandler} key={friend.login.md5}></Friendsdetail>
              ))}
            </div>
          </section>
          <section className="col-sm-3 desktop">
            <FriendsCart cart={cart}></FriendsCart>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
