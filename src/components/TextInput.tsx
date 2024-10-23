type Props = {
    label: string;
    name: string;
    type?: string;
    required?: boolean;
}

export default function TextInput({label, name, type="text", required=true}:Props){
    return (
        <div className="mb-4 w-full">
            <label htmlFor={name} 
            className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input 
            type={type} 
            id={name}
            name={name}
            required={required}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"/>
        </div>
    )
}