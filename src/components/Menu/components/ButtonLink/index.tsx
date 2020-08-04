import React from 'react'

interface ButtonLinkProps {
  to: string;
  className: string;
  children: string;
}

const ButtonLink : React.FC<ButtonLinkProps> = ({ to, className, children }) => {
  return (
    <a href={to} className={className}>
      {children}
    </a>
  )
}

export default ButtonLink;