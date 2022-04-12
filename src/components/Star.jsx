import { FaStar } from "react-icons/fa";
function Star ( { filled, onClick } )
{
    return (
        <FaStar
            color={ filled ? "yellow" : "lightgray" }
            onClick={onClick } />
    );
}
export default Star;