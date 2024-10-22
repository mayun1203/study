type Props = {
    type: string;
    placeholder: string;
};

export const input = ({type, placeholder}:Props)=>{
    <div>
        <input type={type} placeholder={placeholder} />
    </div>
};