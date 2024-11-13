import react from 'react';


export function Comment (message) {
    return (
        <tr>
            <td className="messages"id="selfReport">{message}</td>                    
        </tr>
    );
}