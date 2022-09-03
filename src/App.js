
import { useReducer, useMemo } from 'react';
import './App.css';
import { ChosenProduct } from './components/ChosenProduct';
import { Products } from './components/Products';
import { ProductContext } from './context/ProductContext';
import { productReducer } from './context/productReducer';
import { quantityReducer } from './context/quantityReducer';
import { idReducer } from './context/idReducer';
import { idPlusMinusReducer } from './context/idPlusMinusReducer';

function App() {
  const [productName, dispatch] = useReducer(productReducer, {})
  const [quantity, dispatchQuantity] = useReducer(quantityReducer, {})
  const [id, dispatchId] = useReducer(idReducer, {})
  const [idPlusMinus, dispatchIdPlusMinus] = useReducer(idPlusMinusReducer, {})

  const contextValue = useMemo(() => ({
    productName,
    dispatch,
    quantity,
    dispatchQuantity,
    id,
    dispatchId,
    idPlusMinus,
    dispatchIdPlusMinus
  }), [productName, dispatch, quantity, dispatchQuantity, id, dispatchId, idPlusMinus,dispatchIdPlusMinus])
  
  return (
    <div className="App">
      <ProductContext.Provider value={contextValue}>
        <Products />
        <ChosenProduct/>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
