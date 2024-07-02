import React, { useEffect, useState } from 'react';
import Styles from './page.module.css';
import Items from './components/Items';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [companyName, setCompanyName] = useState('');
  const [companies, setCompanies] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const navi = useNavigate();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://localhost:3002/');
        setFilteredItems(response.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };
    fetchCompanies();
  }, []);


  const handleFilterSubmit = async (cmpy) => {
    console.log(companyName);
    try {
      const response = await axios.post('http://localhost:3002/', {
        companyName: cmpy,
      });
      setFilteredItems(response.data);
    } catch (error) {
      console.error('Error filtering data:', error);
    }
  };

  return (
    <div className={Styles.Container}>
      <div className='w-full items-center p-4 flex justify-between'>
        <div className='flex gap-8 items-center justify-between'>
          <select value={companyName} onChange={(e) => {setCompanyName(e.target.value);handleFilterSubmit(e.target.value);}}>
            <option value="">Select a company</option>
              <option value="AMZ">AMZ</option>
              <option value="FLP">FLP</option>
              <option value="SNP">SNP</option>
              <option value="MYN">MYN</option>
              <option value="AZO">AZO</option>
          </select>
          <button onClick={()=>handleFilterSubmit(companyName)}>Filter</button>
        </div>
        <div onClick={()=>navi("list")} className='cursor-pointer'>All Filter</div>
      </div>
      <div>
        <Items items={filteredItems} />
      </div>
    </div>
  );
}

export default HomePage;
