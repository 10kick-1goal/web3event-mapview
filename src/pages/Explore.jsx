import { useEffect, useState } from "react";
import axios from "axios";

const Explore = () => {
    const [ eventData, setEventData ] = useState();
    useEffect (() => {
        axios({
            method: 'post',
            // url: 'http://localhost:3001/web3event/api/v1/events/query',
            url: 'https://www.web3event.org/web3event/api/v1/events/query',
            data: {
                "pages": 0,
                "page_size": 20,
                "keywords": "",
                "topic": null,
                "pay": null,
                "status": 1,
                "query_type": 0
            }
        })
        .then ((response) => {
            console.log(response);
        },(error) => {
            console.log(error)
        });
    },[])

    return (
        <div>
            explore
        </div>
    );
}

export default Explore;