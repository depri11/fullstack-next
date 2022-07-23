import React, { useState } from 'react'
import { Input, Button, Flex, Text } from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'
import { authModalState } from '../../../atoms/authModal'

function Login() { 
    const setAuthModalState = useSetRecoilState(authModalState)
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    })

    // Firebase logic
    const onSubmit = () => {}

    const onChange = (e) => {
        setLoginForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }
    return (
        <form>
            <Input
                required
                name="email"
                placeholder="email"
                type="email"
                mb={2}
                onChange={onChange}
                fontSize="10pt"
                _placeholder={{ color: 'gray.500' }}
                _hover={{ bg: 'white', border: '1px solid blue.500' }}
                _focus={{ outline: 'none', bg: 'white', border: '1px solid blue.500' }}
            />
            <Input
                required
                name="password"
                placeholder="password"
                type="password"
                mb={2}
                onChange={onChange}
                fontSize="10pt"
                _placeholder={{ color: 'gray.500' }}
                _hover={{ bg: 'white', border: '1px solid blue.500' }}
                _focus={{ outline: 'none', bg: 'white', border: '1px solid blue.500' }}
            />
            <Button type="submit" width="100%" height="36px" mt={2} mb={2}>
                Log In
            </Button>
            <Flex fontSize="9pt" justifyContent="center">
                <Text mr={1}>New here?</Text>
                <Text
                    color="blue.500"
                    fontWeight={700}
                    cursor="pointer"
                    onClick={() =>
                        setAuthModalState((prev) => ({
                            ...prev,
                            view: 'signup',
                        }))
                    }
                >
                    SIGN UP?
                </Text>
            </Flex>
        </form>
    )
}

export default Login
