import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import { Helmet } from 'react-helmet'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <div className="bg-gray-100 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:px-8">
            <div className="relative bg-white dark:bg-gray-900 border border-transparent rounded-lg shadow">
              <h2 className="sr-only">Contact us</h2>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="relative overflow-hidden py-10 px-6 border border-transparent rounded-t-lg lg:rounded-t-none lg:rounded-l-lg shadow bg-violet-700 dark:bg-violet-400 sm:px-10 xl:p-12">
                  <Helmet title={`Blouppy | Contact`} />
                  <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
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
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
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
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
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
                  </div>
                  <h3 className="text-lg font-medium text-white dark:text-gray-800">Contact Me</h3>
                  <p className="mt-6 text-base text-violet-50 dark:text-gray-900 max-w-3xl">
                    Would you like to contact me? Send me a message via the form on the right, or send me an e-mail. I will be happy to answer you!
                  </p>
                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">Phone number</span>
                    </dt>
                    <dd className="flex text-base text-violet-50 dark:text-gray-900">
                      <PhoneIcon className="flex-shrink-0 w-6 h-6 text-violet-200 dark:text-gray-800" aria-hidden="true" />
                      <span className="ml-3">+33 6 52 26 46 76</span>
                    </dd>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base text-violet-50 dark:text-gray-900">
                      <MailIcon className="flex-shrink-0 w-6 h-6 text-violet-200 dark:text-gray-800" aria-hidden="true" />
                      <span className="ml-3">jboinembalome@gmail.com</span>
                    </dd>
                  </dl>
                  <ul role="list" className="mt-8 flex space-x-12">
                    <li>
                    <a className="text-violet-200 dark:text-gray-800 hover:text-violet-100 dark:hover:text-gray-900" href="https://fr.linkedin.com/in/jimmy-boinembalome-87281a189" target="_blank">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                    <a className="text-violet-200 dark:text-gray-800 hover:text-violet-100 dark:hover:text-gray-900" href="https://twitter.com/JBoinembalome" target="_blank">
                        <span className="sr-only">Twitter</span>
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          aria-hidden="true"
                        >
                          <path
                            d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Send me a message</h3>
                  <form name="contact" method="post" action="/contact/thanks/"
                    data-netlify="true" data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                    className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                      <label>
                        Don’t fill this out:{' '}
                        <input name="bot-field" onChange={this.handleChange} />
                      </label>
                    </div>
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id={'first-name'}
                          name={'first-name'}
                          autoComplete="given-name"
                          onChange={this.handleChange}
                          required={true}
                          className="py-3 px-4 block w-full shadow-sm dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-indigo-500 focus:border-violet-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id={'last-name'}
                          name={'last-name'}
                          autoComplete="family-name"
                          onChange={this.handleChange}
                          required={true}
                          className="py-3 px-4 block w-full shadow-sm dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-indigo-500 focus:border-violet-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          type="email"
                          id={'email'}
                          name={'email'}
                          autoComplete="email"
                          onChange={this.handleChange}
                          required={true}
                          className="py-3 px-4 block w-full shadow-sm dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-indigo-500 focus:border-violet-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                          Phone
                        </label>
                        <span id="phone-optional" className="text-sm text-gray-500 dark:text-gray-400">
                          Optional
                        </span>
                      </div>
                      <div className="mt-1">
                        <input
                          type="text"
                          id={'phone'}
                          name={'phone'}
                          autoComplete="tel"
                          onChange={this.handleChange}
                          required={false}
                          className="py-3 px-4 block w-full shadow-sm dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-indigo-500 focus:border-violet-500 border-gray-300 rounded-md"
                          aria-describedby="phone-optional"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                        Subject
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id={'subject'}
                          name={'subject'}
                          onChange={this.handleChange}
                          required={true}
                          // autocomplete="off"
                          className="py-3 px-4 block w-full shadow-sm dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-indigo-500 focus:border-violet-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                          Message
                        </label>
                        <span id="message-max" className="text-sm text-gray-500 dark:text-gray-400">
                          Max. 500 characters
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          id={'message'}
                          name={'message'}
                          onChange={this.handleChange}
                          required={true}
                          className="py-3 px-4 block w-full shadow-sm dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-indigo-500 focus:border-violet-500 border border-gray-300 rounded-md"
                          aria-describedby="message-max"
                          maxLength="500"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        type="submit"
                        className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white dark:text-gray-900 bg-violet-600 hover:bg-violet-700 dark:bg-violet-400 hover:dark:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
