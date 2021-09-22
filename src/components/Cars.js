
import axios from 'axios';

export default class Car {    
  
    getPosts=async ()=> {      
      const response = await axios('https://jsonplaceholder.typicode.com/posts');  
      return await response.data;        
    } 
    
    hello = async () => {
      return 'Car Info Here!'
    }
}