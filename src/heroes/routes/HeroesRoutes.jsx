import { Routes, Route, Navigate } from "react-router-dom"
import { Navbar } from "../../ui/components"
import { Dc, Marvel, Hero, Search } from '../pages'



export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="dc" element={<Dc />} />

                    <Route path="marvel" element={<Marvel />} />
                    <Route path="search" element={<Search />} />
                    <Route path="hero/:id" element={<Hero />} />

                    <Route path="/" element={<Navigate to='/dc' />} />
                </Routes>
            </div>

        </>
    )
}
