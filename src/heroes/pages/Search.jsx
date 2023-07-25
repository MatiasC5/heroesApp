import { useNavigate, useLocation } from "react-router-dom"
import { HeroCard } from "../components/HeroCard"
import { useForm } from "../../hooks/useForm"
import queryString from 'query-string'
import { getHeroesByName } from "../helpers/getHeroesByName"



export const Search = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const { q = '' } = queryString.parse(location.search)
    const heroes = getHeroesByName(q)

    const showSearch = q.length === 0
    const showError = (q.length > 0) && heroes.length === 0


    const { searchText, handleInputChange } = useForm({
        searchText: q
    })

    const handleSubmitForm = (e) => {
        e.preventDefault()
        navigate(`?q=${searchText}`)
    }

    return (
        <>
            <h1>Search</h1>
            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={handleSubmitForm}>
                        <input
                            type='text'
                            placeholder="Search a hero"
                            name="searchText"
                            className="form-control"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button className="btn btn-outline-primary mt-1">Search</button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    <div className="alert alert-primary" style={{ display: showSearch ? '' : 'none' }}>
                        Search a hero
                    </div>
                    <div className="alert alert-danger" style={{ display: showError ? '' : 'none' }}>
                        No hero with that <b>{q}</b>
                    </div>
                    {
                        heroes.map(hero => (
                            <HeroCard key={hero.id}{...hero} />
                        ))
                    }


                </div>
            </div >
        </>

    )
}
