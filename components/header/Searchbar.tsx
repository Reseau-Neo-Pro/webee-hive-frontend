import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [filters, setFilters] = useState({
    pseudo: '',
    status: '',
    job: ''
  });
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    const { pseudo, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [pseudo]: value
    }));
  };


  //va chercher les resultats de la recherche renvoyé par l'API back pour affiché dans la liste
  const handleSearch = () => {
    axios
      .get('/api/search', { params: filters })
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        console.error('Error searching products:', error);
      });
  };

  return (
    <div>
      <input
        type="text"
        name="pseudo"
        placeholder="Pseudo"
        value={filters.pseudo}
        onChange={handleInputChange}
      />
       <input
        type="text"
        name="job"
        placeholder="Job"
        value={filters.job}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="status"
        placeholder="Status"
        value={filters.status}
        onChange={handleInputChange}
      />

    <div className='border-2 px-3 py-2 rounded-2xl min-w-[300px] '>
      <button className=' w-52 text-black focus:outline-none focus:placeholder-transparent' onClick={handleSearch}>Rechercher sur WeBEE HIVE</button>

      <ul>
        {results.map((result) => (
          <li key={result._id}>{result.pseudo}</li>
        ))}
      </ul>

    </div>
    
    </div>
  );
};

export default SearchBar;





/*************partie back**********************************/

// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();

// mongoose.connect(process.env.DATABASE_URL)
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });

// const productSchema = new mongoose.Schema({
//   pseudo: String,
//   job: String,
//   status: String
// });

// const Product = mongoose.model('Product', productSchema);

// app.get('/api/search', (req, res) => {
//   const { pseudo, job, status } = req.query;
//   const filters = {};

//   if (pseudo) {
//     filters.pseudo = pseudo;
//   }
//   if (job) {
//     filters.job = job;
//   }
//   if (status) {
//     filters.status = status;
//   }

//   Product.find(filters)
//     .then((results) => {
//       res.json(results);
//     })
//     .catch((error) => {
//       console.error('Error searching products:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     });
// });

// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });


// import { useState } from "react";
// import { FaSearch } from "react-icons/fa"
// import searchData from "../../api/users/searchData.json"




// const Searchbar = () => {
//   const [query, setQuery] = useState("")


//   return (

//     <div className="searchBar  ">


//       <div className='border-2 px-3 py-2 rounded-2xl min-w-[300px] '>

//         <input className=' w-52 text-black focus:outline-none focus:placeholder-transparent'
//           type="text"
//           placeholder='Rechercher sur WeBEE HIVE '
//           onChange={(e) => setQuery(e.target.value)}

//         />
        
// <FaSearch className="text-black"/>

//       </div>

//       <ul className="list">

//         {searchData.filter((user) => user.nom.toLocaleLowerCase().includes(query)).map(user => (
//           <li key={user.id} className="listItem">
//             {user.nom}
//           </li>

//         ))}

//       </ul>
//     </div >

    

//   )
// }

// export default Searchbar;