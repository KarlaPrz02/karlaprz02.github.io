from http.server import HTTPServer, BaseHTTPRequestHandler

PAGE = f"""<html>
<style>
    *{{background: #161b22; color: white; font-family: arial}}
    p{{max-width: min(90%, 500px)}}
</style>
<script>
fetch('https://api.pluralkit.me/v2/systems/lofub/members').then(r => r.json().then(alters => {{
for (let alter of alters) {{
    document.body.innerHTML += `<div style="text-align:center; display:flex; flex-direction:column; align-items:center">
        <h1>${{alter.name}}</h1>
        <img style="width: 200px; height=auto" src="${{alter.avatar_url}}" />
        <h4>${{alter.pronouns}}</h4>
        <p>${{alter.description}}</p>
        <br />
    </div>`
}}
}}));
</script></html>"""

class ServerRidiculamentePequeño(BaseHTTPRequestHandler):
    def do_GET(self):
        print('lmao')
        self.send_response(200)
        self.send_header('content-type', 'text/html')
        self.end_headers()
        self.wfile.write(PAGE.encode('utf8'))


httpd = HTTPServer(('', 8000), ServerRidiculamentePequeño)
print('serving at http://localhost:8000/ ...')
httpd.serve_forever()
