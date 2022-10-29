module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/marioamandio/workflows-test-2",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};
