import AnimatedLeafButton from "../components/button.jsx";
import { useNavigate } from "react-router-dom";

function Nav() {
    const navigate = useNavigate();

    return (
        <>
            <div className="w-full flex justify-evenly h-auto">
                <AnimatedLeafButton
                    className="navLeaf"
                    text="Songbird Records"
                    to="/ogruRecords"
                    onClick={() => navigate("/ogruRecords")}
                ></AnimatedLeafButton>
                <AnimatedLeafButton
                    className="navLeaf"
                    text="Songbird Designs"
                    to="/songbirdDesigns"
                    onClick={() => navigate("/songbirdDesigns")}
                ></AnimatedLeafButton>
                <AnimatedLeafButton
                    className="navLeaf"
                    text="Songbird Sites"
                    to="/songbirdSites"
                    onClick={() => navigate("/songbirdSites")}
                ></AnimatedLeafButton>
                <AnimatedLeafButton
                    className="navLeaf"
                    text="Noticeboard"
                    to="/noticeboard"
                    onClick={() => navigate("/noticeboard")}
                ></AnimatedLeafButton>
                <AnimatedLeafButton
                    className="navLeaf"
                    text="To the Town"
                    to="/townscene"
                    onClick={() => navigate("/townscene")}
                ></AnimatedLeafButton>
            </div>
        </>
    );
}

export default Nav;
