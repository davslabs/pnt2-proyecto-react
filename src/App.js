import React, {useState, useEffect} from 'react';
import { BeerImage, BeerDetails, Card, Button } from './components';
import { fetchBeers } from './utils/fetch';
import './index.css';

export const App = () => {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    const response = await fetchBeers();
    setBeers(response);
  }

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <div className='container'>
      {beers && beers.map((beer, idx) => (
        <Card key={idx}>
          <BeerImage url={beer.label} />
          <BeerDetails
            title={beer.name}
            type={beer.type}
            abv={beer.abv}
          />
          <Button text="Comprar" onClickHandle={() => alert('Comprar')}/>
        </Card>
      ))}
    </div>
  );
}
