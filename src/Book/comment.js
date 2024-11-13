import react from 'react';
import {userName} from 'login';


export function Comment (message, chatUserName) {
    const report = "";
    if ({userName} = {chatUserName}) {
        report = "selfReport";
    } else {
        report = "otherReport";
    }

    return (
        <tr>
            <td className="messages" id={report}>{message}</td>                    
        </tr>
    );
}