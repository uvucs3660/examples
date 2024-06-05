curl -H "Accept: application/vnd.github.v3+json" \\n     -H "Authorization: token $GITHUB_TOKEN" \\n     "https://api.github.com/search/issues?q=repo:apeironlabs/tops+author:hunterino+state:closed+reason:completed+closed:>=2024-05-24"

