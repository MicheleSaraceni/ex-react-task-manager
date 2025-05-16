import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(`${apiUrl}/tasks`);
                const data = await res.json();
                setTasks(data);
                console.log("Dati ricevuti: ", data);
            }
            catch (error) {
                console.error("Errore di recupero dati: ", error)
            }
        }
        getData();
    }, [])

    return (
        <GlobalContext.Provider value={{ tasks, setTasks }}>
            {children}
        </GlobalContext.Provider>
    )
}


export { GlobalContext, GlobalProvider }