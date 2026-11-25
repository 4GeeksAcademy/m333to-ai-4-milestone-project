/* ============================================================
   TrackFlow — Information request form validation
   Mirrors the requirements in Milestone_1_context.md
   ============================================================ */
(function () {
  'use strict';

  var form = document.getElementById('info-form');
  if (!form) return;

  /* ---- Exact error messages from the brief ---- */
  var MESSAGES = {
    companyName: 'Company name must have at least 2 characters',
    contactPerson: 'Enter first and last name of contact',
    email: 'Enter a valid corporate email (example: <name@company.com>)',
    phone: 'Phone must include country code (example: +1 213 555 0147)',
    website: 'If you include website, it must be a valid URL',
    country: 'Select main operating country',
    productType: 'Select the type of product you handle',
    volume: 'Select estimated monthly volume',
    services: 'Select at least one service of interest',
    current3pl: 'Indicate if you currently work with another logistics provider',
    comments: function (remaining) {
      return 'Comments cannot exceed 500 characters (' + remaining + ' remaining)';
    },
    privacy: 'You must accept the privacy policy to continue'
  };

  var VOLUME_WARNING = 'For volumes under 100 monthly shipments, our services might not be the most efficient solution. Are you sure you want to continue?';

  /* ---- Small helpers ---- */
  function $(id) { return document.getElementById(id); }

  function showError(errorEl, message, inputEl) {
    if (!errorEl) return;
    errorEl.textContent = message;
    errorEl.classList.remove('hidden');
    if (inputEl) { inputEl.setAttribute('aria-invalid', 'true'); }
  }

  function clearError(errorId, inputEl) {
    var err = $(errorId);
    if (err) { err.textContent = ''; err.classList.add('hidden'); }
    if (inputEl) {
      inputEl.removeAttribute('aria-invalid');
    } else {
      document.querySelectorAll('[aria-describedby~="' + errorId + '"]').forEach(function (input) {
        input.removeAttribute('aria-invalid');
      });
    }
  }

  function showErrorEl(errorId, message, inputEls) {
    var errorEl = $(errorId);
    if (!errorEl) return;
    errorEl.textContent = message;
    errorEl.classList.remove('hidden');
    if (inputEls) {
      inputEls.forEach(function (input) { input.setAttribute('aria-invalid', 'true'); });
    }
  }

  /* ---- Field validators: each returns an error string or null ---- */
  var validators = {
    companyName: function () {
      var v = form.companyName.value.trim();
      if (v.length < 2) return MESSAGES.companyName;
      return null;
    },
    contactPerson: function () {
      var words = form.contactPerson.value.trim().split(/\s+/).filter(Boolean);
      if (words.length < 2) return MESSAGES.contactPerson;
      return null;
    },
    email: function () {
      var v = form.email.value.trim();
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(v)) return MESSAGES.email;
      return null;
    },
    phone: function () {
      var v = form.phone.value.trim();
      // Must start with "+" followed by country code and a number
      if (!/^\+\d{1,3}[\s-]?(?=(?:\D*\d){6,})[\d\s().-]+$/.test(v)) return MESSAGES.phone;
      return null;
    },
    website: function () {
      var v = form.website.value.trim();
      if (!v) return null; // optional field
      if (!/^https?:\/\//i.test(v)) return MESSAGES.website;
      try {
        var url = new URL(v);
        if (!url.hostname || url.hostname.indexOf('.') === -1) return MESSAGES.website;
      } catch (e) { return MESSAGES.website; }
      return null;
    },
    country: function () {
      return form.country.value ? null : MESSAGES.country;
    },
    productType: function () {
      return form.productType.value ? null : MESSAGES.productType;
    },
    volume: function () {
      return form.volume.value ? null : MESSAGES.volume;
    },
    services: function () {
      var checked = 0;
      for (var i = 0; i < form.services.length; i++) {
        if (form.services[i].checked) checked++;
      }
      return checked > 0 ? null : MESSAGES.services;
    },
    current3pl: function () {
      var checked = null;
      for (var i = 0; i < form.current3pl.length; i++) {
        if (form.current3pl[i].checked) { checked = form.current3pl[i].value; break; }
      }
      return checked ? null : MESSAGES.current3pl;
    },
    comments: function () {
      if (form.comments.value.length > 500) {
        return MESSAGES.comments(500 - form.comments.value.length);
      }
      return null;
    },
    privacy: function () {
      return form.privacy.checked ? null : MESSAGES.privacy;
    }
  };

  /* ---- Validate a single field / group and render its error ---- */
  function validateField(name) {
    var error = validators[name]();
    switch (name) {
      case 'companyName':
        error ? showError($('company-name-error'), error, form.companyName) : clearError('company-name-error', form.companyName);
        break;
      case 'contactPerson':
        error ? showError($('contact-person-error'), error, form.contactPerson) : clearError('contact-person-error', form.contactPerson);
        break;
      case 'email':
        error ? showError($('email-error'), error, form.email) : clearError('email-error', form.email);
        break;
      case 'phone':
        error ? showError($('phone-error'), error, form.phone) : clearError('phone-error', form.phone);
        break;
      case 'website':
        error ? showError($('website-error'), error, form.website) : clearError('website-error', form.website);
        break;
      case 'country':
        error ? showError($('country-error'), error, form.country) : clearError('country-error', form.country);
        break;
      case 'productType':
        error ? showError($('product-type-error'), error, form.productType) : clearError('product-type-error', form.productType);
        break;
      case 'volume':
        error ? showError($('volume-error'), error, form.volume) : clearError('volume-error', form.volume);
        break;
      case 'services':
        error ? showErrorEl('services-error', error, Array.from(servicesBoxes)) : clearError('services-error');
        if (!error) servicesBoxes.forEach(function (input) { input.removeAttribute('aria-invalid'); });
        break;
      case 'current3pl':
        error ? showErrorEl('current3pl-error', error, Array.from(current3plRadios)) : clearError('current3pl-error');
        if (!error) current3plRadios.forEach(function (input) { input.removeAttribute('aria-invalid'); });
        break;
      case 'comments':
        error ? showError($('comments-error'), error, form.comments) : clearError('comments-error', form.comments);
        break;
      case 'privacy':
        error ? showError($('privacy-error'), error, form.privacy) : clearError('privacy-error', form.privacy);
        break;
    }
    return error === null;
  }

  /* ---- Live validation on blur/change and while correcting a field ---- */
  ['companyName', 'contactPerson', 'email', 'phone', 'website', 'country', 'productType', 'volume', 'comments', 'privacy'].forEach(function (name) {
    var el = form[name];
    if (!el) return;
    if (el.tagName === 'SELECT' || el.type === 'checkbox') {
      el.addEventListener('change', function () { validateField(name); });
      return;
    }
    el.addEventListener('blur', function () {
      el.dataset.touched = 'true';
      validateField(name);
    });
    el.addEventListener('input', function () {
      if (el.dataset.touched === 'true') validateField(name);
    });
  });

  // Checkbox / radio groups revalidate on change
  var servicesBoxes = form.querySelectorAll('input[name="services"]');
  for (var s = 0; s < servicesBoxes.length; s++) {
    servicesBoxes[s].addEventListener('change', function () { validateField('services'); });
  }
  var current3plRadios = form.querySelectorAll('input[name="current3pl"]');
  for (var r = 0; r < current3plRadios.length; r++) {
    current3plRadios[r].addEventListener('change', function () { validateField('current3pl'); });
  }

  /* ---- Comments character counter (500 max, visible) ---- */
  var counter = $('comments-counter');
  form.comments.addEventListener('input', function () {
    var remaining = 500 - form.comments.value.length;
    counter.textContent = remaining + ' remaining';
    counter.classList.toggle('text-rose-600', remaining < 0);
    counter.classList.toggle('text-slate-500', remaining >= 0);
    validateField('comments');
  });

  /* ---- Low-volume warning modal ---- */
  var modal = $('volume-modal');
  $('volume-cancel').addEventListener('click', function () {
    modal.classList.add('hidden');
    form.volume.focus();
  });

  $('volume-continue').addEventListener('click', function () {
    modal.classList.add('hidden');
    submitSuccess();
  });

  modal.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      modal.classList.add('hidden');
      form.volume.focus();
    }
  });

  function showVolumeWarning() {
    modal.classList.remove('hidden');
    $('volume-cancel').focus();
  }

  /* ---- Success (simulated submit) ---- */
  function submitSuccess() {
    form.classList.add('hidden');
    $('success-message').classList.remove('hidden');
    $('success-message').focus();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ---- Form submit: validate everything before "submitting" ---- */
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var names = ['companyName', 'contactPerson', 'email', 'phone', 'website', 'country',
                 'productType', 'volume', 'services', 'current3pl', 'comments', 'privacy'];
    var allValid = true;
    var firstInvalid = null;

    for (var i = 0; i < names.length; i++) {
      var ok = validateField(names[i]);
      if (!ok) {
        allValid = false;
        if (!firstInvalid) firstInvalid = names[i];
      }
    }

    if (!allValid) {
      $('form-error-summary').classList.remove('hidden');
      $('form-error-summary').scrollIntoView({ behavior: 'smooth', block: 'center' });
      var focusEl = form[firstInvalid];
      if (focusEl && typeof focusEl.focus === 'function') {
        focusEl.focus();
      } else if (focusEl && focusEl.length && typeof focusEl[0].focus === 'function') {
        focusEl[0].focus();
      }
      return;
    }

    $('form-error-summary').classList.add('hidden');

    // Specific restriction: low volume (0-100) + product type selected => warn
    if (form.volume.value === '0-100' && form.productType.value) {
      showVolumeWarning();
      return;
    }

    submitSuccess();
  });

  form.addEventListener('reset', function () {
    window.setTimeout(function () {
      Object.keys(MESSAGES).forEach(function (name) {
        var errorId = name === 'productType' ? 'product-type-error' :
          name === 'contactPerson' ? 'contact-person-error' :
          name === 'companyName' ? 'company-name-error' : name + '-error';
        clearError(errorId);
      });
      servicesBoxes.forEach(function (input) { input.removeAttribute('aria-invalid'); });
      current3plRadios.forEach(function (input) { input.removeAttribute('aria-invalid'); });
      form.querySelectorAll('[aria-invalid="true"]').forEach(function (input) { input.removeAttribute('aria-invalid'); });
      $('form-error-summary').classList.add('hidden');
      counter.textContent = '500 remaining';
      counter.classList.remove('text-rose-600');
      counter.classList.add('text-slate-500');
      modal.classList.add('hidden');
      form.querySelectorAll('[data-touched]').forEach(function (input) { delete input.dataset.touched; });
    }, 0);
  });
})();