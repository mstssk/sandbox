module.exports = async ({ github, context }) => {
  console.log("test");
  const { data: comments } = await github.rest.pulls.listReviewComments({
    owner: "mstssk",
    repo: "sandbox",
    pull_number: 1,
  });
  console.log("comments.length", comments.length);
  console.log(comments);
  return comments;
};
