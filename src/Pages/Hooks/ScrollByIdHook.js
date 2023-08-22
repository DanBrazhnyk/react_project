import { useState} from 'react';

const useCustomScrollHook = () => {
  const [valueButton, setValueButton] = useState("All");
  const scrollById = (value) => {
    
    setValueButton(value);
    if(value==="available")
    {document.getElementById(value).scrollIntoView({behavior:'smooth'});}else
    if(value==="new-products")
    {document.getElementById('new-products').scrollIntoView({behavior:'smooth'})
    setValueButton("All");
  }else
    {
      document.getElementById('our-store').scrollIntoView({behavior:'smooth'})

    }
  };
  return { valueButton, scrollById };
};

export default useCustomScrollHook;
