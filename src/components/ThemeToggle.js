import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect'
import { Listbox } from '@headlessui/react'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Pc } from './shared/svg/device/Icons'
import { Moon, Sun } from './shared/svg/weather/Icons'

function update() {
    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark', 'changing-theme')
    } else {
        document.documentElement.classList.remove('dark', 'changing-theme')
    }
    window.setTimeout(() => {
        document.documentElement.classList.remove('changing-theme')
    })
}

let settings = [
    {
        value: 'light',
        label: 'Light',
        icon: Sun,
    },
    {
        value: 'dark',
        label: 'Dark',
        icon: Moon,
    },
    {
        value: 'system',
        label: 'System',
        icon: Pc,
    },
]

function useTheme() {
    let [setting, setSetting] = useState('system')
    let initial = useRef(true)

    useIsomorphicLayoutEffect(() => {
        let theme = localStorage.theme
        if (theme === 'light' || theme === 'dark') {
            setSetting(theme)
        }
    }, [])

    useIsomorphicLayoutEffect(() => {
        if (setting === 'system') {
            localStorage.removeItem('theme')
        } else if (setting === 'light' || setting === 'dark') {
            localStorage.theme = setting
        }
        if (initial.current) {
            initial.current = false
        } else {
            update()
        }
    }, [setting])

    useEffect(() => {
        let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

        if (mediaQuery?.addEventListener) {
            mediaQuery.addEventListener('change', update)
        } else {
            mediaQuery.addListener(update)
        }

        function onStorage() {
            update()
            let theme = localStorage.theme
            if (theme === 'light' || theme === 'dark') {
                setSetting(theme)
            } else {
                setSetting('system')
            }

            props.onChange(theme);
        }
        window.addEventListener('storage', onStorage)

        return () => {
            if (mediaQuery?.removeEventListener) {
                mediaQuery.removeEventListener('change', update)
            } else {
                mediaQuery.removeListener(update)
            }

            window.removeEventListener('storage', onStorage)
        }
    }, [])

    return [setting, setSetting]
}

export function ThemeToggle({ panelClassName }) {
    let [setting, setSetting] = useTheme()

    return (
        <Listbox value={setting} onChange={setSetting}>
            <Listbox.Label className="sr-only">Theme</Listbox.Label>
            <Listbox.Button type="button" className="hover:text-gray-600">
                <span className="dark:hidden">
                    <Sun className="w-6 h-6" selected={setting !== 'system'} />
                </span>
                <span className="hidden dark:inline">
                    <Moon className="w-6 h-6" selected={setting !== 'system'} />
                </span>
            </Listbox.Button>
            <Listbox.Options
                className={`absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300 ${panelClassName}`}
            >
                {settings.map(({ value, label, icon: Icon }) => (
                    <Listbox.Option key={value} value={value} as={Fragment}>
                        {({ active, selected }) => (
                            <li className={`${selected && 'text-violet-500'} ${active && 'bg-gray-50 dark:bg-gray-600/30'} py-1 px-2 flex items-center cursor-pointer`}>
                                <Icon selected={selected} className="w-6 h-6 mr-2" />
                                {label}
                            </li>
                        )}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    )
}