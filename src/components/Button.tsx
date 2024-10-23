type Props = {
    children: React.ReactNode;
    className?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
}

export default function Button({children, className = "", type= "button"}: Props){
    return(
        <button 
            type={type}
            className={`px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors ${className}`}
        >
            {children}
        </button>
    )
}