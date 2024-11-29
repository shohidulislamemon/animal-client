// components/Button.js
export default function Button({ children, onClick, variant = "default" }) {
    const baseStyles =
        "px-6 py-2 rounded-full text-sm font-semibold flex items-center justify-center"; 
    const variants = {
        default: "bg-black text-white border border-white hover:bg-gray-800", 
        green: "bg-black text-green-700 border border-green-700 hover:bg-green-500 hover:text-white", 
        red: "bg-black text-red-700 border border-red-700 hover:bg-red-500 hover:text-white", 
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]}`}
        >
            {children}
        </button>
    );
}
