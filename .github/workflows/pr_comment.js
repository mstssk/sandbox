module.exports = async ({ github, context }) => {
  console.log("test");
  const { data: comments } = await github.rest.pulls.listReviewComments({
    owner: "mstssk",
    repo: "sandbox",
    pull_number: 1, // TODO ここで書いても、結局権限がないと取得できないのかも？ ちゃんとPRのイベントの中で実行してみないとだめかも
  });
  console.log("comments.length", comments.length);
  console.log(comments);
  return comments;
};
