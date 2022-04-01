# Standard library imports
import json
from http.server import BaseHTTPRequestHandler

# Dependency imports
import requests
import xmltodict  # type: ignore


class handler(BaseHTTPRequestHandler):
    def __init__(self) -> None:
        self.airdrop_news_uri = 'https://blogs.airdropalert.com/feed/'
        self.send_header('Content-type', 'text/json')

    def _write_response(self, body: str, status: int) -> None:
        '''
        Set the response status and write the response body. This response will be returned to the client.

        Args:
            body (str): JSON-encoded str of the file to write.
            status (int): HTTP response status

        Returns:
            None
        '''

        self.send_response(status)
        self.end_headers()
        self.wfile.write(body.encode())

    def do_GET(self) -> None:
        '''
        Entrypoint for Python serverless functions on Vercel.
        '''

        # Step 1: Fetch the airdrop news from the RSS feed
        res = requests.get(self.airdrop_news_uri)

        # Step 2: Validate the HTTP status
        if res.status_code != requests.codes.ok:
            body = json.dumps(
                {
                    'message': f'Could not retrieve airdrop news from: {self.airdrop_news_uri}'
                }
            )
            self._write_response(body, 500)
            return

        # Step 3: Parse the RSS feed XML response
        rss_xml = xmltodict.parse(res.text)
        rss_json = json.loads(json.dumps(rss_xml))
        try:
            items = []
            for i in rss_json['rss']['channel']['item']:
                items.append(
                    {
                        'category': i['category'],
                        'description': i['description'],
                        'link': i['link'],
                        'publishDate': i['pubDate'],
                        'title': i['title'],
                    }
                )
            # Convert the list of dicts into a JSON-encoded string
            news_items = json.dumps(items)
        except KeyError:
            body = json.dumps(
                {'message': f'RSS response returned in unexpected format: {rss_json}'}
            )
            self._write_response(body, 500)
            return

        # Step 4: Construct the airdrop news response to send to the client
        self._write_response(news_items, 200)
