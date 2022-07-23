import React from 'react'
import { Flex, InputGroup, InputLeftElement, Input, InputRightElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

function SearchInput() {
    return (
        <Flex flexGrow={1} mr={2} align="center">
            <InputGroup>
                <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.400" mb={1} />} />
                <Input
                    type="tel"
                    placeholder="Search Reddit"
                    fontSize="10pt"
                    _placeholder={{ color: 'gray.500' }}
                    _hover={{ bg: 'white', border: '1px solid blue.500' }}
                    _focus={{ outline: 'none', border: '1px solid blue.500' }}
                    height="34px"
                    bg="gray.50"
                />
            </InputGroup>
        </Flex>
    )
}

export default SearchInput
