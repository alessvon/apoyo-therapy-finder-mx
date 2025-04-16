
export const countries = [
  {
    name: 'México',
    code: 'MX',
    states: [
      { name: 'Ciudad de México', code: 'CDMX' },
      { name: 'Puebla', code: 'PUE' },
      { name: 'Querétaro', code: 'QRO' },
      { name: 'Oaxaca', code: 'OAX' },
      { name: 'Nuevo León', code: 'NL' },
      { name: 'Jalisco', code: 'JAL' },
      { name: 'Estado de México', code: 'MEX' },
      // Add more states as needed
    ]
  },
  {
    name: 'Estados Unidos',
    code: 'US',
    states: [
      { name: 'California', code: 'CA' },
      { name: 'Texas', code: 'TX' },
      { name: 'Florida', code: 'FL' },
      { name: 'Nueva York', code: 'NY' },
      // Add more states as needed
    ]
  }
  // Add more countries as needed
];

export const getStatesByCountry = (countryCode: string) => {
  const country = countries.find(c => c.code === countryCode);
  return country?.states || [];
};
