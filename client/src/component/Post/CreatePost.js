import React from 'react'
import {Box,Text,FormControl,InputGroup,Textarea,InputLeftElement,Input,InputRightElement,Button,Stack, Center} from '@chakra-ui/react'

const CreatePost = () =>{
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
       <Box>
<Stack align="center">
            <Box w="80%">
                <Box mb="2">
                    <Text size="32px" align="left" w="70%" fontWeight="semibold">Post Title</Text>
                </Box>
                <FormControl isRequired>
                    <InputGroup w="70%">
                        <Input type='info' placeholder='Enter Post Title' aria-label='Post Title' border="1px" borderColor="black" fontFamily="sans-serif"/>
                    </InputGroup>
                </FormControl>
            </Box>
            <Box w="80%" >
                <Box mb="2">
                    <Text size="32px" align="left" w="70%" mt="6" fontWeight="semibold">Post Description</Text>
                </Box>
                <FormControl isRequired>
                    <Textarea w="70%"  border="1px" borderColor="black" fontFamily="sans-serif" placeholder='Enter Post Description' aria-label='Post Description'>
                    </Textarea>
                </FormControl>
            </Box>
        </Stack>
        <Box alignItems="left" mt="5" display="flex" w="55%" justifyContent="space-between" align="center">
                <Button type="submit"
          bgColor="green.400"
          variant="solid"
          boxShadow="lg"
          _hover={{ background: 'green.400' }}
          color="gray.200"
          fontSize="14px"
          p="4">Submit</Button>
                <Button type="submit"
          bgColor="red.400"
          variant="solid"
          boxShadow="lg"
          _hover={{ background: 'red.400' }}
          color="gray.200"
          fontSize="14px"
          p="4">Close</Button>
        </Box>
       </Box> 
        
    )
};
export default CreatePost;