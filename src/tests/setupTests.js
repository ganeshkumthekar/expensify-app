import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from '@testing-library/react';

Enzyme.configure({ 
    adapter: new Adapter()
 });

 export default configure();