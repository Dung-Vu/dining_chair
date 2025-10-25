// Cloudflare Worker for GitHub OAuth
// Deploy this to handle CMS authentication

const CLIENT_ID = 'YOUR_GITHUB_CLIENT_ID'; // Thay bằng Client ID từ GitHub OAuth App
const CLIENT_SECRET = 'YOUR_GITHUB_CLIENT_SECRET'; // Thay bằng Client Secret

export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // Step 1: Redirect to GitHub for authorization
    if (url.pathname === '/auth') {
      const state = url.searchParams.get('state') || '';
      const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=repo,user&state=${state}`;
      
      return Response.redirect(authUrl, 302);
    }
    
    // Step 2: Handle callback from GitHub
    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      const state = url.searchParams.get('state');
      
      if (!code) {
        return new Response('No code provided', { status: 400 });
      }
      
      // Exchange code for access token
      const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          code: code,
        }),
      });
      
      const tokenData = await tokenResponse.json();
      
      // Redirect back to CMS with token
      const redirectUrl = `https://chair.bonstu.site/admin/#access_token=${tokenData.access_token}&token_type=bearer&state=${state}`;
      
      return Response.redirect(redirectUrl, 302);
    }
    
    return new Response('Not Found', { status: 404 });
  },
};
