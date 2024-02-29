const clientId = '879496c5b323472bbd08843975309a97';
const redirectUri = 'https://melodix.vercel.app/';

const scope = 'user-read-private user-read-email user-library-read user-library-modify playlist-read-private playlist-modify-private playlist-modify-public user-read-recently-played user-top-read';

const sha256 = async (plain) => {
    const encoder = new TextEncoder()
    const data = encoder.encode(plain)
    return window.crypto.subtle.digest('SHA-256', data)
}

const base64encode = (input) => {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

const generateRandomString = (length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

export const codeVerifier  = generateRandomString(64);

const hashed = await sha256(codeVerifier);

const codeChallenge = base64encode(hashed);

export const params =  {
    response_type: 'code',
    client_id: clientId,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
}