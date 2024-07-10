import json
from freshdesk.api import API
from freshdesk.v2.models import SolutionArticle
from freshdesk.v2.api import SolutionArticleAPI

# Custom SolutionArticleAPI to handle CRUD operations
class CustomSolutionArticleAPI(SolutionArticleAPI):
    def create_article(self, folder_id, **kwargs):
        url = f'solutions/folders/{folder_id}/articles'
        article = self._api._post(url, data=json.dumps(kwargs))
        return SolutionArticle(**article)

    def get_article(self, article_id):
        url = f'solutions/articles/{article_id}'
        article = self._api._get(url)
        return SolutionArticle(**article)

    def update_article(self, article_id, **kwargs):
        url = f'solutions/articles/{article_id}'
        article = self._api._put(url, data=json.dumps(kwargs))
        return SolutionArticle(**article)

    def delete_article(self, article_id):
        url = f'solutions/articles/{article_id}'
        self._api._delete(url)

    def search_articles(self, keyword):
        url = f'search/solutions?term={keyword}'
        articles = self._api._get(url)
        return [SolutionArticle(**article) for article in articles]

def Freshdesk(domain, api_key):
    api = API(domain, api_key, version=2)
    api.solutions = CustomSolutionArticleAPI(api)
    return api

# Example usage
if __name__ == "_main_":
    domain = "yourdomain"
    api_key = "your_api_key"
    freshdesk = Freshdesk(domain, api_key)

    # # Create a solution article
    # article = freshdesk.solutions.create_article(
    #     folder_id=1234567890,  # Replace with your actual folder ID
    #     title="Sample Article",
    #     description="This is a sample solution article."
    # )
    # print("Created Article:", article)

    # Get the created article
    article_id = 112
    article = freshdesk.solutions.get_article(article_id)
    if article is None:
        print("None")
    else:
        print("Read Article:", article)

    # # Update the article
    # updated_article = freshdesk.solutions.update_article(
    #     article_id,
    #     title="Updated Sample Article",
    #     description="This is an updated sample solution article."
    # )
    # print("Updated Article:", updated_article)

    # # Delete the article
    # freshdesk.solutions.delete_article(article_id)
    # print(f"Deleted Article ID: {article_id}")

    # # Search articles
    # search_results = freshdesk.solutions.search_articles("Sample")
    # print("Search Results:", search_results)