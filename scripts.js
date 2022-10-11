const inputs = document.querySelectorAll('input');
const submit = document.querySelector('button');
const regex = new RegExp('/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/');

inputs.forEach((input) => {
  // manage classes
  input.addEventListener('input', () => {
    input.setCustomValidity('');
    input.classList.remove('valid');
    input.classList.remove('error');
  
    if (input.checkValidity()) {
      input.classList.add('valid');
    }
  
    if (!input.checkValidity()) {
      input.classList.add('error');
    }
  });

  // remove valid class when unfocused
  input.addEventListener('blur', () => {
    input.classList.remove('valid');
  });
});

inputs[0].addEventListener('input', () => {
  if (!inputs[0].checkValidity()) {
    inputs[0].setCustomValidity('Enter an appropriate email address.');
    inputs[0].reportValidity();
  }
});

inputs[1].addEventListener('input', () => {
  const allCountries = [
  'Afghanistan', 
  'Albania', 
  'Algeria', 
  'Andorra', 
  'Angola', 
  'Antigua & Deps', 
  'Argentina', 
  'Armenia', 
  'Australia', 
  'Austria', 
  'Azerbaijan', 
  'Bahamas', 
  'Bahrain', 
  'Bangladesh', 
  'Barbados', 
  'Belarus', 
  'Belgium', 
  'Belize', 
  'Benin', 
  'Bhutan', 
  'Bolivia', 
  'Bosnia Herzegovina', 
  'Botswana', 
  'Brazil', 
  'Brunei', 
  'Bulgaria', 
  'Burkina', 
  'Burundi', 
  'Cambodia', 
  'Cameroon', 
  'Canada', 
  'Cape Verde', 
  'Central African Rep', 
  'Chad', 
  'Chile', 
  'China', 
  'Colombia', 
  'Comoros', 
  'Congo', 
  'Congo {Democratic Rep}', 
  'Costa Rica', 
  'Croatia', 
  'Cuba', 
  'Cyprus', 
  'Czech Republic', 
  'Denmark', 
  'Djibouti', 
  'Dominica', 
  'Dominican Republic', 
  'East Timor', 
  'Ecuador', 
  'Egypt', 
  'El Salvador', 
  'Equatorial Guinea', 
  'Eritrea', 
  'Estonia', 
  'Ethiopia', 
  'Fiji', 
  'Finland', 
  'France', 
  'Gabon', 
  'Gambia', 
  'Georgia', 
  'Germany', 
  'Ghana', 
  'Greece', 
  'Grenada', 
  'Guatemala', 
  'Guinea', 
  'Guinea-Bissau', 
  'Guyana', 
  'Haiti', 
  'Honduras', 
  'Hungary', 
  'Iceland', 
  'India', 
  'Indonesia', 
  'Iran', 
  'Iraq', 
  'Ireland {Republic}', 
  'Israel', 
  'Italy', 
  'Ivory Coast', 
  'Jamaica', 
  'Japan', 
  'Jordan', 
  'Kazakhstan', 
  'Kenya', 
  'Kiribati', 
  'Korea North', 
  'Korea South', 
  'Kosovo', 
  'Kuwait', 
  'Kyrgyzstan', 
  'Laos', 
  'Latvia', 
  'Lebanon', 
  'Lesotho', 
  'Liberia', 
  'Libya', 
  'Liechtenstein', 
  'Lithuania', 
  'Luxembourg', 
  'Macedonia', 
  'Madagascar', 
  'Malawi', 
  'Malaysia', 
  'Maldives', 
  'Mali', 
  'Malta', 
  'Marshall Islands', 
  'Mauritania', 
  'Mauritius', 
  'Mexico', 
  'Micronesia', 
  'Moldova', 
  'Monaco', 
  'Mongolia', 
  'Montenegro', 
  'Morocco', 
  'Mozambique', 
  'Myanmar, {Burma}', 
  'Namibia', 
  'Nauru', 
  'Nepal', 
  'Netherlands', 
  'New Zealand', 
  'Nicaragua', 
  'Niger', 
  'Nigeria', 
  'Norway', 
  'Oman', 
  'Pakistan', 
  'Palau', 
  'Panama', 
  'Papua New Guinea', 
  'Paraguay', 
  'Peru', 
  'Philippines', 
  'Poland', 
  'Portugal', 
  'Qatar', 
  'Romania', 
  'Russian Federation', 
  'Rwanda', 
  'St Kitts & Nevis', 
  'St Lucia', 
  'Saint Vincent & the Grenadines', 
  'Samoa', 
  'San Marino', 
  'Sao Tome & Principe', 
  'Saudi Arabia', 
  'Senegal', 
  'Serbia', 
  'Seychelles', 
  'Sierra Leone', 
  'Singapore', 
  'Slovakia', 
  'Slovenia', 
  'Solomon Islands', 
  'Somalia', 
  'South Africa', 
  'South Sudan', 
  'Spain', 
  'Sri Lanka', 
  'Sudan', 
  'Suriname', 
  'Swaziland', 
  'Sweden', 
  'Switzerland', 
  'Syria', 
  'Taiwan', 
  'Tajikistan', 
  'Tanzania', 
  'Thailand', 
  'Togo', 
  'Tonga', 
  'Trinidad & Tobago', 
  'Tunisia', 
  'Turkey', 
  'Turkmenistan', 
  'Tuvalu', 
  'Uganda', 
  'Ukraine', 
  'United Arab Emirates', 
  'United Kingdom', 
  'United States', 
  'Uruguay', 
  'Uzbekistan', 
  'Vanuatu', 
  'Vatican City', 
  'Venezuela', 
  'Vietnam', 
  'Yemen', 
  'Zambia', 
  'Zimbabwe', 
  ]

  if (!allCountries.includes(inputs[1].value)) {
    inputs[1].setCustomValidity('That\'s not a country.');
    inputs[1].reportValidity();
    inputs[1].classList.add('error');
  }
});

inputs[2].addEventListener('input', () => {
  if (inputs[2].value.length !== 5) {
    inputs[2].setCustomValidity('Enter an appropriate zip code.');
    inputs[2].reportValidity();
    inputs[2].classList.add('error')
  }
});

inputs[3].addEventListener('input', () => {
  if (inputs[3].value.length <= 8 && !(regex.test(inputs[3]))) {
    inputs[3].setCustomValidity('At least nine characters.');
    inputs[3].reportValidity();
    inputs[3].classList.add('error');
  }
});

inputs[4].addEventListener('input', () => {
  if (inputs[4].value !== inputs[3].value) {
    inputs[4].setCustomValidity('This is not the same password.');
    inputs[4].reportValidity();
    inputs[4].classList.add('error');
  }
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
});
