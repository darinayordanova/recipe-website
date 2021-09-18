import * as React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

const variants = {
    open: {
        pointerEvents: 'auto',
        position: 'fixed',
        backgroundColor: '#fcf5e9',
        transition: { staggerChildren: 0.07, delayChildren: 0 }
    },
    closed: {
        pointerEvents: 'none',
        backgroundColor: 'transparent',

        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const variantsLinks = {
    open: {
        pointerEvents: 'auto',
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        pointerEvents: 'none',
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};


export const Navigation = () => (
    <motion.div variants={variants} className='menu-bg'>
        
        <motion.div
            variants={variantsLinks}>
            <Link href="/contact">
                <a>Contact Me</a>
            </Link>
        </motion.div>
        <motion.div
            variants={variantsLinks}>
            <Link href="/contact">
                <a className='main-btn'>Go Cooking</a>
            </Link>
        </motion.div>
    </motion.div>
);


