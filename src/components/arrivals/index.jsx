import React from 'react';
import './index.css';
import collection1 from "../../assets/collection1.jpg";
import collection2 from "../../assets/collection2.jpg";
import collection3 from "../../assets/collection3.jpg";
import collection4 from "../../assets/collection4.jpg";
import collection5 from "../../assets/collection5.jpg";
import collection6 from "../../assets/collection6.jpg";
import { Card } from '../card';

const collections = [
  collection1,
  collection2,
  collection3,
  collection4,
  collection5,
  collection6,
];

export const Arrivals = () => {
  return (
    <section className='arrivals'>
      <div className="container">
        <div className="arrivals__header">
          <h2 className="title-2">NEW ARRIVALS</h2>
        </div>
        <div className="arrivals__card">
          {collections.map((collection, index) => (
            <Card key={index} img={collection} title={`Collection ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};
