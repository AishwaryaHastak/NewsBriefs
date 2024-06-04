# NewsBriefs: Summarizing News Clusters Using K-Means++ and Transformers

This projects get the latest news data from RSS feeds, groups them into clusters, and provides summaries of each news cluster. 
The goal is to get all related news in a single summary -- instead of having to go to multiple sources and multiple articles.

## Fine-Tuning Google T5 Small on Custom Dataset

The T5 model uses an encoder-decoder structure and is perfect for text-to-text tasks. It can also perform some out-of-the-box tasks by adding a prefix like "summarize:" for summarization.
We have used a custom dataset [1] available on Kaggle for new text summaries.

On training the model for 10 epochs I was able to attain a Rouge-1 score of 0.25:
![image](https://github.com/AishwaryaHastak/NewsBriefs/assets/31357026/ed33e3d1-9363-47c8-b102-8ec353081449)

## Clustering News Articles
Using the k-means++ algorithm and obtaining the optimal value for k (number of clusters) by getting the Silhouette Score for a range of k values.


## References
[1] https://www.kaggle.com/datasets/pariza/bbc-news-summary

