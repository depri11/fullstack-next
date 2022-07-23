import { atom } from 'recoil'

export const AuthModalState = () => ({
    open: boolean,
    view: ModalView,
})

export const ModalView = 'login' | 'signup' | 'resetPassword'

const defaultModalState = {
    open: false,
    view: 'login',
}

export const authModalState = atom({
    key: 'authModalState',
    default: defaultModalState,
})
