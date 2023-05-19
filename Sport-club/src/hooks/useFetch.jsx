import axios from 'axios';
import { useState, useEffect } from 'react';


const useFetch = (url, options) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const res = await axios(url, {
                method: options.method,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: options.body,
                notify: options.notify
            })
            const json = await res.data
            setResponse(json)
            setIsLoading(false)
        } catch (error) {
            setError(error)
        }
    }
    


    return { fetchData, response, error, isLoading }
}

export default useFetch
