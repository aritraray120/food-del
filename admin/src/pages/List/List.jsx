import axios from "axios";
import "./List.css";

function List() {

        const url = "http://localhost:4000";
    const [list, setList] = useState([]);

    async function fetchList() {

        const response = await axios.get(`${url}/api/food/list`);
        
    }

    return ( 
    
    <div>list

    </div> 


    );
}

export default List;