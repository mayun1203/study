type Props = {
    type:string;
    name?:string,
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    value?:string,
    placeholder?: string;
    className:string
};

export const Form = ({type, name, onChange, value, placeholder, className}:Props)=>{
    return(
    <div>
        <input
            type={type}
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            className={`border p-2 ${className}`}
        />
    </div>
    )
};