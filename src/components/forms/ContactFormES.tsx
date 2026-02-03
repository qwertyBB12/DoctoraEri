'use client'

import { useState } from 'react'

export default function ContactFormES() {
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
        <h4 className="text-xl font-semibold text-borgonia mb-3">Solicitud Recibida</h4>
        <p className="text-grafito">
          Gracias por contactarnos. Nos pondremos en contacto con usted en un plazo de 24-48 horas hábiles.
        </p>
      </div>
    )
  }

  return (
    <form
      name="consulta-es"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="consulta-es" />
      <p className="hidden">
        <label>
          No llenar: <input name="bot-field" />
        </label>
      </p>
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-grafito mb-2">
          Nombre completo *
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          className="w-full px-4 py-2 border border-perla rounded-lg focus:outline-none focus:border-borgonia"
        />
      </div>
      <div>
        <label htmlFor="edad" className="block text-sm font-medium text-grafito mb-2">
          Edad *
        </label>
        <input
          type="number"
          id="edad"
          name="edad"
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
        <label htmlFor="telefono" className="block text-sm font-medium text-grafito mb-2">
          Teléfono *
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          required
          placeholder="+52 55 XXXX XXXX"
          className="w-full px-4 py-2 border border-perla rounded-lg focus:outline-none focus:border-borgonia"
        />
      </div>
      <div>
        <label htmlFor="motivo" className="block text-sm font-medium text-grafito mb-2">
          Motivo de consulta *
        </label>
        <textarea
          id="motivo"
          name="motivo"
          required
          rows={4}
          placeholder="Describa brevemente el motivo de su consulta. No incluya información médica detallada."
          className="w-full px-4 py-2 border border-perla rounded-lg focus:outline-none focus:border-borgonia"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full px-10 py-4 bg-borgonia text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-borgonia/90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Enviando...' : 'Enviar Solicitud'}
      </button>
      {status === 'error' && (
        <p className="text-red-600 text-sm">
          Hubo un error al enviar. Por favor intente de nuevo o contáctenos por teléfono.
        </p>
      )}
      <p className="text-xs text-taupe">
        * Campos requeridos. Nos pondremos en contacto en un plazo de 24-48 horas hábiles.
      </p>
    </form>
  )
}
