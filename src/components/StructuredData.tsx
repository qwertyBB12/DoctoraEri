export default function StructuredData() {
  const physicianSchema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Dra. Erika Torres Valdez',
    alternateName: 'Urofemina',
    description:
      'Uroginecóloga especialista en Medicina Pélvica Femenina y Cirugía Reconstructiva. Formación en Instituto Nacional de Perinatología.',
    image: 'https://doctoraeri.com/images/team/dra-erika-torres.jpg',
    url: 'https://doctoraeri.com',
    telephone: '+52 55 6465 5364',
    email: 'contacto@doctoraeri.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Montecito 38, Piso 12',
      addressLocality: 'Ciudad de México',
      addressRegion: 'CDMX',
      postalCode: '03810',
      addressCountry: 'MX',
      name: 'World Trade Center Ciudad de México',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.3934,
      longitude: -99.1678,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    medicalSpecialty: [
      {
        '@type': 'MedicalSpecialty',
        name: 'Urogynecology',
      },
      {
        '@type': 'MedicalSpecialty',
        name: 'Female Pelvic Medicine and Reconstructive Surgery',
      },
      {
        '@type': 'MedicalSpecialty',
        name: 'Obstetrics and Gynecology',
      },
    ],
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Urinary Incontinence Treatment',
        description: 'Comprehensive diagnostic evaluation and evidence-based treatment for stress, urgency, and mixed incontinence.',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Pelvic Organ Prolapse Treatment',
        description: 'Individualized management through physiotherapy, pessaries, or minimally invasive surgical procedures.',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Pelvic Floor Dysfunction Treatment',
        description: 'Comprehensive approach to chronic pelvic pain and muscle hypertonicity.',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Pelvic Reconstructive Surgery',
        description: 'Advanced laparoscopic and reconstructive techniques with accelerated recovery protocols.',
      },
    ],
    sameAs: [],
    priceRange: '$$',
    currenciesAccepted: 'MXN',
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Medical Degree',
        educationalLevel: 'Postgraduate',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Universidad Anáhuac',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Medical Specialty',
        name: 'Obstetrics and Gynecology',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Instituto Nacional de Perinatología',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Medical Subspecialty',
        name: 'Gynecologic Urology',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Instituto Nacional de Perinatología',
        },
      },
    ],
    memberOf: [
      {
        '@type': 'Organization',
        name: 'Federación Mexicana de Colegios de Obstetricia y Ginecología (FEMECOG)',
      },
      {
        '@type': 'Organization',
        name: 'Colegio Mexicano de Especialistas en Ginecología y Obstetricia (COMEGO)',
      },
      {
        '@type': 'Organization',
        name: 'Federación Latinoamericana de Sociedades de Obstetricia y Ginecología (FLASOG)',
      },
    ],
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': 'https://doctoraeri.com/#medicalbusiness',
    name: 'Urofemina - Dra. Erika Torres Valdez',
    description:
      'Clínica especializada en uroginecología y medicina pélvica femenina en Ciudad de México.',
    url: 'https://doctoraeri.com',
    telephone: '+52 55 6465 5364',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Montecito 38, Piso 12',
      addressLocality: 'Ciudad de México',
      addressRegion: 'CDMX',
      postalCode: '03810',
      addressCountry: 'MX',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.3934,
      longitude: -99.1678,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    image: 'https://doctoraeri.com/og/og-es.png',
    logo: 'https://doctoraeri.com/apple-touch-icon.png',
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://doctoraeri.com/#website',
    name: 'Urofemina',
    url: 'https://doctoraeri.com',
    description: 'Sitio web oficial de Dra. Erika Torres Valdez - Uroginecología en Ciudad de México',
    inLanguage: ['es-MX', 'en-US'],
    publisher: {
      '@type': 'Organization',
      name: 'Urofemina',
      url: 'https://doctoraeri.com',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
