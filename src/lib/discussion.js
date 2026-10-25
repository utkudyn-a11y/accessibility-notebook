// Discussion Corner question ids. Votes are stored per id and option position.
// By default a question's id is "<issue>-<position>" (e.g. 28-1). When a question is removed, the questions after it
// keep their old id through an explicit "id" in front matter, so their votes stay attached.
export const questionId = (issueNumber, index) => `${issueNumber}-${index + 1}`;
export const discussionId = (issueNumber, d, index) => d.id || questionId(issueNumber, index);
