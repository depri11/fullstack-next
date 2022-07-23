import React from 'react'
import { Flex } from '@chakra-ui/react'
import { authModalState } from '../../../atoms/authModal'
import { useRecoilValue } from 'recoil'
import Login from './Login'
import SignUp from './SignUp'

function AuthInputs() {
    const modalState = useRecoilValue(authModalState)
    return (
        <Flex direction="column" align="center" width="100%" mt={4}>
            {modalState.view === 'login' && <Login />}
            {modalState.view === 'signup' && <SignUp />}
        </Flex>
    )
}

export default AuthInputs
