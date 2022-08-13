import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom";
import { getInvoices } from "../../data/data";

import "./Invoices.css"

const Invoices = () => {
    let invoices = getInvoices()
    let [searchParams, setSearchParams] = useSearchParams()
    return (
        <div style={{ display: "flex" }}>
            <nav style={{
                borderRight: "solid 1px",
                padding: "1rem",
            }}>
                <input
                    value={searchParams.get("filter") || ""}
                    onChange={({ target: { value } }) => {
                        let filter = value
                        if (filter) {
                            setSearchParams({ filter })
                        } else {
                            setSearchParams({})
                        }
                    }}
                />
                {invoices.filter((invoice) => {
                    let filter = searchParams.get("filter")
                    if (!filter) return true
                    let name = invoice.name.toLocaleLowerCase()
                    return name.startsWith(filter.toLowerCase())
                }).map((invoice) => (
                    <QueryNavLink
                        className={({ isActive }) => "nav-option" + (isActive ? " nav-active" : "")}
                        to={`/invoices/${invoice.number}`}
                        key={invoice.number}
                    >
                        {invoice.name}
                    </QueryNavLink>
                ))}
            </nav>
            <Outlet />
        </div>
    );
}

const QueryNavLink = ({ to, ...props }) => {
    let location = useLocation()
    return <NavLink to={to + location.search} {...props} />
}


export default Invoices