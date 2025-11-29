import './hotspots.css';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Leaf from '../../assets/leaf.png';

function Discover() {

const [records, setRecords] = useState([]);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);

console.log("records list ", records, typeof records);

  
useEffect(() => {
    fetch('/api/records')
      .then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status:, ${res.status}`);
        }
        return res.json() //parse as JSON
    })
      .then(data => {
        console.log("response", data, Array.isArray(data));
        setRecords(Array.isArray(data) ? data : []); //make sure it's an array
        setLoading(false);
    })
    .catch(error => {
        setError(error.message)
        console.error('fetch error:',error)
        setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

    return (
        <motion.div
            className="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="topicContainer">
                <h1 className="topicTitle">Discover</h1>
            <div>
        {records.map(record => (
          <card key={record.id}>
            
            <img src={record.imageUrl[0]} alt={record.title}
            style={{ width: "400px", height: '400px', display: 'block'}}
            />
            <h2>{record.title}</h2>
            <p>{record.artist.name}</p> {/* ← Artist info available! */}
           {/* <p>{record.description}</p> */}
          
          </card>
        ))}
                    
        </div>
      </div>
            
        </motion.div>
    );
}

export default Discover;