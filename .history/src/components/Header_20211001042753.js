import PropTypes from "prop-types"
import Button from "./Button"

const Header = ({title}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text="Hello Green" />
            <Button color="blue" text="Hello Blue"/>
            <Button color="red" text="Hello Red"/>
        </header>
    )
}

Header.defaultProps = {
    title: "task Tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
