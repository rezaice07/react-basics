
import axios from 'axios';

export default class Car {    
  
    async getPosts() {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

          console.log(response.data);

          return await response.data;
        } catch (error) {
          console.error(error);
        }
      }

    getPosts2() {
        return (
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response=>{
                //console.log(response.data);
                return response.data;
            }).catch(error=>{console.log(error)})
        )
      
    }
}