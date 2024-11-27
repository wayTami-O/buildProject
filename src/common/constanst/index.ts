
export const DEV_MODE = process.env.NODE_ENV === 'development';

type links = {
    main: string,
    calculation: string,
    projects: string,
    team: string,
    franchise: string,
    contacts: string,
}

export const linksPage: links = {
    main: '/',
    calculation: '/calculation',
    projects: '/projects',
    team: '/team',
    franchise: '/franchise',
    contacts: '/contacts',
}