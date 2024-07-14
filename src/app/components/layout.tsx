
import { FC, ReactNode } from 'react'
import Footer from './footer'
import { StickyNavbar } from './navbar'


interface ILayout {
    children: ReactNode
}
const Layout: FC<ILayout> = ({ children }) => {
    return (
        <>
            <StickyNavbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout