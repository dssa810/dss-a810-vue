function saveAuthToCookie(value) {
  document.cookie = `dss_auth=${value}`;
}

function saveEmailToCookie(value) {
  document.cookie = `dss_email=${value}`;
}

function getAuthFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)dss_auth\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function getEmailFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)dss_email\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
  saveAuthToCookie,
  saveEmailToCookie,
  getAuthFromCookie,
  getEmailFromCookie,
  deleteCookie,
};