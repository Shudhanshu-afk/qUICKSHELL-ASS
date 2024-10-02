import High from '../assets/High.svg';
import Low from '../assets/Low.svg';
import Medium from '../assets/Medium.svg';
import No from '../assets/No-priority.svg';
import Urgent from '../assets/Urgent.svg';
import greyurgent from '../assets/greyurgent.svg';
import Backlog from '../assets/Backlog.svg';
import todo from '../assets/To-do.svg';
import inprogress from '../assets/in-progress.svg';
import done from '../assets/Done.svg';
import canceled from '../assets/Cancelled.svg';


export const getPriorityIcon = (priority) => {
    switch (priority) {
        case "No priority": return <img src={No} alt="" />
        case "Low": return <img src={Low} alt="" />
        case "Medium": return <img src={Medium} alt="" />
        case "High": return <img src={High} alt="" />
        case "Urgent": return <img src={Urgent} alt="" />
        default: return <img src={greyurgent} alt="" />
    }
}

export const getStatusIcon = (priority) => {
    switch (priority) {
        case "Backlog": return <img src={Backlog} alt="" />
        case "Todo": return <img src={todo} alt="" />
        case "In progress": return <img src={inprogress} alt="" />
        case "Done": return <img src={done} alt="" />
        case "Canceled": return <img src={canceled} alt="" />
       
    }
}