
export const DEV_MODE = process.env.NODE_ENV === 'development';

type links = {
    main: string,
    calculation: string,
    calculationResult: string,
    projects: string,
    team: string,
    franchise: string,
    contacts: string,
    reg: string,
    sign: string,
    profile: string,
    editProfile: string,
    changePassword: string
}

export const linksPage: links = {
    main: '/',
    calculation: '/calculation',
    calculationResult: '/calculationResult',
    projects: '/projects',
    team: '/team',
    franchise: '/franchise',
    contacts: '/contacts',
    reg: '/registration',
    sign: '/signIn',
    profile: '/profile',
    editProfile: '/profile/editProfile',
    changePassword: '/profile/changePassword'
}