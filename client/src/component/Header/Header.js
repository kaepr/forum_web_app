import React from "react";
import { Box, Link } from "@chakra-ui/react";

export default function Header () {
    return (
        <Box>
            <Link href="/" fontSize="18px" textDecoration="none" textTransform="uppercase" pr="8">Home</Link> | 
            <Link href="/posts" fontSize="18px" textTransform="uppercase" pr="8" pl="8">POSTS</Link> |
            <Link href="/login" fontSize="18px" textTransform="uppercase" pr="8" pl="8">LogIn</Link> |  
            <Link href="/signup" fontSize="18px" textTransform="uppercase" pl="8">Signup</Link>
        </Box>
    );
};