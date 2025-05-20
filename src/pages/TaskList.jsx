import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import TaskRaw from "./components/TaskRaw";

export default function TaskList() {

    const { tasks, setTasks } = useContext(GlobalContext);

    return (
        <>
            <h1>TaskList</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"><h5>Nome</h5></th>
                        <th scope="col"><h5>Stato</h5></th>
                        <th scope="col"><h5>Data di Creazione</h5></th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => {
                        console.log(task)
                        const dateObj = new Date(task.createdAt);
                        const formattedDate = dateObj.toLocaleDateString("it-IT");
                        const formattedTime = dateObj.toLocaleTimeString("it-IT", {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: false
                        });

                        return (
                            <TaskRaw
                                key={task.id}
                                task={task}
                                formattedDate={formattedDate}
                                formattedTime={formattedTime}
                            />
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}