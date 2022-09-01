import * as React from "react"

export const LargePentagon = (props) => (
    <svg
        width={359}
        height={339}
        viewBox="0 0 359 339"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
            fill="url(#linear2)"
            fillOpacity=".1"
        />
        <defs>
            <linearGradient
                id="linear2"
                x1="192.553"
                y1="28.553"
                x2="899.66"
                y2="735.66"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#fff" />
                <stop offset={1} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
        </defs>
    </svg>
)
