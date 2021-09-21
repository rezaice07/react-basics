
import axios from 'axios';

export default class Car {    
  
    async getPosts() {      
      const response = await axios('https://jsonplaceholder.typicode.com/posts');  
      return await response.data;        
    } 
    
    hello = () => {
      return 'Car Info Here!'
    }
}