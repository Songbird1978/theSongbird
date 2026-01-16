import React from 'react';
import { ArrowFatUpIcon } from "@phosphor-icons/react";
import '../backToTop/backToTop.css';
import { motion } from 'framer-motion';


function BackToTop({ containerSelector = "" }) {

const scrollToTop = () => {
    if (containerSelector) {
        const container = document.querySelector(containerSelector);
        console.log(containerSelector)
        console.log('Container found:', container);
        console.log('Container scroll position:', container?.scrollTop);
        container?.scrollTo({top:0, behavior: 'smooth'});
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    }
}

    return (

        <motion.div 
        className="backToTopDiv"
            onClick={scrollToTop}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
        >
            <ArrowFatUpIcon size={60} weight="fill" label="Scroll to Top" className="topIcon"/>

        </motion.div>
    )
}

export default BackToTop;