import React from "react";
import { travels } from './datas/travelsDatas'

import Travel from "./Travel";
// src/Travel.js

const Travels = () => (
    <div>
      {travels.map(travelData => (<Travel image={travelData.image} country={travelData.country} destination={travelData.destination} distance={travelData.distance} />
)

      )}
    </div>
  );
  
export default Travels;
