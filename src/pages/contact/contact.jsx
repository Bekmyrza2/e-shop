import React from "react";
import {Phone} from 'phosphor-react';
import {MapPinLine} from 'phosphor-react';
import {AddressBook} from 'phosphor-react';
import "./contact.css";

export const Contact = () => {
  return (
  <div className="contact">
      <div className="container">
        <h3>Наши контакты</h3>
        <p>Мы занимаемся продажой Apple продукций, аксессуары, гаджеты и прочие техники.</p>
        <div className="row">
          <div>
            <div>
              <div>
                <Phone size={64} />
                <h4>Звоните</h4>
                <p>+996 555 55 45 55, +996 777 77 70 77</p>
                </div>
              </div>
            </div>
            <div>
                <div>
                   <div>
                     <MapPinLine size={64} />
                     <h4>Наш офис</h4>
                    <address>Osh, Kyrgyzstan</address>
                   </div>
                 </div>
            </div>  
            <div>
                <div>
                   <div>
                     <AddressBook size={64}/>
                     <h4>Почта</h4>
                     <p>http://superstore@gmail.com</p>
                   </div>
                 </div>
              </div>  
            </div>
          </div>
    </div>
  )
};
