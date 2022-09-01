import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import { LargePentagon, LargeTriangle, MediumTrapezoid } from '../../components/shared/svg/shape'
import { LinkedInIcon, TwitterIcon } from '../../components/shared/svg/social/Icons'
import { Seo } from "../../components/Seo"
import { useSiteMetadata } from "../../components/useSiteMetadata"

const description = "Would you like to contact me? Send me a message via the form or send me an e-mail. I will be happy to answer you!";

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
        <Head />
        <div className="bg-gray-100 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:px-8">
            <div className="relative bg-white dark:bg-gray-800 border border-transparent rounded-lg shadow">
              <h2 className="sr-only">Contact me</h2>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="relative overflow-hidden py-10 px-6 border border-transparent rounded-t-lg lg:rounded-t-none lg:rounded-l-lg shadow bg-violet-700 dark:bg-violet-400 sm:px-10 xl:p-12">
                  <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                    <LargeTriangle className="absolute inset-0 w-full h-full" />
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <LargePentagon className="absolute inset-0 w-full h-full" />
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <MediumTrapezoid className="absolute inset-0 w-full h-full" />
                  </div>
                  <h3 className="text-lg font-medium text-white dark:text-gray-800">Contact Me</h3>
                  <p className="mt-6 text-base text-violet-50 dark:text-gray-900 max-w-3xl">
                    {description}
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
                        <LinkedInIcon className="w-6 h-6" />
                      </a>
                    </li>
                    <li>
                      <a className="text-violet-200 dark:text-gray-800 hover:text-violet-100 dark:hover:text-gray-900" href="https://twitter.com/JBoinembalome" target="_blank">
                        <span className="sr-only">Twitter</span>
                        <TwitterIcon className="w-6 h-6" />
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

const Head = () => {
  const { siteUrl } = useSiteMetadata();
  return <Seo title="Contact" description={description} url={`${siteUrl}/contact`} />
};