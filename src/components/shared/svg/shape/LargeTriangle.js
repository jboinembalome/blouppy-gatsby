import * as React from "react"

export const LargeTriangle = (props) => (
    <svg
        width={343}
        height={388}
        viewBox="0 0 343 388"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
            fill="url(#linear1)"
            fillOpacity=".1"
        />
        <defs>
            <linearGradient
                id="linear1"
                x1="254.553"
                y1="107.554"
                x2="961.66"
                y2="814.66"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#fff" />
                <stop offset={1} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
        </defs>
    </svg>
)
