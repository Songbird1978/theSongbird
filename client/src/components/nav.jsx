import AnimatedLeafButton from "../components/button.jsx";
import { useNavigate } from "react-router-dom";

function Nav() {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col md:flex-row md:justify-evenly h-auto mt-10 mb-10 !text-xs !text-gray-950 !font-courier" >
                <AnimatedLeafButton
                    className="navLeaf text-black"
                    text="Songbird Records"
                    ariaLabel="Songbird Records"
                    to="/ogruRecords"
                    onClick={() => navigate("/ogruRecords")}
                >Songbird Records</AnimatedLeafButton>
                <AnimatedLeafButton
                    className="navLeaf  text-black"
                    text="Songbird Designs"
                    ariaLabel="Songbird Designs"
                    to="/songbirdDesigns"
                    onClick={() => navigate("/songbirdDesigns")}
                >Songbird Designs</AnimatedLeafButton>
                <AnimatedLeafButton
                    className="navLeaf  text-black"
                    text="Songbird Sites"
                    ariaLabel="Songbird Sites"
                    to="/songbirdSites"
                    onClick={() => navigate("/songbirdSites")}
                >Songbird Sites</AnimatedLeafButton>
                <AnimatedLeafButton
                    className="navLeaf  text-black"
                    text="Noticeboard"
                    ariaLabel="Noticeboard"
                    to="/noticeboard"
                    onClick={() => navigate("/noticeboard")}
                >Noticeboard</AnimatedLeafButton>
                <AnimatedLeafButton
                    className="navLeaf  text-black"
                    text="To the Town"
                    ariaLabel="To the Town"
                    to="/townscene"
                    onClick={() => navigate("/townscene")}
                >To the Town</AnimatedLeafButton>
            </div>
        </>
    );
}

export default Nav;
