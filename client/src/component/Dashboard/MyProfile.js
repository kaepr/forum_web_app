import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function MyProfile() {
    return(
        <Box>
            <Box>
                <Text textTransform="uppercase" fontSize="2xl" fontWeight="semibold" letterSpacing="1.5px">My Profile</Text>
            </Box>
            <Box>
        <Box class="row pad">
          <Box class="col-lg-10  col-lg-offset-1">
            <Box class="panel panel-primary">
               <Box class="panel-heading">
                <h3 class="panel-title">My Info</h3>
            </Box>
            <Box class="panel-body">
                Below are my basic info
            </Box>
            
                    Name:Alexander McQuinn
                
               
                    Email:alexQnn@gmail.com
               
               
                    Username:alexQnn
              
               
                    Num of Posts: 23
               
                
                    Join Date: January 1, 2017
               
            
        </Box>
    </Box>
    </Box>
            </Box>
        </Box>
    )
}