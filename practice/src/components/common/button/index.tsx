import { Button } from '@mui/material'

type Props = {
    children: React.ReactNode,
    type?:'button' | 'submit' | 'reset',
    onClick:()=>void,
    variant?:'contained' | 'outlined',
    className?:string,
    color?:'error'
};

export const ButtonProps = ({children, type, onClick, variant, className, color}:Props)=>{
    return(
        <div>
            <Button
                type={type}
                onClick={onClick}
                variant={variant}
                className={`${className}`}
                color={color}
            >
                {children}
            </Button>
        </div>
    )
}