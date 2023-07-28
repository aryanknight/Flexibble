import Image from "next/image";
import { MouseEventHandler } from "react";

type Props = {
    title: string,
    LeftIcon?: string | null,
    RightIcon?: string | null,
    handleClick?: MouseEventHandler,
    isSubmitting?: boolean | false,
    type?: 'button' | 'submit',
    bgColor?: string,
    textColor?: string
}

const Button = ({ title, LeftIcon, RightIcon, handleClick, isSubmitting, type, bgColor, textColor }: Props)=>{
  return (
    <button
        type={type ||'button'}
        disabled={isSubmitting}
        className={`flexCenter gap-3 px-4 py-3 
        ${textColor ? textColor : 'text-white'} 
        ${isSubmitting ? 'bg-black/50' : bgColor ? bgColor : 'bg-primary-purple'} rounded-xl text-sm font-medium max-md:w-full`}
        onClick={handleClick}
    >
        {LeftIcon && <Image src={LeftIcon} width={14} height={14} alt="left"/> }
        {title}
        {RightIcon && <Image src={RightIcon} width={14} height={14} alt="right"/>}
    </button>
  )
}

export default Button;