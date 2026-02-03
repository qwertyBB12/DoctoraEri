'use client'

import { useState } from 'react'

export default function ContactFormEN() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-borgonia-light rounded-lg p-8 text-center">
        <h4 className="text-xl font-semibold text-borgonia mb-3">Request Received</h4>
        <p className="text-grafito">
          Thank you for contacting us. We will get back to you within 24-48 business hours.
        </p>
      </div>
    )
  }

  return (
    <form
      name="consultation-en"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="consultation-en" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-grafito mb-2">
          Full name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border border-perla rounded-lg focus:outline-none focus:border-borgonia"
        />
      </div>
      <div>
        <label htmlFor="age" className="block text-sm font-medium text-grafito mb-2">
          Age *
        </label>
        <input
          type="number"
          id="age"
          name="age"
          required
          min={18}
          className="w-full px-4 py-2 border border-perla rounded-lg focus:outline-none focus:border-borgonia"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-grafito mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-perla rounded-lg focus:outline-none focus:border-borgonia"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-grafito mb-2">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="+52 55 XXXX XXXX"
          className="w-full px-4 py-2 border border-perla rounded-lg focus:outline-none focus:border-borgonia"
        />
      </div>
      <div>
        <label htmlFor="reason" className="block text-sm font-medium text-grafito mb-2">
          Reason for consultation *
        </label>
        <textarea
          id="reason"
          name="reason"
          required
          rows={4}
          placeholder="Briefly describe the reason for your consultation. Do not include detailed medical information."
          className="w-full px-4 py-2 border border-perla rounded-lg focus:outline-none focus:border-borgonia"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full px-10 py-4 bg-borgonia text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-borgonia/90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
      </button>
      {status === 'error' && (
        <p className="text-red-600 text-sm">
          There was an error submitting the form. Please try again or contact us by phone.
        </p>
      )}
      <p className="text-xs text-taupe">
        * Required fields. We will contact you within 24-48 business hours.
      </p>
    </form>
  )
}
