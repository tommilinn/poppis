
export const Button = () => {
    const handleLogin = () => {
        alert("we are doing some login stuff")
    }

    return (
        <button className="w-15" onClick={() => {alert("we are doing some login stuff")}}></button>
    )
}

export default Button;