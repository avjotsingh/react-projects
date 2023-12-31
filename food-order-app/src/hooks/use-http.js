import { useCallback, useState } from "react";

const useHttp = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);

        await fetch(requestConfig.url, {
            method: requestConfig.method ? requestConfig.method : 'GET',
            headers: requestConfig.headers ? requestConfig.headers : {},
            body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
        }).then(response => {
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            return response.json()
        })
        .then(data => applyData(data))
        .catch(err => {
            setError('Oops! Something went wrong.');
        })
        .finally(() => setIsLoading(false));
    }, [])

    return {
        isLoading,
        error,
        sendRequest
    }

}

export default useHttp;