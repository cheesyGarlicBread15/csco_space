import { Link } from "react-router-dom"

export default function Error() {

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
            <h1 className="text-7xl font-bold text-gray-900">Oops!</h1>

            <p className="mt-4 text-lg font-medium text-gray-700">
                Sorry, an unexpected error has occurred.
            </p>

            <Link
                to="/"
                className="mt-6 inline-flex items-center rounded-md bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
            >
                Go back home
            </Link>
        </div>
    )
}
