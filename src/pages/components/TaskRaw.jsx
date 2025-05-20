import React from "react"

export default React.memo(function TaskRaw({ task, formattedDate, formattedTime }) {

    const statusColor = {
        "To do": "rgba(255, 99, 71, 0.6)",    // rosso tenue (tomato)
        "Doing": "rgba(255, 215, 0, 0.6)",    // giallo delicato (gold)
        "Done": "rgba(144, 238, 144, 0.6)"
    }
    const bgColor = statusColor[task.status]
    return (
        <tr key={task.id} >
            <th scope="row">{task.id}</th>
            <td>{task.title}</td>
            <td style={{ backgroundColor: bgColor }}>{task.status}</td>
            <td>{formattedDate} {formattedTime}</td>
        </tr>
    )
})