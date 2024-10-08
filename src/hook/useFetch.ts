import { useState, useEffect } from "react";
import axios from "axios";
import { DOMAIN } from "@/env";

export const useFetch = (endpoint: string, key: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const localStore = localStorage.getItem(key);
                const currentTime = new Date().getTime();
                
                if (localStore == null) {
                    const response = await axios.get(`${DOMAIN}/api/v1/${endpoint}`);
                    const dataToStore = {
                        value: response.data.data,
                        timestamp: currentTime,
                    };
                    localStorage.setItem(key, JSON.stringify(dataToStore));
                    setData(response.data.data);
                } else {
                    const storedData = JSON.parse(localStore);
                    
                    if (currentTime - storedData.timestamp > 86400000) {
                        localStorage.removeItem(key);
                        const response = await axios.get(`${DOMAIN}/api/v1/${endpoint}`);
                        const freshData = {
                            value: response.data.data,
                            timestamp: currentTime,
                        };
                        localStorage.setItem(key, JSON.stringify(freshData));
                        setData(response.data.data);
                    } else {
                        setData(storedData.value);
                    }
                }
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint, key]);

    return { data, loading, error };
};
