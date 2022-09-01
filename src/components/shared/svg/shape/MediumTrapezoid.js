import * as React from "react"

export const MediumTrapezoid = (props) => (
    <svg
        width={160}
        height={678}
        viewBox="0 0 160 678"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
            fill="url(#linear3)"
            fillOpacity=".1"
        />
        <defs>
            <linearGradient
                id="linear3"
                x1="192.553"
                y1="325.553"
                x2="899.66"
                y2="1032.66"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#fff" />
                <stop offset={1} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
        </defs>
    </svg>
)
