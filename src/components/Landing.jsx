import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useLocalStorage } from "react-use";

export default function Landing() {
    const [token, _] = useLocalStorage("token", "");
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            console.log("User is logged in");
            navigate("/dashboard/contacts");
        } else {
            console.log("User is not logged in");
            navigate("/login");
        }
    }, [navigate, token]);

    return <>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex flex-col items-center justify-center p-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Welcome to Contact Management App</h1>
            <p className="text-lg text-gray-300 mb-8">Manage your contacts and addresses with ease.</p>
        </div>
    </>
}