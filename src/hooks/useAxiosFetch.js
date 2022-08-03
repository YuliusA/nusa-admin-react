import { useState, useEffect } from 'react';
import useAxiosPrivate from './useAxiosPrivate';

const useAxiosFetch = (dataUrl) => {
    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const fetchData = async (url) => {
            try {
                const response = await axiosPrivate.get(url, {
                    signal: controller.signal
                });
                isMounted && setData(response.data);
            }
            catch (err) {
                if (isMounted) {
                    setFetchError(err.message)
                    setData([]);
                }
            }
            finally {
                isMounted && setIsLoading(false);
            }
        }

        fetchData(dataUrl);

        const cleanUp = () => {
            isMounted = false;
            controller.abort();
        }

        return cleanUp;

    }, [dataUrl]);

    return { data, fetchError, isLoading }
}

export default useAxiosFetch;