import { useContext } from 'react';
import { context } from '../components/CartContext/CartContext';

const useMyContext = () => useContext(context);

export default useMyContext;
