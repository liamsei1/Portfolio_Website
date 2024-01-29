import React, { ReactNode } from 'react'

type SectionHeadingProps = {
    child: React.ReactNode
};

export default function SectionHeading({ child }: SectionHeadingProps) {
  return (
    <h2 className='text-3xl font-medium capitalize mb-8 text-center'>
        {child}
    </h2>
)
}
